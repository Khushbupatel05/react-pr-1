import React from 'react';

const Header = () => {
  return (
    <header className=''>
      <div className="container">
        <div className='d-flex align-items-center justify-content-between top-header'>
          <div className='d-flex align-items-center my-3'>
            <div className="logo">
              <img src="/Img/logo-symbol-dark.png" alt="Logo" />
            </div>
            <nav className='ms-5'>
              <ul className='menu d-flex align-items-center justify-content-center gap-3 fw-semibold fs-6 pt-2'>
                <li className='nav'><a href="#">Home</a></li>
                <li className='nav'><a href="#">About</a></li>
                <li className='nav'><a href="#">Service</a></li>
                <li className='nav'><a href="#">Portfolio</a></li>
                <li className='nav'><a href="#">Testimonial</a></li>
                <li className='nav'><a href="#">Blog</a></li>
                <li className='nav'><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className='d-flex gap-3'>
            <ul className='text-dark d-flex gap-3 my-3'>
              <li className='icon'><i className="bi bi-facebook"></i></li>
              <li className='icon'><i className="bi bi-linkedin"></i></li>
              <li className='icon'><i className="bi bi-instagram"></i></li>
              <li className='icon'><i className="bi bi-twitter"></i></li>
            </ul>
            <button className='rounded-2 justify-content-center align-items-center d-flex btn-custom px-3 '>BUY NOW</button>
            <button className="menubar d-lg-none d-flex ">
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
