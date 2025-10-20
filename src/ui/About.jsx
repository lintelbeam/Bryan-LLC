import React from 'react'
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import about_img from '../img/about-image.jpg'
import manag_photo1 from '../img/robert.jpeg';
import manag_photo2 from '../img/bryan.jpg';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';

const About = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
  return (
    <>
   <InnerHeader />
   <InnerHeaderBanner name={"About Us"} img = {abtHeader}/>

     <main id="main">   
      <section id="about" className="about">
         <div className="container" data-aos="fade-up">
            <div className="section-header">
               <h2>Building Products that Empower Founders and Inspire Growth</h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
               <div className="col-lg-6">
                  <img src={about_img} className="img-fluid" alt="Helping Clients achieve their Vision" title="Helping Clients achieve their Vision" />
               </div>
               <div className="col-lg-6">
                  <p> We started our journey with a simple belief that every great product begins with an idea, and every idea deserves the right technology to bring it to life. Since our inception, we have worked hand in hand with founders and startups to turn their visions into scalable, high-performing digital products that make a real impact.</p>
                  <p> Our team was built on collaboration, transparency, and innovation. We exist to empower our clients by engineering solutions that not only meet their needs but also exceed expectations through creativity, precision, and a relentless focus on quality.</p>
                  <p> Over the years, we have partnered with businesses across HealthCare, AI and ML, E-Commerce and Retail, and SaaS, helping them launch faster, grow smarter, and scale confidently. What started as a small group of passionate developers has now evolved into a global team delivering products that shape the future of technology-driven startups.</p>
                  <p>We continue to push boundaries by embracing emerging technologies, refining our processes, and maintaining a deep commitment to excellence. Our goal is to build lasting relationships with founders who share our passion for innovation and impact.</p>
               </div>
            </div>
         </div>
      </section>
    
      <div id="vision" className="vision aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="row gy-4">
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Vision</h4>
                              <p>To become a globally recognized technology partner for startups, empowering founders to build world-class digital products that drive innovation, growth, and impact.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Mission</h4>
                              <p>To help startups and founders transform ideas into successful, scalable products by combining technical expertise, creative design, and a deep understanding of business goals.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title">Our Values</h4>
                              <p> We value innovation, integrity, and collaboration. Our culture is built on trust and creativity, driving us to solve real problems and deliver meaningful technology.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
            </div>
         </div>
      </div>
  
      <section id="management" className="management light-bg aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="section-header">
               <h2>Our Team</h2>
               <p>We are a diverse group of developers, designers, and strategists united by a shared passion for building exceptional products. Our team combines technical expertise with creative problem-solving to deliver solutions that help startups grow, scale, and succeed.</p>
            </div>
            <div className="row member d-flex align-items-center ">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo1} className="img-fluid" alt=""/></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>Robert C</h4>
                     <span>Co-Founder & Director</span>
                     <p>Robert is a visionary Technocrat with 10 Years of experience and has worked with consulting majors & service industries in the field of IT technologies. His specialization includes Networking, Securities, System Architecture, Data base and Enterprise solutions .</p>
                     <div className="social">
                     <Link to="/"><i className="bi bi-envelope-fill"></i></Link>
                     <Link to ="/"> <i className="bi bi-linkedin"></i> </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row member d-flex align-items-center mt-4">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo2} className="img-fluid" alt="" /></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>Bryan W </h4>
                     <span>Co-Founder & Director</span>
                     <p>Bryan is a visionary and entrepreneur in his own right. He has worked with IT and Engineering majors before entering the telecom business. He has over 14 years of management experience with IT & Engineering majors and has significant global experience and also an expert in corporate alliance. </p>
                     <div className="social">
                     <Link to="/"><i className="bi bi-envelope-fill"></i></Link>
                     <Link to ="/"> <i className="bi bi-linkedin"></i> </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   
   </main>
   <Footer/>
    
    </>
  )
}

export default About