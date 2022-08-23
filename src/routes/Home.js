import React from "react";
import NavBar from "../components/NavBar/NavBar";
import HeroImg from "../components/HeroImg/HeroImg";
import Footer from "../components/Footer/Footer";
import Work from "../components/Work/Work.jsx";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
