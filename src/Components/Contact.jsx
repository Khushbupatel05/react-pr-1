import React from 'react'

const Contact = () => {
  return (
    <div className="section my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
                <div className="ps-2 pe-2">
                    <h2 className='contact-title'>Hire Me.</h2>
                    <p className="service-text fs-6">
                        I am available for freelance work. Connect with me via phone:{" "}
                        <span className="text-dark fw-semibold">01923 088574</span> or{" "}
                        <span className="text-dark fw-semibold">email: admin@example.com</span>
                    </p>
                </div>  
                <form className="mt-4">
                    <div className="mb-1">
                        <label htmlFor="nameInput" className="form-label"></label>
                        <input
                        type="text" id="nameInput"  name="name"  className="form-control fs-6" placeholder="  Enter your name"/>
                    </div>

                    <div className="mb-1">
                        <label htmlFor="emailInput" className="form-label"></label>
                        <input
                        type="email" id="emailInput" name="email" className="form-control " placeholder="  Enter your email" />
                    </div>

                    <div className="mb-1">
                        <label htmlFor="subjectInput" className="form-label"></label>
                        <input
                        type="text" id="subjectInput" name="subject" className="form-control "  placeholder= "  Write a subject" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="messageInput" className="form-label"></label>
                        <textarea id="messageInput"  name="message" rows="5"  className="form-control " placeholder="  Write your message here..." />
                    </div>

                    <button type="submit" className="rounded submit-btn px-4 p-2 ps-4 pe-4">Submit</button>
                </form>
          </div>
          <div className="col-lg-6 ">
                <div className='contact-img ps-3' >
                    <img src="/Img/about-6.jpg" alt="" />
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
