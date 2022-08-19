import { useContext,createContext,useEffect,useState} from "react";
import { 
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
 } from "firebase/auth";
import { auth } from "../Firebase";
const AuthContext =createContext()

export const AuthContextProvider=({children})=>{
    const [user,setUser]=useState({});
    const googleSignIn=()=>{
        const provider= new GoogleAuthProvider();
        // sign in with popup
        signInWithPopup(auth,provider)
    }
    const logOut=()=>{
        signOut(auth)
    }
    useEffect(()=>{
        // it will if there will be new user
        // taking new user
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        console.log('user',currentUser);
        });
        return()=>{
            unsubscribe();
        }
    },[])
    return(
        <AuthContext.Provider value={{googleSignIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth=()=>{
    return useContext(AuthContext)
}