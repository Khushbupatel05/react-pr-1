import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-img'>
      <div className='ps-5 '>
        <div className="row d-flex align-items-center justify-content-between">
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className='my-5 ps-5 '>
              <img src="/Img/logo.png" alt="" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className='my-5 ps-5 '>
              <ul className='d-flex footer-text gap-3 fs-5 circle-icon rounded-circle'>
                <li className=''><i class="ri-facebook-fill"></i></li>
                <li className='icon'><i class="ri-linkedin-fill"></i></li>
                <li className='icon'><i class="ri-instagram-line"></i></li>
                <li className='icon'><i class="bi bi-twitter"></i></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="   ">
              <div class="text d-flex footer-text gap-3 fs-3 my-5 pt-2  " >
                <p className='fs-6  ps-5' >Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;