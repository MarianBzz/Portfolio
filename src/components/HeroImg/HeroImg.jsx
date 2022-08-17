import "./HeroImgStyles.css";
import React from "react";
import ImgIntro from "../../assets/intro-bg.jpg";
import ImgIntro2 from "../../assets/prueba1.jpg";
import ImgIntro3 from "../../assets/prueba2.jpg";
import ImgIntro4 from "../../assets/prueba3.jpg";

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={ImgIntro2} alt={ImgIntro} />
      </div>
      <div className="content">
        <p>HI, I AM A FREELANCER.</p>
        <h1>FullStack Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
