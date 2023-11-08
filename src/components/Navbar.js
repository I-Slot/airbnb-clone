import React from "react";
import airbnbIdentity from "../images/airbnb-logo.png";
import gridCollage from "../images/photo-grid.png";

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={airbnbIdentity} alt="airbnb-identity" />
      </nav>
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
