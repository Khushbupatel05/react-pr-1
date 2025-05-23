import React from 'react';

const Latestcard = (props) => {
  return (
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="portfolio-box portfolio-item position-relative overflow-hidden rounded">
        <img src={props.img} alt="Project" className="img-fluid w-100 portfolio-image" />
        
        <div className="overlay">
          <div className="position-relative z-1">
            <p className="text-uppercase small mt-5 pt-5 ">{props.title}</p>
            <h5 className="fw-bold">{props.desc}</h5>
            <div className='px-3 py-2  mt-3'>
            <button className="viwe-btn rounded ">VIEW DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestcard;
