import './App.css';
import Sidenav from './Sidenav';
import { BrowserRouter as Router, 
  Route, Routes } from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import Search from './Search';
import Contact from './Contact';
import Register from './Register';
import SignIn from './Login';
import LogOut from './Logout';

function App() {

  return (
    
    <Router className='app'>
        <Sidenav className='app__leftside'/>      
        <Routes className='app__rightside'>
            <Route path="/" element={<Homepage />} /> 
            <Route path="/about" element={<About />} />  
            <Route path="/search" element={<Search />} />  
            <Route path="/contact" element={<Contact />} />  
            <Route path="/register" element={<Register />} />  
            <Route path="/login" element={<SignIn />} /> 
            <Route path="/logout" element={<LogOut />} />  
        </Routes>
    </Router>
        
  );
}

export default App;
