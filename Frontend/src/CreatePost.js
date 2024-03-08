import './Contact.css';
import {useState} from 'react';
/*Add functionality that it only allows user to post if logged in. IF not, it should probably display that they need to login first*/
const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
}
const handleSubmit = async (e) => {
  e.preventDefault();
  // Here, you would typically send formData to your backend/database
  console.log(formData);
  }

    return (
  <div className="contact" >
        <form onSubmit={handleSubmit}>

          <label> Text:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          <button type="submit">Post</button>
        </form>
</div>
    );
}
  
export default Create;
  
