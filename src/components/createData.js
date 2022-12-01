// ---------------------------------------------------changes the API data so that it is more useable

import { useState } from "react";


export default function createData(data) {
    
    // data to be sent to the other function
    const allTheAnswers = [];

    function correctGrammer(text) {
        for (let i = 0; i < 9; i++) {
            text = text.replace('&#039;', "'").replace('&quot;','"').replace('&amp;', '&').replace('&rsquo;', "'").replace('&oacute;', 'ó').replace('&lrm;', '').replace('&ldquo;', '"').replace('&rdquo', '"').replace('&hellip;','...').replace('&shy;', '-').replace('&aacute;', 'á').replace('&Eacute;', 'É')
        }
        return text
    }

    // ---------------------------------------------------create data
    data.results.map((question) => {
        const theAnswers = [];
        question.incorrect_answers.map((answer) => {
            answer = correctGrammer(answer);
            console.log(answer)
            theAnswers.push({name : answer, answer : false})
        })

        // ---------------------------------------------------put the position of the correct answer in a random location
        const randomPosition = Math.floor(Math.random() * (question.incorrect_answers.length + 1))
        var correctAnswer = question.correct_answer;
        correctAnswer = correctGrammer(correctAnswer)
        theAnswers.splice(randomPosition, 0, {name : correctAnswer , answer : true})
        const theQuestion = correctGrammer(question.question)
        theAnswers.splice(0, 0, {question : theQuestion})


        allTheAnswers.push(theAnswers);

    })
    return allTheAnswers;
}