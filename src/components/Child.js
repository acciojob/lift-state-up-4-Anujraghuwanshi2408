import React from 'react'


 const Child = ({setCartItems , cartItems}) => {

    function removeUser(itemName , itemPrice){
   //     let target = (e.target.parentNode.firstElementChild.innerText)
   //  //    console.log(e.parentNode)
   //    let newArr = target.split("-");
   //   let itemName = newArr[0].trim();
   //   let itemPrice = newArr[1].trim();
   //   console.log(itemName, itemPrice)
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
    
     <ul>
       {
        cartItems.map(element => (
           <div>
             <li>
                {element.itemName} - ${element.itemPrice}
                <button onClick={() => removeUser(element.itemName , element.itemPrice)}>Remove</button> 
             </li>
            </div>
        ))
        }
        </ul>
    
    </div>
  )
}

export default Child