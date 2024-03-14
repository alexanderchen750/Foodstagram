import './Contact.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import  { useAuthContext} from './hooks/useAuthContext'
/*Add functionality that it only allows user to post if logged in. IF not, it should probably display that they need to login first*/



const Create = () => {
  //const [user, setUser] = useState('')
  //const [blogtext, setBlogText] = useState('')
  const navigate = useNavigate();
  const {user} = useAuthContext()
  const [formData, setFormData] = useState({
    blogtext: '',
  })
  const [error, setError] = useState(null);

const handleChange = (e) => {
  setFormData({
      blogtext: e.target.value
  });
}
const handleSubmit = async (e) => {
  e.preventDefault();
  //const newPost = {formData}
  if(!user){
    setError("User Must be Logged in")
    return
  }
  console.log("HERE")
  //sent the newPost to createPost in backend
  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify(formData), 
    headers: {
      'Content-type': 'application/json',
      'Authorization' : `Bearer ${user.token}`
    }
  })
  const json = await response.json()
  
  //error handling
  if (!response.ok) {
    setError(json.error)
  }
  if (response.ok) {
    setError(null)
    console.log("success!\n", formData);
    navigate('/'); // Navigates back to the main page
  }
  console.log(error)
  }
  const [file, setFile] = useState();
  function handleChange2(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

return (
  <div className="contact" >
    <form onSubmit={handleSubmit}>

      <h2> Text:</h2>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      <h2> Add Image:</h2>
      <input type="file" onChange={handleChange2} />
      <img src={file} />
      <button type="submit">Post</button>
      {error && <div className="error">{error}</div>}
    </form>
  </div>
    );
}
  
export default Create;
  
