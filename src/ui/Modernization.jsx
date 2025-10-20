import React from 'react'
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import abtHeader from '../img/about-header.jpg'
import AboutSection from '../components/services/modernization/AboutSection';
import Technologies from '../components/services/modernization/Technologies';

const Modernization = () => {

  return (
    <>
        <InnerHeader />
        <InnerHeaderBanner name={"Software Modernization"} img = {abtHeader}/>
        <main id="main">
            <AboutSection />
            <Technologies />
        </main>
        <Footer/>
    </>
  )
}

export default Modernization