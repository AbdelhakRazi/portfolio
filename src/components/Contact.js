import React,{useState} from 'react'
import "../styles/contact.css"
export default function Contact() {
  const [email, setEmail] = useState('')
  const [message,setMessage] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
<section className="contact">
<h6>Contact<div className="special-circle"></div>
</h6>
<div className="contact-section">
    <div className='contact-left-section'>
        <h2>Let's get in touch</h2>
        <p>Send a message or contact me through social media</p>
        <div className="contact-social-media">
        </div>
    </div>
    <form className="contact-form" onSubmit={handleSubmit}>
        <input 
        type="email"
        placeholder='Enter your e-mail'
        className='contact-form-input'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <textarea 
        type="text"
        rows={8}
        placeholder='Enter your message'
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        className='contact-form-message'/>
        <input type="submit" value={"SUBMIT"} className="contact-form-submit"/>
    </form>
</div>
    </section>
  )
}
