import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

import Navbar from '../../components/Navbar';
// styles
import './Signup.css';

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
    <div className='container'>
      <Navbar />

      <form onSubmit={handleSubmit} className="round-corner my-0">
        <h2>Sign up</h2>
        <label>
          <span>email:</span>
          <input required type="email" onChange={e => setEmail(e.target.value)} value={email} />
        </label>
        <br />
        <label>
          <span>password:</span>
          <input required type="password" onChange={e => setPassword(e.target.value)} value={password} />
        </label>
        <br />
        <label>
          <span>display name:</span>
          <input required type="text" onChange={e => setDisplayName(e.target.value)} value={displayName} />
        </label>
        <br />
        <label>
          <span>Profile thumbnail:</span>
          <input required type="file" onChange={handleFileChange} />
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </label>
        <br />
        {!isPending && <button className="btn bg-primary">Sign up</button>}
        {isPending && (
          <button className="btn bg-primary" disabled>
            loading
          </button>
        )}
        {error && <div className="error">{error}</div>}
      </form>

      </div>
    </>
  );
}
