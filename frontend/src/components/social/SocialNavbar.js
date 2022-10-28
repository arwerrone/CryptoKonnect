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
              <Link className="btn bg-secondary text-white" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="btn bg-primary text-white" to="/socialsignup">
                Signup
              </Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <Link className="btn bg-primary text-white" to="/dashboard">
                Dashboard
              </Link>
            </li>

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
          </>
        )}
      </ul>
    </nav>
  );
}
