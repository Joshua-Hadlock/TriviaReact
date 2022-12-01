// -----------------------------------------------------------creates the body for the trivia page

import displayCube from "../threeDimensions/ThreeD"
import { useState, useEffect } from "react";
import createData from "./createData";;


export default function DisplayQuestions(data) {
    const [score, setScore] = useState(0);
    const [oldScore, setOldScore] = useState(0);


    // --------------------------------------------------------------------creates the 3d cube seen on screen
    useEffect(() => {
            document.getElementById('scene-container').innerHTML = '';
            displayCube(document.getElementById('scene-container'));
    }, []);


    // --------------------------------------------------------------------determines if the answer clicked is wrong or right
    const handleClickIncorrect = event => {
        event.currentTarget.classList.add('bg-red');
        const newScore = score - 1;
        setScore(newScore);
    }

    const handleClickCorrect = event => {
        event.currentTarget.classList.add('bg-green');
        const newScore = score + 1;
        setScore(newScore);
    }


// -------------------------------------------------------------------------------------creates the question and answer html for later use
    const createAnAnswer = (value) => {
        const create = value.map((answer) => {
            if (answer.answer === false) {
                
                return (<h5 className="textWhite answer" onClick={handleClickIncorrect}>{answer.name}</h5>)
            } else if (answer.answer === true) {
        return (
            <div>
                <h5 className="textWhite answer" onClick={handleClickCorrect}>{answer.name}</h5>
            </div>
        )
        }
        
        }) 
        return <div>{create}</div>
    }


    // ----------------------------------changes the display score with the old score so that you can play again with a reset score
    useEffect(() => {
        setOldScore(score)
        setScore(0)
    }, [data])



    // -------------------------------------------------------------------------------------actual body display

    // ----------------------------------if game is finished, display score screen
    if (data === 'finish') {
        
        return (
            <div className="finalScore">
                <h1 className="h1Final">Your score is: {oldScore}</h1>
            </div>
        )

        // ---------------------------------------------------if there is data, display said data
    } else if (data) {
        if (document.getElementById('scene-container')) {
            document.getElementById('scene-container').innerHTML = '';
        }
        
// -----------------grabs each value and creates the questions in a displayable matter
        const displayableData = data.map((value) => {
            return (
        <div className="triviaCard animation-preset">
            <div>
            <div>
                <h4 className="textWhite">{value[0].question}</h4>
                <div className="question"></div>
                </div>
            <div>
                {createAnAnswer(value)}
            </div>
                
            </div>
        </div>
    )
})

// ----------------------------------creates the score screen
    return (
        <div className="questions">
            {displayableData}
            <h1 className="score triviaCard littleWidget">Score: {score}</h1>
           
        </div>
    )

//----------------------------------if no data, create a a canvas container for three.js to display the cube
    } else {
        
        return (
            <div id='scene-container' className="fullWidth fullHeight">
            </div>
        )
    }


}