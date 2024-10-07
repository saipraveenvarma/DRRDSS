import React from "react";
import "./Earthquake.css";

const Earthquake = () => {
  return (
    <>
      <div className="image-container">
        <img className="picture" src="/Banner/Earthquake.jpg" alt="Earthquake illustration" /> 
        <div className="text-overlay">
        <h1 style={{ fontSize: "120px", marginLeft: "20%" }}>EARTHQUAKE</h1>
                  <button>
            <span>EXPLORE</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Earthquake;