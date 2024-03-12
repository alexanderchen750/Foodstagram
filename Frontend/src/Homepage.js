import "./Homepage.css";
import { useState } from 'react'
import { useEffect } from 'react'
import Timeline from './Timeline';

function Homepage() {
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
    <div className='homepage'>
      <div className='homepage__nav'>
      </div>
      <div className="homepage__timeline">
        <Timeline posts = {posts} />
        </div>
    </div>
  );
}
export default Homepage;
