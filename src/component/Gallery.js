import React, { useState, useEffect, useCallback } from "react";
import "../component/Gallery.css";
import larrow from "../Images/arrow-square-right.png";
import rarrow from "../Images/arrow-square-right.png";
import galleryImage1 from "../Gallery/1st.jpg";
import galleryImage2 from "../Gallery/2nd.jpg";
import galleryImage3 from "../Gallery/3rd.jpg";
import galleryImage4 from "../Gallery/4th.jpg";
import galleryImage5 from "../Gallery/5th.jpg";

const GALLERY = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("slide-in"); // Initialize with slide-in class

  const images = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
  ];

  const nextImage = useCallback(() => {
    setAnimationClass("slide-out");
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimationClass("slide-in");
    }, 500); // Delay the image change slightly to allow animation
  }, [setCurrentImageIndex, setAnimationClass, images.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [nextImage]);

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setAnimationClass("slide-out"); // Add slide-out class for smooth transition when going back
    setTimeout(() => {
      setAnimationClass("slide-in");
    }, 0); // Delay the slide-in class to make it smooth
  };

  return (
    <div className="gallery">
     
      <div className="gallery1">GALLERY</div>
      <div className="rectangle-div-gallery">
        <img
          className={`vuesaxlineararrow-square-rig-icon`}
          alt=""
          src={larrow}
          onClick={prevImage}
        />
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className={`gallery-image ${animationClass}`}
        />
        <img
          className={`vuesaxlineararrow-square-rig-icon1`}
          alt=""
          src={rarrow}
          onClick={nextImage}
        />
      </div>
    </div>
  );
};

export default GALLERY;
