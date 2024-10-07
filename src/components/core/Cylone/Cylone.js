import React from "react";
import "./Cylone.css";

const Cylone = () => {
  return (
    <>
      <div className="image-container">
        <img className="picture" src="/Banner/Cyclone.png" alt="Cyclone illustration" /> 
        <div className="text-overlay">
          <h1 style={{ fontSize: "120px", marginLeft: "10%" }}>CYCLONE</h1>
          <button>
            <span>EXPLORE</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cylone;