import { useState } from 'react'
import { useEffect } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions.js'
import Post from './Post.js'



function Timeline() {
  const [posts, setPosts] = useState(null); // Initialized state

  useEffect(() => {
    const fetchPosts = async () => {

      const response = await fetch('/api/posts');
      const json = await response.json();
      console.log("done waiting")
      if (response.ok) {
        setPosts(json);
        console.log("sucess");
      }
      else
      {
        console.log("Fail to fetch posts to timeline");
      }
    };

    fetchPosts(); // Call the function to fetch posts
  }, []); // Dependency array to ensure effect runs only once

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
      <div className="timeline__right">
          <Suggestions />
      </div>
  </div>
  );
}

export default Timeline;


/*const [posts, ] = useState([
    {
      user: "LemonChickenBoss",
      postImage: "https://christieathome.com/wp-content/uploads/2022/03/Chinese-Lemon-Chicken-32.jpg",
      likes: 35,
      timestamp: "2d",
      blogtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi. Habitant morbi tristique senectus et netus et. Integer eget aliquet nibh praesent. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Vitae turpis massa sed elementum tempus egestas sed sed. Quam adipiscing vitae proin sagittis nisl rhoncus. Tellus mauris a diam maecenas sed. Enim ut tellus elementum sagittis vitae. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Arcu dui vivamus arcu felis bibendum ut.",
    },
    {
      user: "ThaiBeast",
      postImage: "https://freshchoice.imgix.net/assets/recipes/Villa-Maria-Pinot-Gris-matched-with-Chicken-Pad-Thai-1.jpeg?&ch=Width,DPR&fit=crop&auto=format%2C%20compress&q=70",
      likes: 180,
      timestamp: "12h",
      blogtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi. Habitant morbi tristique senectus et netus et. Integer eget aliquet nibh praesent. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Vitae turpis massa sed elementum tempus egestas sed sed. ",
    },
    {
      user: "BakingIsFun",
      postImage: "https://insanelygoodrecipes.com/wp-content/uploads/2021/04/Homemade-Pecan-Pie-800x530.png",
      likes: 11,
      timestamp: "2d",
      blogtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi. Habitant morbi tristique senectus et netus et. Integer eget aliquet nibh praesent. ",
    },
    {
      user: "SweetHome",
      postImage: "https://omnivorescookbook.com/wp-content/uploads/2021/08/210715_Japanese-Strawberry-Cake_550.jpg",
      likes: 864,
      timestamp: "42m",
      blogtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi. Habitant morbi tristique senectus et netus et. Integer eget aliquet nibh praesent. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Vitae turpis massa sed elementum tempus egestas sed sed. Quam adipiscing vitae proin sagittis nisl rhoncus. Tellus mauris a diam maecenas sed. Enim ut tellus elementum sagittis vitae. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Arcu dui vivamus arcu felis bibendum ut.",
    },
  ]);*/