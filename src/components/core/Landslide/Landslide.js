import React from "react";
import "./Landslide.css";

const Landslide = () => {
  return (
    <>
      <div className="image-container">
        <img className="picture" src="/Banner/Landslide.webp" alt="Landslide illustration" /> 
        <div className="text-overlay">
          <h1 style={{ fontSize: "120px", marginLeft: "20%"  }}>LANDSLIDE</h1>
          <button>
            <span>EXPLORE</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Landslide;