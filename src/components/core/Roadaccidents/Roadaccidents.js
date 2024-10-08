import React from "react";
import "./Roadaccidents.css";

const Roadaccidents = () => {
  return (
    <>
      <div className="image-container">
        <img className="picture" src="/Banner/Roadaccident.webp" alt="Roadaccidents illustration" /> 
        <div className="text-overlay">
        <h1 style={{ fontSize: "120px", marginLeft: "25%" }}>ROADACCIDENTS</h1>
                  <button>
            <span>EXPLORE</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Roadaccidents;