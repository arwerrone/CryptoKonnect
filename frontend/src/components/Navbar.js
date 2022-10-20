import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

// styles & images
import './Navbar.css';

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="navbar">
      <ul className="container">
        <li className="logo">
          <h1>Crypto Social</h1>
        </li>

        {!user && (
          <>
            <li>
              <Link className="btn bg-secondary text-white" to="/login">Login</Link>
            </li>
            <li>
              <Link className="btn bg-primary text-white"to="/socialsignup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="btn bg-secondary text-white" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Logging out...
              </button>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}
