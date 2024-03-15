// code for a single comment

import PropTypes from 'prop-types';
const Comment = ({user,text}) => (
    <div className="comment">
        <h4>{user}</h4>
        <p>{text}</p>
        </div>
    );

Comment.propTypes = {
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    };
    
export default Comment;
