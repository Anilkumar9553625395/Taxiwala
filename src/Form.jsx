import React,{useState} from "react";

function Form(){

   const [name,setName]=useState("guest");
   const [quantity,setQuantity]=useState(2);
   const [text,setText]=useState("Hi");
   const [payement,setPayment]=useState("Visa");
   const [shipping,setDelivery]=useState();

   const handleNameChange=(event)=>{

      setName(event.target.value);
   }
   
   const handleQuantityChange=(event)=>{
       setQuantity(event.target.value);
   }
   const handleTextAreaChange=(event)=>{
        setText(event.target.value);
   }
   const handlePayemntChange=(event)=>{
      setPayment(event.target.value);
   }
   const handleDeliverychange=(event)=>{
     setDelivery(event.target.value);
   }



   return(

        <div>
            <input type="text" value={name} onChange={handleNameChange} />
                <p>Name:{name}</p>
            <input type="number"  value={quantity}  onChange={handleQuantityChange}/>
            <p>Quantity:{quantity}</p>
            <textarea name="" id="" cols="30" rows="10" value={text}  onChange={handleTextAreaChange}></textarea>
                <p>comment:{text}</p>
               

            <select name="" id="" value={payement} onChange={handlePayemntChange}>
                <option value="Mastercard">Mastercard</option>
                <option value="GiftCard">GiftCard</option>
                <option value="Visa">Visa</option>

            </select>
            <p>Type:{payement}</p>

            

            <label>

            <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleDeliverychange}/>Delivery 
            </label>
          

          <br></br>

            <label>
            <input type="radio" value="Pickup"  checked={shipping==="Pickup"} onChange={handleDeliverychange}/>PickUp
            </label>
            <p>Shipping:{shipping}</p>
          
            </div>



            
        );



}

export default Form;