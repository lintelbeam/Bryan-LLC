import React from 'react'
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import abtHeader from '../img/about-header.jpg'
import AboutSection from '../components/services/design/AboutSection';
import Technologies from '../components/services/design/Technologies';

const Design = () => {

  return (
    <>
        <InnerHeader />
        <InnerHeaderBanner name={"Product & UI/UX Design"} img = {abtHeader}/>
        <main id="main">
            <AboutSection />
            <Technologies />
        </main>
        <Footer/>
    </>
  )
}

export default Design