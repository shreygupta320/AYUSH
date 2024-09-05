import React from "react";
import "./Homepage.css";
import doctorimage from ".//Assets/HERBAL.png";
const Homepage = () => {
  return (
    <div className="home">
      <div className="left-space">
        <div className="left-space-description">
          <h1 className="left-space-h1">Experience Herbs Like Never Before</h1>
          <h3 className="left-space-h3">
            Join us in exploring the wonders of medicinal plants with our
            Virtual Herbal Garden! Discover interactive 3D models, detailed
            plant information, and immersive virtual tours that bring
            traditional healing knowledge to your fingertips
          </h3>
        </div>
        <button className="left-space-findbtn">Find</button>
      </div>
      <div className="right-space">
        <img src={doctorimage} className="doctor-image" alt="laoding..." />
      </div>
    </div>
  );
};

export default Homepage;
