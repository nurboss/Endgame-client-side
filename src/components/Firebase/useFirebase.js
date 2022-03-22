import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "./Firebase.init";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [admin, setAdmin] = useState(false);



    // create user with email password
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const displayName = "displayName";
                const user = userCredential.user;
                user[displayName] = name;
                // update user profile from firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                setUser(user)
                saveUser(email, name)
                setOpen(true)
                navigate('/')
            })
            .catch((error) => {
                setError(error.message)
                setOpen(true)
            }).finally(() => {
                setIsLoading(false);
            })
    }

    // login user
    const signinUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                setOpen(true)
                const destination = location?.state?.from || '/';
                navigate(destination)
            })
            .catch((error) => {
                setError(error.message)
                setOpen(true)
            }).finally(() => {
                setIsLoading(false);
            })

    }

    const googleSignin = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                const destination = location?.state?.from || '/';
                navigate(destination)
                setError('')
                setOpen(true)
            }).catch((error) => {
                setError(error.message)
            }).finally(() => {
                setIsLoading(false);
            })
    }

    // log out

    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
            setError('')
        }).catch((error) => {
            setError(error.message)
        }).finally(() => {
            setIsLoading(false)
            setOpen(false)
        })
    }

    // observer

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;

    }, [])

    const saveUser = (email, displayName) => {
        const user = {email, displayName};
        fetch('https://quiet-crag-61068.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }


    // admin
    useEffect( () => {
        fetch(`https://quiet-crag-61068.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        error,
        googleSignin,
        registerUser,
        logout,
        signinUser,
        isLoading,
        setIsLoading,
        open,
        setOpen,
        admin,
        setAdmin
    }
}

export default useFirebase;