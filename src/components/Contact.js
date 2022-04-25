import React from 'react'

const Contact = () => {
  return (
    <section className="s-contact">
      <div className='contact'>
        <div className="contact-form">
          <div className="form-top">
            <h5>Contact</h5>
          </div>
          <form action="#" className="getintouch">
            <div className="form-group">
              <label htmlFor="first">Your Name </label>
              <input type="text" className="form-control" placeholder='Your Name...'/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" placeholder='someone@example.com' required/>
            </div>
            <div className="form-group">
              <label htmlFor="mess">Your Message:</label>
              <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder='Say Something...'></textarea>
            </div>
            <button className="btn btn-primary">Send</button>
          </form>
        </div>
     </div>
    </section>
  )
}

export default Contact