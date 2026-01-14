import React from "react";
import "./HomePage.css";
import image from "../assets/Image_1.jpg";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-image" src={image} alt="Intro-Image" />
        </div>
        <div className="content">
            <p>Hi, I am a Full Stack Developer</p>
            <br />
            <Link to="/projects" className="btn">Projects</Link>
            <Link to ="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  );
};

export default HomePage;
