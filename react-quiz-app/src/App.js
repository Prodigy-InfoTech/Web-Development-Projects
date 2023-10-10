import './App.css';
import React, {useState, useEffect} from 'react';
import QuestionBox from './Components/QuestionBox';
import data from './Components/data';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';

function App() {

   const [questionBank, setQuestionBank] = useState(""); 
   const [userAnswers, setUserAnswers] = useState([{
     index:"",
     option:""
   }]); 
   const [score,setScore] = useState("")

  // setting 5 random questions from data in questionBank
  const loadQuestions = () => {
    data().then(question =>{
      setQuestionBank(question);
    })
    setScore("");
    setUserAnswers([{
      index:"",
      option:""
    }])
  } 
  
  // updates userAnswers whenever user clicks on any option
  const fixOption = (choosenOption, qindex,e) =>{
    let stateList = userAnswers;
    let changed = false;
    stateList.map((obj, i)=>{
        if(obj.index === qindex){
          stateList[i] = {index: qindex, option: choosenOption}
          changed = true
        }  
      })
      setUserAnswers(stateList)
      if(!changed){
        setUserAnswers([...userAnswers, {index: qindex, option:choosenOption
        }])
      }
  }

  const checkAnswers = () =>{
    if(userAnswers.length > 1){
      let score=0;
      userAnswers.map((obj, index)=>{
        if(index>0){
          if(obj.option === questionBank[obj.index].answer){
            score++;
          }
        }
      })
     setScore(score)
    }
  }

  useEffect(()=>{
    loadQuestions();
  },[]) 


  return (
    <div className="outer">
      <div className="header">
        <h1>Quizzeria</h1>
      </div>

        {/* loads main component only when questions are loaded in questionBank */}
        {questionBank  && (
            <div className="main">
              {questionBank.map((question,questionKey) => 
                <QuestionBox questionBank= {questionBank} question={question.question}  options={question.options} fixOption={fixOption} key ={questionKey} questionKey={questionKey}/>
              )}
              <div className="submit">
              <button className="submit-btn" onClick={checkAnswers}>Submit</button>
              </div>
            </div>
          )
        }
        
        {/* display Score */}
        { score !=="" && (
          <div className="score-outer">
            <div className="score-inner">
            <h3>You Scored: {score}/5</h3>
            <button className="new-quiz" onClick={loadQuestions}>Play Again</button>
          </div></div>
        )}

        
        <div className="copyright">
          <div className="copyright-1">
              COPYRIGHT <CopyrightIcon className
              ="Icon cr"/> 2021 TANVI. ALL RIGHTS RESERVED.
          </div>
          <div className="copyright-2">
          <a href="https://github.com/TanvNaik"><GitHubIcon className="Icon"/></a>
          <a href="linkedin.com/in/tanvi-naik-a550941a8"><LinkedInIcon className="Icon"/></a>
          <a href="https://www.instagram.com/_tan_vi__/"><InstagramIcon className="Icon"/></a>
          </div>
          
        </div>
    </div>
  );
}

export default App;
