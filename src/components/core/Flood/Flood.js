import React from "react";
import "./Flood.css";

const Flood = () => {
  return (
    <>
      <div className="image-container">
        <img className="picture" src="/Banner/flood1.jpg" alt="Flood illustration" /> 
        <div className="text-overlay">
        <h1 style={{ fontSize: "120px", marginLeft: "25%" }}>FLOOD</h1>
                  <button>
            <span>EXPLORE</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Flood;