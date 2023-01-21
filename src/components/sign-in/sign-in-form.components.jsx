
import FormInput from "../form-input/form-input.components";
import {signInWithGooglePopup,createUserDocumentFromAuth,signInWithEmailPassword
} from '../../utlis/firebase.utils'
import Button from '../button/button.component';
import { useState ,useContext} from "react";
//import { UserContext } from "../../context/user.context";
 import '../sign-in/sign-in.styles.scss'
const defaultFormFields={

email:'',
password:'',

}
const SignInForm=()=>{
const [formFields,setFormFields]=useState(defaultFormFields);
const {email,password}=formFields;
//const {setCurrent}=useContext(UserContext)

    const handleChange=(event)=>{

    const {name,value}=event.target;
    setFormFields({...formFields,[name]:value})
    }

    const handleSubmit= async (event)=>{
        event.preventDefault();
      
        try{
        const  {user}= await signInWithEmailPassword(email,password);
        //reset fields
         setFormFields(defaultFormFields)
        
         //set context
         //setCurrent(user);
        }
        catch(error){

            switch(error.code){
     case 'auth/wrong-password':  
     alert("wrong password for email");
     break;
     case 'auth/user-not-found':
    alert("user not found")
    break;
    default:
        console.log("Unable to create user",error)

            }
  

    }
}

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        //await createUserDocumentFromAuth(user);
         //set context
         //setCurrent(user);
      };
    return (
        <div  className="sign-up-container">
            <h2>I already have an account</h2>
            <span>sign in with email and password</span>
        <form  onSubmit={handleSubmit}>
       
           
           <FormInput label="Email" type="text" required onChange={handleChange} name='email' value={email}/>
           <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>
  <div className="buttons-container">
  <Button button_Type='inverted' type="submit"> Sign In</Button>
           <Button button_Type='google' type="button" onClick={logGoogleUser }> Google Sign In</Button>
  </div>
           
        </form>
        </div>
    )
}

export default SignInForm;