import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
    <div className='bg-contact'>
        <h2>Contact us</h2>
    </div>
    <div className='contact-container'>
      <div className='map'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59598.91565392559!2d105.7292912!3d20.9953536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454bab9b67e93%3A0xbbe16aced529963f!2zTeG7uSDEkMOsbmgsIE5hbSBU4burIExpw6ptLCBIYW5vaSwgVmlldG5hbQ!5e0!3m2!1str!2saz!4v1711896790400!5m2!1str!2saz"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer"
        title="Harita"
      ></iframe>
      </div>
    <div className='form'>
    <form action="">
        <input type="text" placeholder='Your Name'/>
        <input type="email" placeholder='Your Email' />
        <input type="text" placeholder='Subject' />
        <textarea name="message" id="message" cols="30" rows="15" placeholder='Your Message'></textarea>
        <button>Send to us</button>
     </form>
    </div>

    </div>
    </>
  )
}

export default Contact