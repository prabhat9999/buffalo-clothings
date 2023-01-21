
import { Fragment,useEffect } from 'react'
import {getRedirectResult} from 'firebase/auth'
import {auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect} from '../../utlis/firebase.utils'
import SignUpForm from '../../components/sign-up/sign-up-form.components'
import SignInForm from '../../components/sign-in/sign-in-form.components'

import  '../authentication/authentication.styles.scss'
const Authentication=()=>{

    // useEffect( ()=>{
    //     async function fetchMyAPI() {
    //     const response= await  getRedirectResult (auth);
    //     //console.log(response);
    //     if(response){
    //         const userDocRef= await createUserDocumentFromAuth(response.user)
    //     }
    //       }
      
    //       fetchMyAPI()
        
    //   },[]) 


    // const logGoogleRedirectUser= async ()=>{
    //     const {user}=await signInWithGoogleRedirect()
    //     console.log(user)
    //   const userDocRef= await createUserDocumentFromAuth(user)
    // }

return(
    <div className='authentication-container'>
     
    <SignInForm/>
    <SignUpForm/>
    </div> 

)

}

export default Authentication;