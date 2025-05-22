import React from 'react';

const Card1 = (props) => {
  return (
    <div className="col-lg-4  col-md-6 col-sm-6 col-12 mb-4">
      <div className="card-content">
        <div className="card-body  rounded">
          <h5 className="card-title fs-1">
            <i className={`${props.icon}`}></i>
          </h5>
          <p className="card-text1 fs-5 fw-semibold">{props.title}</p>
          <p className="card-text text-secondary">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card1;