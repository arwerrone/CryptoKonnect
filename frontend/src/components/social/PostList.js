import { Link } from 'react-router-dom';
import Avatar from './SocialAvatar';

// styles
import './PostList.css';

export default function ProjectList({ posts }) {
  console.log(posts);

  return (
    <div className="project-list">
      {posts.length === 0 && <p>No Posts yet!</p>}
      {posts.map(post => (
        <Link className="round-corner pt-0" to={`/posts/${post.id}`} key={post.id}>
          <h4><strong>{post.name}</strong></h4>
          <p>Posted on {post.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <p>
              <strong>Tagged to:</strong>
            </p>
            <ul>
              {post.assignedUsersList.map(user => (
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
