import displayCube from "../threeDimensions/ThreeD"
import { useState, useEffect } from "react";
import createData from "./createData";;


export default function DisplayQuestions(data) {
    const [score, setScore] = useState(0);

    useEffect(() => {
            document.getElementById('scene-container').innerHTML = '';
            displayCube(document.getElementById('scene-container'));
    }, []);

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




    if (data === 'finish') {
        const oldScore = score;
        return (
            <div>
                <h1>Your score is: {oldScore}</h1>
            </div>
        )
    } else if (data) {
        if (document.getElementById('scene-container')) {
            document.getElementById('scene-container').innerHTML = '';
        }
        
        
        const displayableData = data.map((value) => {
            return (
        <div className="triviaCard">
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

    return (
        <div className="questions">
            {displayableData}
            <h1 className="score triviaCard littleWidget">Score: {score}</h1>
           
        </div>
    )
    } else {
        
        return (
            <div id='scene-container' className="fullWidth fullHeight">
            </div>
        )
    }


}