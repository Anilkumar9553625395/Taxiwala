import React, { useState } from "react";

function Component(){
    
const [car,setCar]=useState({name:"Mustang" ,make: "Ford" ,year :2015 }); // inserting object{} in use state

function handlenamechange(event){
   
    setCar(c=>({...c,name:event.target.value }))
  
}

function handlemakechange(event){
    setCar(c=>({...c,make:event.target.value }))
}

function handleyearchange(event){     
    setCar(c=>({...c,year:event.target.value })) //  {...car,year}={ name:"Mustang" ,make: "Ford" ,year :2015 ,year: new value}
 
}


    return(
        <div>
            <p>Car name: {car.name} {car.make} {car.year}</p>
            <input type="text"  value={car.name}   placeholder="name" onChange={handlenamechange}/> <br></br>
            <input type="text"   value={car.make}  placeholder="make" onChange={handlemakechange}/>  <br></br>
            <input type="number"   value={car.year} placeholder="year" onChange={handleyearchange}/>  <br></br>



        </div>

    );

}

export default Component;