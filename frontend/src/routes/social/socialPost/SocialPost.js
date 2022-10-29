import { useParams } from 'react-router-dom';
import { useDocument } from '../../../hooks/useSocialDocument';

// components
import PostComments from './PostComments';
import PostSummary from './PostSummary';
import Navbar from '../../../components/social/SocialNavbar';

import Sidebar from '../../../components/social/SocialSidebar';
import OnlineUsers from '../../../components/social/OnlineSocialUsers';

// styles
import './SocialPost.css';

export default function Post() {
  const { id } = useParams();
  const { document, error } = useDocument('posts', id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className='App'>
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="project-details">
          <PostSummary post={document} />
          <PostComments post={document} />
        </div>
      </div>
      <OnlineUsers />
    </div>
  );
}
