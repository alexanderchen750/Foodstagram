import { useState, useEffect} from 'react';
import { useSignup } from './hooks/useSignup';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "./hooks/useAuthContext";
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {signup, error, isLoading} = useSignup()
    const { user }= useAuthContext()

    useEffect(() => {
        if (user) {
            navigate('/'); // Navigate to home page if user is populated
        }
    }, [user, navigate]);
    

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the default form submit action
    
        const success = await signup(username, email, password);
        console.log(success)
        // Only navigate if signup was successful
        
        // No need to explicitly handle error here as it's assumed 
        // your UI will reactively display errors based on the 'error' state.
    };
    
    /*
    const handleSubmit = async (event) => {
        console.log("BOop")
        event.preventDefault() // Prevents the default form submit action
        //console.log('Registering with:',username, email, password);
        await signup(username, email, password)

        if(error){
            navigate('/'); 
        }
        // Here, you would typically dispatch these values to a backend service for registration
    };*/
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
          <button disabled={isLoading} type="submit">Register</button>
          {error && <div className="error">{error}</div>}
      </div>
  </form>
);
}
export default Register;
