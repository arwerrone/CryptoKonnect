import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useSocialAuthContext';

// components
import Avatar from '../social/SocialAvatar';

// styles & images
import './SocialSidebar.css';
import DashboardIcon from '../../assets/social_dashboard.svg';
import AddIcon from '../../assets/social_add.svg';

export default function Sidebar() {
  const { user } = useAuthContext();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              {/* <NavLink exact to="/social"> */}
              <NavLink to="/social">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Posts</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add post icon" />
                <span>New Post</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
