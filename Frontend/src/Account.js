
import './Account.css';
//import React from 'react';
import { Avatar } from '@mui/material'
import { useParams } from 'react-router-dom'; 
import Post from './Post.js'
import { useEffect, useState } from 'react';


/*(self note) need to check: 
- avatar pic is initail of username, so username[0]
- if not logged in or rigestered, do not show account at all, meaning use an if statment for Timeline 
- add a box?
- edit account? add a profile pic? change username?
- create pages for each posts likes and comments?*/
/*
function LikesButton() {
  return (
    <span className='like'>
      Likes 
    </span>
  );
}

function PostsButton() {
  return (
    <button>
      Posts 
    </button>
  );
}

function CommentsButton() {
  return (
    <button>
      Comments
    </button>
  );
}
*/
export default function Account() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let response = await fetch(`/api/users/userToId/${userId}`);
        if (!response.ok) {
          throw new Error('YUR Failed to fetch user data');
        }
        const userData = await response.json();

        // Now fetch posts for the user by _id
        response = await fetch(`/api/posts/userPost/${userData.userId}`);
        if (!response.ok) throw new Error('Failed to fetch posts');
        const postsData = await response.json();

        // Update state with fetched data
        setUser(userData);
        setPosts(postsData);
      } catch (error) {
        console.error(error);
        setUser(null);
        setPosts([]);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  
  return (
    <div>
      <div className="account">

        <div className="account__top">

          <div className="account__title">
           Your Foodagram account:
          </div>

        </div>

        <div className="account__bottom">

          <div className="account__username">
          <span className="avatar">
            <Avatar>{user?.username}</Avatar> 
            <span>{userId}</span>
          </span>
          </div> 
        </div>

        <div className="timeline__posts">
          {posts ? posts.map(post => ( // Check if posts is not null
            <Post 
              key={`${post.user}_${post.timestamp}`} 
              postId={post._id}
              user_id={post.user}
              postImage={post.imageURL} 
              likes={post.likes} 
              timestamp={post.timestamp}
              blogtext={post.blogtext}
            />
          )) : "Loading..."} {/* Display loading or a message when posts are null */}
        </div>
      </div>

      <div className="account_info">

          <div className="info__left">

          <div className="info__posts">
            <span className='posts'>
              Your Posts 
            </span>
          </div>

          <div className="info__likes">
            <span className='like'>
             Your Likes 
            </span>
          </div>

          </div>
        </div>
    </div>
  );
}
