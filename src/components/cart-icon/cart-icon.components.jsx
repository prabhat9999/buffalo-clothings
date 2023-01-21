import { useContext } from "react"
import {ReactComponent as ShoppingIcon} from "../../assests/shopping-bag.svg"
import { CartContext } from "../../context/cart.context"

import "../cart-icon/cart-component.styles.scss"
const CartIcon=()=>{
const {cartStatus,setCartStatus,cartItemCount}=useContext(CartContext)

return(
    <div onClick={()=>setCartStatus(!cartStatus)} className="cart-icon-container ">
    <ShoppingIcon  className="shopping-icon"/>
    <span className="item-count">{cartItemCount}</span>
    </div>
)

}


export default CartIcon;