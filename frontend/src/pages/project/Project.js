import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';

// components
import ProjectComments from './ProjectComments';
import ProjectSummary from './ProjectSummary';
import Navbar from '../../components/Navbar';

import Sidebar from '../../components/Sidebar';
import OnlineUsers from '../../components/OnlineUsers';

// styles
import './Project.css';

export default function Project() {
  const { id } = useParams();
  const { document, error } = useDocument('projects', id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="project-details">
          <ProjectSummary project={document} />
          <ProjectComments project={document} />
        </div>
      </div>
      <OnlineUsers />
    </>
  );
}
