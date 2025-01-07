import './App.css';
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import TheTeam1 from './component/Team';
import Loading from './component/Loading';
import NewEvent from './component/new-event-test';
import ProShowPopUp from './component/proshowPopup';
import PlaybookGallery from './component/HomeGallery';
import Gallery from './component/main-Gallery';
import Regform from './component/RegistrationFolder/RegsitrationForm';
import { Sponsors } from './component/Sponsors-copy';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 6 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after 6 seconds
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(loadingTimer);
  }, []);
  return (
    <>
      <Router>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} index={true} />
            <Route path="/HOME" element={<Home />} />
            <Route path="/warriors" element={<TheTeam1 />} />
            <Route path="/events" element={<NewEvent />} />
            <Route path="/reg" element={<Regform />} />
            <Route path="/proshow" element={<ProShowPopUp />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sponsors" element={<Sponsors />} />
            
          </Routes>
        </div>
      )}
      </Router>
    </>
  );
}

export default App;
