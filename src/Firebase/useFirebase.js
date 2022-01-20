import app from "./firebsae.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

app();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');

    const signUpEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const logInEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const setDisplayName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then((result) => {

            })
            .catch((error) => {

            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {

            }
        })
    }, [])

    const signOutEmail = () => {
        signOut(auth).then(() => {
            setUser('')
        }).catch((error) => {
            setError(error.massage)
        });
    }

    return {
        signOutEmail,
        signUpEmail,
        setDisplayName,
        user,
        setUser,
        error,
        setError,
        logInEmail
    }

}
export default useFirebase;