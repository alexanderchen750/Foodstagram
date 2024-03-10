import { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submit action
        console.log('Registering with:',username, email, password);
        // Here, you would typically dispatch these values to a backend service for registration
    };
    return (
    <form onSubmit={handleSubmit}>
    <h2> Register</h2>
    <div>
        <label> Username: </label> 
        <input 
            type="username"
            id="username" 
            value={username} 
            onChange={handleUsernameChange}
            required 
        />
    </div>
    <div>
        <label> Email: </label> 
        <input 
            type="email"
            id="email" 
            value={email} 
            onChange={handleEmailChange}
            required 
        />
    </div>
    <div>
          <label> Password: </label>
            <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={handlePasswordChange}
                required 
            />
         <br/>             
          <button type="submit">Register</button>
      </div>
  </form>
);
}
export default Register;
