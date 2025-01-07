import React, { useEffect, useState } from "react";
import { database, auth } from "./Firebase";
import '../RegistrationFolder/PurchasedEvents.css';

function PurchasedEvents() {
  const [purchasedEvents, setPurchasedEvents] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    // Add an auth state change listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserLoggedIn(true);

        const userUid = user.uid;
        const userRef = database.ref(`users/${user.email.replace(/\./g, ",")}/purchasedEvents`);
        
        userRef.on("value", (snapshot) => {
          const events = [];
          snapshot.forEach((childSnapshot) => {
            const event = childSnapshot.val();
            events.push(event);
          });
          setPurchasedEvents(events);
        });
      } else {
        setUserLoggedIn(false);
        setPurchasedEvents([]); // Clear purchased events when the user logs out
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <>
    <div><h5 className="myevent">My Events</h5></div>
    <div className="purchased-events-container">
      {userLoggedIn ? (
        purchasedEvents.length === 0 ? (
          <div>
            <h2>Your Purchased Events</h2>
            <p className="no-events-message">You haven't purchased any events yet.</p>
          </div>
        ) : (
          <div>
            
            <ul className="purchased-events-list">
              <li className="purchased-event-item header-row">
                <p className="event-details">Event Name</p>
                <p className="event-details">Payment ID</p>
                <p className="event-details">Date</p>
                <p className="event-details">Buy Pass</p>
              </li>
              {purchasedEvents.map((event, index) => (
                <li key={index} className="purchased-event-item">
                  <p className="event-details">{event.eventName}</p>
                  <p className="event-details">{event.razorpayPaymentId}</p>
                  <p className="event-details">13/08/2023</p>
                  <button className="get-pass-button">Get Your Pass</button>
                </li>
              ))}
            </ul>
          </div>
        )
      ) : (
        <div>
          <h1 className="pleaseSign">Please Sign In</h1>
        </div>
      )}
    </div>
    </>
  );
}

export default PurchasedEvents;
