import './Contact.css';
import {useEffect, useState} from 'react';
/*Add functionality that it only allows user to post if logged in. IF not, it should probably display that they need to login first*/



const Create = () => {
  //const [user, setUser] = useState('')
  const [blogtext, setBlogText] = useState('')

  const [formData, setFormData] = useState({
    user: '',
    blogtext: '',
  })
  const [error, setError] = useState(null);

const handleChange = (e) => {
  setFormData({
      user: "Sent from frontend :O",
      blogtext: e.target.value
  });
}
const handleSubmit = async (e) => {
  e.preventDefault();
  const newPost = {formData}

  //sent the newPost to createPost in backend
  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify(formData), 
    headers: {
      'Content-type': 'application/json'
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
  }

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
        </form>
</div>
    );
}
  
export default Create;
  
