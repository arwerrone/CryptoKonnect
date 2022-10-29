import React from 'react'
// import GoogleButton from 'react-google-button'

// import {auth} from '../../firebase'
// import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'

const style = {
    wrapper: `flex justify-center`
}
/*
const googleSignIn = () => {
    // const provider = new GoogleAuthProvider()
    const provider = new auth.GoogleAuthProvider();

    // signInWithRedirect(auth, provider)
    auth().signInWithRedirect(provider);
}
*/
const ChatSignIn = () => {
  return (
    <div className={style.wrapper}>
        {/* <GoogleButton onClick={googleSignIn} /> */}
        <h3 className='text-white pt-1'>Please Sign in to join Chat</h3>
    </div>
  )
}

export default ChatSignIn