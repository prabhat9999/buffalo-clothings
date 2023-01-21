import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.json"

const addCartItem=(cartItems,productToAdd)=>{
const productExist=cartItems.find((cartItem)=>cartItem.id===productToAdd.id)

if(productExist){
return cartItems.map((cartItem)=>cartItem.id===productToAdd.id? {...cartItem,quantity:cartItem.quantity+1}:cartItem)

}

    return [...cartItems,{...productToAdd,quantity:1}]

}


const removeCartItemQuantity=(cartItems,productQuantityToRemove)=>{

    const productExist=cartItems.find((cartItem)=>cartItem.id===productQuantityToRemove.id)

    if(productExist.quantity===1){

   return cartItems.filter(cartItem=>cartItem.id!=productQuantityToRemove.id)
    }


    return cartItems.map(cartItem=>cartItem.id===productQuantityToRemove.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem)

}


const clearFromCart=(cartItems,product)=>{


        return cartItems.filter(cartItem=>cartItem.id!=product.id)
         

}

export const CartContext= createContext({
cartStatus:false,
setCartStatus:()=>{},
cartItems:[],
addItemToCart:()=>{},
removeItemToCart:()=>{},
cartItemCount:0,
clearItemFromCart:()=>{},
cartTotal:0
})

export const CartContextProvider=({children})=>{
const [cartStatus,setCartStatus]=useState(false)
const [cartItems,setCartItems]=useState([])
const [cartItemCount,setCartItemCount]=useState(0)
const [cartTotal,setCartTotal]=useState(0)



useEffect(()=>{

const count=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
setCartItemCount(count)
},[cartItems])

useEffect(()=>{

    const cartTotal=cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
    setCartTotal(cartTotal)
    },[cartItems])
    


const addItemToCart=(product)=>{

    setCartItems(addCartItem(cartItems, product))

}

const removeItemToCart=(product)=>{

setCartItems(removeCartItemQuantity(cartItems,product))

}

const clearItemFromCart=(product)=>{
    setCartItems(clearFromCart(cartItems,product))

}

const values={cartStatus,setCartStatus,cartItems,addItemToCart,removeItemToCart,cartItemCount,setCartItemCount,clearItemFromCart,cartTotal}


return(
    <CartContext.Provider value={values}>{children}</CartContext.Provider>
)



}