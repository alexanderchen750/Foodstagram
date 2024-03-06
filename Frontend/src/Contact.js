import React, {useState} from 'react';
import './Contact.css';
/*contact form contacts database backend needs to work on this
here is the components in place. handlechange and handlesubmit need to submit data to database. 
optimally, we need to make it so that when it submits it also displays a thank you on the page!
Chatgpt prompt used to assist: create a generic contact form
*/
function ContactForm() {};
const handleChange = (e) => {}
const handleSubmit = async (e) => {};
const Contact = () => {
    const [formData,setFormData]=useState('')
 
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
  
