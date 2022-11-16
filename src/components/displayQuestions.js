export default function displayQuestions(data) {
    if (data) {
        console.log(data.results)
        const displayableData = data.results.map((value) => {return (
        <div>
            <div className="red">
                <h1>{value.question}</h1>
            </div>
            <div>
                <h2>{value.correct_answer}</h2>
                {value.incorrect_answers.map((incorrectAnswer) => {
                    return (<h2>{incorrectAnswer}</h2>)
                })}

                
            </div>
        </div>
    )})

    return (
        <div>
            {displayableData}
        </div>
    )
    }

}