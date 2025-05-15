import React from 'react'

const Latestcard = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="Project-content text-center">
            <div className="Project-body   rounded">
            <div className="project-title fs-1">
               <img src={props.img} alt="Project" className="img-fluid w-100" />
            <p className="card-text text-center fs-6 fw-semibold">{props.title}</p>
            <p className="latestcard text-center">{props.desc}</p>
            </div>
            <button className='fs-6 rounded '>VIEW DETAILS</button>
            </div>
        </div>
    </div>
  )
}

export default Latestcard