import { useState } from 'react';
import { useLogin } from '../../../hooks/useSocialLogin';

import { Link, useNavigate } from 'react-router-dom';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';

import Navbar from '../../../components/social/SocialNavbar';
// styles
import './SocialLogin.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>



      <Navbar />
      <div className="round-corner mt-4 py-4">
        <div className="mx-auto max-w-[450px] px-5 py-18">
          <h2 className="text-4xl">Sign In</h2>




          <form onSubmit={handleSubmit} className="round-corner my-0">


            <div className="my-0">
              <label>Email</label>


              <div className="w-full relative my-0 shadow-xl rounded-xl">
                <input required type="email" onChange={e => setEmail(e.target.value)} value={email} className="w-full bg-gray border border-input px-3 py-2 shadow-xl rounded-xl" />
                <AiOutlineMail className="right-3 top-3 absolute text-black-300" />

              </div>
            </div>





            <div className="my-0">
              <label>Password</label>

              <div className="w-full relative my-0 shadow-xl rounded-xl">
                <input required type="password" onChange={e => setPassword(e.target.value)} value={password} className="w-full bg-gray border border-input px-3 py-2 shadow-xl rounded-xl" />

                <AiFillLock className="right-3 top-3 absolute text-black-300" />
              </div>

            </div>







            {!isPending && <button className="mt-5 mb-3 p-2 w-full bg-primary text-white rounded-xl shadow-2xl">Sign in</button>}
            {isPending && (
              <button className="mt-5 mb-3 p-2 w-full bg-primary text-white rounded-xl shadow-2xl" disabled>
                loading
              </button>
            )}
            {error && <div className="error">{error}</div>}
          </form>





          <p className="mb-5">
            Don't have an account? <Link to="/signup">Sign up Now</Link>
          </p>
        </div>
      </div>
    </>
  );
}
