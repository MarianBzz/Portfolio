import "./HeroImgStyles.css";
import React from "react";
import ImgIntro from "../../assets/intro-bg.jpg";
import ImgIntro2 from "../../assets/prueba1.jpg";
import ImgIntro3 from "../../assets/prueba2.jpg";
import ImgIntro4 from "../../assets/codevideo.mp4";

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <video
          className="into-img"
          src={ImgIntro4}
          alt={ImgIntro}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="content">
        <p>HI!👋 I AM </p>
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
