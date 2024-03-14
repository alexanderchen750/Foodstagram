import "./Sidenav.css";
import { Link } from 'react-router-dom'; 
// Import Link component for navigation
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import PasswordIcon from '@mui/icons-material/Password';
import InfoIcon from '@mui/icons-material/Info';
import foodagramlogo from "./assets/logo.png";
import LogoutIcon from '@mui/icons-material/Logout';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AddIcon from '@mui/icons-material/Add';
import { useLogout } from "./hooks/useLogout";
import { useAuthContext } from "./hooks/useAuthContext"; 
function Sidenav() {

  const { logout } = useLogout()
  const { user }= useAuthContext()
  const handleClick = () => {
    logout()
  }

  return (
    <div className="Sidenav">
    <img className="sidenav__logo" 
    src={foodagramlogo} 
    alt=""
    />
      <div className="sidenav__buttons">
        <Link to="/" className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link to="/search" className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
          </Link>
        {user && (
          <Link to="/create" className="sidenav__button">
          <AddIcon />
          <span>Create Post</span>
        </Link>
        )}
        <Link to="/contact" className="sidenav__button">
          <ExploreIcon />
          <span>Contact us</span>
        </Link>
        
        <Link to="/about" className="sidenav__button">
          <InfoIcon />
          <span>About</span>
        </Link>

      </div>
      <div className="sidenav__more">
        <div>
          {!user && (
            <div>
                <Link to="/register" className="sidenav__button">
                  <PasswordIcon />
                  <span>Register</span>
                </Link>
                <Link to="/login" className="sidenav__button">
                  <VpnKeyIcon />
                  <span>Login</span>
                </Link>
            </div>
          )

          }
         
        </div>
        <div>
          {user && (
            <div>
                <h1>{user.user}</h1>
               <Link to="/logout" onClick={handleClick} className="sidenav__button">
                <LogoutIcon />
                <span>Logout</span>
              </Link>  
            </div>

          )}
         
        </div>
        
        
        
        
      </div>

    </div>
  )
}

export default Sidenav;

/*
       <Link to="/logout" className="sidenav__button">
          <LogoutIcon />
          <span>Logout</span>
        </Link>  
        
         <div className="sidenav__button">
          <LogoutIcon />
          <button onClick = {handleClick} className = "sidenav__button" >Logout</button>
        </div>
        
        
        <button onClick={handleClick} className="sidenav__button">
        <LogoutIcon />
        <span>Logout</span>
      </button>*/
        