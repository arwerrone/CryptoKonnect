import { useState } from 'react';
// import { useSignup } from '../../../hooks/useSocialSignup';
import { useUpdate } from '../hooks/useSocialAccount';

// use update hook
import firebase from 'firebase';
import { useAuthContext } from '../../src/hooks/useSocialAuthContext';

// import { Link, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import SocialAvatar from '../components/social/SocialAvatar';

// styles
import '../../src/routes/social/socialSignup/SocialSignup.css';

export default function Update() {
  const { user } = useAuthContext();
  // console.log(user.photoURL);

  // const [email, setEmail] = useState('');
  const [email, setEmail] = useState(firebase.auth().currentUser.email);

  const [password, setPassword] = useState('');

  // const [displayName, setDisplayName] = useState('');
  const [displayName, setDisplayName] = useState(user.displayName);

  const [thumbnail, setThumbnail] = useState(null);

  const [thumbnailError, setThumbnailError] = useState(null);
  const { update, isPending, error } = useUpdate();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await update(email, password, displayName, thumbnail);
    navigate('/dashboard');
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
    if (selected.size > 300000) {
      setThumbnailError('Image file size must be less than 300kb');
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log('thumbnail updated');
  };

  return (
    <>
      <div className="round-corner mt-0 py-4">
        <div className="mx-auto mb-2 max-w-[70px] py-18">
          <SocialAvatar src={user.photoURL} />
        </div>
        <h2 className="text-center text-4xl mb-3">{user.displayName}'s Profile</h2>
        <div className="mx-auto max-w-[450px] px-5 py-18">
          <form onSubmit={handleSubmit} className="round-corner my-0">
            <div className="my-0">
              <label>Email</label>

              <div className="w-full relative my-0 shadow-xl rounded-xl">
                <input readOnly type="email" onChange={e => setEmail(e.target.value)} value={email} className="w-full bg-gray border border-input px-3 py-2 shadow-xl rounded-xl" />

                <AiOutlineMail className="right-3 top-3 absolute text-black-300" />
              </div>
            </div>

            <div className="my-0">
              <label>Display Name</label>
              <div className="w-full relative my-0 shadow-xl rounded-xl">
                <input required type="text" onChange={e => setDisplayName(e.target.value)} value={displayName} className="text-black w-full bg-gray border border-input px-3 py-2 shadow-xl rounded-xl" />
              </div>
            </div>

            <div className="my-0">
              <label>Profile Thumbnail</label>

              <div className="w-full relative my-0 shadow-xl rounded-xl bg-white">
                {/* <input required type="file" onChange={handleFileChange} /> */}
                <input className="text-black" type="file" onChange={handleFileChange} />
                {thumbnailError && <div className="error">{thumbnailError}</div>}
              </div>
            </div>

            <div className="my-0">
              <label>
                Please confirm <strong>Password</strong> to continue
              </label>

              <div className="w-full relative my-0 shadow-xl rounded-xl">
                <input required type="password" onChange={e => setPassword(e.target.value)} value={password} className="w-full bg-gray border border-input px-3 py-2 shadow-xl rounded-xl" />

                <AiFillLock className="right-3 top-3 absolute text-black-300" />
              </div>
            </div>

            {!isPending && <button className="mt-5 mb-3 p-2 w-full bg-primary text-white rounded-xl shadow-2xl">Update Profile</button>}

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
