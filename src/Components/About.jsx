import React from 'react'
import Leftsite from './Leftsite'
import Rigthsite from './Rigthsite'

const About = () => {
  return (
    <section className='my-5 py-5 '>
        <div className="container">
            <div className="row ">
                <Leftsite />
                <Rigthsite />
            </div>
        </div>
    </section>
  )
}

export default About