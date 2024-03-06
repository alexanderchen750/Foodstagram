import './App.css';
import Sidenav from './navigation/Sidenav';
import { BrowserRouter as Router, 
  Route, Routes } from 'react-router-dom';
import About from './navigation/About';
import Homepage from './Homepage';
import Search from './Search';
import Contact from './Contact';
import Register from './Register';
import SignIn from './Login';
import LogOut from './Logout';

import "./Homepage.css"
function App() {

  return (
    
    <Router>
      <div className ="homepage">
       <Sidenav/>      
        <Routes>
            <Route path="/" element={<Homepage />} />  
            <Route path="/about" element={<About />} />  
            <Route path="/search" element={<Search />} />  
            <Route path="/contact" element={<Contact />} />  
            <Route path="/register" element={<Register />} />  
            <Route path="/login" element={<SignIn />} /> 
            <Route path="/logout" element={<LogOut />} />  

    </Routes> 
      </div>

    </Router>
        
  );
}

export default App;
