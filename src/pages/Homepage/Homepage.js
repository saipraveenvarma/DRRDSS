import React, { useRef } from "react"; 
import Header from "../../components/Common/Header/Header";
import Banner from "../../components/core/Banner/Banner";
import Cylone from "../../components/core/Cylone/Cylone";
import Landslide from "../../components/core/Landslide/Landslide";
import Cityfire from "../../components/core/Cityfire/Cityfire";
import Roadaccidents from "../../components/core/Roadaccidents/Roadaccidents";
import Flood from "../../components/core/Flood/Flood";
import Earthquake from "../../components/core/Earthquake/Earthquake";

import "./Homepage.css";

function Homepage() {
  const cyloneRef = useRef(null);        // Ref for Cylone
  const landslideRef = useRef(null);     // Ref for Landslide
  const earthquakeRef = useRef(null);    // Ref for Earthquake
  const cityfireRef = useRef(null);      // Ref for Cityfire
  const roadaccidentsRef = useRef(null); // Ref for Roadaccidents
  const floodRef = useRef(null);         // Ref for Flood

  const handleCyloneClick = () => {
    if (cyloneRef.current) {
      cyloneRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLandslideClick = () => {
    if (landslideRef.current) {
      landslideRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEarthquakeClick = () => {
    if (earthquakeRef.current) {
      earthquakeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCityfireClick = () => {
    if (cityfireRef.current) {
      cityfireRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRoadaccidentsClick = () => {
    if (roadaccidentsRef.current) {
      roadaccidentsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFloodClick = () => {
    if (floodRef.current) {
      floodRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Header 
        onCyloneClick={handleCyloneClick} 
        onLandslideClick={handleLandslideClick} 
        onEarthquakeClick={handleEarthquakeClick}  
        onCityfireClick={handleCityfireClick}      
        onRoadaccidentsClick={handleRoadaccidentsClick} 
        onFloodClick={handleFloodClick}            
      />
      <Banner />
      <div ref={cyloneRef}>
        <Cylone />
      </div>
      <div ref={landslideRef}>
        <Landslide />
      </div>
      <div ref={earthquakeRef}>
        <Earthquake />
      </div>
      <div ref={cityfireRef}>
        <Cityfire />
      </div>
      <div ref={roadaccidentsRef}>
        <Roadaccidents />
      </div>
      <div ref={floodRef}>
        <Flood />
      </div>
    </div>
  );
}

export default Homepage;