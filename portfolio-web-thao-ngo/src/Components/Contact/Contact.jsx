import React from 'react'
import ContactCSS from '../Contact/Contact.module.css'


export default function Contact() {
  return (
    <>
    <section id='contact'>
<div className={ContactCSS.contact}>
      <div>
            <h2>Contact Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      </div>
      <form action="">
            <label htmlFor="">Name :</label>
            <input type="text" placeholder='Enter Name *' id="name" required/>
            <label htmlFor="">Email :</label>
            <input type="text" placeholder='Enter Email *' id="email" required/>
            <label htmlFor="">Phone :</label>
            <input type="text" placeholder='Enter phone *' id="phone" required/>
            <button>Contact</button>
      </form>
      

</div>
    </section>
    </>
  )
}
