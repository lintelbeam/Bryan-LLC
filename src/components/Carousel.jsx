// src/components/Carousel.jsx
import React, { useEffect, useRef } from "react"
import { Carousel as BsCarousel } from "bootstrap"
import shapeImg from "../img/img-wave2.png"
import heroImg1 from "../img/header/Group-39739.png"
import heroImg2 from "../img/header/people.png"
import heroImg3 from "../img/header/hero-image-3.jpg"
import heroImg4 from "../img/header/hero-image-4.jpg"
import { Link } from "react-router-dom"

const Carousel = () => {
  const instanceRef = useRef(null)

  useEffect(() => {
    const el = document.getElementById("carouselExampleFade")
    if (el && !instanceRef.current) {
      instanceRef.current = new BsCarousel(el, {
        interval: 6000,
        ride: false,      // we control start via cycle()
        pause: false,
        touch: true,
        wrap: true,
        keyboard: true,
      })
      // Start immediately
      instanceRef.current.cycle()
    }

    return () => {
      if (instanceRef.current) {
        instanceRef.current.dispose()
        instanceRef.current = null
      }
    }
  }, [])

  return (
    <>
      <section id="hero" className="hero d-flex">
        <img className="shape" src={shapeImg} alt="" />
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6 col-md-12 col-12">
              <h2 data-aos="fade-up">
                Leaders in Startup Tech, Product Development & Digital Transformation
              </h2>
              <blockquote data-aos="fade-up" data-aos-delay="100">
                <p>
                  We are a global team of engineers, designers, and strategists helping startups turn bold ideas into scalable, high-performing products.
                </p>
              </blockquote>
              <div className="d-flex align-items-center">
                <Link to="/about" className="btn-get-started">Read More</Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-12">
              <div className="header-image">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="false"   // prevent data-api auto init
                >
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
                  </div>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={heroImg1} className="d-block w-100" alt="Hero 1" loading="eager" />
                    </div>
                    <div className="carousel-item">
                      <img src={heroImg2} className="d-block w-100" alt="Hero 2" loading="lazy" />
                    </div>
                    {/* <div className="carousel-item">
                      <img src={heroImg3} className="d-block w-100" alt="Hero 3" loading="lazy" />
                    </div>
                    <div className="carousel-item">
                      <img src={heroImg4} className="d-block w-100" alt="Hero 4" loading="lazy" />
                    </div> */}
                  </div>

                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Carousel
