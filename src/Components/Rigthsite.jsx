import React from 'react'

const Rigthsite = () => {
  return (
    <div className='col-lg-7  col-sm-12'>
      <div className='about-content  px-3 px-md-0'>
        <h2>About Me</h2>
        <p className="description">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered
          alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
        </p>

        <ul className="d-flex flex-wrap  fw-bold list-unstyled gap-3">
          <li className="section-tab ">Main skills</li>
          <li className="section-tab">Awards</li>
          <li className="section-tab">Experience</li>
          <li className="section-tab">Education & Certification</li>
        </ul>
        <ul className='list-unstyled ps-0'>
          <li className='data fs-5 mb-3'>
            User experience design <span className='content'>- UI/UX</span>
            <p className='content mb-0'>Delight the user and make it work.</p>
          </li>
          <li className='data fs-5 mb-3'>
            Web and user interface design <span className='content'>- Development</span>
            <p className='content mb-0'>Websites, web experiences, ...</p>
          </li>
          <li className='data fs-5'>
            Interaction design <span className='content'>- Animation</span>
            <p className='content mb-0'>I like to move it move it.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rigthsite;