import { useState } from "react";


export default function createData(data) {

    const allTheAnswers = [];

    data.results.map((question) => {
        const theAnswers = [];
        question.incorrect_answers.map((answer) => {
            theAnswers.push({name : answer, answer : false})
        })
        const randomPosition = Math.floor(Math.random() * (question.incorrect_answers.length + 1))
        const correctAnswer = question.correct_answer;
        theAnswers.splice(randomPosition, 0, {name : correctAnswer , answer : true})
        theAnswers.splice(0, 0, {question : question.question})


        allTheAnswers.push(theAnswers);

    })
    return allTheAnswers;
}