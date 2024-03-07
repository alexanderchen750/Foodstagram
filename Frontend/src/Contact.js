import './Contact.css';
import {useState} from 'react';
/*contact form contacts database backend needs to work on this
here is the components in place. handlechange and handlesubmit need to submit data to database. 
optimally, we need to make it so that when it submits it also displays a thank you on the page!
Chatgpt prompt used to assist: create a generic contact form
*/
const Contact = () => {
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
          <label> Name:  </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
           <label> Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          <label> Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          <button type="submit">Send</button>
        </form>
</div>
    );
}
  
export default Contact;
  
