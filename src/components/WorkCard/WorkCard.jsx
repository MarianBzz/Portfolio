import "./WorkCardStyles.css";
import React from "react";

const WorkCard = (props) => {
  console.log(props);
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="ImageProject" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.src} target="_blank" className="btn">
            Source
          </a>

          <a href={props.view} target="_blank" className="btn">
            Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;