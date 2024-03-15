// code for a single comment
const Comment = ({user,text}) => (
    <div className="comment">
        <h4>{user}</h4>
        <p>{text}</p>
        </div>
    );
    export default Comment;
