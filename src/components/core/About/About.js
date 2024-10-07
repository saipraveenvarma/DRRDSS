import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [scrolling, setScrolling] = useState(false); // State to control scroll animation

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and set scrolling state
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the event listener on unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'auto', // Allow scrolling if content overflows
    backgroundColor: 'black', // Set background color to black
    display: 'flex', // Use flexbox for layout
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center', // Center items horizontally
  };

  const headerStyle = {
    position: 'absolute',
    top: '20px',
    color: 'white', // Set text color to white
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '150px', // Increased font size
    textTransform: 'uppercase', // Make text uppercase
  };

  const contentStyle = {
    display: 'flex', // Use flexbox for side-by-side layout
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    width: '100%', // Full width
    marginTop: '20%',
    // padding: '0 20%', // Padding for side spacing
  };

  const imageStyle = {
    width: '40rem', // Set image width
    height: 'auto', // Maintain aspect ratio
    marginRight: '100px', // Increased space between image and text
  };

  const rightTextStyle = {
    color: 'white', // Set text color to white
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '10px', // Adjust font size as needed
    textTransform: 'uppercase', // Make text uppercase
    textAlign: 'left', // Align text to the left
  };

  const fullScreenDivStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh', // Occupies full height of the viewport
    backgroundColor: 'black', // Set background color to black
    color: 'white', // Set text color to white
    display: 'flex', // Use flexbox for centering
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '36px', // Adjust font size as needed
    textTransform: 'uppercase', // Make text uppercase
  };

  const buttonStyle = {
    position: 'absolute',
    top: '15px',
    left: '10px',
    zIndex: 1000,
    background: 'none', // No background box
    border: 'none', // No border
    color: 'white', // Change button text color to white
    fontSize: '16px', // Font size
    cursor: 'pointer',
  };

  const downArrowStyle = {
    position: 'absolute',
    bottom: '20px', // Position above the bottom edge
    left: '50%', // Center horizontally
    transform: 'translateX(-50%)', // Adjust to center
    color: 'white', // Color of the arrow
    fontSize: '24px', // Adjust size as needed
  };

  return (
    <>
      <div style={containerStyle}>
        {/* Header with DRRDSS text */}
        <div style={headerStyle}>DRRDSS</div>

        {/* Content with image and additional text side by side */}
        <div style={contentStyle}>
          <img src="/map.webp" alt="Map" style={imageStyle} />
          <div style={rightTextStyle}>
            <h2>The Disaster Risk Reduction and Decision Support System (DRRDSS) is designed to enhance early warning capabilities and facilitate proactive disaster risk management activities. </h2>
          </div>
        </div>

        {/* Back Button */}
        <button onClick={() => navigate('/')} style={buttonStyle}>
          ← Back to Home
        </button>

        {/* Down Arrow */}
        <div style={downArrowStyle}>
          ↓ {/* You can replace this with an SVG or Font Awesome icon if preferred */}
        </div>
      </div>

      {/* New Full-Screen Themed Div */}
      {/* <div style={fullScreenDivStyle}>
        <h2>ADD TEXT</h2>
      </div> */}
    </>
  );
};

export default About;