import React from 'react'
import Latestcard from './Latestcard';

const Portfolio = () => {
    let arr = [
        {
            img: "/Img/portfolio-1.jpg",
            title: "Development",
            desc: "Getting tickets to the big show"
        },
        {
            img: "/Img/portfolio-2.jpg",
            title: "Development",
            desc: "Getting tickets to the big show"
        },
        {
            img: "/Img/portfolio-3.jpg",
            title: "Development",
            desc: "Getting tickets to the big show"
        },
        {
            img: "/Img/portfolio-4.jpg",
            title: "Development",
            desc: "Getting tickets to the big show"
        },
        {
            img: "/Img/portfolio-3.jpg",
            title: "Development",
            desc: "Getting tickets to the big show"
        },
        {
            img: "/Img/portfolio-4.jpg",
            title: "Development",
            desc: "Getting tickets to the big show"
        },


    ]
    return (
        <section className="latest  py-5 my-2 ">
            <div className="container">
                <div className=''>
                    <h2 className='service-title text-center'>My Latest Project</h2>
                    <p className='text-center fs-5 service-text'>There are many variations of passages of Lorem Ipsum available, but the
                        <br />majority have suffered alteration.</p>
                </div>
            </div>
            <div className="container ">
                <div className="row gy-4 mb-5">
                  {arr.map((item, index) => (
  <Latestcard key={index} img={item.img} title={item.title} desc={item.desc} />
))}

                </div>
            </div>

        </section>
    )
}

export default Portfolio;