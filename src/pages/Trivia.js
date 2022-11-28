import getApi from "../components/triviaAPI";
import { useState } from "react";
import DisplayQuestions from "../components/displayQuestions";
import createData from "../components/createData";;



const tryApiData = {"response_code":0,"results":[{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which company did Valve cooperate with in the creation of the Vive?","correct_answer":"HTC","incorrect_answers":["Oculus","Google","Razer"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"On a dartboard, what number is directly opposite No. 1?","correct_answer":"19","incorrect_answers":["20","12","15"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the French word for &quot;hat&quot;?","correct_answer":"Chapeau","incorrect_answers":["Bonnet"," &Eacute;charpe"," Casque"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which sign of the zodiac comes between Virgo and Scorpio?","correct_answer":"Libra","incorrect_answers":["Gemini","Taurus","Capricorn"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"In which fast food chain can you order a Jamocha Shake?","correct_answer":"Arby&#039;s","incorrect_answers":["McDonald&#039;s","Burger King","Wendy&#039;s"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What zodiac sign is represented by a pair of scales?","correct_answer":"Libra","incorrect_answers":["Aries","Capricorn","Sagittarius"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"When someone is inexperienced they are said to be what color?","correct_answer":"Green","incorrect_answers":["Red","Blue","Yellow"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Foie gras is a French delicacy typically made from what part of a duck or goose?","correct_answer":"Liver","incorrect_answers":["Heart","Stomach","Intestines"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Who is the author of Jurrasic Park?","correct_answer":"Michael Crichton","incorrect_answers":["Peter Benchley","Chuck Paluhniuk","Irvine Welsh"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Who is the youngest person to recieve a Nobel Prize?","correct_answer":"Malala Yousafzai","incorrect_answers":["Lawrence Bragg","Werner Heisenberg","Yasser Arafat"]}]}
export default function TriviaPage() {
    const [category, setCategory] = useState("9");
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);
    const [difficulty, setDifficulty] = useState('easy')
    const [apiData, setApi] = useState();
    
    async function changeApi() {
    const Data = await getApi(category, numberOfQuestions, difficulty);
    const newData = createData(Data);
    setApi(newData)
    }
    function move() {

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
        <h1>Trivia!</h1>
        

        <select onChange={e => changeCategory(e.target.value)}>
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
    <input type={'number'} max={50} min={1} onChange={e => changeNumberOfQuestions(e.target.value)}></input>

      <select name="difficulty" onChange={e => changeDifficulty(e.target.value)}>
			{/* <option value="any">Any Difficulty</option> */}
			<option value="easy">Easy</option>
			<option value="medium">Medium</option>
			<option value="hard">Hard</option>
		</select>

        <button className="generateButton" onClick={changeApi}>Click to generate Questions</button>


        {DisplayQuestions(apiData)}

        <div className="toggleOnOff d-flex center off">
          <div className="togglerOnOff" onClick={move()}></div>
          <div className="togglerOnOff off"></div>
        </div>
      </div>
    )
  }