import React, { createContext, useEffect, useState } from "react";
import app from "./../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* CREATE USER */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  /* UPDATE USER */
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  /* LOGIN USER */
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  /* GOOGLE SIGN IN */
  const googleSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  /* GOOGLE LOG IN */
  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user state : ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  /* LOG OUT */
  const logOut = () => {
    signOut(auth);
  };
  const authInfo = {
    user,
    createUser,
    updateUser,
    login,
    googleSignIn,
    googleLogin,
    logOut,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
