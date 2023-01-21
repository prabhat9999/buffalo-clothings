import {initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,
GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,
onAuthStateChanged} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc,collection, writeBatch, query, getDocs} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAVo3GRCAO1RhVd8fxBzYy-jkEqoT3s5y8",
    authDomain: "buffalo-clothing-db.firebaseapp.com",
    projectId: "buffalo-clothing-db",
    storageBucket: "buffalo-clothing-db.appspot.com",
    messagingSenderId: "9044991293",
    appId: "1:9044991293:web:34d9ca20368b597a77b954"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider=new GoogleAuthProvider();


  provider.setCustomParameters({
    prompt:"select_account"
  })
//singleton keeps track of the authentication state of different method
  export const auth=getAuth();
  export const db=getFirestore();

  export const signInWithGooglePopup=()=>{
  return  signInWithPopup(auth,provider)
}

// export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);

export const createUserDocumentFromAuth=async(userAuth,additionalInformation)=>{
    const userDocRef=doc(db,'users',userAuth.uid)
  
    console.log(userDocRef)
    //check if document exist
    const userSnapShot=await getDoc(userDocRef);
    console.log(userSnapShot.exists())

    if(!userSnapShot.exists()){
    const {displayName,email}=userAuth;
    const createdAt=new Date();

    try{

     await setDoc(userDocRef,{
        displayName,email,createdAt,
        ...additionalInformation
     
     })   
    }
    catch(error){
    console.log("error while creating user",error.message)
    }

    }
  
    return userDocRef
    }


    export const createAuthUserWithEmailAndPassword= async(email,password)=>{

      if(!email || !password)return;
       
return await createUserWithEmailAndPassword(auth,email,password);
    
    }

    export const signInWithEmailPassword= async(email,password)=>{
      if(!email || !password)return;
    
      return await signInWithEmailAndPassword(auth,email,password)

    }

    export const userSignOut= async()=>await signOut(auth)

    export const onAuthStateChangedListner=(callback)=>onAuthStateChanged(auth,callback) 


    //////add collection
    export const addCollectionDocuments= async (collectionKey,objectsToAdd)=>{
      const collectionRef=collection(db,collectionKey);
      const batch=writeBatch(db)
      objectsToAdd.forEach((object)=>{
      const docRef=doc(collectionRef,object.title.toLowerCase())
      batch.set(docRef,object)
      })
    await batch.commit();
    console.log("done")
    }

    export const getCategoriesAndDocuments= async()=>{
    const collectionRef=collection(db,'categories');
    const q=query(collectionRef);
    const querySnapShot=await getDocs(q);
    const categoryMap=querySnapShot.docs.reduce((acc,docSnapShot)=>{
    const {title,items}=docSnapShot.data()
    acc[title.toLowerCase()]=items;
    return acc
    },{})

    return categoryMap  

    }