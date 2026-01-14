import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ProjectCard from "../Components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div>   
  
      <Navbar/>
      <Hero heading="My Projects" text={"This project showcases innovative solutions and creative design."} />
      <ProjectCard/>
      <Footer/>
    </div>
  );
};

export default Projects;
