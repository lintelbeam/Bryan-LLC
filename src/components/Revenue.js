import React from 'react'
import { Link } from 'react-router-dom'

import dashboard from '../img/revenue-dashboard.png'

const Revenue = () => {
  return (
    <>
        <section id="features" className="features">
        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-7">
                <h4>Empowering Startups and Founders Across Industries</h4>
                <p>We’ve collaborated with startups and founders to transform ambitious ideas into scalable, high-performing digital products. Our expertise spans across HealthCare, AI/ML, E-Commerce & Retail, and SaaS, enabling us to deliver tailored solutions that meet diverse business goals.</p>
                <p> With a strong focus on innovation and engineering excellence, we build products that combine usability, performance, and long-term scalability.</p>
                <p> We continue to push boundaries through technology, helping our clients grow faster, adapt to change, and make a lasting impact in their industries.</p>
                <Link to="/about" className="btn-get-started">Read More</Link>
              </div>
              <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                <div className="phone-wrap">
                  <img src={dashboard} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Revenue