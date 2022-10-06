import React from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className='round-corner my-0 py-3'>      
      <div className='mx-auto max-w-[450px] px-5 py-18'>
        <h2 className="text-4xl">Sign Up</h2>
        <form>
          <div className="my-3">
            <label>Email</label>
            <div className='w-full relative my-2 shadow-xl rounded-xl'>
              <input className = "w-full bg-gray border border-input px-3 py-1 shadow-xl rounded-xl" type="email" />
              <AiOutlineMail className='right-3 top-2 absolute text-black-300' />
            </div>
          </div>
          <div className='my-3'>
            <label>Password</label>
            <div className='w-full relative my-2 shadow-xl rounded-xl'>
              <input className = "w-full bg-gray border border-input px-3 py-1 shadow-xl rounded-xl" type="password" />
              <AiFillLock className='right-3 top-2 absolute text-black-300' />
            </div>
          </div>
          <button className='mt-5 mb-3 p-2 w-full bg-primary text-white rounded-xl shadow-2xl'>Sign Up</button>
        </form>
        <p className='mb-5'>
        Already have an account? <Link to="/signin">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default SignupPage