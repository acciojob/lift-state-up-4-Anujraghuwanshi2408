import React, { useState } from 'react'
import Child from './Child';
 const Parent = () => {
  
    const [cartItems , setCartItems] = useState([])
    const[name , setName] = useState("");
    const[item , setItems] = useState("")

    function addItems(){
     setCartItems([...cartItems, {"itemName":name ,  "itemPrice" : item}])
        
    }
  return (
    <div className='parent'>
        <label for ="Item Name">Item Name:</label>
        <input   type='text' onChange={(e)=> setName(e.target.value)} value={name} />
        <label for ="Item Price">Item Price:</label>
        <input  type='text' onChange={(e)=> setItems(e.target.value)} value={item}/>
        <button onClick={addItems}>Add Item</button>
        <Child  setCartItems = {setCartItems}
                cartItems   = {cartItems}
        />
    </div>
  )
}
export default Parent