
import "./PostList.css"
//import Account from './Account.js'
import Post from './Post.js'




function PostList({ posts }) {
  return (
    <div className='timeline'>
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts ? posts.map(post => ( // Check if posts is not null
            <Post 
              key={`${post.user}_${post.timestamp}`} 
              user={post.user}
              postImage={post.postImage} 
              likes={post.likes} 
              timestamp={post.timestamp}
              blogtext={post.blogtext}
            />
          )) : "Loading..."} {/* Display loading or a message when posts are null */}
        </div>
      </div>
  </div>
  );
}

export default PostList;

