import React from "react";
import "./Cityfire.css";

const Cityfire = () => {
  return (
    <>
      <div className="image-container">
        <img className="picture" src="/Banner/cityfire.jpg" alt="Cityfire illustration" /> 
        <div className="text-overlay">
        <h1 style={{ fontSize: "120px", marginLeft: "20%" }}>CITYFIRE</h1>
                  <button>
            <span>EXPLORE</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cityfire;