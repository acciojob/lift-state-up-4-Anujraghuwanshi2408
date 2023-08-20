import React from 'react'


 const Child = ({setCartItems , cartItems}) => {

    function removeUser(e){
       let target = (e.target.parentNode.firstElementChild.innerText)
      let newArr = target.split("-");
     let itemName = newArr[0].trim();
     let itemPrice = newArr[1].trim();
     console.log(itemName, itemPrice)
     let filterArr = cartItems.filter(element => {
        return (element.itemName !== itemName && element.itemPrice !== itemPrice)
        
     })
     console.log(filterArr)
     setCartItems(filterArr)
    }
  return (
    <div className='child'>
     <h1>
        Child Component
     </h1>
    
       {
        cartItems.map(element => (
           <div>
             <li>
                {element.itemName} - {element.itemPrice}
             </li>
                <button onClick={removeUser}>Remove</button> 
            </div>
        ))
        }
    
    </div>
  )
}

export default Child