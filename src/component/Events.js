import './Events.css';
import cube from '../Images/dj-dj-svgrepo-com 1.svg';
import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import work from "../Images/Training for cloud.jpg";
import flash from "../Images/flash1.png";
import spot from  "../Images/spotevent.jpg";
import tech from  "../Images/Technical-Skills_How-to-Them-Master-in-2022-760x506.jpg.webp";
import kala from  "../Images/YDY_D.avif";
import { NavLink } from 'react-router-dom';
import arrow from "../proshowcardImage/arrow.svg";
import cubeleft from "../Images/cube33d 1 proshows.png";
const Event = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardsData = [
    {
      image: kala,
      title: 'KALAKSHERTRA',
    },
    {
      image: spot,
      title: 'SPOT EVENT',
    },
    {
      image: tech,
      title: 'TECHNOHOLIC',
    },
    {
        image: work,
        title: 'WORKSHOPS',
      },
      {
        image: flash,
        title: 'FLASHMOB',
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
      <div className="proshow-event">
        <img src={cubeleft} alt="" className='cubeleftevent' />
        <div className="eventhead">
          
            <div className='event-heading-4'><img src={cube} alt="" className="mainsvg" /><span>EVENT</span></div>
        <div className="middle-proshows">
          
          <button className="card-arrow left-arrow" onClick={() => setCurrentCard((prevCard) => (prevCard === 0 ? cardsData.length - 1 : prevCard - 1))}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {displayedCards.map((card, index) => (
            <div key={index} className={`card-event ${index === 1 ? 'active' : ''}`}>
              <img className="card-example-4jpeg-icon-event" alt="" src={card.image} />
              <div className="divflex-event">
                <div className="heading-4-event">{card.title}</div>
              </div>
            </div>
          ))}
          <button className="card-arrow right-arrow" onClick={() => setCurrentCard((prevCard) => (prevCard === cardsData.length - 1 ? 0 : prevCard + 1))}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="register-div-event">
        <div className="events-child">
        <NavLink to="/events" className="register-event hoverable">
            GO TO EVENTS
          </NavLink>

        </div>
      </div>
      </div>
      </div>
    );
  };
  
  export default Event;
  