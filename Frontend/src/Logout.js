import React from 'react'
/*needs functionality*/
import "./Logout.css";

function Logout() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would change the status of loging in
    console.log(loggedOut);
  }
  return(
    
  <form onSubmit={handleSubmit}>
    <h2> You have been logged out </h2>
  </form>
  )
}
export default Logout;
