import displayCube from "../threeDimensions/ThreeD"
import { useState, useEffect } from "react";
import createData from "./createData";;


export default function DisplayQuestions(data) {
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);

// useEffect(() => { 
//     const interval = setInterval(() => { 
//     const newTime = timer + 1; 
//     setTimer(newTime); 
//     console.log(timer) }, 1000);
//  return () => clearInterval(interval); }, []);

 useEffect(
    () => {
        const timer = () => {
            setCount(count + 1);
        }

        // if you want it to finish at some point

        const id = setInterval(timer, 1000);
        return () => clearInterval(id);
    },
    [count]
);








 
    
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
            if (answer.question) {

            } else if (answer.answer === false) {
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





    if (data) {
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
            <h1>score: {score}</h1>
            <h1>Timer: {count}</h1>
        </div>
    )
    } else {
        
        return (
            <div id='scene-container' className="fullWidth fullHeight">
            </div>
        )
    }
}