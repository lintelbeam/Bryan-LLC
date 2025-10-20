import React from 'react'
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import abtHeader from '../img/about-header.jpg'
import AboutSection from '../components/services/development/AboutSection';
import Technologies from '../components/services/development/Technologies';

const Development = () => {

  return (
    <>
        <InnerHeader />
        <InnerHeaderBanner name={"Web & Mobile Development"} img = {abtHeader}/>
        <main id="main">
            <AboutSection />
            <Technologies />
        </main>
        <Footer/>
    </>
  )
}

export default Development