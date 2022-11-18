import displayCube from "../threeDimensions/ThreeD"
import { useState, useEffect } from "react";


export default function DisplayQuestions(data) {
    useEffect(() => {
            document.getElementById('scene-container').innerHTML = '';
            displayCube(document.getElementById('scene-container'));
            console.log('running')
            
            
            
        
    }, []);
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
                <h5 className="textWhite">{value.correct_answer}</h5>
                {value.incorrect_answers.map((incorrectAnswer) => {
                    return (<h5 className="textWhite">{incorrectAnswer}</h5>)
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