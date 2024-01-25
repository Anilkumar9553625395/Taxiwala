import React  from "react";

function Imageclick(){

    const imge="./src/hi.png";
    const eve=(e)=>e.target.style.display="none";
    return (
      <img src={imge} onClick={(e)=>eve(e)}></img>
    );
}

export default Imageclick;