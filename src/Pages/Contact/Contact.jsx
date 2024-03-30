import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
    <div className='bg-contact'>
        <h2>Contact us</h2>
    </div>
    <div className='contact-container'>
      <div>
        <p>map</p>
      </div>
     <form action="">
        <input type="text" placeholder='Your Name'/>
        <input type="email" placeholder='Your Email' />
        <input type="text" placeholder='Subject' />
        <textarea name="message" id="message" cols="30" rows="15" placeholder='Your Message'></textarea>
        <button>Send to us</button>
     </form>

    </div>
    </>
  )
}

export default Contact