import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import AboutContent from "../Components/AboutContent";

const About: React.FC = () => {
  
  return (
    <div>
      <Navbar/>
      <Hero heading={"About Me"} text={"I thrive on exploring new frameworks and bringing fresh ideas to every project I work on.."} />
      <AboutContent/>
      <Footer/>
    </div>
  );
};

export default About;
