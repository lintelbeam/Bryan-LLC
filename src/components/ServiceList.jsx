import React from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>What we do? </h2>
            <p>
              We are a development group dedicated to helping startups build, launch, and scale products that make a real impact.{" "}
            </p>
          </div>
          <div className="row gy-5">
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-book" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services/web-mobile-development" className="stretched-link">
                      Web & Mobile Development{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    Cost-effective and End-to-end web & mobile application
                     development services utilizing the latest technology 
                     and expertise. We build fast, reliable, and scalable 
                     mobile and web applications that bring your ideas to
                      life and deliver seamless user experiences across all platforms.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-collection-play"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services/design" className="stretched-link">
                      Product Design & UI/UX
                    </Link>
                  </h4>
                  <p className="description">
                    Our design approach combines aesthetics with purpose. 
                    We create intuitive interfaces and seamless user journeys 
                    that turn complex ideas into simple, elegant experiences. 
                    Every product we design is built to attract users, 
                    strengthen engagement, and elevate your brand identity.
                  </p>
                  <Link to="/services/design" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-controller"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services/consultation" className="stretched-link">
                      Product Consultation{" "}
                    </Link>
                  </h4>
                  <p className="description">
                  No matter the scope of the project and its needs, 
                  we bring our expertise to each stage 
                  of the process. From pre-project planning, team 
                  buildup, application development and long-term 
                  strategy implementation, we guide and mentor your 
                  business to a fantastic end-product.
                  </p>
                  <Link to="/services/consultation" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-universal-access-circle"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services/modernization" className="stretched-link">
                      Software Modernization{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    Whether your legacy application requires rehosting or a 
                    complete overhaul, we will work closely with your business 
                    to find solutions. Together, we’ll create and implement an
                     application modernization strategy guaranteed to deliver
                      innovation and efficiency.{" "}
                  </p>
                  <Link to="/services/modernization" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
