import React from "react";
import education from "../img/website-design-development-kolkata.svg";
import entertainment from "../img/UI-UX-1.png";
import games from "../img/Consultation-economie-circulaire.png";
import sports from "../img/Modernization.png";

import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from '../img/services-header.jpg'

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img = {serviceHeader}/>

      <main id="main">
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                We are a
                <span style={{ color: "#155bd5" }}> GLOBAL LEADER</span> 
                in web and mobile engineering, delivering end-to-end, 
                cross-platform applications through expert consulting, and custom development.</h2>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Educational-content"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={education}
                  className="img-fluid"
                  alt=""
                  title="Educational-content"
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-book" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title"> Web and Mobile Development </h4>
                  <p className="description">
                    
                    We offer high-quality web and mobile application development services 
                    to small and midsize companies at a value unmatched in the industry. 
                    By using modern toolkits that compliment our lean development style, 
                    we are able to ship out cutting-edge, affordable assets.
                  </p>
                  <p className="description">
                    Our powerhouse team distributed around the world keeps our rates 
                    as competitive as possible while allowing us to pull talent 
                    from the most competitive markets.
                  </p>
                  <p className="description">
                    We manages web application development services end-to-end. 
                    Through discovery, design, engineering and testing, 
                    we’ll lead your project expertly down modern, uncharted paths.
                  </p>
                  <p className="description">
                    
                    <span className="fw-bold">
                      React, Vue.js, Angular, TypeScript, Next.js, Nuxt, Tailwind,
                      Node.js, Express, NestJS, Python/FastAPI, Django, GraphQL, 
                      PostgreSQL, MySQL, MongoDB, Redis, Swift, SwiftUI, Kotlin, 
                      Flutter, React Native &nbsp;
                    </span>
                    and more..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Entertainment-content">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-collection-play"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Attractive UI and UX Services Built for Quality Interactions
                  </h4>
                  <p className="description">
                   We puts usability at the forefront of our UI and UX services. 
                   Through thoughtful structuring and layout, we work with you to 
                   create an application users can have meaningful interactions with.
                  </p>
                  <p className="description">
                    
                  Get started by giving us just a little information about your project 
                  and design ideas, and we can have a quote prepared faster than car insurance.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={entertainment} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Games">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={games} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-controller"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Software Development Consulting Services Delivering Experience
                  </h4>
                  <p className="description">
                    No matter the scope of the project and its needs, 
                    We bring our expertise to each stage of the process. 
                    From pre-project planning, team buildup, application development 
                    and long-term strategy implementation, we guide and mentor your 
                    business to a fantastic end-product.
                  </p>
                  <p className="description">
                    Get started by giving us just a little information 
                    about your company and your needs, and we can have 
                    a quote prepared faster than delivery pizza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Sports">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-universal-access-circle"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Implement Your Application Modernization Strategy
                  </h4>
                  <p className="description">
                  Whether your legacy application requires rehosting or a complete overhaul, 
                  the experts will work closely with your business to find 
                  solutions. Together, we’ll create and implement an application 
                  modernization strategy guaranteed to deliver innovation and efficiency.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={sports} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Service;
