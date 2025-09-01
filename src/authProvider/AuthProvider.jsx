import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
        return signOut(auth);
    }
    const updateUser =(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUSer)=>{
            setUser(currentUSer);
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const userInfo = {
        user,
        createUser,
        loginUser,
        logOut,
        updateUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;