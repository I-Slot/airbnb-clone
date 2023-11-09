import React from "react";
import airbnbIdentity from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={airbnbIdentity} alt="airbnb-identity" />
      </nav>
    </div>
  );
}
