import React from "react";
import cube from '../Images/cube33d 1.png';
import '../component/logo.css';
import { NavLink } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo">

      <div className="mohana-mantra">
        <span className="mohana">MOHANA</span>
        <span> MANTRA</span>
      </div>
      <img className="cube33d-1-icon" alt="" src={cube} />
      <div className="bottom-item">
      <div className="celebration-of-talentsalutati-container">
        <p className="celebration-of-talentsalutati">
          CELEBRATION OF TALENT, SALUTATION
        </p>
        <p className="celebration-of-talentsalutati">TO ART AND FUN.</p>
      </div>
     <div className="bottom-item-button">
      
      <NavLink to="/proshow" className="pro-shows rectangle-div hoverable">
            PROSHOWS
          </NavLink>
      <NavLink to="/events" className="events1 rectangle-div hoverable">
            EVENTS
          </NavLink>
          <NavLink to="/reg" className="register rectangle-div hoverable">
            REGISTER!
          </NavLink>
      </div>
      <div className="scroll-to-view">scroll to view more!</div>
      
      </div>
      

       
    </div>
  );
};

export default Logo;
