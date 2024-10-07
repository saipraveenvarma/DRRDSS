import React, { useRef } from "react"; 
import Header from "../../components/Common/Header/Header";
import Banner from "../../components/core/Banner/Banner";
import Cylone from "../../components/core/Cylone/Cylone";
import Landslide from "../../components/core/Landslide/Landslide";

import "./Homepage.css";
import Earthquake from "../../components/core/Earthquake/Earthquake";

function Homepage() {
  const cyloneRef = useRef(null); // Create a ref for the Cylone component
  const landslideRef = useRef(null); // Create a ref for the Landslide component

  const handleCyloneClick = () => {
    if (cyloneRef.current) {
      cyloneRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to Cylone component
    }
  };

  const handleLandslideClick = () => {
    if (landslideRef.current) {
      landslideRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to Landslide component
    }
  };

  return (
    <div className="App">
      <Header 
        onCyloneClick={handleCyloneClick} 
        onLandslideClick={handleLandslideClick} // Pass the click handler for Landslide
      />
      <Banner />
      <div ref={cyloneRef}> {/* Attach the ref to a div that wraps the Cylone component */}
        <Cylone />
      </div>
      <div ref={landslideRef}> {/* Attach the ref to a div that wraps the Landslide component */}
        <Landslide />
      </div>
      <Earthquake />
    </div>
  );
}

export default Homepage;