import React from "react";
import Navbar from "../../Components/Navbar";
import "../../Styles/dashboardpage.css";

function Dashboardpage() {
  return (
    <>
      <Navbar />
      <div className="db-container">
        <div className="rg-card">
          <h3>Register Yourself wiith PolygonID </h3>
          <button className="rg-btn">Register</button>
        </div>
      </div>
    </>
  );
}

export default Dashboardpage;
