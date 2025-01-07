import React, { useState, useEffect } from "react";
import "../component/proshowPopUp.css";
import img1 from "../proshowcardImage/1680671323173 (1).png";
import img2 from "../Gallery/DJ Paroma1136 1.png";
import img3 from "../proshowcardImage/photo1696617664.jpeg";
import NavigationComponent from "../component/NavBar";
import { auth, database } from "../component/RegistrationFolder/Firebase";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomCursor from "../component/customCursor";
import Footer from "../component/Footer";
import earth from "../Images/newone.png";
import img4 from "../Images/carexpo.jpeg";
import img5 from "../Images/ayejudenew.jpeg";
const proshowsData = [
  {
    img: img3,
    title1: "COMBO DEAL",
    date: "19 & 20-10-2023",
    title2: "BAND + DJ",
    time: "7:00 pm onwards",
    location: "SVIS GROUNDS,MBU",
    price: "500",
    discount: "1000",
  },
  {
    img: img4,
    title1: "-",
    title2: "Premium vehicle expo",
    date: "19-10-2023",
    time: "2:00 PM to 4:00 PM",
    location: "MBU",
    price: "300  &",
    discount: "500",
  },
  {
    img: img5,
    title2: "TALK SHOW",
    title1: "AYE JUDE",
    date: "20-10-2023",
    time: "2:30 PM to 3:30 PM",
    location: "DASARI AUDITORIUM",
    price: "200",
    discount: "400",
  },

  {
    img: img1,
    title1: "HEMACHANDRA",
    title2: "LIVE MUSIC BAND",
    date: "19-10-2023",
    time: "7:00 pm onwards",
    location: "SVIS GROUNDS,MBU",
    price: "300",
    discount: "500",
  },
  {
    img: img2,
    title1: "DJ PAROMA",
    title2: "DJ NIGHT",
    date: "20-10-2023",
    time: "7:00 pm onwards",
    location: "SVIS GROUNDS,MBU",
    price: "300",
    discount: "500",
  },
];

