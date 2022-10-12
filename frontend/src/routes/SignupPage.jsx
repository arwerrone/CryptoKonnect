import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { AccountAuth } from '../context/Authentication';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signUp } = AccountAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    // attempt to sign up new account, redirect to Dashboard if succeeded
    try {
      await signUp(email, password);
      navigate('/dashboard');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="round-corner my-0 py-3">
      <div className="mx-auto max-w-[450px] px-5 py-18">
        <h2 className="text-3xl">Sign Up a Free Account</h2>

        {error ? <p className="bg-red-300 p-3 my-2">{error}</p> : null}
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
          <button className="mt-5 mb-3 p-2 w-full bg-primary text-white rounded-xl shadow-2xl">Sign Up</button>
        </form>
        <p className="mb-5">
          Already have an account? <Link to="/signin">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
