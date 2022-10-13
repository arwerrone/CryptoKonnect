import React from 'react';
import Navbar from '../Navbar';
import Chat from '../Chat';

import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';



const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

const ChatDashboard = () => {
    const [userChat] = useAuthState(auth);
    

    return (
      <div className={style.appContainer}>
        <section className='{style.sectionContainer}'>
          {/* Navbar */}
          <Navbar />
          {userChat ? <Chat /> : null}
        </section>
      </div>
    );
  
}

export default ChatDashboard