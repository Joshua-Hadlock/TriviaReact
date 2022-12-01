// ---------------------------------------------------trivia page
import getApi from "../components/triviaAPI";
import { useState, useEffect} from "react";
import DisplayQuestions from "../components/displayQuestions";
import createData from "../components/createData";
import confetti from 'https://cdn.skypack.dev/canvas-confetti';





export default function TriviaPage() {
  // ---------------------------------------------------set the default set of the options
    const [category, setCategory] = useState("9");
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);
    const [difficulty, setDifficulty] = useState('easy')
    const [apiData, setApi] = useState();
    const [count, setCount] = useState(0);
    const [timerOff, setTimerOff] = useState(true);
    const [timerGoing, setTimerGoing] = useState(true);
    
  




// ---------------------------------------------------timer setup
    useEffect(
      () => {
          const timer = () => {
            if (timerGoing) {
              setCount(count + 1);
            }
              
          }
  
          const id = setInterval(timer, 1000);
          return () => clearInterval(id);
      },
      [count]
  );
      // const backgroundMusic  = new Audio(music);
      // useEffect(() => {
      //   backgroundMusic.play();
      // }, [])

      // function turnOffSound() {
      //   backgroundMusic.pause();
      // }



    async function changeApi() {
    const Data = await getApi(category, numberOfQuestions, difficulty);
    const newData = createData(Data);
    setApi(newData)
    setCount(0);

    if (timerOff) {
      document.getElementById('Timer').classList.remove('off');
      setTimerOff(false);
    }

    // removes all correct and wrong questions that for some reason don't disappear
    document.querySelectorAll('.bg-red').forEach(e => e.classList.remove('bg-red'));
    document.querySelectorAll('.bg-green').forEach(e => e.classList.remove('bg-green'));
    document.getElementById('selectTrivia').classList.add('off', 'moveAway')
    document.getElementById('numberOfTrivia').classList.add('off', 'moveAway')
    document.getElementById('generateApi').classList.add('off', 'moveAway')
    document.getElementById('difficultyDrop').classList.add('off', 'moveAway')
    document.getElementById('finishButton').classList.remove('off');
    setTimerGoing(true);

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


    const finishGame = () => {

      // ---------------------------------------------------move the options stuff out of site
      document.getElementById('selectTrivia').classList.remove('off', 'moveAway')
    document.getElementById('numberOfTrivia').classList.remove('off', 'moveAway')
    document.getElementById('generateApi').classList.remove('off', 'moveAway')
    document.getElementById('difficultyDrop').classList.remove('off', 'moveAway')
    document.getElementById('finishButton').classList.add('off');
      setApi('finish');
      setTimerGoing(false);

    confetti();
    }


    return (
      <div className="triviaPage bottomPadding">
        <div className="logo"></div>
        <h1 className="triviaTitle">McQauckers Trivia!</h1>
        

        <select id="selectTrivia" className="selectTrivia" onChange={e => changeCategory(e.target.value)}>
            {/* all the categories that you can play */}
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

      {/* number of questions */}
    <input id="numberOfTrivia" className="numberOfTrivia" type={'number'} max={50} min={1} onChange={e => changeNumberOfQuestions(e.target.value)}></input>

{/* difficulty settings */}
      <select className="difficultyDrop" id="difficultyDrop" name="difficulty" onChange={e => changeDifficulty(e.target.value)}>
			{/* <option value="any">Any Difficulty</option> */}
			<option value="easy">Easy</option>
			<option value="medium">Medium</option>
			<option value="hard">Hard</option>
		</select>

{/* generate questions button */}
        <button className="generateButton" id="generateApi" onClick={changeApi}>START!!!</button>


{/* all the data */}
        {DisplayQuestions(apiData)}


{/* timer and finish button */}
        <h1 className="off timer triviaCard littleWidget" id='Timer'>Timer: {count}</h1>
        <button onClick={finishGame} className={'off finishButton'} id={'finishButton'}>Finish</button>
      </div>
    )
  }
