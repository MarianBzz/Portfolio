import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/aboutporf.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <div>
          <h1>Who Am I?</h1>
          <p style={{ marginBottom: "12rem" }}>
            Im Mariano Bozzoletti, FullStack Developer graduated of Henry
            Academy. I create Websites and Mobile Apps.
          </p>
        </div>
        <div>
          <h1>My Stack:</h1>
          <p className="stack">
            JavaScript | React | React Native | Redux | Node Js | Express |
            PostgreSQL | HTML | CSS | GitHub | Jira
          </p>
        </div>
      </div>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
    </div>
  );
};

export default AboutContent;
