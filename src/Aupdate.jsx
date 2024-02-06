import React, { useState } from "react";

function Aupdate(){

        const [foods,setFoods]=useState(["Apple","Banana","Choclate"]);

        
        

        function handleArrayChange(event){
            const k=document.getElementById("Input").value;
            setFoods([...foods,event.target.value=k]);

        
    }

    function handleElementDelete(index){
            setFoods(foods.filter((e,i)=>i!==index))
    }


        return(
            <div>
                <ul>
                    {foods.map((food,index)=><li key={index} onClick={()=>handleElementDelete(index)}>{food}</li>)}
                </ul>

                <input type="text"  id="Input"  placeholder="Enter food name"  />  <br></br>
                <button      onClick={handleArrayChange}> Add</button>
            </div>
        );


    
}

export default Aupdate;