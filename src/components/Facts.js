import React from 'react'

const Facts = () => {
  return (
    <>
  
      <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="section-header">
                <h2 className="text-white">Our Footprints</h2>
                <p>We’ve collaborated with startups and visionary founders from diverse industries. </p>
              </div>
              <div className="row counters">
                <div className="col-lg-4 col-6 text-center">
                  <span  className="purecounter">17</span>
                  <h3> PROJECT DELIVERED </h3>
                  <p> Across diverse industries and technologies. </p>
                </div>
                <div className="col-lg-4 col-6 text-center">
                  <span className="purecounter">8</span>
                  <h3> CUSTOMERS </h3>
                  <p>From startups to established enterprises.</p>
                </div>
                <div className="col-lg-4 col-6 text-center">
                  <span  className="purecounter">10</span>
                  <h3>YEARS OF EXPERIENCE</h3>
                  <p>Building scalable and impactful products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Facts