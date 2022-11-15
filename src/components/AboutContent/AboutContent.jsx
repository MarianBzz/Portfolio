import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/aboutporf.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="titulos">
          <div
            className="firsttitle"
            data-aos="flip-up"
            data-aos-duration="1500"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-easing="ease-out-cubic"
          >
            <h1>Who Am I?</h1>
            <p
              style={{
                marginBottom: "12rem",
              }}
            >
              Im Mariano Bozzoletti, Full Stack Developer with FrontEnd
              orientation focused on developing creative user experiences,
              paying special attention to details
            </p>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration="1500"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-easing="ease-out-cubic"
          >
            <h1>My Stack:</h1>
            <p>
              JavaScript | React | React Native | Redux | Node Js | Express |
              PostgreSQL | HTML | CSS | GitHub | Jira
            </p>
          </div>
        </div>
      </div>
      <div className="btnabout">
        {/* <a
          data-aos="flip-left"
          data-aos-duration="1000"
          className="btn"
          target="_blank"
          href="https://www.dropbox.com/s/2adabgdyz86iniz/CV%20-%20Mariano%20Bozzoletti.pdf?dl=0"
        >
          CV
        </a> */}
        <a
          data-aos="flip-right"
          data-aos-duration="1000"
          className="btn"
          target="_blank"
          href="https://www.dropbox.com/s/5s5lgv8fr0pznhj/Resume%20-%20Mariano%20B.pdf?dl=0"
          style={{ marginTop: "3rem" }}
        >
          Resume
        </a>
        <Link to="/contact" style={{ marginTop: "3rem" }}>
          <button data-aos="flip-left" data-aos-duration="1000" className="btn">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
