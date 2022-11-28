import getApi from "../components/triviaAPI";
import { useState, useEffect } from "react";
import DisplayQuestions from "../components/displayQuestions";
import createData from "../components/createData";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




export default function TriviaPage() {
    const [category, setCategory] = useState("9");
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);
    const [difficulty, setDifficulty] = useState('easy')
    const [apiData, setApi] = useState();
    const [count, setCount] = useState(0);
    const [timerOff, setTimerOff] = useState(true);

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



    async function changeApi() {
    const Data = await getApi(category, numberOfQuestions, difficulty);
    const newData = createData(Data);
    setApi(newData)
    setCount(0);

    if (timerOff) {
      document.getElementById('Timer').classList.remove('off');
      setTimerOff(false);
    }

    document.querySelectorAll('.bg-red').forEach(e => e.classList.remove('bg-red'));
    document.querySelectorAll('.bg-green').forEach(e => e.classList.remove('bg-green'));
  
    
    

    }
    

    function changeCategory(e) {
      setCategory(e);
    }

    function changeNumberOfQuestions(e) {
      setNumberOfQuestions(e);
    }

    function changeDifficulty(e) {
      setDifficulty(e);
    }


    return (
      <div className="triviaPage">
        <div className="logo"></div>
        <h1>McQauckers Trivia!</h1>
        

        <select className="selectTrivia" onChange={e => changeCategory(e.target.value)}>
            {/* <option value="any">Any Category</option> */}
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>		
      </select>
    <input className="numberOfTrivia" type={'number'} max={50} min={1} onChange={e => changeNumberOfQuestions(e.target.value)}></input>

      <select className="difficultyDrop" name="difficulty" onChange={e => changeDifficulty(e.target.value)}>
			{/* <option value="any">Any Difficulty</option> */}
			<option value="easy">Easy</option>
			<option value="medium">Medium</option>
			<option value="hard">Hard</option>
		</select>

        <button className="generateButton" onClick={changeApi}>Click to generate Questions</button>


        {DisplayQuestions(apiData)}

        <h1 className="off" id='Timer'>Timer: {count}</h1>
        <button onClick={displayFinish}>Finish</button>
      </div>
    )
    function displayFinish() {
      console.log('hi')
    }
  }