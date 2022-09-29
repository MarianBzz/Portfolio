import "./FooterStyles.css";
import React from "react";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Córdoba, Argentina</p>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +54 3513611410
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              mbozzoletti@hotmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <a href="https://www.linkedin.com/in/mariano-bozzoletti/">
              <FaLinkedin
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a href="https://github.com/MarianBzz">
              <FaGithub
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            {/* <a href="https://www.instagram.com/marianobozzoletti/">
              <FaInstagram
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              /> */}
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
