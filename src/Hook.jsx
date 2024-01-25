import React,{useState} from "react";




function Hook(){
     

    const [name,setName]=useState("Guest");
    const [age,setAge]=useState(0);
    const [isEmployed,setEmployment]=useState(false);


    const update=()=>{
        setName("Akhil");
    }
    const Aupdate=()=>{
        setAge(age+1);
    }
    const Eupdate=()=>{
        setEmployment(!isEmployed);
    }

    
        return(
            <>
            <p>name:{name}</p>
        
            <button onClick={update}>Click me</button>
    
            <p>age: {age}</p>
            <button onClick={Aupdate}>increment</button>
            
    
            <p>isEmplyed: {isEmployed?"Yes":"No"}</p>
            <button onClick={Eupdate}>isEmployed</button>
            
            </>
        );
    

    }
   
    


export default Hook;