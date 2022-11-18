import displayCube from "../threeDimensions/ThreeD"
import { useState, useEffect } from "react";


export default function DisplayQuestions(data) {
    const [questionsAndAnswers, setQestionsAndAnswers] = useState();
    const [score, setScore] = useState(0);
    useEffect(() => {
            document.getElementById('scene-container').innerHTML = '';
            displayCube(document.getElementById('scene-container'));
            console.log('running');
    }, []);

    const handleClickIncorrect = event => {
        event.currentTarget.classList.add('bg-red');
    }

    const handleClickCorrect = event => {
        event.currentTarget.classList.add('bg-green');
        const newScore = score + 1;
        setScore(newScore);
        console.log(score);
    }


    if (data) {
        if (document.getElementById('scene-container')) {
            document.getElementById('scene-container').innerHTML = '';
        }


        
        console.log(data.results)
        
        const displayableData = data.results.map((value) => {return (
        <div className="triviaCard">
            <div>
                <h4 className="textWhite">{value.question}</h4>
                <div className="question"></div>
            </div>
            <div>
                <h5 className="textWhite answer" onClick={handleClickCorrect}>{value.correct_answer}</h5>
                {value.incorrect_answers.map((incorrectAnswer) => {
                    return (<h5 className="textWhite answer" onClick={handleClickIncorrect}>{incorrectAnswer}</h5>)
                })}

                
            </div>
        </div>
    )})

    return (
        <div className="questions">
            {displayableData}
        </div>
    )
    } else {
        
        return (
            <div id='scene-container' className="fullWidth fullHeight">
            </div>
        )
    }
}