import React from 'react'
import Latestcard from './Latestcard';

const Portfolio = () => {
    let arr = [
        {
            id: 1,
            img: "/Img/portfolio-1.jpg",
            title: "Development",
            desc: "Getting tickets to the big show"
        },
        {
            id: 2,
            img: "/Img/portfolio-2.jpg",
            title: "Development",
            desc: "Getting tickets to the big show"
        },
        {
            id: 3,
            img: "/Img/portfolio-3.jpg",
            title: "Development",
            desc: "Getting tickets to the big show"
        },
        {
            id: 4,
            img: "/Img/portfolio-4.jpg",
            title: "Development",
            desc: "Getting tickets to the big show"
        },
        {
            id: 5,
            img: "/Img/portfolio-3.jpg",
            title: "Development",
            desc: "Getting tickets to the big show"
        },
        {
            id: 6,
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
                    {arr.map((item) => (
                    <Latestcard key={item.id} img={item.img} title={item.title} desc={item.desc} />
                    ))}
                </div>
                <div className='text-center'>

                 <button type="submit" className="rounded submit-btn px-4 p-3 ps-5 pe-5 ">View More</button>
                </div>
            </div>

        </section>
    )
}

export default Portfolio;