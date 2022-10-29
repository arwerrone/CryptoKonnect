import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useSocialLogout';
import { useAuthContext } from '../../hooks/useSocialAuthContext';

// styles & images
import './SocialNavbar.css';

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="round-corner navbar">
      <ul className="container">
        <li className="logo">
          <h1>Crypto Social</h1>
        </li>

        {!user && (
          <>
            <li>
              <Link className="shadow-xl btn bg-primary text-white" to="/socialsignin">
                Sign In
              </Link>
            </li>

            <li>
              <Link className="shadow-xl btn bg-primary text-white" to="/socialsignup">
                Sign Up
              </Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <Link className="shadow-xl btn bg-white text-secondary" to="/chat">
              <strong>Live Chat</strong>
              </Link>
            </li>

            <li>
              {!isPending && (
                <button className="shadow-xl btn bg-danger text-white" onClick={logout}>
                  Sign Out
                </button>
              )}

              {isPending && (
                <button className="btn" disabled>
                  Logging out...
                </button>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
