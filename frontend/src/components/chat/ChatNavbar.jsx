import React from 'react';
import ChatSignIn from './ChatSignIn'
import ChatLogOut from './ChatLogOut'
import {auth} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

const ChatNavbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>CryptoKonnect Chat</h1>
      {user ? <ChatLogOut /> : <ChatSignIn />}

    </div>
  );
};

export default ChatNavbar;
