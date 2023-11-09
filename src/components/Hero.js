import React from "react";
import gridCollage from "../images/photo-grid.png";

export default function Hero() {
  return (
    <div>
      <div className="photo-grid">
        <img src={gridCollage} alt="photo-grid" />
      </div>
      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interaction activities led by one of-a-kind hosts-all
          without leaving home
        </p>
      </div>
    </div>
  );
}
