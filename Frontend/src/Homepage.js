import React from 'react';
import "./Homepage.css";
import Timeline from './Timeline';
import Sidenav from './Sidenav';

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
