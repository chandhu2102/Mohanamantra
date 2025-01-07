import React,{useState,useEffect} from 'react';
import '../component/Sponsors-copy.css';
import CustomCursor from './customCursor';
import NavigationComponent from './NavBar';
import Footer from './Footer';
import pic1 from '../Images/Spo1.jpg';
import pic2 from '../Images/Spo2.jpg';
import pic3 from '../Images/Spo3.jpg';
import pic4 from '../Images/Spo4.jpg';
import pic5 from '../Images/Spo5.jpg';
import pic6 from '../Images/Spo6.jpg';
import pic7 from '../Images/spo7.jpg';
import pic8 from '../Images/spo8.jpg';
import pic9 from '../Images/Spo20.jpg';
import pic10 from '../Images/spo10.jpg';
import pic11 from '../Images/spo11.png';
import pic12 from '../Images/Spo12.png';
import pic13 from '../Images/Spo13.png';
import pic14 from '../Images/Spo14.jpg';
import pic15 from '../Images/Spo15.jpg';
import pic16 from '../Images/Spo16.jpg';
import pic17 from '../Images/Spo17.jpg';
import pic18 from '../Images/Spo18.jpeg';
import pic19 from '../Images/Spo19.jpg';
import pic20 from '../Images/Spo20.jpg';
import pic21 from '../Images/Spo21.jpg';
import cube from "../Images/cube33d 1 new.png";
import earth from "../Images/earth.svg";
function Sponsors() {
  
  const [scrollY, setScrollY] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
   
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const newRotationAngle = (scrollY / 10) % 360;
    setRotationAngle(newRotationAngle);
  }, [scrollY]);

  return (
            <div className="mainsponnav">
              <NavigationComponent />
              <CustomCursor />
              <div className="sec-spon">
              <div className="left-spon">
                
                <div className="upper-spom">
                  <div className="upper-head">Sponsers</div>
                <div className='spon-desc'>
                Over the past years Mohana Mantra has had the privilege 
                to have hosted a number of sponsors which provided a very 
                entertaining experience to our visitors as well as the brand. 
                The crowd engagement, media exposure, sampling and brand building 
                opportunities offered at Mohana Mantra are unparalleled.
                </div>
                </div>
                <div className="bottom-spon">
                
                {viewportWidth >= 900 ? (
              <img
                src={earth}
                alt=""
                className="leftearth"
                style={{
                  transform: `translate(-25%, 105%) rotate(${rotationAngle}deg)`,
                  position: 'fixed',
                  display: 'flex',
                  justifyContent: 'center',
                  mixBlendMode: 'difference',
                  width: '20%',
                }}
              />
            ) : (
              <img src={earth} alt="" className="leftearth-mobile"
              style={{
                transform: `translate(-30%, 48%) rotate(${rotationAngle}deg)`,
                position: 'fixed',
                display: 'flex',
                justifyContent: 'center',
                mixBlendMode: 'difference',
                width: '50%',
                bottom : '0',
              }} />
            )}


      
                </div>
              </div>
              <div className="middle-spon">
              
              <div className="headmainspon">
  
  <div className="titlesponser">
  <div className="spontitle">Title Sponsor</div>
               <img src={pic13} alt="" />  
              </div>
              <div className="associatedsponsor">
              <div className="spontitle">Associate Sponsor</div>
              <div className="associatedsponsorupper">
              <img src={pic8} />  
              <img src={pic20} /> 
              </div>
              <div className="associatedsponsorbottom">
              <img src={pic6} />   
              <img src={pic2} />
              
              </div>
              <div className="bottomassociated">
              <img src={pic10} />
              </div>
              </div>
              <div className="overseaspat">
              <div className="spontitle">Overseas Partner</div>
              <div className="overseassponsor">
              <img src={pic4} />
              </div>
              </div>
              <div className="PrintingPartner">
              <div className="spontitle">Overseas Partner</div>
              <div className="PrintingPart">
              <img src={pic7} />
              </div>
              </div>
              <div className="PrintingPartner">
              <div className="spontitle">Hospitality Partner</div>
              <div className="HostalityPart">
              <img src={pic3} />
              </div>
              </div>

              <div className="PrintingPartner">
              <div className="spontitle">Cable Partner</div>
              <div className="HostalityPart">
              <img src={pic1} />
              </div>
              </div>

              <div className="PrintingPartner">
              <div className="spontitle">Booking Partner</div>
              <div className="HostalityPart">
              <img src={pic16} />
              </div>
              </div>

              <div className="PrintingPartner">
              <div className="spontitle">Food Partner</div>
              <div className="HostalityPart">
              <img src={pic11} />
              </div>
              </div>

              <div className="PrintingPartner">
              <div className="spontitle">Water Partner</div>
              <div className="HostalityPart">
              <img src={pic21} />
              </div>
              </div>
              

              <div className="PrintingPartner">
              <div className="spontitle">Ramp Walk Partner</div>
              <div className="HostalityPart">
              <img src={pic19} />
              </div>
              </div>

              <div className="PrintingPartner">
              <div className="spontitle">Outdoor Partner</div>
              <div className="HostalityPart">
              <img src={pic15} />
              </div>
              </div>


              <div className="PrintingPartner">
              <div className="spontitle">Others Partner</div>
              <div className="HostalityPart">
              <img src={pic5} />
              <img src={pic17} />
              
              </div>
              </div>


              </div>  
              </div>
             
              <div className="right-spon">
              <img src={cube} alt="" className='right-earth-spon' />
              </div>
              
            </div>
            <Footer />
            </div>
  );

}

export {Sponsors};


