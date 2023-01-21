
import { Fragment ,useContext} from "react";
import {  Outlet,Link } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../assests/crown.svg"
import "./navigation.styles.scss"
import { UserContext } from "../../context/user.context";
import { userSignOut } from "../../utlis/firebase.utils";
import { async } from "@firebase/util";
import  CartIcon from "../../components/cart-icon/cart-icon.components"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components"
import { CartContext } from "../../context/cart.context";
const Navigation = () => {
const {currentUser}= useContext(UserContext)
const {cartStatus}=useContext(CartContext)


const handleSignOut=async()=>{
 const res=await userSignOut()
 console.log(res)
//setCurrent(null)
}

    return (
        <Fragment>
      <div className="navigation">
      <Link className="logo-container" to="/">
        <CrwnLogo className="logo"/>
      </Link>
      <div className="nav-links-container">
      <Link className="nav-link " to="shop">
        SHOP
      </Link>
      {currentUser? <span className="nav-link" onClick={handleSignOut}>SIGN OUT</span>:  <Link className="nav-link " to="auth">
       
       SIGN IN
     </Link>}
     <CartIcon/>
   
      </div>
      </div>
  {cartStatus&& <CartDropdown/>}
     
      <Outlet />
      </Fragment>
    );
  };

  export default Navigation;