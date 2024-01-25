import React from "react";

function Button(){
   
    const k=(e)=>e.target.textContent="Anil stop!!";

    return(

            <button onClick={k}>Click me</button>

    );

}
 
export default Button;