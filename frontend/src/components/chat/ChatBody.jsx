import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import SendChatMessage from './SendChatMessage';
import { db } from '../../firebase';
// import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';

const style = {
  main: `flex flex-col p-[10px]`
};

const ChatBody = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    // const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const q = db.collection("messages").orderBy("timestamp");

    // const unsubscribe = onSnapshot(q, querySnapshot => {
    const unsubscribe = q.onSnapshot(querySnapshot => {


      let messages = [];
      querySnapshot.forEach(doc => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>{messages && messages.map(message => <ChatMessage key={message.id} message={message} />)}</main>
      <SendChatMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default ChatBody;
