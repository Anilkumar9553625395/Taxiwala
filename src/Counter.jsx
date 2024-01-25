import React, { useState } from "react";

function Counter(){

    let [c,setCount]=useState(0);
    

    const increment=()=>{
       setCount(c+1);
    }

    const decrement=()=>{
        setCount(c-1);
     }
     const set=()=>{
        setCount(0);
     }

     return(
        <>
        <div>
        <h1>{c}</h1>
        <button   className="b"  onClick={increment}>Increase</button>
        <button  className="b" onClick={set}>reset</button>

        <button  className="b" onClick={decrement}>Decrement</button>
        </div>
        </>
      
     );



}

export default Counter;