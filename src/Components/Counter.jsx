import React from 'react'

const Counter = () => {
  return (
    <section className='py-5'>
        <div className="container">
            <div className="row"> 
                <div className="col-lg-12">
                    <div className='text-center'>
                        <h3>Our Fun Facts</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className='text-center my-5'>
                        <h5 className='counter'>
                            <span>199 </span>
                        </h5>
                        <p class="description fs-5">The standard chunk of Lorem Ipsum <br /> used since the 1500s is reproduced <br/> below for those.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className='text-center my-5'>
                        <h5 className='counter'>
                            <span>575</span>
                        </h5>
                        <p class="description fs-5">The standard chunk of Lorem Ipsum <br /> used since the 1500s is reproduced <br/> below for those.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className='text-center my-5'>
                        <h5 className='counter'>
                            <span>69</span>
                        </h5>
                        <p class="description fs-5">The standard chunk of Lorem Ipsum <br /> used since the 1500s is reproduced <br/> below for those.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Counter