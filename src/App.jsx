import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { lazy, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Preloader from "./layout/Preloader";
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // needed for Carousel
import 'react-modal-video/css/modal-video.css'
const Home = lazy(() => import("./ui/Home"));
const Career = lazy(() => import("./ui/Career"));
const Contact = lazy(() => import("./ui/Contact"));
const About = lazy(() => import("./ui/About"));
const Service = lazy(() => import("./ui/Service"));
const NoPage = lazy(() => import("./layout/NoPage"));
const Development = lazy(() => import("./ui/Development"));
const Modernization = lazy(() => import("./ui/Modernization"));
const Design = lazy(() => import("./ui/Design"));
const Consultation = lazy(() => import("./ui/Consultation"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={ <Preloader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Service />} />
            <Route path="careers" element={<Career />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="services/web-mobile-development" element={<Development/>} />   
            <Route path="services/modernization" element={<Modernization/>} />   
            <Route path="services/design" element={<Design/>} />   
            <Route path="services/consultation" element={<Consultation/>} />  
          </Routes>
        </Suspense>
      </Router> 
    </>
  );
}

export default App;
