import React from "react";
import Navbar from "../Components/Navbar";
import HomePage from "../Components/HomePage";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";


const Home: React.FC = () => {
  
  return (
    <div>
      <Navbar />
      <HomePage />
      <ProjectCard/>
      <Footer />
    </div>
  );
};

  

export default Home;
