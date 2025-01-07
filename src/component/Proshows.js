import React, { useState, useEffect } from 'react';
import './Proshows.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import hema from  "../Images/hemaband.jpeg";
import paroma from  "../Gallery/DJ Paroma1136 1.png";
import aye from  "../Images/aye.png";
import cube from "../Images/cube33d 1 proshows.png";
import pattern from "../proshowcardImage/Pattern.png";
import patternSmall from "../Images/Pattern-small.png";
const Proshows = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardsData = [
    {
      image: paroma,
      title: 'DJ NIGHT',
      name: 'DJ PAROMA',
    },
    {
      image: hema,
      title: 'DJ BAND',
      name: 'HEMACHANDRA',
    },
    {
      image: aye,
      title: 'TALK SHOW',
      name: 'AYE JUDE',
    },
    
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard === cardsData.length - 1 ? 0 : prevCard + 1));
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [cardsData.length]);

  const displayedCards = [
    cardsData[(currentCard - 1 + cardsData.length) % cardsData.length],
    cardsData[currentCard],
    cardsData[(currentCard + 1) % cardsData.length],
  ];





  
  return (
    <div className="proshow">
      <div className="prohead">
            <div className='proshow-heading-4'>PROSHOWS</div>
<img src={cube} alt="Cube" className='cube-proshow' />
      <div className="middle-proshow">
        <button className="card-arrow left-arrow" onClick={() => setCurrentCard((prevCard) => (prevCard === 0 ? cardsData.length - 1 : prevCard - 1))}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        
        {displayedCards.map((card, index) => (
          <div key={index} className={`card-proshow ${index === 1 ? 'active' : ''}`}>
            <img className="card-example-4jpeg-icon-proshow" alt="" src={card.image} />
            <div className="divflex-proshow">
              <div className="heading-4-proshow">{card.title}</div>
              <div className="proshow-title">{card.name}</div>

            </div>
          </div>
        ))}
        <button className="card-arrow right-arrow" onClick={() => setCurrentCard((prevCard) => (prevCard === cardsData.length - 1 ? 0 : prevCard + 1))}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
     
      </div>
      <img src={pattern} alt="" className='pattern-proshow'/>
    </div>
  );
};

export default Proshows;
