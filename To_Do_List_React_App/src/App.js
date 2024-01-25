import React, { useState } from "react";

import ToDoList from "./ToDoList";


const App = () =>{

    const [inputList,setInputList]= useState("");

    const [items,setItems] = useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    }

    const listofitmes = () =>{

        setItems((oldItems)=>{
            return [...oldItems, inputList]
        });
        
        setInputList("");


    }


    
    const deleteItems =(id)=> {
        console.log('deleted');

        setItems((oldItems)=>{
            return oldItems.filter((arrayElem, index)=>
            {
                return index !== id;

            })
        })
    }



return<>
    <div className="main_div">
     <div className="center_div">
    <br/>
    <h1>ToDo List</h1>
     <br/>
     <input type="text" placeholder="Add A Item"  onChange={itemEvent}  value={inputList}/>

     <button onClick={listofitmes}> +

     </button> 

     <ol>
            { items.map( (itemval, index) => {
                {/* return <li> {itemval} </li> */}
                return    <ToDoList key ={index} id ={index}
                    text ={itemval}  onSelect ={deleteItems}  />

            })}

        {/* <li>Buy Apple</li> */}
     </ol>
     </div>

    </div>

    </>;


};

export default App;