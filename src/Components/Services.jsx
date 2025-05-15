import React from 'react'
import Card1 from './Card1'

const Services = ()=> {
    let arr = [
            {
            icon: "bi bi-rss",
            title: "Business Strategy",
            desc: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            icon: "bi bi-stack",
            title: "Website Development",
            desc: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            icon: "bi bi-people",
            title: "Marketing & Reporting",
            desc: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            icon: "bi bi-tv",
            title: "Mobile App Development",
            desc: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            icon: "bi bi-people",
            title: "Digital Marketing",
            desc: "We work to promote your brand in partnership with the best marketing platforms today."
        },
        {
            icon: "bi bi-tv",
            title: "Brand Creation",
            desc: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        }
  ]
    return(
        <section className="service  py-5 my-2 ">
            <div className="container">
                <div className=''>
                    <h2 className='service-title text-center'>My Awesome Service</h2>
                    <p className='text-center fs-5 service-text'>There are many variations of passages of Lorem Ipsum available, but the <br />majority have suffered alteration.</p>
                </div>
            </div>
            <div className="container ">
                <div className="row gy-4 mb-5">
                        {arr.map((item) => {
                            return <Card1 icon={item.icon} title={item.title} desc={item.desc} />
                        })}
                </div>
            </div>
        </section>
    )
}
export default Services;

