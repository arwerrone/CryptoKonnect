import { useState } from 'react';
import { useSignup } from '../../../hooks/useSocialSignup';

// import { Link, useNavigate } from 'react-router-dom';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';

import Navbar from '../../../components/social/SocialNavbar';
// styles
import './SocialSignup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();

  const handleSubmit = e => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  const handleFileChange = e => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError('Please select a file');
      return;
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image');
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError('Image file size must be less than 100kb');
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log('thumbnail updated');
  };

  return (
    <>
      <Navbar />
      <div className="round-corner mt-4 py-4">
        <div className="mx-auto max-w-[450px] px-5 py-18">
          <h2 className="text-4xl">Sign Up</h2>

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

            <div className="my-0">
              <label>Display Name</label>

              <div className="w-full relative my-0 shadow-xl rounded-xl">
                <input required type="text" onChange={e => setDisplayName(e.target.value)} value={displayName} className="w-full bg-gray border border-input px-3 py-2 shadow-xl rounded-xl" />
              </div>
            </div>

            <div className="my-0">
              <label>Profile Thumbnail</label>

              <div className="w-full relative my-0 shadow-xl rounded-xl bg-white">
                <input required type="file" onChange={handleFileChange} />
                {thumbnailError && <div className="error">{thumbnailError}</div>}
              </div>
            </div>

            {!isPending && <button className="mt-5 mb-3 p-2 w-full bg-primary text-white rounded-xl shadow-2xl">Sign up</button>}

            {isPending && (
              <button className="mt-5 mb-3 p-2 w-full bg-primary text-white rounded-xl shadow-2xl" disabled>
                loading
              </button>
            )}
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
    </>
  );
}
