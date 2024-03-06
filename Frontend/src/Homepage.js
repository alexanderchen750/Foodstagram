import React from 'react'
import "./Homepage.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidenav from './navigation/Sidenav';
import Timeline from './timeline/Timeline';
import About from './about/About.js';

function Homepage() {
  return (
    <div className='homepage'>
        <div className="homepage__nav">
        <Router>
         <div>
           <Sidenav />
           <Switch>
            <Route path="/about" component={About} />
           </Switch>
        </div>
   </Router>
    </div>
        <div className="homepage__timeline">
        <Timeline />
        </div>
    </div>
    
  )
}

export default Homepage
