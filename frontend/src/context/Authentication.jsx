import { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';

const AccountContext = createContext();

export const AccountContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // attempt to signup and set the alert list to an empty array if succeeded
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    return setDoc(doc(db, 'users', email), {
      alertList: []
    });
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOff = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, currentAccount => {
      setUser(currentAccount);
    });
    return () => {
      unsub();
    };
  }, []);

  return <AccountContext.Provider value={{ signUp, signIn, logOff, user }}>{children}</AccountContext.Provider>;
};

export const AccountAuth = () => {
  return useContext(AccountContext);
};
