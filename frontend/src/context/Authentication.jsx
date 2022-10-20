import { createContext, useContext, useState, useEffect } from 'react';
// import { auth, db } from '../firebase';
import { auth, db } from '../../src/firebase';


const AccountContext = createContext();

export const AccountContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // attempt to signup and set the alert list to an empty array if succeeded
  const signUp = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password);
    return await db.collection('users').doc(email).set({
      alertList: []
    });
  };
  const signIn = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
  };

  const logOff = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(currentAccount => {
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
