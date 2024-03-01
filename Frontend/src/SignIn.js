import React, { useState } from 'react';
import ReactDom from "react-dom";
//database to check if email and password is in database

//function to submit data!

// probably set a global bool to indicate signed in state.
// if so, set var.
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <form>
    <h2> Sign In </h2>
    <div>
        <label> Email: </label> 
        <input 
            type="email"
            id="email" 
            value={email} 
            required 
        />
    </div>
    <div>
          <label> Password: </label>
            <input 
                type="password" 
                id="password" 
                value={password} 
                required 
            />
         <br/>             
        <button type="submit">Sign In</button>
        <br/>
          <button type="submit">Register</button>
      </div>
  </form>

  );
}

export default SignIn;
