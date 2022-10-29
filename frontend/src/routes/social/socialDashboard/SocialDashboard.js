import { useCollection } from '../../../hooks/useSocialCollection';
import { useState } from 'react';
import { useAuthContext } from '../../../hooks/useSocialAuthContext';

// components
import PostList from '../../../components/social/PostList';
import PostFilter from './PostFilter';

// import NavbarComp from '../../../components/NavbarComp';
import Navbar from '../../../components/social/SocialNavbar';

import Sidebar from '../../../components/social/SocialSidebar';
import OnlineUsers from '../../../components/social/OnlineSocialUsers';

// styles
import './SocialDashboard.css';

export default function Dashboard() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('posts');
  const [filter, setFilter] = useState('all');

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  const posts = documents
    ? documents.filter(document => {
        switch (filter) {
          case 'all':
            return true;
          case 'mine':
            let assignedToMe = false;
            document.assignedUsersList.forEach(u => {
              if (u.id === user.uid) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case 'Cryptocurrencies':
          case 'Exchanges':
          case 'NFTs':
          case 'Stablecoins':
            console.log(document.category, filter);
            return document.category === filter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div className="App">
      {user && <Sidebar />}

      <div className="container">
        <Navbar />
        <h4>Posts</h4>
        {error && <p className="error">{error}</p>}
        {documents && <PostFilter changeFilter={changeFilter} />}
        {posts && <PostList posts={posts} />}
      </div>

      {user && <OnlineUsers />}
    </div>
  );
}
