import { Link } from 'react-router-dom';
import Avatar from './SocialAvatar';

// styles
import './PostList.css';

export default function ProjectList({ posts }) {
  console.log(posts);

  return (
    <div className="project-list">
      {posts.length === 0 && <p>No Posts yet!</p>}
      {posts.map(project => (
        <Link className="round-corner pt-0" to={`/posts/${project.id}`} key={project.id}>
          <h4><strong>{project.name}</strong></h4>
          <p>Posted on {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <p>
              <strong>Tagged to:</strong>
            </p>
            <ul>
              {project.assignedUsersList.map(user => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
