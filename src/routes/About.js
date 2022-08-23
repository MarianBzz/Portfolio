import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImg2/HeroImg2";
import AboutContent from "../components/AboutContent/AboutContent";

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="ABOUT." text="I am a friendly FullStack Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
