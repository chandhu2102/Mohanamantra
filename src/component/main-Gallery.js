import React from 'react';
import '../component/main-Gallery.css';
import NavigationComponent from "../component/NavBar";
import img1 from '..//GalleryImage/g1.JPG';
import img2 from '../GalleryImage/g2.JPG';
import img3 from '../GalleryImage/g3.JPG';
import img4 from '../GalleryImage/g4.JPG';
import img5 from '../GalleryImage/g5.JPG';
import img6 from '../GalleryImage/g6.JPG';
import img7 from '../GalleryImage/g7.JPG';
import img8 from '../GalleryImage/g8.JPG';
import img9 from '../GalleryImage/g9.JPG';
import img10 from '../GalleryImage/g10.JPG';
import img11 from '../GalleryImage/g11.jpeg';
import img12 from '../GalleryImage/g12.jpeg';
import Footer from '../component/Footer';

const Gallery = () => {
  return (
    <>
<div className="main-grid">
<NavigationComponent />
    <div className="grid-container">
    
      <div>
        <img className='grid-item grid-item-1' src={img1} alt='' />
    
      </div>
      <div>
        <img className='grid-item grid-item-2' src={img2} alt='' />
     
      </div>
      <div>
        <img className='grid-item grid-item-3' src={img3} alt='' />
     
      </div>
      <div>
        <img className='grid-item grid-item-4' src={img4} alt='' />
      
      </div>
      <div>
        <img className='grid-item grid-item-5' src={img5} alt='' />
      
      </div>
      <div>
        <img className='grid-item grid-item-6' src={img6} alt='' />
     
      </div>
      <div>
        <img className='grid-item grid-item-7' src={img7} alt='' />
    
      </div>
      <div>
        <img className='grid-item grid-item-10' src={img11} alt='' />
       
      </div>
      <div>
        <img className='grid-item grid-item-10' src={img12} alt='' />
       
      </div>
      <div>
        <img className='grid-item grid-item-8' src={img8} alt='' />
    
      </div>
      <div>
        <img className='grid-item grid-item-9' src={img9} alt='' />
   
      </div>
      <div>
        <img className='grid-item grid-item-10' src={img10} alt='' />
       
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Gallery;