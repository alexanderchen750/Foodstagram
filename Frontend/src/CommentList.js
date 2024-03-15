import Comment from './Comment';

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

export default CommentList;
