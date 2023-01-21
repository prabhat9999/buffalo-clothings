
import {useState,useContext} from 'react';
import '../sign-up/sign-up-form.styles.scss'
import Button from '../button/button.component';
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utlis/firebase.utils'
//import { UserContext } from '../../context/user.context';


 import FormInput from '../form-input/form-input.components';
const defaultFormFields={
displayName:'',
email:'',
password:'',
confirmPassword:''
}



const SignUpForm=()=>{
const [formFields,setFormFields]=useState(defaultFormFields);
const {displayName,email,password,confirmPassword}=formFields;
//const {setCurrent}=useContext(UserContext)

const reset=()=>{
    setFormFields(
    defaultFormFields   );
}

const handleChange=(event)=>{
const {name,value}=event.target;
setFormFields({...formFields,[name]:value})

}

const handleSubmit= async(event)=>{
event.preventDefault();
if(password!=confirmPassword){

    alert("Password does not match");
    return;
}
try{
const  {user}= await createAuthUserWithEmailAndPassword(email,password);
await createUserDocumentFromAuth(user,{displayName})

 reset();
 //setCurrent(user)

}
catch(error){
if(error.message==='Firebase: Error (auth/email-already-in-use).'){
alert("cannot create user email already in use")
}
else{
console.log("Unable to create user",error)
}
}
}


return (
    <div className='sign-up-container'>
        <h2>Don't have an account</h2>
<span>Sign Up with your Email and Password</span>
<form onSubmit={handleSubmit}>
    
    <FormInput  label="Display Name " type="text" required onChange={handleChange} name='displayName' value={displayName}/>
   
    <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email}/>

    <FormInput label="Password"  type="password" required onChange={handleChange} name='password' value={password}/>

    <FormInput label="Confirm Password" type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
  <Button button_Type="inverted" type="submit">Sign Up</Button>
    
</form>

    </div>
)


}

export default SignUpForm;