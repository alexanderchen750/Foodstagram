import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import SignIn from './SignIn';
import Contact from './Contact';
/*this imports from the .js files^ and the bottom portion essentially makes a navbar on every page.*/
function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<navbar-brand />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/search" element={<Search/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
