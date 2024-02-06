import React, { useState } from "react";

function Todolist(){
   
    const [tasks,SetTasks]=useState(["Do your work","walk togeather","get rich"]);
    const [newTask,SetTask]=useState("");

    function handleInputChange(event){
            
            SetTask(event.target.value);

    }


    function addTask(){
        const t=newTask;
        SetTasks([...tasks,t]);
        SetTask("");
        


    }

    function deleteTask(index){
            
        tasks.splice(index,1);
        SetTasks([...tasks]);


    }
    
    function moveTaskUp(index){
        if(index>0){
            const utasks=[...tasks];
            [utasks[index],utasks[index-1]]=[utasks[index-1],utasks[index]];
            SetTasks(utasks);
        }

    }

    function moveTaskDown(index){
        if(index<tasks.length-1&&index>=0){
            const utasks=[...tasks];
            [utasks[index],utasks[index+1]]=[utasks[index+1],utasks[index]];
            SetTasks(utasks);


        }

    }


    return(
        <div className="todolist">
            <h1 >To-Do-List</h1>
            <input type="text" className="textbox" placeholder="Enter the task..." value={newTask} onChange={handleInputChange} />
            <button   className="addbutton"  onClick={addTask}> Add task</button>

            <ol>
                {tasks.map((element,index)=><li key={index}>
                    
                                                    <span className="text">{element}
                                                                </span> 

                                                                <button  className="deletebutton"  onClick={()=>deleteTask(index)}>Delete</button>
                                                                <button className="movebutton"  onClick={()=>moveTaskUp(index)}>👆</button>
                                                                <button   className="movebutton" onClick={()=>moveTaskDown(index)}>👇</button>
                                                            

                                                                </li>)}
            </ol>

        </div>
    );







}

export default Todolist;