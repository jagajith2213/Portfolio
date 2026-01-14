import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [clicked, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleColorChange = () => {
    if (window.scrollY >=1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll",handleColorChange)
  const handleClick = () => setClick(!clicked);

  return (
    <div className={color ? "header header-bg" : "header p-4"}>
      <Link to="/"><h1>Portfolio</h1></Link>
      <div className="hamburger" onClick={handleClick}>
        {clicked ? (<FaTimes size={20} style=
          {{ color: "white" }} />) : (
          <FaBars size={20} style=
            {{ color: "white" }} />)}
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
