import React, { useState } from 'react'
import Child from './Child';
 const Parent = () => {
  
    const [cartItems , setCartItems] = useState(
        [
        {id : 1 ,"itemName":"Item 1" ,  "itemPrice" : 10},
        {id : 2 ,"itemName":"Item 2" ,  "itemPrice" : 20},
        {id : 3 ,"itemName":"Item 3" ,  "itemPrice" : 30}
       ]
        )
    const[name , setName] = useState("");
    const[item , setItems] = useState("")

    function addItems(){
     setCartItems([...cartItems, {"itemName":name ,  "itemPrice" : item}])
        
    }
  return (
    <div className='parent'>
        <label for ="Item Name">Item Name:</label>
        <input   type='text' onChange={(e)=> setName(e.target.value)} value={name}  id='itemName'/>
        <label for ="Item Price">Item Price:</label>
        <input  type='number' onChange={(e)=> setItems(e.target.value)} value={item} id='itemPrice'/>
        <button onClick={addItems}>Add Item</button>
        <Child  setCartItems = {setCartItems}
                cartItems   = {cartItems}
        />
    </div>
  )
}
export default Parent