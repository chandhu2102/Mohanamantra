import React, { useState, useEffect } from 'react';
import '../component/loading.css'; // You can define your styles in a separate CSS file
import earth from '../Images/earth__.svg';
function Loading() {
    const [rotationAngle, setRotationAngle] = useState(0);
    const [loadingProgress, setLoadingProgress] = useState(2); // Start at 2%
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Increment loading progress by 1 every 100 milliseconds
        setLoadingProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress >= 100) {
            clearInterval(interval); // Stop the progress when it reaches 100%
          }
          return newProgress;
        });
      }, 20); // Adjust the interval time for desired speed
  
      return () => clearInterval(interval); // Cleanup the interval when unmounting
    }, []);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Increment the rotation angle by a small value (e.g., 1 degree)
        setRotationAngle((angle) => (angle + 1) % 360);
      }, 25); // Adjust the interval as needed for the desired rotation speed
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return (
      <div className="loading-container">
        <img
          src={earth} // Replace with the path to your Earth.svg file
          alt="Rotating Earth"
          className="rotating-earth"
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        />
        <div className="loading-text">LOADING {loadingProgress}%</div>
        
      </div>
    );
  }
  

export default Loading;
