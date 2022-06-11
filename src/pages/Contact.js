import React from 'react'


function Contact() {
  return (
    <>
    <div className='container'>
      <h1 className="text-center pb-4 pt-4">Contact</h1>
      <div className='row my-4'>
        <div className='col-lg-6 text-center'>
          <div className='row'>
              <div className='col-md-12 bg-light mb-5 pt-3 pb-5'>
               <h4>Our Address</h4>
               <p>A108 XYZ Street, MN 535022, TOKYO</p>
              </div>
              <div className='col-md-6 bg-light mb-5 pt-3 pb-5'>
                <h4>Email Us</h4> 
                <p>info@example.com<br></br>
                  contact@example.com</p>
              </div>
              <div className='col-md-6 bg-light mb-5 pt-3 pb-5'>
                <h4>Call Us</h4> 
                <p>+1 5339 56338 77<br></br>
                  +1 6678 254445 41</p>
              </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <form className='bg-light px-5 pt-5 pb-4'>
            <div className='row'>
              <div className='col-md-6 w-50'>
              <input type='name' placeholder='Your Name' className='p-2'></input>
              </div>
              <div className='col-md-6 w-50'>
              <input type='email' placeholder='Your Email' className='p-2'></input>
              </div>
              <div className='col-md-12'>
              <input type='text' placeholder='Subject' className='w-100 mt-3 p-2'></input>
              </div>
              <div className='col-md-12'>
              <textarea placeholder="Message" className='w-100 mt-3 h-100 p-2'></textarea>
              </div>
              <button type="submit" class="btn btn-dark w-50 m-auto mt-5">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact