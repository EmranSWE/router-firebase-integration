import { useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";
import { useEffect } from "react";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
   const [user,setUser]=useState({});
   
   const handleSignOut =() =>{
    signOut(auth)
    .then(()=>{

    })
}
   useEffect(()=>{
    onAuthStateChanged (auth,user =>{
        setUser(user)
    })
   },[])

   const signInWithGoogle =() =>{
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });


   }
   return {
    user,
    handleSignOut,
    signInWithGoogle,
    
   }
};

export default useFirebase;