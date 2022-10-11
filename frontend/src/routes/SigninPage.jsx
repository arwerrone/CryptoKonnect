import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { signIn, AccountAuth } from '../context/Authentication';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = AccountAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    // attempt to sign in, redirect to Dashboard if succeeded
    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="round-corner my-0 py-3">
      <div className="mx-auto max-w-[450px] px-5 py-18">
        <h2 className="text-4xl">Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label>Email</label>
            <div className="w-full relative my-2 shadow-xl rounded-xl">
              <input onChange={e => setEmail(e.target.value)} className="w-full bg-gray border border-input px-3 py-1 shadow-xl rounded-xl" type="email" />
              <AiOutlineMail className="right-3 top-2 absolute text-black-300" />
            </div>
          </div>
          <div className="my-3">
            <label>Password</label>
            <div className="w-full relative my-2 shadow-xl rounded-xl">
              <input onChange={e => setPassword(e.target.value)} className="w-full bg-gray border border-input px-3 py-1 shadow-xl rounded-xl" type="password" />
              <AiFillLock className="right-3 top-2 absolute text-black-300" />
            </div>
          </div>
          <button className="mt-5 mb-3 p-2 w-full bg-primary text-white rounded-xl shadow-2xl">Sign In</button>
        </form>

        <p className="mb-5">
          Don't have an account? <Link to="/signup">Sign up Now</Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
