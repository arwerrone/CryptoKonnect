import Avatar from '../../components/Avatar';
import { useFirestore } from '../../hooks/useFirestore';
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore('projects');
  const { user } = useAuthContext();
  // const history = useHistory()
  const navigate = useNavigate();
  const handleClick = () => {
    deleteDocument(project.id);
    // history.push('/')
    navigate('/social');
  };

  return (
    <div className="">
      <ul>
        <li>
          <div className="project-summary">
            <h3>{project.name}</h3>
            <p className="due-date">Posted on {project.dueDate.toDate().toDateString()}</p>
            <p className="details">{project.details}</p>
            <h4>Post tagged to:</h4>
            <div className="assigned-users">
              {project.assignedUsersList.map(user => (
                <div key={user.id}>
                  <Avatar src={user.photoURL} />
                </div>
              ))}
            </div>
          </div>
        </li>
        <li>
          <div>
            {user.uid === project.createdBy.id && (
              <button className="btn bg-secondary text-white" onClick={handleClick}>
                Delete Post
              </button>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}
