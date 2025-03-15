import React from 'react'
import './Contact.css'
import masg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "db07d7c2-ecb7-4242-be44-cf2403ca0757");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact container'>
      <div className="contact-col">
        <h3>Send Us a messege <img src={masg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto iste quaerat nobis dolor ipsa vel sit repellendus fuga optio deleniti labore amet animi quas in rem, quia modi nam cupiditate.</p>
        <ul>
            <li><img src={mail_icon} alt="" />nmydgimhana@g,ail.com</li>
            <li><img src={phone_icon} alt="" />+94 761232345</li>
            <li><img src={location_icon} alt="" />No 13/A Sendiriyamulla Yogiyana</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required />
            <label>Write your massages here</label>
            <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn darkbtn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
