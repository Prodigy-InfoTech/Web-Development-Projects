import React, {useState, useEffect} from 'react'

const QuestionBox = ({questionBank, question, options, fixOption,questionKey}) => {
    const [opts, setOpts] = useState([]);
    
    useEffect(() => {
        setOpts([...options]);
    }, questionBank);

    const handleChange = (option)=>{
        setOpts([option]);
    }
    
    return ( 
        <div className="qt-component">
           <div className="question">
           {question}
           </div>
           <div className="options">
               {
                   ()=>{
                       if(opts.length === 1){
                        return (
                            <button className="chosen">{opts[0]}</button>
                        )
                       }
                   }
               }
               {opts.map((option,key)=>{
                   return (
                       <button onClick={
                           (e)=> {
                               fixOption(e.target.textContent,questionKey,e);
                               handleChange(option);
                           }
                        } key={key}>{option}</button>
                   )
               })
               }
           </div>
        </div>
    )
}

export default QuestionBox;
