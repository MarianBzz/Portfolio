import "../WorkCard/WorkCardStyles.css";
import React from "react";
import pro1 from "../../assets/prueba3.jpg";
import { NavLink } from "react-router-dom";
import WorkCard from "../WorkCard/WorkCard";
import WorkCardData from "../WorkCardData/WorkCardData.jsx";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              src={val.src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
