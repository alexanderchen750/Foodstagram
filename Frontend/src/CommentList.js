import Comment from './Comment';
import PropTypes from 'prop-types';

function CommentList({comments}) {
return (
<div className="comments">
    <h3>Comments</h3>
    {comments ? (
        comments.map((comment,index) => (
        <Comment 
            key={index} 
            user = {comment.user} 
            text={comment.text} 
        />    
        ))
    ) : (
        <p>No commments yet </p>
    )}
</div>
);
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  };
  

export default CommentList;
