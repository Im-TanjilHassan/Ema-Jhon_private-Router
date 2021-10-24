import { useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect } from "react";
import initAuth from "../firebase/firebase.init";

initAuth()


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth()


    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            setUser(user)
             setError('')
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
        })
    } ,[])

    return {
        user,
        error,
        signInWithGoogle,
        logOut
    }

}

export default useFirebase;