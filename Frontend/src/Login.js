import { useState } from 'react';
import { useLogin } from './hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
//database to check if email and password is in database

//function to submit data!

// probably set a global bool to indicate signed in state.
// if so, set var.
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {login, error, isLoading} = useLogin()

    const handleEmailChange = (e) => setEmail(e.target.value);

    // Update password state
    const handlePasswordChange = (e) => setPassword(e.target.value);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Here you would check the credentials against your database or authentication service
        await login(email, password)
        if(!error){
            navigate('/'); 
        }
        // After authentication, you might set some global state or cookie indicating the signed-in state
        // This part is very dependent on your application architecture
    };

    return (
    <form onSubmit={handleSubmit}>
    <h2> Sign In </h2>
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
        <button disabled={isLoading} type="submit">Sign In</button>
        {error && <div className="error">{error}</div>}
        <br/>
      </div>
  </form>

  );
}

export default SignIn;
