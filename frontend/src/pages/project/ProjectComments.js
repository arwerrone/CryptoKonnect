import { useState } from 'react';
// import { timestamp } from "../../firebase/config"
import { timestamp } from '../../../src/firebase';

import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import Avatar from '../../components/Avatar';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function ProjectComments({ project }) {
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore('projects');
  const [newComment, setNewComment] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random()
    };

    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd]
    });
    if (!response.error) {
      setNewComment('');
    }
  };

  return (
    <>
      <div className="container">
        <div className="project-comments">
          <ul>
            <h4>Post Comments</h4>
            {project.comments.length > 0 &&
              project.comments.map(comment => (
                <li key={comment.id}>
                  <div className="comment-author">
                    <Avatar src={comment.photoURL} />
                    <p>{comment.displayName}</p>
                  </div>
                  <div className="comment-date">
                    <p>{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}</p>
                  </div>
                  <div className="comment-content">
                    <p>{comment.content}</p>
                  </div>
                </li>
              ))}
          </ul>
          <ul>
            <form className="add-comment" onSubmit={handleSubmit}>
              <label>
                <span>Add new comment:</span>
                <textarea onChange={e => setNewComment(e.target.value)} value={newComment}></textarea>
              </label>
              <button className="btn bg-primary">Add Comment</button>
            </form>
          </ul>
        </div>
      </div>
    </>
  );
}
