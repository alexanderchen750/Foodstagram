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
  const [file, setFile] = useState();
  const [error, setError] = useState(null);

const handleChange = (e) => {
  if (e.target.name === 'blogtext') {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
};
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if(selectedFile) {
      setFile(selectedFile);
    }
  };
 
const handleSubmit = async (e) => {
  e.preventDefault();
  //const newPost = {formData}
  if(!user){
    setError("User Must be Logged in")
    return
  }

  const submissionData = new FormData();
  submissionData.append('blogtext', formData.blogtext);
  if (file) {
    submissionData.append('file', file);
  }

  try{
    console.log(submissionData)
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: submissionData,
      headers: {
        'Authorization' : `Bearer ${user.token}`
      }
    })

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    } else {
      setError(null);
      console.log("success!", json);
      navigate('/'); // Navigates back to the main page
    }
    
  }
  catch(err){
    console.error("Submission error", err);
    setError("There was an error submitting the post.");
  }
}
return (
  <div className="contact" >
    <form onSubmit={handleSubmit}>

      <h2> Text:</h2>
        <textarea
          name="blogtext"
          value={formData.blogtext}
          onChange={handleChange}
        />
      <h2> Add Image:</h2>
      <input type="file" onChange={handleFileChange} />
      {file && <img src={URL.createObjectURL(file)} alt="Preview" style={{ maxHeight: '200px' }} />}
      <button type="submit">Post</button>
      {error && <div className="error">{error}</div>}
    </form>
  </div>
    );
}
  
export default Create;
  
