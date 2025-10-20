import React from 'react'
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import abtHeader from '../img/about-header.jpg'
import AboutSection from '../components/services/consultation/AboutSection';
import Technologies from '../components/services/consultation/Technologies';

const Consultation = () => {

  return (
    <>
        <InnerHeader />
        <InnerHeaderBanner name={"Software Consultation"} img = {abtHeader}/>
        <main id="main">
            <AboutSection />
            <Technologies />
        </main>
        <Footer/>
    </>
  )
}

export default Consultation