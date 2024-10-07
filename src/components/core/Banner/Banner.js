import React from "react";
import { Link } from "react-router-dom"; 
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="image-container">
        <video
          className="banner-video"
          src="/Banner/B.mp4"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay">
          <h1 style={{ fontSize: "120px" }}>DRR DSS</h1>

          <h1
            style={{
              fontSize: "20px",
              position: "relative",
              top: "-50px",
              left: "50px",
            }}
          >
            DISASTER RISK REDUCTION AND DECISION SUPPORT SYSTEM
            <br />
            TIMOR LESTE
          </h1>

          <Link to="/About">
            <button>
              <span>KNOW MORE</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;