const ProShowPopUp = () => {
  //const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedProshow, setSelectedProshow] = useState(null);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    mob: "",
    collegeName: "",
    aadharNumber: "",
    dob: "", // Add dob field
  });

  const togglePopup = () => {
    // setPopupVisible(!isPopupVisible);
    setSelectedProshow(null); // Clear the selected proshow when closing the popup
    setRegistrationData({
      // Clear registration form data
      name: "",
      email: "",
      mob: "",
    });
  };

  const handleProshowSelect = (proshow) => {
    setSelectedProshow(proshow);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const [isFormValid, setIsFormValid] = useState(false);

  const showToast = (message, type = "success") => {
    toast[type](message);
  };

  const initPayment = async (
    data,
    price,
    name,
    mail,
    userId,
    displayName,
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
            // Payment successful, save the event data to Firebase
            const verifyPaymentUrl =
              "https://mm2k23-backend-70au.onrender.com/api/payment/verify";

            const verifyData = {
              razorpay_order_id: data.id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userEmail: mail,
              EventName: name,
              MMID: userId,
              userName: displayName,
            };

            const verifyResponse = await axios.post(
              verifyPaymentUrl,
              verifyData
            );

            if (verifyResponse.status === 200) {
              const user = auth.currentUser;
              if (user) {
                const userRef = database.ref(
                  `users/${user.email.replace(/\./g, ",")}`
                );

                const istOffsetMinutes = 330; // 5 hours and 30 minutes offset
                const currentDateIST = new Date(
                  Date.now() + istOffsetMinutes * 60 * 1000
                );
                const eventData = {
                  eventName: name,
                  eventPrice: price,
                  purchaseDate: currentDateIST.toISOString(),
                  razorpayPaymentId: response.razorpay_payment_id,
                  ...registrationData,
                };

                await userRef.child("proshows").child(name).set(eventData);
                showToast(
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
                showToast(
                  "Payment successful, but user is not signed in.",
                  "warning"
                );
              }
            } else {
              showToast("Payment verification failed.", "error");
            }
          } else {
            showToast("Payment failed or canceled.", "error");
          }
        } catch (error) {
          showToast(error, "error");
        }
      },
      theme: {
        color: "#3399cc",
      },
      prefill: {
        name: displayName,
        email: mail,
        contact: mob,
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", () => {
      showToast("Payment initialization failed.", "error");
    });
    rzp1.open();
  };

  useEffect(() => {
    // Check if all required fields are filled to enable the payment button
    const { name, email, mob, collegeName, dob } = registrationData;
    const isFormValid = name && email && mob && collegeName && dob;
    setIsFormValid(isFormValid);
  }, [registrationData]);

  const handlePayment = async () => {
    if (!isFormValid) {
      toast.warning("Please fill out all required fields.");
      return;
    }
    if (!selectedProshow) {
      showToast("Please select a proshow to register.", "warning");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        toast.warning("Please sign in.", "warning");
        return;
      }
      const userRef = database.ref(`users/${user.email.replace(/\./g, ",")}`);

      const eventSnapshot = await userRef
        .child("proshows")
        .orderByChild("eventName")
        .equalTo(selectedProshow.title2)
        .once("value");

      if (eventSnapshot.exists()) {
        toast.warning("You have already purchased this event.", "warning");
        return;
      }

      const eventSnapshotnew = await userRef
        .child("proshows")
        .orderByChild("BAND + DJ")
        .once("value");

      if (eventSnapshotnew.exists()) {
        toast.warning("You have already purchased both proshows", "warning");
        return;
      }

      const orderUrl =
        "https://mm2k23-backend-70au.onrender.com/api/payment/orders";
      const { data } = await axios.post(orderUrl, {
        amount: selectedProshow.price,
      });

      const userNameSnapshot = await userRef.child("displayName").once("value");
      const displayName = userNameSnapshot.val();
      const userIdSnapshot = await userRef.child("userId").once("value");
      const userId = userIdSnapshot.val();
      const userdetailsSnapshot = await userRef
        .child("userInfo")
        .child("name")
        .once("value");
      const mob = userdetailsSnapshot.val();

      initPayment(
        data.data,
        selectedProshow.price,
        selectedProshow.title2,
        user.email,
        userId,
        displayName,
        mob
      );
    } catch (error) {
      showToast("An error occurred during payment initialization.", "error");
    }
  };

  return (
    <>
      <div className="proshows-container">
        <ToastContainer />
        <NavigationComponent />
        <CustomCursor />

        <div className="card-grid1-container">
          {proshowsData.map((proshow, index) => (
            <div className="card" key={index}>
              <div className="titlename">
                <span className="card-title-show">{proshow.title2}</span>
                <span className="card-title1">{proshow.title1}</span>
              </div>
              <img src={proshow.img} alt="" className="card-image" />
              <div className="card-details">
                {proshow.date && (
                  <span className="card-title">
                    <span className="" aria-hidden="true">
                      {" "}
                      {proshow.date}
                    </span>
                  </span>
                )}
                {proshow.time && (
                  <span className="card-title">
                    <span aria-hidden="true"> {proshow.time}</span>
                  </span>
                )}
                {proshow.location && (
                  <span className="card-title">
                    <span className="uni" aria-hidden="true">
                      {" "}
                      {proshow.location}
                    </span>
                  </span>
                )}
              </div>
              <div className="movie__price">
                {proshow.title2 === "Premium vehicle expo" ? (
                  <>
                    <button className="eventreg-event">
                      On Spot at GATE-1
                    </button>
                    <span className="new">
                      ₹{proshow.price}{" "}
                      <span className="new">₹{proshow.discount}</span>
                    </span>
                  </>
                ) : proshow.title1 === "AYE JUDE" ? (
                  <>
                    <button className="eventreg-event">
                      On Spot at GATE-1
                    </button>

                    <span className="new">
                      ₹{proshow.price}{" "}
                      <span className="dis">₹{proshow.discount}</span>
                    </span>
                  </>
                ) : (
                  <>
                    <button className="eventreg-event">
                      On Spot at GATE-1
                    </button>
                    <span className="new">
                      ₹{proshow.price}{" "}
                      <span className="dis">₹{proshow.discount}</span>
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedProshow && (
          <div
            className={`registration-form-slide-in ${
              selectedProshow ? "show" : ""
            }`}
          >
            <div className="payment-form">
              <div className="button-close">
                <button
                  className="close-button"
                  onClick={() => {
                    togglePopup(); // Close the popup when the close button is clicked
                  }}
                >
                  X
                </button>
                <h2 className="selectedProshow">
                  Payment for {selectedProshow.title2}
                </h2>
              </div>
              <div className="scorllreg">
                <div className="registration-form-proshow">
                  <input
                    className="fullname"
                    type="text"
                    name="name"
                    placeholder="FullName*"
                    value={registrationData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={registrationData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="mob"
                    placeholder="Mobile Number*"
                    value={registrationData.mob}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="collegeName"
                    placeholder="College Name*"
                    value={registrationData.collegeName}
                    onChange={handleInputChange}
                    required
                  />

                  <input
                    type="text"
                    name="aadharNumber"
                    placeholder="Aadhar Number"
                    className="AN"
                    value={registrationData.aadharNumber}
                    onChange={handleInputChange}
                  />

                  <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth*"
                    value={registrationData.dob}
                    onChange={handleInputChange}
                    required
                  />

                  <div className="button-proshow">
                    <button className="eventreg-event">
                      Registration Closed
                    </button>
                    <button
                      className="close-button-down"
                      onClick={() => {
                        togglePopup(); // Close the popup when the close button is clicked
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default ProShowPopUp;
