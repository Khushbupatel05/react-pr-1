import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-img'>
      <div className='container'>
        <div className="row d-flex aloign-items-center justify-content-center">
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className='my-5 '>
              <img src="/Img/logo.png" alt="" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className='my-5 '>
              <ul className='d-flex text-white gap-3 fs-3'>
                <li className='icon' ><i class="bi bi-facebook"></i></li>
                <li className='icon'><i class="bi bi-linkedin"></i></li>
                <li className='icon'><i class="bi bi-instagram"></i></li>
                <li className='icon'><i class="bi bi-twitter"></i></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="inner text-lg-right text-center mt_md--20 mt_sm--20">
              <div class="text d-flex text-white gap-3 fs-3">
                <p>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;