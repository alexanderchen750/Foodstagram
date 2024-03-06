import React from 'react';
import "./Homepage.css";
import Timeline from './timeline/Timeline';
import Sidenav from './navigation/Sidenav';

function Homepage() {
  return (
    <div className='homepage'>
      <div className='homepage__nav'>
      </div>
      <div className="homepage__timeline">
        <Timeline />
        </div>
    </div>
  );
}
export default Homepage;
