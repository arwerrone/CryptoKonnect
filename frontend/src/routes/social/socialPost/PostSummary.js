import Avatar from '../../../components/social/SocialAvatar';
import { useFirestore } from '../../../hooks/useSocialFirestore';
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/useSocialAuthContext';

export default function PostSummary({ post }) {
  const { deleteDocument } = useFirestore('posts');
  const { user } = useAuthContext();
  // const history = useHistory()
  const navigate = useNavigate();
  const handleClick = () => {
    deleteDocument(post.id);
    // history.push('/')
    navigate('/social');
  };

  return (
    <div className="mt-14">
      <ul>
        <li>
          <div className="round-corner project-summary py-4">
            <h3>{post.name}</h3>
            <p className="due-date">Posted on {post.dueDate.toDate().toDateString()}</p>
            <p className="details">{post.details}</p>
            <h4>Post tagged to:</h4>
            <div className="assigned-users">
              {post.assignedUsersList.map(user => (
                <div key={user.id}>
                  <Avatar src={user.photoURL} />
                </div>
              ))}
            </div>
          </div>
        </li>
        <li>
          <div className='py-2'>
            {user.uid === post.createdBy.id && (
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
