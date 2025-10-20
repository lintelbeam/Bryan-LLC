import React from "react";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ClientList from "../components/ClientList";
import Facts from "../components/Facts";
import ServiceList from "../components/ServiceList";
import Revenue from "../components/Revenue";
import ReasonSection from "../components/ReasonList";

const Home = () => {
  return (
    <>
      <InnerHeader />
      <Carousel />
      <main id="main" style={{ paddingTop: '20px' }}>
        <ReasonSection/>
        <ServiceList/>
        {/* <ClientList/> */}
        <Facts/>
        <Revenue/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
