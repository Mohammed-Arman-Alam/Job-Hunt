import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }
    const updateUser =(updatedData)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUSer)=>{
            setUser(currentUSer);
            setLoading(false)
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
        updateUser,
        setUser,
        loading,
        setLoading
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;