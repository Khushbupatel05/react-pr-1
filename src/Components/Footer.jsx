import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-img">
      <div className="container pt-4 ">
        <div className="row align-items-center justify-content-between ">
          
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-md-start mb-4 mb-lg-0">
            <img src="/Img/logo.png" alt="Logo" className="img-fluid" />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-1 mb-lg-0 ">
            <ul className="d-flex justify-content-center gap-3 footer-text fs-5 circle-icon">
              <li><i className="ri-facebook-fill"></i></li>
              <li><i className="ri-linkedin-fill"></i></li>
              <li><i className="ri-instagram-line"></i></li>
              <li><i className="bi bi-twitter"></i></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 footer-text  ">
            <p className="fs-6 mt-1">Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
