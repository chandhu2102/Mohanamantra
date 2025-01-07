import React, { useEffect } from 'react';
import '../component/customCursor.css';
import debounce from 'lodash/debounce';

const CustomCursor = () => {
  useEffect(() => {
    const mainCircle = document.createElement('div');
    mainCircle.classList.add('circle-main');
    document.body.appendChild(mainCircle);

    const secondCircle = document.createElement('div');
    secondCircle.classList.add('second-circle');
    document.body.appendChild(secondCircle);

    const handleMouseMove = debounce((e) => {
      const x = e.clientX;
      const y = e.clientY;

      secondCircle.style.transform = `translate(${x}px, ${y}px)`;
      mainCircle.style.transform = `translate(${x}px, ${y}px)`;

      const hoverables = document.querySelectorAll('.hoverable');

      Array.from(hoverables).forEach((hoverEl) => {
        hoverEl.addEventListener('mouseover', () => {
          mainCircle.classList.add('circle-hide');
          secondCircle.classList.add('circle-scale');
        });
      });

      Array.from(hoverables).forEach((hoverEl) => {
        hoverEl.addEventListener('mouseout', () => {
          mainCircle.classList.remove('circle-hide');
          secondCircle.classList.remove('circle-scale');
        });
      });
    }, 0.1  ); // Adjust the debounce delay as needed (10ms here)

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove event listeners and elements when component unmounts
    return () => {
      document.body.removeChild(mainCircle);
      document.body.removeChild(secondCircle);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // Return null to render nothing for this component
};

export default CustomCursor;
