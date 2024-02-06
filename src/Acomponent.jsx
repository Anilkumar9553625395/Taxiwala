import React, { useState } from "react";

function Acomponent(){

        const [cars,Setcars]=useState([]);
        const [make,Setmake]=useState();
        const [model,Setmodel]=useState();
        const [year,Setyear]=useState(new Date().getFullYear());

        function handleAddcar(){
            const newCar={
                        carmake:make,
                        carmodel:model,
                        caryear:year,
                        
            }
            Setcars(c=>[...c,newCar])
            Setmake("");
            Setmodel("");
        


            
        }

        function handleAddcarMake(event){
            Setmake(event.target.value);
        } 
        
        function handleAddcarModel(event){
            Setmodel(event.target.value);
            
        }

        function handleAddcaryear(event){

            Setyear(event.target.value);


        }
        function handleDelete(index){
            Setcars(cars.filter((c,i)=>!i==index));
        }

   return(

    <div>
        

        <h1>List of Cars</h1>
        <p>{cars.map((ca,index)=><li key={index} onClick={()=>handleDelete(index)}>{ca.carmake} {ca.carmodel}  {ca.caryear} </li>)}</p>
        <input type="text"   value={make}    onChange={handleAddcarMake} placeholder="Enter make" />  <br />
       <input type="text"    onChange={handleAddcarModel}  value={model} placeholder="Enter Model" />  <br />
       <input type="number"  onChange={handleAddcaryear}  value={year} placeholder="Enter Year" />  <br />
       <button onClick={handleAddcar}>Add Car</button>


    </div>

   );
}

export default Acomponent;