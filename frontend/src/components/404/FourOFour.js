import React from "react";
import { NavLink } from "react-router-dom";
import fourOFour from "../../images/404_page.png"
import "./fourOFour.css";

function FourOFour() {
  return (
    <main>
      <div className="page-not-found-container">
        <h1 className="page-not-found-title">Page Not Found!</h1>
        <img id="four-o-four-img" src={fourOFour} alt="404 Robot"></img>
        <NavLink to="/">
          <h3 className="page-not-found-home-link">Back Home</h3>
        </NavLink>
      </div>
    </main>
  );
}

export default FourOFour;