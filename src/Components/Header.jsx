import React from 'react'

const Header = () => {
  return (
    <header className=''>
       <div className="container">
          <div className=' d-flex align-items-center justify-content-between top-header'>
              <div className='d-flex align-items-center my-3'>
                  <div className="logo ">
                    <img src="/Img/logo-symbol-dark.png" alt="" />
                  </div>
                  <nav className=''>
                    <ul className='d-flex align-items-center justify-content-center gap-3 fw-semibold fs-6 pt-2'>
                      <li className='nav'>Home</li>
                      <li className='nav'>About</li>
                      <li className='nav'>Service</li>
                      <li className='nav'>Portfolio</li>
                      <li className='nav'>Testimonial</li>
                      <li className='nav'>Blog</li>
                      <li className='nav'>Contact</li>
                    </ul>
                  </nav>
              </div>
              <div className='d-flex gap-3'>
                <ul className='text-dark d-flex gap-3 my-3'>
                  <li className='icon' ><i class="bi bi-facebook"></i></li>
                  <li className='icon'><i class="bi bi-linkedin"></i></li>
                  <li className='icon'><i class="bi bi-instagram"></i></li>
                  <li className='icon'><i class="bi bi-twitter"></i></li>
                </ul>
                <button className=' rounded-2 justify-content-center align-items-center d-flex '>BUY NOW</button>
              </div> 
          </div>
       </div>
    </header>
  )
}

export default Header