import userEvent from "@testing-library/user-event";
import { createContext,useState ,useEffect} from "react";
import { onAuthStateChangedListner ,createUserDocumentFromAuth} from "../utlis/firebase.utils";

//actual value you want to access
export const UserContext= createContext({
currentUser:null,
setCurrent:()=>null

})

//it is actual component
export const UserProvider=({children})=>{

  const [currentUser,setCurrent] =useState(null) 
  const value={currentUser,setCurrent}

  useEffect(()=>{
const unsubscribe=onAuthStateChangedListner((user)=>{
  if(user){
  createUserDocumentFromAuth(user)
  }
  console.log(user)
setCurrent(user)
})
return unsubscribe;

  },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}

