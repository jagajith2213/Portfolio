import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Form from "../Components/Form";

const Contact: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading={"Contact Me"} text={"Feel free to reach out!"}/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default Contact;
