import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <form>
    <h2> Register</h2>
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
          <button type="submit">Register</button>
      </div>
  </form>
);
}
export default Register;
