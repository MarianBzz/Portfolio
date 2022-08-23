import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImg2/HeroImg2";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="CONTACT." text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
