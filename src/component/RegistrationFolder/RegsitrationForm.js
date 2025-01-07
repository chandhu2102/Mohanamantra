import React, { useEffect, useState } from "react";
import { auth, googleProvider, database } from "./Firebase";
import "../RegistrationFolder/RegistrationForm.css";
import NavigationComponent from "../NavBar";
import post from "../../GalleryImage/g11.jpeg";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import CustomCursor from "../customCursor";
import Footer from "../Footer";
import login from "../RegistrationFolder/dashboardAssests/log-in-04.png";
import logout from "../RegistrationFolder/dashboardAssests/log-out-04.png";
import earth from "../../Images/earth.svg";
import leftArrow from "../../Images/Circle_Carret_Right.png";
import mm from "../../Images/mm'23_inv.png";
function Regform() {
  const [user, setUser] = useState(null);
  
  const [isPassBought, setIsPassBought] = useState(false); // State variable to track pass purchase
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateSelection = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedDates((prevDates) => [...prevDates, value]);
    } else {
      setSelectedDates((prevDates) =>
        prevDates.filter((date) => date !== value)
      );
    }
  };

  const calculateTotalCost = () => {
    const passCost = 100; // Cost for the 3-day pass
    const accommodationCostPerDay = 300;
    const totalCost = passCost + selectedDates.length * accommodationCostPerDay;
    return totalCost;
  };
  const initPayment = (
    data,
    price,
    name,
    mail,
    userId,
    displayName,
    userPic,
    mob
  ) => {
    const user = auth.currentUser;
    const options = {
      key: "rzp_live_JXXvFjARDIcDEl",
      amount: data.amount,
      currency: data.currency,
      name: data.name,
      description: "Mohana Mantra",
      order_id: data.id,
      handler: async (response) => {
        try {
          if (response.razorpay_payment_id) {
            // Payment successful, now verify the payment on the server
            const verifyPaymentUrl =
              "https://mm2k23-backend-70au.onrender.com/api/payment/verify"; // Replace with your server endpoint

            const verifyData = {
              razorpay_order_id: data.id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userEmail: mail,
              EventName: name,
              MMID: userId,
              userName: displayName,
              userpic: userPic,
            };

            const verifyResponse = await axios.post(
              verifyPaymentUrl,
              verifyData
            );

            if (verifyResponse.status === 200) {
              const user = auth.currentUser;
              if (user) {
                const userUid = user.uid;
                const userRef = database.ref(
                  `users/${user.email.replace(/\./g, ",")}`
                );

                const eventsSnapshot = await userRef
                  .child("pass")
                  .once("value");

                if (!eventsSnapshot.exists()) {
                  // Check if the user has passes
                  const passSnapshot = await userRef
                    .child("purchasedEvents")
                    .once("value");

                  if (!passSnapshot.exists()) {
                    // No purchased events or passes exist, update the userId
                    generateFormattedId().then((formattedId) => {
                      userRef.update({ userId: formattedId });
                    });
                  } else {
                    // Handle the case where a pass exists
                  }
                } else {
                  // Handle the case where purchased events exist
                }
                const istOffsetMinutes = 330; // 5 hours and 30 minutes offset
                const currentDateIST = new Date(
                  Date.now() + istOffsetMinutes * 60 * 1000
                );

                const eventData = {
                  eventName: name,
                  eventPrice: price,
                  purchaseDate: currentDateIST.toISOString(),
                  razorpayPaymentId: response.razorpay_payment_id,
                  // Add other event-related data here if needed
                };

                // Generate a unique payment ID
                const paymentId = userRef.child("pass").push().key;
                eventData.paymentId = paymentId;

                await userRef.child("pass").child(name).set(eventData);
                if (selectedDates.length > 0) {
                  await userRef
                    .child("pass")
                    .child("3-DAY PASS")
                    .child("AccomodationDates")
                    .set(selectedDates);
                }

                toast.success(
                  "Payment successful: " + response.razorpay_payment_id
                );
                const userIdSnapshotNew = await userRef
                  .child("userId")
                  .once("value");
                const userIdNew = userIdSnapshotNew.val();
                const sendMailUrl =
                  "https://mm2k23-backend-70au.onrender.com/api/payment/send-email"; // Replace with your "send-mail" API endpoint

                const emailData = {
                  razorpay_payment_id: response.razorpay_payment_id,
                  userEmail: mail,
                  EventName: name,
                  MMID: userIdNew,
                  userName: displayName,
                  userpic: user.photoURL,
                };

                const sendMailResponse = await axios.post(
                  sendMailUrl,
                  emailData
                );
                if (sendMailResponse.status === 300) {
                  toast.success(
                    "Payment successful: " + response.razorpay_payment_id
                  );
                } else {
                  toast.error("Email sending failed.");
                }
              } else {
                toast.success("Payment successful, but user is not signed in.");
              }
            } else {
              // Payment verification failed
              toast.error("Payment verification failed.");
            }
          } else {
            // Payment failed or was canceled
            toast.error("Payment failed or was canceled.");
          }
        } catch (error) {
          toast.error(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
      prefill: {
        name: displayName, // Prepopulate with user's display name
        email: mail, // Prepopulate with user's email
        contact: mob,
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async (price, name) => {
    const user = auth.currentUser;
    const totalCost = calculateTotalCost();
    if (!user) {
      toast.warning("Please sign in.");
      return;
    }

    try {
      const userUid = user.uid;
      const userRef = database.ref(`users/${user.email.replace(/\./g, ",")}`);

      // Check if the user has already purchased the eventy
      const snapshot = await userRef
        .child("pass")
        .orderByChild("eventName")
        .equalTo(name)
        .once("value");

      if (snapshot.exists()) {
        toast.success("You have already purchased this event.");
        return;
      }

      const orderUrl =
        "https://mm2k23-backend-70au.onrender.com/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: price });

      const userNameSnapshot = await userRef.child("displayName").once("value");
      const displayName = userNameSnapshot.val();
      const userIdSnapshot = await userRef.child("userId").once("value");
      const userId = userIdSnapshot.val();
      const userPicSnapshot = await userRef.child("photoURL").once("value");
      const userPic = userPicSnapshot.val();
      const userdetailsSnapshot = await userRef
        .child("userInfo")
        .child("name")
        .once("value");
      const mob = userdetailsSnapshot.val();
      initPayment(
        data.data,
        totalCost,
        name,
        user.email,
        userId,
        displayName,
        userPic,
        mob
      );

      // Store the payment information in Firebase
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);

        const userRef = database.ref(`users/${user.email.replace(/\./g, ",")}`);

        userRef.once("value", (snapshot) => {
          if (!snapshot.exists()) {
            userRef.set({
              displayName: user.displayName,
              email: user.email,
              uuid: user.uid, // Update the "uuid" field with the user's UID
              photoURL: user.photoURL,
            });
          } else {
            // User exists, update "uuid" if necessary
            const userData = snapshot.val();
            if (!userData.uuid) {
              userRef.update({ uuid: user.uid });
            }
          }
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  {
    /*const generateNewUserId = async () => {
    const usersRef = database.ref("users");
    const snapshot = await usersRef.once("value");
    const userCount = snapshot.numChildren();
    const newUserId = `MM2K23-${padWithZeros(userCount + 1, 5)}`;
    return newUserId;
  };
*/
  }

  function generateFormattedId() {
    return database
      .ref("counters/uniqueIdCounter")
      .transaction(function (currentValue) {
        // Increment the counter
        return (currentValue || 0) + 1;
      })
      .then(function (transactionResult) {
        if (transactionResult.committed) {
          const incrementedValue = transactionResult.snapshot.val();
          const formattedId = `MMREF-${String(incrementedValue).padStart(
            5,
            "0"
          )}`;
          return formattedId;
        } else {
          // Handle the case where the transaction was not committed (concurrency issue)
          toast.warning("Try Again");
          return null;
        }
      });
  }

  const padWithZeros = (number, width) => {
    const numberString = number.toString();
    const zerosToAdd = width - numberString.length;
    return zerosToAdd > 0
      ? "0".repeat(zerosToAdd) + numberString
      : numberString;
  };

  const [purchasedEvents, setPurchasedEvents] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [totalEvents, setTotalEvents] = useState(0);

  useEffect(() => {
    // Add an auth state change listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserLoggedIn(true);

        const userUid = user.uid;
        const userRef = database.ref(
          `users/${user.email.replace(/\./g, ",")}/purchasedEvents`
        );

        userRef.on("value", (snapshot) => {
          const events = [];
          snapshot.forEach((childSnapshot) => {
            const event = childSnapshot.val();
            events.push(event);
          });
          setPurchasedEvents(events);
        });
        const totalEventsRef = database.ref("totalEvents");
        totalEventsRef.once("value", (snapshot) => {
          const total = snapshot.val();
          setTotalEvents(total);
        });
      } else {
        setUserLoggedIn(false);
        setPurchasedEvents([]); // Clear purchased events when the user logs out
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const progress = (purchasedEvents.length / 50) * 100;

  const circumference = 2 * Math.PI * 45;

  // Calculate the actual dash array and offset
  const dashArray = (progress / 100) * circumference;
  const dashOffset = circumference - dashArray;
  const [showModal, setShowModal] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    phoneNumber: "",
    collegeName: "",
  });

  useEffect(() => {
    // Function to check if the user has purchased the event
    const checkPassStatus = async () => {
      if (!user) {
        return; // Handle the case when user is not logged in
      }

      const userRef = database.ref(`users/${user.email.replace(/\./g, ",")}`);

      // Check if the user has already purchased the event

      try {
        const snapshot = await userRef
          .child("pass")

          .once("value");

        if (snapshot.exists()) {
          setIsPassBought(true);
        } else {
          setIsPassBought(false);
        }
      } catch (error) {
        console.error("Error checking pass status:", error);
      }
    };

    checkPassStatus(); // Call the function to check pass status when the component mounts
  }, [user]);

  const handleSubmitnew = async (event) => {
    event.preventDefault();

    try {
      // Check if the user's information is already saved
      const user = auth.currentUser;

      if (user) {
        const userRef = database.ref(`users/${user.email.replace(/\./g, ",")}`);

        const userDataSnapshot = await userRef.child("userInfo").once("value");
        const userData = userDataSnapshot.val();

        if (userData) {
          // User's information already exists
          toast.info("Your details are already saved.");

          // Assuming you want to display the user's name in the .name section
          const nameElement = document.querySelector(".greybox");
          if (nameElement) {
            nameElement.textContent = userData.name; // Update the text content with the user's name
          }
        } else {
          // User's information doesn't exist, save it

          const userData = {
            name: formData.name,
            phoneNumber: formData.phoneNumber,
            gender: formData.gender,
            collegeName: formData.collegeName,
          };

          await userRef.child("userInfo").set(userData);

          // Display a success message
          toast.success("Your details have been saved.");

          // Update the .name section with the user's name
          const nameElement = document.querySelector(".greybox");
          if (nameElement) {
            nameElement.textContent = userData.name; // Update the text content with the user's name
          }
        }
      }
    } catch (error) {
      toast.error("Error while saving user information: " + error.message);
    }
  };

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="main-login">
        <NavigationComponent />
        <CustomCursor />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          zIndex={10}
        />
        <div className="main-item-reg">
          <div className="left-dash">
            <div className="text-dash">
              <div className="left-arrow-dash">
                <img src={leftArrow} alt="" />
                <div className="one-text">FACEBOOK</div>
              </div>
              <div className="left-arrow-dash">
                <img src={leftArrow} alt="" />
                <div className="one-text">INSTAGRAM</div>
              </div>
              <div className="left-arrow-dash">
                <img src={leftArrow} alt="" />
                <div className="one-text">LINKEDIN</div>
              </div>
              <div className="left-arrow-dash">
                <img src={leftArrow} alt="" />
                <div className="one-text">TWITTER</div>
              </div>
            </div>
            <img src={earth} alt="sphere image" className="earth-dash" />
          </div>
          <div className="alignright">
            <div className="middle">
              <div className="middle-upper">
                <div className="main-sqaure">
                  <div className="header">
                    <div className="circle"></div>
                    <div className="email">Name</div>
                    <div className="phonenumber">phone number</div>
                    <div className="buttons-row">
                      <button
                        className="button"
                        onClick={() =>
                          handlePayment(calculateTotalCost(), "3-DAY PASS")
                        }
                      >
                        Buy a Pass
                      </button>

                      <NavLink exact to="/proshow" className="button">
                        Proshows
                      </NavLink>
                    </div>
                    <div className="loginout">
                      <button
                        className="logout-button"
                        onClick={signInWithGoogle}
                      >
                        log in <img src={login} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="main-sqaure">
                  <div className="header">
                    <img src={mm} className="mm" />

                    <div className="buttons-row">
                      <button
                        className="button"
                        onClick={() =>
                          handlePayment(calculateTotalCost(), "3-DAY PASS")
                        }
                      >
                        Buy a Pass
                      </button>

                      <NavLink exact to="/proshow" className="button">
                        Proshows
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sche">
                  <h1>SCHEDULE</h1>
                <a
                          className="reg-form-1"
              href={"https://docs.google.com/spreadsheets/d/1bVcp6eGQwwg3LCTyXosQbLgSr3pY6OOq6huboRTesFc/edit?usp=sharing"

            }
              download={"https://docs.google.com/spreadsheets/d/1bVcp6eGQwwg3LCTyXosQbLgSr3pY6OOq6huboRTesFc/edit?usp=sharing"

            }
            >
            DAY-1 (19-10-2023)
            </a>
            
            </div>
              <div className="purchased-events-container">
                
                {userLoggedIn ? (
                  purchasedEvents.length === 0 ? (
                    <div>
                      <h2>Your Purchased Events</h2>
                      <p className="no-events-message">
                        You haven't purchased any events yet.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <ul className="purchased-events-list">
                        <li className="purchased-event-item header-row">
                          <p className="event-details-1">Event Name</p>
                          <p className="event-details-1">Payment ID</p>
                        </li>
                        {purchasedEvents.map((event, index) => (
                          <li key={index} className="purchased-event-item">
                            <p className="event-details-1">{event.eventName}</p>
                            <p className="event-details-1">
                              {event.razorpayPaymentId}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                ) : (
                  <div>
                    <h1 style={{ fontSize: "3rem", color: "black" }}>
                      Please Sign In
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="ticket-body__footer">
            <div></div>
            <div className="sign-in">
              {user ? (
                <div className="header">
                  <div
                    className="circle"
                    style={{
                      backgroundSize: "contain",
                      backgroundImage: `url(${user ? user.photoURL : ""})`,
                    }}
                  ></div>
                  <div className="email">
                    {user ? user.displayName : "Name"}
                  </div>

                  <div className="buttons-row">
                    {!showForm ? (
                      <button
                        className="rectangle-div-btn-signin"
                        onClick={openForm}
                      >
                        Buy a Pass
                      </button>
                    ) : (
                      <div className="formpop">
                        <div className="insideform">
                          <button className="close-button" onClick={closeForm}>
                            X
                          </button>
                          <h1 className="selectedProshow">3-DAY PASS</h1>
                          <form onSubmit={handleSubmitnew} className="formreg">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Full Name"
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="form-group">
                              <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                required
                              >
                                <option value="">Select Gender</option>{" "}
                                {/* Include this default option */}
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="collegeName"
                                placeholder="College Name"
                                value={formData.collegeName}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="accomodationClass">
                              <p>Need Accommodation?</p>
                              <div className="innerAccmodationClass">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="accommodationDates"
                                    value="19-Oct"
                                    checked={selectedDates.includes("19-Oct")}
                                    onChange={handleDateSelection}
                                    className="circular-checkbox"
                                    style={{
                                      appearance: "none",
                                      display: "flex",
                                      borderRadius: "100%",
                                      padding: "8px",
                                      width: "0px",
                                      marginBottom: "10px",
                                    }}
                                  />
                                  19-Oct
                                </label>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="accommodationDates"
                                    value="20-Oct"
                                    checked={selectedDates.includes("20-Oct")}
                                    onChange={handleDateSelection}
                                    className="circular-checkbox"
                                    style={{
                                      appearance: "none",
                                      display: "flex",
                                      borderRadius: "100%",
                                      padding: "8px",
                                      width: "0px",
                                      marginBottom: "10px",
                                    }}
                                  />
                                  20-Oct
                                </label>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="accommodationDates"
                                    value="21-Oct"
                                    checked={selectedDates.includes("21-Oct")}
                                    onChange={handleDateSelection}
                                    className="circular-checkbox"
                                    style={{
                                      appearance: "none",
                                      display: "flex",
                                      borderRadius: "100%",
                                      padding: "8px",
                                      width: "0px",
                                      marginBottom: "10px",
                                    }}
                                  />
                                  21-Oct
                                </label>
                              </div>
                            </div>
                            <div className="button-down">
                              <button
                                className="button-form"
                                onClick={() =>
                                  handlePayment(
                                    calculateTotalCost(),
                                    "3-DAY PASS"
                                  )
                                }
                              >
                                Buy Pass
                              </button>
                              <button
                                className="button-form"
                                onClick={closeForm}
                              >
                                Cancel
                              </button>
                            </div>
                            <div className="notetag">
                              <p>
                                Accommodation price:-{" "}
                                <span className="pricetag">₹300/- per Day</span>
                              </p>
                              <p>
                                3-DAY PASS:-{" "}
                                <span className="pricetag">₹100/-</span>
                              </p>
                              <b>YOU HAVE TO DEPOSIT ₹200/- AS SECURITY FEES</b>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                    <NavLink exact to="/proshow" className="button">
                      Proshows
                    </NavLink>
                  </div>
                  <div className="loginout">
                    <button className="logout-button" onClick={signOut}>
                      Logout <img src={logout} />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="main-sqaure">
                    <div className="header">
                      <div className="circle"></div>
                      <div className="email">Name</div>
                      <div className="phonenumber">phone number</div>
                      <div className="buttons-row">
                        <button
                          className="button"
                          onClick={() =>
                            handlePayment(calculateTotalCost(), "3-DAY PASS")
                          }
                        >
                          Buy a Pass
                        </button>

                        <NavLink exact to="/proshow" className="button">
                          Proshows
                        </NavLink>
                      </div>
                      <div className="loginout">
                        <button
                          className="logout-button"
                          onClick={signInWithGoogle}
                        >
                          log in <img src={login} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="pro-bar-main">
              <div className="rec-bar">
                <p className="pro-bar-main-p">Activity</p>
                <div className="progress-bar">
                  <svg width="180" height="180" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#ccc"
                      strokeWidth="10"
                    />

                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="red"
                      strokeWidth="10"
                      strokeDasharray={`${circumference}`}
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)" // Start from the top (-90 degrees)
                      style={{
                        strokeDasharray: `${circumference}`,
                        strokeDashoffset: `${circumference - dashArray}`,
                      }}
                    />

                    <text
                      x="50"
                      y="50"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {`${Math.round(progress)}%`}
                    </text>
                  </svg>
                  <div className="purchased">
                    <div className="pur">
                      <div className="redrec"></div>
                      <p className="purtext">Participated</p>
                    </div>
                    <div className="notpur">
                      <div className="greenrec"></div>
                      <p className="purtext">Yet to Participated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Regform;
