import getApi from "../components/triviaAPI";
import { useState } from "react";
import DisplayQuestions from "../components/displayQuestions";
import { json } from "react-router-dom";


const tryApiData = {"response_code":0,"results":[{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which company did Valve cooperate with in the creation of the Vive?","correct_answer":"HTC","incorrect_answers":["Oculus","Google","Razer"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"On a dartboard, what number is directly opposite No. 1?","correct_answer":"19","incorrect_answers":["20","12","15"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the French word for &quot;hat&quot;?","correct_answer":"Chapeau","incorrect_answers":["Bonnet"," &Eacute;charpe"," Casque"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which sign of the zodiac comes between Virgo and Scorpio?","correct_answer":"Libra","incorrect_answers":["Gemini","Taurus","Capricorn"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"In which fast food chain can you order a Jamocha Shake?","correct_answer":"Arby&#039;s","incorrect_answers":["McDonald&#039;s","Burger King","Wendy&#039;s"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What zodiac sign is represented by a pair of scales?","correct_answer":"Libra","incorrect_answers":["Aries","Capricorn","Sagittarius"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"When someone is inexperienced they are said to be what color?","correct_answer":"Green","incorrect_answers":["Red","Blue","Yellow"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Foie gras is a French delicacy typically made from what part of a duck or goose?","correct_answer":"Liver","incorrect_answers":["Heart","Stomach","Intestines"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Who is the author of Jurrasic Park?","correct_answer":"Michael Crichton","incorrect_answers":["Peter Benchley","Chuck Paluhniuk","Irvine Welsh"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Who is the youngest person to recieve a Nobel Prize?","correct_answer":"Malala Yousafzai","incorrect_answers":["Lawrence Bragg","Werner Heisenberg","Yasser Arafat"]}]}
export default function TriviaPage() {
    
    const [apiData, setApi] = useState();
    
    async function changeApi() {
    const Data = await getApi();
    setApi(Data);
    }

    return (
      <div className="triviaPage">
        <h1>Trivia</h1>
        <button onClick={changeApi}>Click to generate Questions</button>
        {DisplayQuestions(apiData)}
      </div>
    )
  }