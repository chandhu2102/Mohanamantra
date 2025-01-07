import { useState, useEffect } from "react";

import "../component/new-event-test.css";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import cg from "../Images/cg.jpeg";
import cp from "../Images/cp.jpeg";
import foodChallenge from "../Images/food challenge.webp";
import lb from "../Images/liveBand.jpeg";
import vrexp from "../Images/VR.jpg";
import Footer from "./Footer";
import fp from "../Images/flag.jpeg";
import pubgshot from "../Images/pubgshot.jpeg";
import debug from "../Images/debug.jpeg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { auth, googleProvider, database } from "./RegistrationFolder/Firebase";
import CustomCursor from "../component/customCursor";
import earth from "../Images/earth.svg";
import adding from "../Images/add.svg";
import minus from "../Images/minus.svg";
import inno from "../Images/Problem Statements(innovatathon).docx";
import caedcom from "../Images/CAED COMBAT-1.docx";
import paper from "../Images/Paper Presentation Complete.docx";
import expo from "../Images/PROECT_EXPO complete.docx";
import circuit from "../Images/CIRCUIT TRACE.docx";
import advrides from "../Images/advridespic.jpeg";

const NewEvent = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [registrationData, setRegistrationData] = useState({
    members: [{}, {}], // Initialize with two empty member objects
  });

  const [memberCount, setMemberCount] = useState(0);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const newRotationAngle = (scrollY / 10) % 360;
    setRotationAngle(newRotationAngle);
  }, [scrollY]);

  const [showRulesFestVusta, setShowRulesFestVusta] = useState({});
  const [showRulesActomania, setShowRulesActomania] = useState({});
  const [showRulesSpeakmouth, setShowRulesSpeakmouth] = useState({});
  const [showRulesspecials, setShowRulesspecials] = useState({});
  const [showRulesArtBattle, setShowRulesArtBattle] = useState({});
  const [showRulesgameglider, setShowRulesgameglider] = useState({});

  const [showRulesspotevents, setShowRulesspotevents] = useState({});
  const [showRulestechnoholic, setShowRulestechnoholic] = useState({});
  const [showRulesworkshops, setShowRulesworkshops] = useState({});

  // For FestVusta event
  const toggleRulesVisibilityFestVista = (index) => {
    setShowRulesFestVusta({
      ...showRulesFestVusta,
      [index]: !showRulesFestVusta[index],
    });
  };

  // For Act-O-Mania event
  const toggleRulesVisibilityActomania = (index) => {
    setShowRulesActomania({
      ...showRulesActomania,
      [index]: !showRulesActomania[index],
    });
  };

  const toggleRulesVisibilitySpeakmouth = (index) => {
    setShowRulesSpeakmouth({
      ...showRulesSpeakmouth,
      [index]: !showRulesSpeakmouth[index],
    });
  };

  const toggleRulesVisibilityspecials = (index) => {
    setShowRulesspecials({
      ...showRulesspecials,
      [index]: !showRulesspecials[index],
    });
  };
  const toggleRulesVisibilityArtBattle = (index) => {
    setShowRulesArtBattle({
      ...showRulesArtBattle,
      [index]: !showRulesArtBattle[index],
    });
  };
  const toggleRulesVisibilitygameglider = (index) => {
    setShowRulesgameglider({
      ...showRulesgameglider,
      [index]: !showRulesgameglider[index],
    });
  };

  const toggleRulesVisibilityspotevents = (index) => {
    setShowRulesspotevents({
      ...showRulesspotevents,
      [index]: !showRulesspotevents[index],
    });
  };
  const toggleRulesVisibilitytechnoholic = (index) => {
    setShowRulestechnoholic({
      ...showRulestechnoholic,
      [index]: !showRulestechnoholic[index],
    });
  };
  const toggleRulesVisibilityworkshops = (index) => {
    setShowRulesworkshops({
      ...showRulesworkshops,
      [index]: !showRulesworkshops[index],
    });
  };

  const [showRules, setShowRules] = useState({});

  // Function to toggle the visibility of rules and regulations for an event
  const toggleRulesVisibility = (eventIndex) => {
    setShowRules((prevState) => {
      const updatedState = {};
      Object.keys(prevState).forEach((key) => {
        updatedState[key] = false; // Close all rules
      });
      updatedState[eventIndex] = !prevState[eventIndex]; // Toggle the clicked rule
      return updatedState;
    });
  };

  const handleMemberInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMembers = [...registrationData.members];
    updatedMembers[index][name] = value;
    setRegistrationData({
      ...registrationData,
      members: updatedMembers,
    });
  };

  const addMember = () => {
    if (memberCount < 10) {
      setMemberCount(memberCount + 1);
      setRegistrationData({
        ...registrationData,
        members: [...registrationData.members, {}], // Add an empty member object
      });
    }
  };

  const removeMember = (index) => {
    if (memberCount > 0) {
      setMemberCount(memberCount - 1);
      const updatedMembers = [...registrationData.members];
      updatedMembers.splice(index, 1); // Remove the member at the specified index
      setRegistrationData({
        ...registrationData,
        members: updatedMembers,
      });
    }
  };

  const initPayment = (
    data,
    price,
    name,
    mail,
    userId,
    displayName,
    mob,
    eventTitle
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
              "https://mm2k23-backend-70au.onrender.com/api/payment/verify"; // Replace with your server endpoint

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
                const userUid = user.uid;
                const userRef = database.ref(
                  `users/${user.email.replace(/\./g, ",")}`
                );
                const eventsSnapshot = await userRef
                  .child("purchasedEvents")
                  .once("value");

                if (!eventsSnapshot.exists()) {
                  // Check if the user has passes
                  const passSnapshot = await userRef
                    .child("pass")
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

                if (
                  name === "Nacho Dil Se(Group-max 10)" ||
                  name === "Digital Events(Team)"
                ) {
                  // Save teamDetails only for the specified event
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

                    // Add other event-related data here if needed
                  };
                  if (name === "Nacho Dil Se(Group-max 10)") {
                    await userRef
                      .child("purchasedEvents")
                      .child("Kalakshetra")
                      .child(name)
                      .set(eventData);
                  } else {
                    await userRef
                      .child("purchasedEvents")
                      .child("spotEvent")
                      .child(name)
                      .set(eventData);
                  }
                } else {
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

                  //await userRef.child("pass").child(name).set(eventData);
                  if (
                    eventTitle === "festvista" ||
                    eventTitle === "actomania" ||
                    eventTitle === "speakmouth" ||
                    eventTitle === "specials" ||
                    eventTitle === "artbattle" ||
                    eventTitle === "gameglider"
                  ) {
                    await userRef
                      .child("purchasedEvents")
                      .child("Kalakshetra")
                      .child(name)
                      .set(eventData);
                  } else if (eventTitle === "spotevent") {
                    await userRef
                      .child("purchasedEvents")
                      .child("spotEvent")
                      .child(name)
                      .set(eventData);
                  } else if (eventTitle === "work") {
                    await userRef
                      .child("purchasedEvents")
                      .child("workShop")
                      .child(name)
                      .set(eventData);
                  } else if (eventTitle === "technohol") {
                    await userRef
                      .child("purchasedEvents")
                      .child("Technoholic")
                      .child(name)
                      .set(eventData);
                  }
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
                toast.warning("Payment successful, but user is not signed in.");
              }
            } else {
              // Payment verification failed
              toast.error("Payment verification failed.");
            }
          } else {
            // Payment failed or was canceled
            toast.error("Payment failed or canceled.");
          }
        } catch (error) {
          toast.error(error);
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
    rzp1.open();
  };

  const handlePayment = async (price, name, eventTitle) => {
    const user = auth.currentUser;
    if (!user) {
      toast.warning("Please sign in.");
      return;
    }

    try {
      const userUid = user.uid;
      const userRef = database.ref(`users/${user.email.replace(/\./g, ",")}`);

      // Check if the user has purchased the 3-day pass
      /*const snapshot = await userRef
      .child("pass")
      .orderByChild("eventName")
      .equalTo("3-DAY PASS")
      .once("value");

    if (!snapshot.exists()) {
      toast.warning("You need to purchase the 3-DAY PASS first.");
      return;
    }
*/
      // Check if the user has already purchased the event
      if (
        eventTitle === "festvista" ||
        eventTitle === "actomania" ||
        eventTitle === "speakmouth" ||
        eventTitle === "specials" ||
        eventTitle === "artbattle" ||
        eventTitle === "gameglider"
      ) {
        const eventSnapshot = await userRef
          .child("purchasedEvents")
          .child("Kalakshetra")
          .orderByChild("eventName")
          .equalTo(name)
          .once("value");

        if (eventSnapshot.exists()) {
          toast.warning("You have already purchased this event.");
          return;
        }
      } else if (eventTitle === "spotevent") {
        const eventSnapshot = await userRef
          .child("purchasedEvents")
          .child("spotEvent")
          .orderByChild("eventName")
          .equalTo(name)
          .once("value");

        if (eventSnapshot.exists()) {
          toast.warning("You have already purchased this event.");
          return;
        }
      } else if (eventTitle === "work") {
        const purchasedEventsSnapshot = await userRef
          .child("purchasedEvents")
          .once("value");

        if (purchasedEventsSnapshot.hasChild("workShop")) {
          toast.warning("You can buy only one workshop.");
          return;
        }
      } else if (eventTitle === "technohol") {
        const eventSnapshot = await userRef
          .child("purchasedEvents")
          .child("Technoholic")
          .orderByChild("eventName")
          .equalTo(name)
          .once("value");

        if (eventSnapshot.exists()) {
          toast.warning("You have already purchased this event.");
          return;
        }
      }

      // If the user hasn't purchased the event and has the 3-DAY PASS, proceed with the purchase
      const orderUrl =
        "https://mm2k23-backend-70au.onrender.com/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: price });

      // Initialize and open the Razorpay payment dialog
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
        price,
        name,
        user.email,
        userId,
        displayName,
        mob,
        eventTitle
      );
    } catch (error) {
      console.log(error);
    }
  };

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

  const FestVista = [
    {
      profileImage: "https://wallpaperaccess.com/full/89624.jpg",
      username: "Nacho Dil Se (SOLO)",
      userHandle: "Masti Dance Competition!",
      price: 250,
      userrules: [
        "Total Acceptable entries are 50",
        "Track duration max limit : 3 min.",
        "Last date to submit track: 19.10.23 - 9:00 am.",
        "Participants should arrive at the venue on time.",
        "The Schedule of events will be shared on the website",
      ],
    },

    {
      profileImage: "https://wallpaperaccess.com/full/89624.jpg",
      username: "Nacho Dil Se(Group-max 10)",
      userHandle: "Masti Dance Competition!",
      price: 750,
      userrules: [
        "The total number of acceptable entries is 30",
        "Number of participants per team: 2-10.",
        "Track duration max limit: 5 min.",
        "Last date to submit track: 19.10.23 - 9:00 a.m.",
        "Participants should arrive at the venue on time.",
        "The schedule of events will be shared on the website",
      ],
    },

    {
      profileImage: "https://mcdn.wallpapersafari.com/medium/53/42/TM5I8G.jpg",
      username: "Sa Re Ga Ma Pa (SOLO)",
      userHandle: "Vocal Showdown!",
      price: 50,
      userrules: [
        "Total acceptable entries are 30",
        "Track duration Max Limit: 3 min.",
        "Last date to submit track: 19.10.23 – 9:00 am.",
        "Participants should arrive at the venue on time.",
        "The Schedule of events will be shared on the website",
      ],
    },
    {
      profileImage:
        "https://c0.wallpaperflare.com/preview/960/768/896/acoustic-acoustic-guitar-background-black-and-white.jpg",
      username: "Acoustic Arena(Single Instrument)",
      userHandle: "Acoustic Harmony!",
      price: 50,
      userrules: [
        "Total acceptable entries are 30",
        "Max limit:3min.",
        "Participants have to bring their own instruments.",
        "Participants can perform solo.",
        "Participants should arrive at the venue on time.",
        "The Schedule of events will be shared on the website",
      ],
    },
    {
      profileImage:
        "https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2021/07/indian-theatre-1200x900-1.jpg",
      username: "Theatre Arts (Regular or Pantomime)",
      userHandle: "Showcase acting prowess",
      price: 100,
      userrules: [
        "Total acceptable entries are 30",
        "Max limit:4min.",
        "Dialogues and music(optional) should be pre – recorded.",
        "Participants should Submit a single track to the coordinators by 19.10.23.",
        "Number of participants: 2 – 6.",
        "Participants should arrive at the venue on time.",
        "The Schedule of events will be shared on the website",
      ],
    },
  ];
  const actomania = [
    {
      profileImage:
        "https://assets.thehansindia.com/h-upload/2021/08/24/500x300_1103997-short-film-festival.webp",
      username: "Short film contest",
      userHandle: "Ignite your talent",
      price: 200,
      userrules: [
        "The short film duration should not be more than 10minutes",
        "Film makers must and should promote the sponsor provided in the poster which is available in the Instagram page of Mohana Mantra(mohana_mantra).Sponsor-(iin2dreams.com).",
        "Last Date of Registration 19-10-2023.",
        "All the short films shot should be uploaded through google form which will be sent to your mails in the drive link provided by Kalakshetra Team.",
      ],
    },
    {
      profileImage:
        "https://b2024606.smushcdn.com/2024606/wp-content/uploads/2022/01/MicrosoftTeams-image-4-1.jpg?lossy=1&strip=1&webp=1",
      username: "Story Telling",
      userHandle: "Expertise your narration",
      price: 50,
      userrules: [
        "Maximum duration – 8 min.",
        "Only one participant is allowed for the competition.",
      ],
    },
    {
      profileImage:
        "https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?w=740&t=st=1689957205~exp=1689957805~hmac=7bdb6fead1d98bbcd240f9ff8d58f487151d41dbe39f2d51842cf259cb960184",
      username: "Poetry Pros",
      userHandle: "Expressive Verse Showcase",
      price: 50,
      userrules: [
        "Maximum duration – 5 min.",
        "Participant should Submit the “theme” of your poem before the show.",
      ],
    },
    {
      profileImage:
        "https://i.pinimg.com/564x/18/83/aa/1883aa7c3c705fdc8a1e8caa2e185415.jpg",
      username: "Stand-up-comedy",
      userHandle: "Comic Brilliance On Stage",
      price: 50,
      userrules: [
        "Maximum duration – 5 min.",
        "Number of Participants: 1-2.",
        " Use of abusive words is prohibited.",
      ],
    },
    {
      profileImage:
        "https://w0.peakpx.com/wallpaper/908/109/HD-wallpaper-friends-mattew-perry-central-perk-lisa-krudow-nbc-rachel-green-courteney-cox-friendship-couch-chandler-bing-ross-geller-joey-tribbiani-classic-ny-jennifer-aniston-comedy-sitcom-matt-leblanc.jpg",
      username: "Sitcom",
      userHandle: "Comic Life Chronicles",
      price: 50,
      userrules: [
        "The situation will be given.",
        "The use of abusive words is prohibited.",
      ],
    },
    {
      profileImage:
        "https://i.pinimg.com/564x/c7/1e/b0/c71eb0b9f9940da41678e735964c7759.jpg",
      username: "Challenge a reel",
      userHandle: "Create an engaging short video",
      price: 50,
      userrules: [
        "Reels can be prepared with any theme of your choice",
        "Use of abusive words are prohibited, such identified reels will be disqualified",
        "Maximum duration for the reel 30seconds",
        "Reels should be uploaded in the drive link provided by Kalakshetra Team.",
      ],
    },
    {
      profileImage:
        "https://www.creducation.net/resources/perception_checking/HalfEmptycartoon.jpg",
      username: "Picture perception",
      userHandle: "Story Telling - Image Tales",
      price: 50,
      userrules: [
        " The Picture will be shown by the Organisers team.",
        "Time given:45 sec.",
        "Participant should find the theme in the picture.",
      ],
    },
    {
      profileImage:
        "https://www.meme-arsenal.com/memes/931a507e0f014eacf4a107c936ffea6c.jpg",
      username: "Meme Challenge",
      userHandle: "Create, Share, Laugh!",
      price: 50,
      userrules: [
        "The meme can be prepared with any theme of your choice",
        "The use of abusive words is prohibited. ",
        "The meme should be uploaded in the drive link provided by Kalakshetra Team.",
      ],
    },
  ];

  const speakmouth = [
    {
      profileImage:
        "https://media.istockphoto.com/id/486310559/photo/street-artist-performing.jpg?s=612x612&w=0&k=20&c=Uoxg7t0fufmWKpsG5HU4nOmzeAnzNYXELxw8uoWJb50=",
      username: "Mimicry",
      userHandle: "Voice of Stars",
      price: 30,
      userrules: [
        "Solo participation.",
        "Max duration: 5 min.",
        "Participants should Choose your own theme and perform.",
      ],
    },
    {
      profileImage:
        "https://whistlingwoodsinternational.files.wordpress.com/2014/04/dialogue1.jpg?w=300&h=300",
      username: "Dialogue war",
      userHandle: "Be a Dialogue King",
      price: 50,
      userrules: [
        "Duration: 1-5 min.",
        "Theme: Telugu films.",
        "Participants should Send your dialogue video clip to us prior to the competition.",
      ],
    },
    {
      profileImage:
        "https://homeless.hk/cdn/shop/products/cha_988f6378-b31e-451d-aa24-587580e45b3f_1200x.jpg?v=1643112257",
      username: "Dumb Charades",
      userHandle: "Act & Guess",
      price: 50,
      userrules: ["Team members: 3."],
    },
  ];
  const speacials = [
    {
      profileImage:
        "https://i.pinimg.com/564x/d1/22/dc/d122dc5a5090baab62f87627d6915ce3.jpg",
      username: "Ramp Walk",
      userHandle: "Compete for Mr. & Ms. MM",
      price: 250,
      userrules: [
        "Event will be in two stages",
        "At stage 1 a total of 100 entries are accepted later they will be scrutinized and will be shortlisted to 20",
        "The short listed candidates will be provided with makeup and dress courtesy.",
        "No vulgarity in dressing will be encouraged",
      ],
    },

    {
      profileImage: "https://i.ytimg.com/vi/4kcxOUZH6BI/maxresdefault.jpg",
      username: "Period Pain Simulator stall",
      userHandle: "Awareness for Men",
      price: 50,
      userrules: ["Rules"],
    },
    {
      profileImage: lb,
      username: "Live Music Band",
      userHandle: "At different Venues",
    },
  ];
  const artbattle = [
    {
      profileImage:
        "https://i.pinimg.com/564x/f7/9a/39/f79a3906e29b3cd9982080f9932ffe81.jpg",
      username: "Pencil Sketch",
      userHandle: "A Monochromatic Artistry",
      price: 50,
      userrules: [
        "Duration for this event is 1.5 hour(maximum).",
        "Participants can draw the sketch with their theme.",
        "Only pencils should be used (No colors).",
        "Participants should bring their own materials.",
      ],
    },
    {
      profileImage:
        "https://th.bing.com/th/id/OIP.aVq5o-oi_3Givp-ik_wBQgHaEo?pid=ImgDet&rs=1",
      username: "Rangoli",
      userHandle: "Indian festival floor art",
      price: 50,
      userrules: [
        "Duration for this event is 1 hour.",
        "Number of Team members :3-4.",
        "Participants should bring their own materials.",
        "Participants should not exceed the place given by us.",
      ],
    },
    {
      profileImage:
        "https://static.wixstatic.com/media/e58931_98ce183891194b318e701bb01303e09e~mv2.jpg/v1/fill/w_640,h_580,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e58931_98ce183891194b318e701bb01303e09e~mv2.jpg",
      username: "Face Paint",
      userHandle: "Expressing art on faces",
      price: 50,
      userrules: [
        "Duration for this event is 1 hour.",
        "Number of team members: 2.",
        "Participants have to bring their own materials required for the competiton.",
      ],
    },
    {
      profileImage:
        "https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      username: "Photography Contest",
      price: 50,
      userHandle: "Capture memories",
      userrules: [
        "Themes are Nature, Wildlife, Travel.",
        "Photos should be uploaded in the drive link provided by Kalakshetra Team.",
        "A detailed perceptive explanation is mandatory for the photo that is captured.",
        "No copyright issues.",
        "Solo participation - only 1 submission allowed",
      ],
    },

    {
      profileImage:
        "https://cdn0.weddingwire.in/articles/images/9/8/7/1/img_11789/full-hand-mehndi-designs-gallery-hennainspo-black.jpg",
      username: "Mehandi Competition",
      userHandle: "A Hand Art Competition",
      price: 50,
      userrules: [
        "Total time limit -45Min(maximum).",
        "Materials provided on spot.",
        "Number of team members: 2.",
      ],
    },
    {
      profileImage: cp,
      username: "Colour Paint",
      userHandle: "Chromatic art on paper",
      price: 50,
      userrules: [
        "Participants should choose their own theme.",
        "Paricipants should carry their own Art materials(Paints ,brushes etc).",
        "Canvas sheets provided on spot.",
      ],
    },

    {
      profileImage:
        "https://th.bing.com/th/id/OIP.MjKvb8GrQj4zpJc9_IUPtgHaE7?pid=ImgDet&rs=1",
      username: "Photography Workshop",
      userHandle: "Master Photography with Expert Guidance",
      price: 250,
      userrules: [
        "Attend the workshop with positive expectations.Arrive on time for the workshop.",
        "Mobile Phones are Mandatory",
        "Registration is mandatory to enter the event.",
        "Maintaining discipline at the venue highly appreciated",
        "Do not leave the workshop early. Stay around to wrap things up.",
      ],
    },
  ];

  const gameglider = [
    {
      profileImage:
        "https://e1.pxfuel.com/desktop-wallpaper/164/622/desktop-wallpaper-pubg-high-quality-resolution-on-pubg-season-5.jpg",
      username: "PubG War(SQUAD)",
      userHandle: "Load, Aim, Shoot",
      price: 200,
      userrules: [
        "One person can participate only one time in the tournament.",
        "Number of team members: 4.",
      ],
    },
    {
      profileImage:
        "https://assets-prd.ignimgs.com/2022/02/28/clash-of-clans-1646090932362.jpg",
      username: "Clash of Clans",
      userHandle: "Build and Clash for Victory",
      price: 250,
      userrules: ["Number of team members: 5."],
    },
    {
      profileImage:
        "https://assets-prd.ignimgs.com/2022/02/28/clash-of-clans-1646090932362.jpg",
      username: "Clash of Clans(solo)",
      userHandle: "Build and Clash for Victory",
      price: 50,
      userrules: ["Play solo"],
    },
    {
      profileImage:
        "https://images.hdqwalls.com/download/squid-game-red-light-green-light-4w-3840x2160.jpg",
      username: "move-in and Freeze exit",
      userHandle: "Fun Dance Freeze Game",
      price: 50,
      userrules: [
        "Surprise game will be conducted by Kalakshetra team.",
        "Team participants: 4-5.",
      ],
    },
    {
      profileImage:
        "https://png.pngtree.com/png-vector/20191022/ourmid/pngtree-man-set-vector-modern-gradient-colors-people-different-poses-business-character-png-image_1841893.jpg",
      username: "Pose a pic",
      userHandle: "Pic Poser ,Wins Prize",
      price: 50,
      userrules: ["Surprise game will be conducted by Kalakshetra team."],
    },
    {
      profileImage: "https://pbs.twimg.com/media/EVMSCjmWAAYXJGS.jpg",
      username: "Flip-Tik-Tac-Toe",
      userHandle: "Bottle flip and bingo",
      price: 50,
      userrules: ["Surprise game will be conducted by Kalakshetra team."],
    },
    {
      profileImage:
        "https://cdn.pixabay.com/photo/2019/05/13/20/38/team-4200837_640.jpg",
      username: "Team Building",
      userHandle: "4-player team game",
      price: 50,
      userrules: [
        "Surprise game will be conducted by Kalakshetra team.",
        "Team participants: 4-5.",
      ],
    },
    {
      profileImage: cg,
      username: "Communication Game",
      userHandle: "Game of words",
      price: 50,
      userrules: [
        "Surprise game will be conducted by Kalakshetra team.",
        "Team participants: 4-6.",
      ],
    },
  ];

  const spotevents = [
    {
      profileImage:
        "https://images.unsplash.com/photo-1624897174291-1bd715e371d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      username: "Gully Cricket",
      price: 300,
      userHandle: "Experience the adrenaline of cricket!",
      userrules: [
        "Five members will be in the team.",
        "Five overs for each team.",
        "Score is counted in the number of fours they gain.",
        "Equipment is provided by the college.",
      ],
    },
    {
      profileImage:
        "https://e1.pxfuel.com/desktop-wallpaper/999/22/desktop-wallpaper-hunting-the-digital-treasure-laxmena-medium-treasure-hunt.jpg",
      username: "Treasure Hunt",
      userHandle: "Explore the epic Treasure Hunt!",
      price: 500,
      userrules: [
        "Join us for our exciting Treasure Hunt event at our college Fest Mohana Mantra 2K23 to embark on an exhilarating adventure of discovery!",
        "Assemble your squad (2 to 5) or solo and search the campus for hidden prizes as you follow the clues.",
        "To find the ultimate prize, complete 5 levels by cracking codes, solving riddles, and competing against the clock (2 to 3 hours)",
        "Put your cunning to the test and take part in a thrilling adventure that you won't forget. Say no to smart gadgets.",
        "Participate in a treasure hunt that will never be forgotten and will test your intelligence and teamwork abilities.",
      ],
    },

    {
      profileImage:
        "https://www.techpocket.org/wp-content/uploads/2020/11/mobile-gaming.jpg",
      username: "Digital Events(Solo)",
      userHandle: "Online Mobile Gaming",
      price: 100,
      userrules: [
        "Solo and squad matches will be there.",
        "Participants can participate again and again but they have to pay the registration fee every time.",
        "Last-minute registration is also acceptable.",
        "Hackers will be banned.",
        "No gadgets will be provided only WIFI will be provided.",
      ],
    },
    {
      profileImage:
        "https://www.techpocket.org/wp-content/uploads/2020/11/mobile-gaming.jpg",
      username: "Digital Events(Team)",
      price: 200,
      userHandle: "Online Mobile Gaming",
      userrules: [
        "Solo and squad matches will be there.",
        "Participants can participate again and again but they have to pay the registration fee every time.",
        "Last-minute registration is also acceptable.",
        "Hackers will be banned.",
        "No gadgets will be provided only WIFI will be provided.",
      ],
    },

    {
      profileImage:
        "https://outwittrade.com/wp-content/uploads/2020/11/singing.jpg",
      username: "Song Dedication",
      userHandle: "Dedicate Personalized Song",
    },

    {
      profileImage:
        "https://e1.pxfuel.com/desktop-wallpaper/773/317/desktop-wallpaper-carnival.jpg",
      username: "Carnival",
      userHandle: "A world of whimsy and wonder",
    },

    {
      profileImage: foodChallenge,
      username: "Food Challenge",
      userHandle: "Eat, Win, Taste, Challenge, Enjoy",
    },
    {
      profileImage: advrides,
      username: "Adventure Rides",
      userHandle: "Columbus",
      userHandle: "Break Dance",
      userHandle: "Water Walk",
      userHandle: "Dragon Train",
    },

    {
      profileImage:
        "https://images.squarespace-cdn.com/content/v1/55e6a58fe4b0757bbd568371/1454526401975-282DZV0RIFL5V5QGNOL3/image-asset.jpeg?format=1000w",
      username: "Fun Games",
      userHandle: "Action-Packed Games & Friendly Competition",
    },

    {
      profileImage:
        "https://www.nicepng.com/png/detail/4-44391_merry-christmas-and-happy-holidays-lucky-draw-prizes.png",
      username: "Lucky Draw",
      userHandle: "Win Big, Get Lucky Now!",
    },

    {
      profileImage:
        "https://c4.wallpaperflare.com/wallpaper/201/630/421/armin-van-buuren-dj-trance-electronic-music-wallpaper-preview.jpg",
      username: "DJ House",
      userHandle: "Experience Pulsating Beats and Vibrant Lights",
    },
    {
      profileImage:
        "https://image.puls24.at/images/hera_dyn_1536w_864h/671017/show-your-talent.jpg",
      username: "Talent Exhibition",
      userHandle: "Witness the extraordinary talent",
    },

    {
      profileImage:
        "https://images.thdstatic.com/productImages/160a5e4a-c33d-44d7-9dfa-2e4b223e321b/svn/multi-colored-texas-recreation-pool-toys-21065-64_1000.jpg",
      username: "Ring Toss",
      userHandle: "Test your aim and precision!",
    },

    {
      profileImage: fp,
      username: "Flag Plotting",
      userHandle: "Sharpen your navigation skills!",
    },
    {
      profileImage: vrexp,
      username: "VR Experience",
      userHandle: "Immerse yourself",
    },
  ];

  const workshops = [
    {
      profileImage:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*NbBM5j_6A0ycnYSw.jpg",

      username: "AI Fusion: ChatGPT and Data Science Synergy",
      userHandle: "Gain AI chatbot skills",
      price: 300,
      userrules: [
        "Total no.of acceptable entries are 120",
        "Registration: Participants need to register for workshops in advance. This may involve providing personal information and paying any required fees.",
        "Attendance: Participants are expected to attend all sessions of the workshop. Some colleges have minimum attendance requirements.",
        " Punctuality: Being on time is important. Latecomers may not be allowed to enter once the workshop has started.",
        "Behavior: Participants are generally expected to behave professionally towards instructors and fellow participants.",
        "Materials: Participants may need to bring specific materials or equipment as specified by the workshop organizers.",
        "Academic Integrity: Plagiarism or cheating is typically not tolerated in workshop assignments or projects.",
        "Dress Code: Some workshops may have specific dress code requirements for safety or professionalism.",
        " Cell Phones and Electronic Devices: The use of cell phones and electronic devices may be restricted during workshop sessions",
        "Feedback: Participants are encouraged to provide feedback on the workshop.",
        " Code of Conduct: Colleges often have a code of conduct that applies to all students, which may also apply to workshop participants.",
        "Safety: Safety rules and guidelines are usually provided in place for workshops involving equipment or potentially hazardous activities.",
        " Cancellation and Refunds: Policies regarding workshop cancellation and refund of fees may be outlined.",
      ],
    },
    {
      profileImage:
        "https://t3.ftcdn.net/jpg/04/18/42/82/240_F_418428293_H0NFgRqeyslUykLMbewo4nD9mn0A8C9G.jpg",

      username: "Robotics with IoT",
      userHandle: "Explore Industry 4.0",
      price: 300,
      userrules: [
        "Total no.of acceptable entries are 120",
        "Registration: Participants need to register for workshops in advance. This may involve providing personal information and paying any required fees.",
        "Attendance: Participants are expected to attend all sessions of the workshop. Some colleges have minimum attendance requirements.",
        " Punctuality: Being on time is important. Latecomers may not be allowed to enter once the workshop has started.",
        "Behavior: Participants are generally expected to behave professionally towards instructors and fellow participants.",
        "Materials: Participants may need to bring specific materials or equipment as specified by the workshop organizers.",
        "Academic Integrity: Plagiarism or cheating is typically not tolerated in workshop assignments or projects.",
        "Dress Code: Some workshops may have specific dress code requirements for safety or professionalism.",
        " Cell Phones and Electronic Devices: The use of cell phones and electronic devices may be restricted during workshop sessions",
        "Feedback: Participants are encouraged to provide feedback on the workshop.",
        " Code of Conduct: Colleges often have a code of conduct that applies to all students, which may also apply to workshop participants.",
        "Safety: Safety rules and guidelines are usually provided in place for workshops involving equipment or potentially hazardous activities.",
        " Cancellation and Refunds: Policies regarding workshop cancellation and refund of fees may be outlined.",
      ],
    },

    {
      profileImage:
        "https://www.vlsi.fi/uploads/pics/VS1005G_QFN88_Perspective_Mid.jpg",
      username: "Integrated Circuits with VLSI",
      userHandle: "Delve into the fundamentals",
      price: 300,
      userrules: [
        "Total no.of acceptable entries are 120",
        "Registration: Participants need to register for workshops in advance. This may involve providing personal information and paying any required fees.",
        "Attendance: Participants are expected to attend all sessions of the workshop. Some colleges have minimum attendance requirements.",
        " Punctuality: Being on time is important. Latecomers may not be allowed to enter once the workshop has started.",
        "Behavior: Participants are generally expected to behave professionally towards instructors and fellow participants.",
        "Materials: Participants may need to bring specific materials or equipment as specified by the workshop organizers.",
        "Academic Integrity: Plagiarism or cheating is typically not tolerated in workshop assignments or projects.",
        "Dress Code: Some workshops may have specific dress code requirements for safety or professionalism.",
        " Cell Phones and Electronic Devices: The use of cell phones and electronic devices may be restricted during workshop sessions",
        "Feedback: Participants are encouraged to provide feedback on the workshop.",
        " Code of Conduct: Colleges often have a code of conduct that applies to all students, which may also apply to workshop participants.",
        "Safety: Safety rules and guidelines are usually provided in place for workshops involving equipment or potentially hazardous activities.",
        " Cancellation and Refunds: Policies regarding workshop cancellation and refund of fees may be outlined.",
      ],
    },
    {
      profileImage:
        "https://okcredit-blog-images-prod.storage.googleapis.com/2021/01/shutterstock_169512857-1.jpg",
      username: "Solar power Generation",
      userHandle: "Harness with hands-on experience",
      price: 300,
      userrules: [
        "Total no.of acceptable entries are 120",

        "Registration: Participants need to register for workshops in advance. This may involve providing personal information and paying any required fees.",
        "Attendance: Participants are expected to attend all sessions of the workshop. Some colleges have minimum attendance requirements.",
        " Punctuality: Being on time is important. Latecomers may not be allowed to enter once the workshop has started.",
        "Behavior: Participants are generally expected to behave professionally towards instructors and fellow participants.",
        "Materials: Participants may need to bring specific materials or equipment as specified by the workshop organizers.",
        "Academic Integrity: Plagiarism or cheating is typically not tolerated in workshop assignments or projects.",
        "Dress Code: Some workshops may have specific dress code requirements for safety or professionalism.",
        " Cell Phones and Electronic Devices: The use of cell phones and electronic devices may be restricted during workshop sessions",
        "Feedback: Participants are encouraged to provide feedback on the workshop.",
        " Code of Conduct: Colleges often have a code of conduct that applies to all students, which may also apply to workshop participants.",
        "Safety: Safety rules and guidelines are usually provided in place for workshops involving equipment or potentially hazardous activities.",
        " Cancellation and Refunds: Policies regarding workshop cancellation and refund of fees may be outlined.",
      ],
    },
    {
      profileImage:
        "https://d30i16bbj53pdg.cloudfront.net/wp-content/uploads/2021/02/ethical-hacking-web.jpeg",
      username: "Ethical Hacking",
      userHandle: "Hacker tools Showcase",
      price: 300,
      userrules: [
        "Total no.of acceptable entries are 120",
        "Registration: Participants need to register for workshops in advance. This may involve providing personal information and paying any required fees.",
        "Attendance: Participants are expected to attend all sessions of the workshop. Some colleges have minimum attendance requirements.",
        " Punctuality: Being on time is important. Latecomers may not be allowed to enter once the workshop has started.",
        "Behavior: Participants are generally expected to behave professionally towards instructors and fellow participants.",
        "Materials: Participants may need to bring specific materials or equipment as specified by the workshop organizers.",
        "Academic Integrity: Plagiarism or cheating is typically not tolerated in workshop assignments or projects.",
        "Dress Code: Some workshops may have specific dress code requirements for safety or professionalism.",
        " Cell Phones and Electronic Devices: The use of cell phones and electronic devices may be restricted during workshop sessions",
        "Feedback: Participants are encouraged to provide feedback on the workshop.",
        " Code of Conduct: Colleges often have a code of conduct that applies to all students, which may also apply to workshop participants.",
        "Safety: Safety rules and guidelines are usually provided in place for workshops involving equipment or potentially hazardous activities.",
        " Cancellation and Refunds: Policies regarding workshop cancellation and refund of fees may be outlined.",
      ],
    },
    {
      profileImage:
        "https://www.interestingfacts.org/wp-content/uploads/2019/12/3dprintingfacts.jpg",

      username: "3D Printing",
      userHandle: "Explore creative possibilities.",
      price: 300,
      userrules: [
        "Total no.of acceptable entries are 120",
        "Registration: Participants need to register for workshops in advance. This may involve providing personal information and paying any required fees.",
        "Attendance: Participants are expected to attend all sessions of the workshop. Some colleges have minimum attendance requirements.",
        " Punctuality: Being on time is important. Latecomers may not be allowed to enter once the workshop has started.",
        "Behavior: Participants are generally expected to behave professionally towards instructors and fellow participants.",
        "Materials: Participants may need to bring specific materials or equipment as specified by the workshop organizers.",
        "Academic Integrity: Plagiarism or cheating is typically not tolerated in workshop assignments or projects.",
        "Dress Code: Some workshops may have specific dress code requirements for safety or professionalism.",
        " Cell Phones and Electronic Devices: The use of cell phones and electronic devices may be restricted during workshop sessions",
        "Feedback: Participants are encouraged to provide feedback on the workshop.",
        " Code of Conduct: Colleges often have a code of conduct that applies to all students, which may also apply to workshop participants.",
        "Safety: Safety rules and guidelines are usually provided in place for workshops involving equipment or potentially hazardous activities.",
        " Cancellation and Refunds: Policies regarding workshop cancellation and refund of fees may be outlined.",
      ],
    },
    {
      profileImage:
        "https://th.bing.com/th/id/OIP.ZmaKa-Iq8zrMHtWJMAVvjAHaFj?pid=ImgDet&rs=1",

      username: "Electric Vehicle",
      userHandle: "Know the future of Sustainable Transportation.",

      price: 300,
      userrules: [
        "Total no.of acceptable entries are 120",
        "Registration: Participants need to register for workshops in advance. This may involve providing personal information and paying any required fees.",
        "Attendance: Participants are expected to attend all sessions of the workshop. Some colleges have minimum attendance requirements.",
        " Punctuality: Being on time is important. Latecomers may not be allowed to enter once the workshop has started.",
        "Behavior: Participants are generally expected to behave professionally towards instructors and fellow participants.",
        "Materials: Participants may need to bring specific materials or equipment as specified by the workshop organizers.",
        "Academic Integrity: Plagiarism or cheating is typically not tolerated in workshop assignments or projects.",
        "Dress Code: Some workshops may have specific dress code requirements for safety or professionalism.",
        " Cell Phones and Electronic Devices: The use of cell phones and electronic devices may be restricted during workshop sessions",
        "Feedback: Participants are encouraged to provide feedback on the workshop.",
        " Code of Conduct: Colleges often have a code of conduct that applies to all students, which may also apply to workshop participants.",
        "Safety: Safety rules and guidelines are usually provided in place for workshops involving equipment or potentially hazardous activities.",
        " Cancellation and Refunds: Policies regarding workshop cancellation and refund of fees may be outlined.",
      ],
    },
    {
      profileImage:
        "https://www.financialexpress.com/wp-content/uploads/2022/11/ISRO-1-1.jpg",
      username: " Progress in Indian Space Technology",
      userHandle: "Explore advancements",
      price: 300,
      userrules: [
        "Total no.of acceptable entries are 120",
        "Registration: Participants need to register for workshops in advance. This may involve providing personal information and paying any required fees.",
        "Attendance: Participants are expected to attend all sessions of the workshop. Some colleges have minimum attendance requirements.",
        " Punctuality: Being on time is important. Latecomers may not be allowed to enter once the workshop has started.",
        "Behavior: Participants are generally expected to behave professionally towards instructors and fellow participants.",
        "Materials: Participants may need to bring specific materials or equipment as specified by the workshop organizers.",
        "Academic Integrity: Plagiarism or cheating is typically not tolerated in workshop assignments or projects.",
        "Dress Code: Some workshops may have specific dress code requirements for safety or professionalism.",
        " Cell Phones and Electronic Devices: The use of cell phones and electronic devices may be restricted during workshop sessions",
        "Feedback: Participants are encouraged to provide feedback on the workshop.",
        " Code of Conduct: Colleges often have a code of conduct that applies to all students, which may also apply to workshop participants.",
        "Safety: Safety rules and guidelines are usually provided in place for workshops involving equipment or potentially hazardous activities.",
        " Cancellation and Refunds: Policies regarding workshop cancellation and refund of fees may be outlined.",
      ],
    },
    {
      profileImage:
        "https://www.archute.com/wp-content/uploads/2021/04/AdobeStock_100207259-1-2048x1458.jpeg",
      username: "Sustainable Building Construction",
      userHandle: "Efficient, Eco-Friendly",
      price: 300,
      userrules: [
        "Total no.of acceptable entries are 120",
        "Registration: Participants need to register for workshops in advance. This may involve providing personal information and paying any required fees.",
        "Attendance: Participants are expected to attend all sessions of the workshop. Some colleges have minimum attendance requirements.",
        " Punctuality: Being on time is important. Latecomers may not be allowed to enter once the workshop has started.",
        "Behavior: Participants are generally expected to behave professionally towards instructors and fellow participants.",
        "Materials: Participants may need to bring specific materials or equipment as specified by the workshop organizers.",
        "Academic Integrity: Plagiarism or cheating is typically not tolerated in workshop assignments or projects.",
        "Dress Code: Some workshops may have specific dress code requirements for safety or professionalism.",
        " Cell Phones and Electronic Devices: The use of cell phones and electronic devices may be restricted during workshop sessions",
        "Feedback: Participants are encouraged to provide feedback on the workshop.",
        " Code of Conduct: Colleges often have a code of conduct that applies to all students, which may also apply to workshop participants.",
        "Safety: Safety rules and guidelines are usually provided in place for workshops involving equipment or potentially hazardous activities.",
        " Cancellation and Refunds: Policies regarding workshop cancellation and refund of fees may be outlined.",
      ],
    },
    {
      profileImage:
        "https://th.bing.com/th/id/R.31b8e254f767a41716f19ca2f397e23b?rik=KewWvtVBf%2bYN%2bA&riu=http%3a%2f%2fwww.faralenz.in%2fwp-content%2fuploads%2f2018%2f07%2fsmart_ariculture.jpg&ehk=P0pDFcbo0MFlZfxumUJstDTt%2bN9ImO%2b6q1uzXoeUx%2bs%3d&risl=&pid=ImgRaw&r=0",
      username: "Smart Agriculture",
      userHandle: "Explore IoT and automation",
      price: 300,
      userrules: [
        "Total no.of acceptable entries are 120",
        "Registration: Participants need to register for workshops in advance. This may involve providing personal information and paying any required fees.",
        "Attendance: Participants are expected to attend all sessions of the workshop. Some colleges have minimum attendance requirements.",
        " Punctuality: Being on time is important. Latecomers may not be allowed to enter once the workshop has started.",
        "Behavior: Participants are generally expected to behave professionally towards instructors and fellow participants.",
        "Materials: Participants may need to bring specific materials or equipment as specified by the workshop organizers.",
        "Academic Integrity: Plagiarism or cheating is typically not tolerated in workshop assignments or projects.",
        "Dress Code: Some workshops may have specific dress code requirements for safety or professionalism.",
        " Cell Phones and Electronic Devices: The use of cell phones and electronic devices may be restricted during workshop sessions",
        "Feedback: Participants are encouraged to provide feedback on the workshop.",
        " Code of Conduct: Colleges often have a code of conduct that applies to all students, which may also apply to workshop participants.",
        "Safety: Safety rules and guidelines are usually provided in place for workshops involving equipment or potentially hazardous activities.",
        " Cancellation and Refunds: Policies regarding workshop cancellation and refund of fees may be outlined.",
      ],
    },
  ];
  const Technoholic = [
    {
      profileImage:
        "https://intertradeireland.com/assets/hero/_pageOverview/Hand-holding-lightbulb.png",
      username: "Innovatathon",
      userHandle: "A 48hrs coding challenge",
      price: 3000,
      docFile: inno,
      userrules: [
        "All participants must bring their college ID cards at the time of the event.",
        "Teams can consist of at least one team members to a maximum of five members.",
        "Participation teams can start working on their problem statements post the registration is completed and have to come in physical form and have to give their presentations on the Date informed to you by the event organizers.",
        "While coming please bring your own Requirements (like laptops, equipment related to your problem statements etc..,.).",
        "The organizing committee reserves the rights to change any or all of the above rules as they deem fit. Change in rules, if any will be highlighted on the website.",
        "The organizing committee reserves the rights to cancel the event when the participant count will less than 10 Teams and registration fee will be return on the spot by showing the team’s payment bill and correct ID proof’s.",
        "Certificate will be issued to participants who have registered to the event and presented the poster in the campus.",
        "Decision of the judges is final.",
      ],
    },
    {
      profileImage:
        "https://th.bing.com/th/id/OIP.WrY4fMSy8xDlDdjSnLjGqgHaD_?pid=ImgDet&rs=1",
      username: "MATLab",
      userHandle: "MATLAB Symposium: Innovation and Insights",
      price: 100,
      userrules: [
        "All participants must bring their college ID cards at the time of the event.",
        "Participants who solve the first round questions are eligible to play the second round and same again who solve the second round were eligible to the third round.",
        "Participants must follow the guidelines and protocols that are instructed by the organising committee.",
        "Any participant found to be indulging in any form of malpractice will be immediately disqualified.",
        "Participants will incur fines for any form of property damage.",
        "Decision of the judges is final.",
      ],
    },
    {
      profileImage:
        "https://i.pinimg.com/originals/be/44/21/be44214b7fd49325d5b529497bc9c396.jpg",
      username: "Circuit Trace",
      userHandle: "Mastering Circuits: A Technical Showcaset",
      price: 100,
      docFile: circuit,
      userrules: [
        "All participants must bring their college ID cards at the time of the event.",
        "Participants who solve the first round questions are eligible to play the second round and same again who solve the second round were eligible to the third round.",
        "Participants must follow the guidelines and protocols that are instructed by the organising committee.",
        "Any participant found to be indulging in any form of malpractice will be immediately disqualified.",
        "Participants will incur fines for any form of property damage.",
        "Decision of the judges is final.",
      ],
    },
    {
      profileImage:
        "https://th.bing.com/th/id/R.0634e2408bf2cd30859bfdac8dfc5ea5?rik=Mdjxf8Ba%2bDALIw&riu=http%3a%2f%2flockeys.in%2fproject-center-in-chennai%2fpaper-presentation-in-chennai.jpg&ehk=On54qCY5vM28p7C3s6X4RcIjqDwiZ9oAkHRy0wDyXig%3d&risl=&pid=ImgRaw&r=0",
      username: "Paper Presentation",
      domains: "CSE, ECE, Mech, Civil, Arts and Science, Pharmacy",
      docFile: paper,
      price: 300,
      userrules: [
        "All participants must bring their college ID cards at the time of the event.",
        "Participants must bring 3 hard copies of their main paper during day of event and also carry their soft copy in pendrives preferably. Carrying a backup of your soft copy is advised.",
        "The hard copy should be in IEEE format and should not exceed 15 pages.",
        "Certificate will be issued to participants who have registered to the event and presented the paper.",
        "The time limits are to be strictly followed which will be announced on the day of event.",
        "Decision of the judges is final.",
        "Criteria for selection of winners will be informed at the time of event.",
      ],
    },
    {
      profileImage: pubgshot,
      username: "Pubg Shot",
      userHandle: "Sure shot no doubt",
      price: 100,
      userrules: [
        "All participants must bring their college ID cards at the time of the event.",
        "Based on technical questions. Each right answer will be provided on chance to shoot the balloon.",
        "With in the given time you need to complete your task.",
        "If any violence takes place with the gun, strict actions will be taken.",
        "According to no. of balloon the participant shoot, winner will be declared.",
        "Solo participation.",
        "Rules can be changed at anytime by the management.",
      ],
    },

    {
      profileImage:
        "https://th.bing.com/th/id/OIP.wY9CgW1qOgi7qYoHsYf9mwHaEK?pid=ImgDet&rs=1",
      username: "Poster Presentation",
      price: 300,
      domains: "CSE, ECE, Mech, Civil, Arts and Science, Pharmacy",
      userrules: [
        "All participants must bring their college ID cards at the time of the event.",
        "The title must be prominently clear and to the point. The complete title of abstract should be Times New Roman font using bold face.",
        "The Mohanamantra2k23 logo must be displayed in poster at right top.",
        "The presenting author's name must be marked by the asterisk.",
        "The team members must bring their self made posters on the day of competition in time.",
        "The poster must be printed and presented on a 3x4 feet FLEX SHEET.",
        "Rule can be changed by the organizers team, at anytime.",
        "Any kind of malpractice can lead to disqualifying the candidate.",
        "Certificate will be issued to participants who have registered to the event and presented the poster in the campus.",
        "Decision of the judges is final.",
      ],
    },

    {
      profileImage:
        "https://th.bing.com/th/id/OIP.zQL8hCVh3p_EIhyPY10cwQHaE7?pid=ImgDet&rs=1",
      username: "Project Expo",
      userHandle: "Exhibit your Innovations",
      price: 300,
      docFile: expo,
      userrules: [
        "All participants must bring their college ID cards at the time of the event.",
        "The title must be prominently clear and to the point.",
        "The participants must bring their own tools for the presentation of expo",
        "Rules can be changed at anytime by the management.",
        "Any misbehaviour lead to disqualify",
        "Certificate will be issued to participants who have registered to the event and presented the poster in the campus.",
        "Decision of the judges is final.",
      ],
    },

    {
      profileImage:
        "https://static.wixstatic.com/media/8924aa_7919ae7f2e6c413daaa5dafa050cc154~mv2.png/v1/fill/w_558,h_314,al_c/8924aa_7919ae7f2e6c413daaa5dafa050cc154~mv2.png",
      username: "CAED Combat",
      userHandle: "Adventure for Coding Enthusiasts",
      price: 100,
      docFile: caedcom,
      userrules: [
        "All participants must bring their college ID cards at the time of the event.",
        "Participants who solve the first round questions are eligible to play the second round and same again who solve the second round were eligible to the third round.",
        "Participants must follow the guidelines and protocols that are instructed by the organising committee.",
        "Any participant found to be indulging in any form of malpractice will be immediately disqualified.",
        "Participants will incur fines for any form of property damage.",
        "Decision of the judges is final.",
      ],
    },
    {
      profileImage:
        "https://www.datocms-assets.com/28026/1589514790-code-editor-wars.png",
      username: "Code Wars",
      userHandle: "Resolve the coding riddles",

      price: 100,
      userrules: [
        "You will get an full mark for the question if all the testcases are passed. You will also get an partial marks if some of the testcases are passed.",
        "Students must use the laptop/Desktop for attending this Contest.",
        "The students should have a minimum of 2 MBPS of Upload and Download speed to experience a smooth coding experience.",
        'All answers will be "Saved automatically." If any internet issues occurs during the test, the answers will not be saved. So you have to wait till your network gets stable only then the answers will get saved in server. ',
        "The contest winner will be the one who completes the contest with full mark and completing the test without any tabswitches or any other malpractise.",
        "The tabswitches will be monitored and you will be disqualified if you did switch tab and the test will get auto submitted.",
      ],
    },

    {
      profileImage:
        "https://i.pinimg.com/originals/f2/54/18/f25418e86d63c5b6c8a47fe99e41687c.jpg",
      username: "Treasure Hunt+++ (CODE)",
      userHandle: "Competitive and Challenging Event",
      price: 300,
      userrules: [
        "All participants must bring their college ID cards at the time of the event",
        "It's an event for computers branchers. The group contains maximum of three members",
        "Participants must pass the 1st round to advance to the 2nd level; failure to do so results in elimination. This rule applies to both the 1st and 2nd rounds.",
        "The participants who finish the final round first will be declared as the winners, based on their completion time.",
        "USAGE OF SMART APPILICATION FOR THIS EVENT PROHIBITED.",
        "Decision of judges is final.",
        "Rules can be changed at anytime by the management.",
      ],
    },
    {
      profileImage:
        "https://www.abc4.com/wp-content/uploads/sites/4/2023/05/UtahTreasureHunt2023_ABC4_FeaturedImage.jpeg?w=2560&h=1440&crop=1",
      username: "Treasure Hunt (CAED)",
      userHandle: "Join the Adventure",
      price: 300,
      userrules: [
        "All participants must bring their college ID cards at the time of the event",
        "It's an event based on CAED. The group contains maximum of three members",
        "Participants must pass the 1st round to advance to the 2nd level; failure to do so results in elimination. This rule applies to both the 1st and 2nd rounds.",
        "The participants who finish the final round first will be declared as the winners, based on their completion time.",
        "USAGE OF SMART APPILICATION FOR THIS EVENT PROHIBITED.",
        "Decision of judges is final.",
        "Rules can be changed at anytime by the management.",
      ],
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleCategoryClick = (category) => {
    if (activeCategory === category && isExpanded) {
      setActiveCategory(null);
      setIsExpanded(false);
    } else {
      setActiveCategory(category);
      setIsExpanded(true);
      setScrollToTop(true);
    }
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="main-team-1">
      <CustomCursor />
      <NavBar />
      <div className="sep">
        <div className={`buttons-container-2 ${isExpanded ? "expanded" : ""}`}>
          <div className="button-div">
            <a className="button-main">KALAKSHETRA</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
              className="svg-icon"
              onClick={() => handleCategoryClick("kala")}
            >
              <path
                d="M37.0002 33.334V22.334L51.6668 37.0007L37.0002 51.6673V40.6673H22.3335V33.334H37.0002ZM37.0002 0.333984C57.2402 0.333984 73.6668 16.7607 73.6668 37.0007C73.6668 57.2407 57.2402 73.6673 37.0002 73.6673C16.7602 73.6673 0.333496 57.2407 0.333496 37.0007C0.333496 16.7607 16.7602 0.333984 37.0002 0.333984ZM37.0002 66.334C53.2068 66.334 66.3335 53.2073 66.3335 37.0007C66.3335 20.794 53.2068 7.66732 37.0002 7.66732C20.7935 7.66732 7.66683 20.794 7.66683 37.0007C7.66683 53.2073 20.7935 66.334 37.0002 66.334Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="button-div">
            <a className="button-main">SPOTEVENTS</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
              className="svg-icon"
              onClick={() => handleCategoryClick("spot")}
            >
              <path
                d="M37.0002 33.334V22.334L51.6668 37.0007L37.0002 51.6673V40.6673H22.3335V33.334H37.0002ZM37.0002 0.333984C57.2402 0.333984 73.6668 16.7607 73.6668 37.0007C73.6668 57.2407 57.2402 73.6673 37.0002 73.6673C16.7602 73.6673 0.333496 57.2407 0.333496 37.0007C0.333496 16.7607 16.7602 0.333984 37.0002 0.333984ZM37.0002 66.334C53.2068 66.334 66.3335 53.2073 66.3335 37.0007C66.3335 20.794 53.2068 7.66732 37.0002 7.66732C20.7935 7.66732 7.66683 20.794 7.66683 37.0007C7.66683 53.2073 20.7935 66.334 37.0002 66.334Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="button-div">
            <a className="button-main">WORKSHOPS</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
              className="svg-icon"
              onClick={() => handleCategoryClick("works")}
            >
              <path
                d="M37.0002 33.334V22.334L51.6668 37.0007L37.0002 51.6673V40.6673H22.3335V33.334H37.0002ZM37.0002 0.333984C57.2402 0.333984 73.6668 16.7607 73.6668 37.0007C73.6668 57.2407 57.2402 73.6673 37.0002 73.6673C16.7602 73.6673 0.333496 57.2407 0.333496 37.0007C0.333496 16.7607 16.7602 0.333984 37.0002 0.333984ZM37.0002 66.334C53.2068 66.334 66.3335 53.2073 66.3335 37.0007C66.3335 20.794 53.2068 7.66732 37.0002 7.66732C20.7935 7.66732 7.66683 20.794 7.66683 37.0007C7.66683 53.2073 20.7935 66.334 37.0002 66.334Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="button-div">
            <a className="button-main">TECHNOHOLIC</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
              className="svg-icon"
              onClick={() => handleCategoryClick("techno")}
            >
              <path
                d="M37.0002 33.334V22.334L51.6668 37.0007L37.0002 51.6673V40.6673H22.3335V33.334H37.0002ZM37.0002 0.333984C57.2402 0.333984 73.6668 16.7607 73.6668 37.0007C73.6668 57.2407 57.2402 73.6673 37.0002 73.6673C16.7602 73.6673 0.333496 57.2407 0.333496 37.0007C0.333496 16.7607 16.7602 0.333984 37.0002 0.333984ZM37.0002 66.334C53.2068 66.334 66.3335 53.2073 66.3335 37.0007C66.3335 20.794 53.2068 7.66732 37.0002 7.66732C20.7935 7.66732 7.66683 20.794 7.66683 37.0007C7.66683 53.2073 20.7935 66.334 37.0002 66.334Z"
                fill="white"
              />
            </svg>
          </div>
          {isExpanded && (
            <img
              src={earth}
              alt=""
              className="leftearth-1"
              style={{
                transform: `translate(0%, 5%) rotate(${rotationAngle}deg)`,
                position: "relative",
                mixBlendMode: "difference",
              }}
            />
          )}
          ;
        </div>
      </div>
      {activeCategory === "kala" && (
        <div className="team-1" style={{ scrollTop: scrollToTop ? 0 : "auto" }}>
          <ToastContainer />
          <div className="team-section-1">
            <h1 className="team-heading-1">Fest-Vista</h1>
            <div className="profiles-container-1">
              {FestVista.map((profile, index) => (
                <div className="profile-1" key={index}>
                  <h2 className="profile-username-2">{profile.username}</h2>
                  <div className="profile-image-1">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <div className="septag">
                    {/* Display Register Button and Arrow */}

                    <small className="profile-user-handle-2">
                      {profile.userHandle}
                    </small>

                    {showRulesFestVusta[index] && (
                      <div className="rules-container">
                        <div
                          className="main-rules"
                          style={{
                            color: "black",
                            padding: "10px",
                            zIndex: 1,
                            backgroundColor: "white",
                            borderRadius: "5px",
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                            position: "fixed",
                            left: "0",
                            top: "0",
                            height: "100%",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <div className="rules-container">
                            <button
                              className="close-button-event"
                              onClick={() =>
                                toggleRulesVisibilityFestVista(index)
                              }
                            >
                              X
                            </button>
                            <h1>{profile.username}</h1>
                            <ul>
                              {profile.userrules.map((rule, ruleIndex) => (
                                <li
                                  key={ruleIndex}
                                  class="pforli"
                                  style={{
                                    marginBottom: "5px",
                                    listStyle: "disc",
                                    wordWrap: "break-word",
                                    direction: "flex",
                                  }}
                                >
                                  {rule}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="button-down">
                            <button
                              className="reg-form"
                              onClick={() =>
                                handlePayment(
                                  profile.price,
                                  profile.username,
                                  "festvista"
                                )
                              }
                            >
                              Pay Now!
                            </button>
                            {showRulesFestVusta[index] && (
                              <button
                                className="close-button-down"
                                onClick={() =>
                                  toggleRulesVisibilityFestVista(index)
                                }
                              >
                                Close Rules
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Display Rules if showRules[index] is true */}

                    {profile.username === "Nacho Dil Se(Group-max 10)" ||
                      (profile.username === "Nacho Dil Se (SOLO)" && (
                        <div className="bottommain">
                          <div className="bottomitem">
                            <p className="realp">₹{profile.price}</p>
                            <p className="disp">₹{profile.price + 200}</p>
                          </div>
                          <button className="eventreg-event">
                            Registration Closed
                          </button>
                          {/*<div className="bttnn">
                          <button
                            className="eventreg-event"
                            onClick={() => setPopupVisible(true)}
                          >
                            Register
                          </button>
                    </div>*/}
                        </div>
                      ))}

                    {profile.username === "Nacho Dil Se(Group-max 10)" ? (
                      isPopupVisible && (
                        <div className="maineventform">
                          <div className="payment-form-event">
                            <p className="eventname-pop">{profile.username}</p>
                            <p className="eventrule-pop">
                              The rules are same as {profile.username}
                            </p>
                            <div className="registration-form-event">
                              {registrationData.members.map((member, index) => (
                                <div key={index}>
                                  <input
                                    type="text"
                                    name={`memberName${index}`}
                                    placeholder={`Member ${index + 1} Name*`}
                                    value={member.memberName}
                                    onChange={(e) =>
                                      handleMemberInputChange(e, index)
                                    }
                                    required
                                  />
                                  <input
                                    type="tel" // Change to "tel" for phone numbers
                                    name={`memberPhoneNumber${index}`} // Update the name for phone numbers
                                    placeholder={`Member ${
                                      index + 1
                                    } Phone Number*`} // Update the placeholder
                                    pattern="[0-9]{10}" // Optionally, specify a pattern for phone number format
                                    value={member.memberPhoneNumber} // Update the value attribute
                                    onChange={(e) =>
                                      handleMemberInputChange(e, index)
                                    }
                                    required
                                  />
                                </div>
                              ))}
                              <div className="ad">
                                {memberCount < 8 && (
                                  <button
                                    className="add-member-button"
                                    onClick={addMember}
                                  >
                                    <img src={adding} />
                                  </button>
                                )}
                                {memberCount > 0 && (
                                  <button
                                    className="remove-member-button"
                                    onClick={() =>
                                      removeMember(memberCount - 1)
                                    }
                                  >
                                    <img src={minus} />
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="button-proshow-1">
                              <button
                                className="reg-form"
                                onClick={() =>
                                  handlePayment(
                                    profile.price,
                                    profile.username,
                                    "festvista"
                                  )
                                }
                              >
                                Register
                              </button>

                              <button
                                className="close-button"
                                onClick={() => {
                                  togglePopup(); // Close the popup when the close button is clicked
                                }}
                              >
                                X
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
                      )
                    ) : profile.username === "Nacho Dil Se (SOLO)" ? (
                      isPopupVisible && (
                        <div className="maineventform">
                          {/* Add the registration form for "Nacho Dil Se (SOLO)" here */}
                        </div>
                      )
                    ) : (
                      // Display the normal "Register" button for other events
                      <div className="bottommain">
                        <div className="bottomitem">
                          <p className="realp">₹{profile.price}</p>
                          <p className="disp">₹{profile.price + 200}</p>
                        </div>

                        <div className="bttnn">
                          <button
                            className="eventreg-event"
                            onClick={() =>
                              toggleRulesVisibilityFestVista(index)
                            }
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section-1">
            <h1 className="team-heading-1">Act-O-Mania</h1>
            <div className="profiles-container-1">
              {actomania.map((profile, index) => (
                <div className="profile-1" key={index}>
                  <h2 className="profile-username-2">{profile.username}</h2>
                  <div className="profile-image-1">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <div className="septag">
                    <small className="profile-user-handle-2">
                      {profile.userHandle}
                    </small>
                  </div>
                  {showRulesActomania[index] && (
                    <div className="rules-container">
                      <div
                        className="main-rules"
                        style={{
                          color: "black",
                          padding: "10px",
                          zIndex: 1,
                          backgroundColor: "white",
                          borderRadius: "5px",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          position: "fixed",
                          left: "0",
                          top: "0",
                          height: "100%",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div className="rules-container">
                          <h1>{profile.username}</h1>
                          <ul>
                            {profile.userrules.map((rule, ruleIndex) => (
                              <li
                                key={ruleIndex}
                                class="pforli"
                                style={{
                                  marginBottom: "5px",
                                  listStyle: "disc",
                                  wordWrap: "break-word",
                                  direction: "flex",
                                }}
                              >
                                {rule}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="button-down">
                          <button
                            className="reg-form"
                            onClick={() =>
                              handlePayment(
                                profile.price,
                                profile.username,
                                "actomania"
                              )
                            }
                          >
                            Pay Now!
                          </button>
                          {showRulesActomania[index] && (
                            <button
                              className="close-button-down"
                              onClick={() =>
                                toggleRulesVisibilityActomania(index)
                              }
                            >
                              Close Rules
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="bottommain">
                    <div className="bottomitem">
                      <p className="realp">₹{profile.price}</p>
                      <p className="disp">₹{profile.price + 200}</p>
                    </div>
                    <div className="bttnn">
                      {profile.username === "Story Telling" ||
                      profile.username === "Short film contest" ? (
                        <button className="eventreg-event">
                          Registration Closed
                        </button>
                      ) : (
                        <button
                          className="eventreg-event"
                          onClick={() => toggleRulesVisibilityActomania(index)}
                        >
                          Register
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="team-section-1">
            <h1 className="team-heading-1">Speak Mouth</h1>
            <div className="profiles-container-1">
              {speakmouth.map((profile, index) => (
                <div className="profile-1" key={index}>
                  <h2 className="profile-username-2">{profile.username}</h2>
                  <div className="profile-image-1">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <div className="septag">
                    <small className="profile-user-handle-2">
                      {profile.userHandle}
                    </small>
                  </div>
                  {showRulesSpeakmouth[index] && (
                    <div className="rules-container">
                      <div
                        className="main-rules"
                        style={{
                          color: "black",
                          padding: "10px",
                          zIndex: 1,
                          backgroundColor: "white",
                          borderRadius: "5px",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          position: "fixed",
                          left: "0",
                          top: "0",
                          height: "100%",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div className="rules-container">
                          <h1>{profile.username}</h1>
                          <ul>
                            {profile.userrules.map((rule, ruleIndex) => (
                              <li
                                key={ruleIndex}
                                class="pforli"
                                style={{
                                  marginBottom: "5px",
                                  listStyle: "disc",
                                  wordWrap: "break-word",
                                  direction: "flex",
                                }}
                              >
                                {rule}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="button-down">
                          <button
                            className="reg-form"
                            onClick={() =>
                              handlePayment(
                                profile.price,
                                profile.username,
                                "speakmouth"
                              )
                            }
                          >
                            Pay Now!
                          </button>
                          {showRulesSpeakmouth[index] && (
                            <button
                              className="close-button-down"
                              onClick={() =>
                                toggleRulesVisibilitySpeakmouth(index)
                              }
                            >
                              Close Rules
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="bottommain">
                    <div className="bottomitem">
                      <p className="realp">₹{profile.price}</p>
                      <p className="disp">₹{profile.price + 200}</p>
                    </div>
                    <div className="bttnn">
                      <button
                        className="eventreg-event"
                        onClick={() => toggleRulesVisibilitySpeakmouth(index)}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="team-section-1">
            <h1 className="team-heading-1">Specials</h1>
            <div className="profiles-container-1">
              {speacials.map((profile, index) => (
                <div className="profile-1" key={index}>
                  <h2 className="profile-username-2">{profile.username}</h2>
                  <div className="profile-image-1">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <div className="septag">
                    <small className="profile-user-handle-2">
                      {profile.userHandle}
                    </small>
                  </div>

                  {showRulesspecials[index] && (
                    <div className="rules-container">
                      <div
                        className="main-rules"
                        style={{
                          color: "black",
                          padding: "10px",
                          zIndex: 1,
                          backgroundColor: "white",
                          borderRadius: "5px",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          position: "fixed",
                          left: "0",
                          top: "0",
                          height: "100%",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div className="rules-container">
                          <h1>{profile.username}</h1>
                          <ul>
                            {profile.userrules.map((rule, ruleIndex) => (
                              <li
                                key={ruleIndex}
                                class="pforli"
                                style={{
                                  marginBottom: "5px",
                                  listStyle: "disc",
                                  wordWrap: "break-word",
                                  direction: "flex",
                                }}
                              >
                                {rule}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="button-down">
                          <button
                            className="reg-form"
                            onClick={() =>
                              handlePayment(
                                profile.price,
                                profile.username,
                                "specials"
                              )
                            }
                          >
                            Pay Now!
                          </button>
                          {showRulesspecials[index] && (
                            <button
                              className="close-button-down"
                              onClick={() =>
                                toggleRulesVisibilityspecials(index)
                              }
                            >
                              Close Rules
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {profile.username === "Live Music Band" ? (
                    <p className="disp1">Sold on Spot</p>
                  ) : (
                    <div className="bottommain">
                      <div className="bottomitem">
                        <p className="realp">₹{profile.price}</p>
                        <p className="disp">₹{profile.price + 200}</p>
                      </div>
                      <div className="bttnn">
                        <button
                          className="eventreg-event"
                          onClick={() => toggleRulesVisibilityspecials(index)}
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="team-section-1">
            <h1 className="team-heading-1">Art Battle</h1>
            <div className="profiles-container-1">
              {artbattle.map((profile, index) => (
                <div className="profile-1" key={index}>
                  <h2 className="profile-username-2">{profile.username}</h2>
                  <div className="profile-image-1">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <div className="septag">
                    <small className="profile-user-handle-2">
                      {profile.userHandle}
                    </small>
                  </div>

                  {showRulesArtBattle[index] && (
                    <div className="rules-container">
                      <div
                        className="main-rules"
                        style={{
                          color: "black",
                          padding: "10px",
                          zIndex: 1,
                          backgroundColor: "white",
                          borderRadius: "5px",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          position: "fixed",
                          left: "0",
                          top: "0",
                          height: "100%",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div className="rules-container">
                          <h1>{profile.username}</h1>
                          <ul>
                            {profile.userrules.map((rule, ruleIndex) => (
                              <li
                                key={ruleIndex}
                                class="pforli"
                                style={{
                                  marginBottom: "5px",
                                  listStyle: "disc",
                                  wordWrap: "break-word",
                                  direction: "flex",
                                }}
                              >
                                {rule}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="button-down">
                          <button
                            className="reg-form"
                            onClick={() =>
                              handlePayment(
                                profile.price,
                                profile.username,
                                "artbattle"
                              )
                            }
                          >
                            Pay Now!
                          </button>
                          {showRulesArtBattle[index] && (
                            <button
                              className="close-button-down"
                              onClick={() =>
                                toggleRulesVisibilityArtBattle(index)
                              }
                            >
                              Close Rules
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="bottommain">
                    <div className="bottomitem">
                      <p className="realp">₹{profile.price}</p>
                      <p className="disp">₹{profile.price + 200}</p>
                    </div>
                    <div className="bttnn">
                      {profile.username === "Photography Contest" ? (
                        <button className="eventreg-event">
                          Registration Closed
                        </button>
                      ) : (
                        <button
                          className="eventreg-event"
                          onClick={() => toggleRulesVisibilityArtBattle(index)}
                        >
                          Register
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="team-section-1">
            <h1 className="team-heading-1">Game Glider</h1>
            <div className="profiles-container-1">
              {gameglider.map((profile, index) => (
                <div className="profile-1" key={index}>
                  <h2 className="profile-username-2">{profile.username}</h2>
                  <div className="profile-image-1">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <div className="septag">
                    {/*<div className="event-details">
                    <h1>19-10-2023</h1>
                    <h1>Timing</h1>
                  </div>
            */}
                    <small className="profile-user-handle-2">
                      {profile.userHandle}
                    </small>
                  </div>

                  {showRulesgameglider[index] && (
                    <div className="rules-container">
                      <div
                        className="main-rules"
                        style={{
                          color: "black",
                          padding: "10px",
                          zIndex: 1,
                          backgroundColor: "white",
                          borderRadius: "5px",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          position: "fixed",
                          left: "0",
                          top: "0",
                          height: "100%",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div className="rules-container">
                          <h1>{profile.username}</h1>
                          <ul>
                            {profile.userrules.map((rule, ruleIndex) => (
                              <li
                                key={ruleIndex}
                                class="pforli"
                                style={{
                                  marginBottom: "5px",
                                  listStyle: "disc",
                                  wordWrap: "break-word",
                                  direction: "flex",
                                }}
                              >
                                {rule}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="button-down">
                          <button
                            className="reg-form"
                            onClick={() =>
                              handlePayment(
                                profile.price,
                                profile.username,
                                "gameglider"
                              )
                            }
                          >
                            Pay Now!
                          </button>
                          {showRulesgameglider[index] && (
                            <button
                              className="close-button-down"
                              onClick={() =>
                                toggleRulesVisibilitygameglider(index)
                              }
                            >
                              Close Rules
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="bottommain">
                    <div className="bottomitem">
                      <p className="realp">₹{profile.price}</p>
                      <p className="disp">₹{profile.price + 200}</p>
                    </div>
                    <div className="bttnn">
                      <button
                        className="eventreg-event"
                        onClick={() => toggleRulesVisibilitygameglider(index)}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeCategory === "spot" && (
        <div className="team">
          <ToastContainer />
          <div className="team-section-1">
            <h1 className="team-heading-1">Spot Events</h1>
            <div className="profiles-container-1">
              {spotevents.map((profile, index) => (
                <div className="profile-1" key={index}>
                  <h2 className="profile-username-2">{profile.username}</h2>
                  <div className="profile-image-1">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <div className="septag">
                    <small className="profile-user-handle-2">
                      {profile.userHandle}
                    </small>
                    <div>
                      {profile.price && profile.userrules ? (
                        <div>
                          {profile.username === "Digital Events(Team)" && (
                            <div className="bottommain">
                              <div className="bottomitem">
                                <p className="realp">₹{profile.price}</p>
                                <p className="disp">₹{profile.price + 200}</p>
                              </div>
                              <div className="bttnn">
                                <button
                                  className="eventreg-event"
                                  onClick={() => setPopupVisible(true)}
                                >
                                  Register
                                </button>
                              </div>
                            </div>
                          )}

                          {profile.username === "Digital Events(Team)" ? (
                            isPopupVisible && (
                              <div className="maineventform">
                                <div className="payment-form-event">
                                  <p className="eventname-pop">
                                    {profile.username}
                                  </p>
                                  <p className="eventrule-pop">
                                    The rules are same as {profile.username}
                                  </p>
                                  <div className="registration-form-event">
                                    {registrationData.members.map(
                                      (member, index) => (
                                        <div key={index}>
                                          <input
                                            type="text"
                                            name={`memberName${index}`}
                                            placeholder={`Member ${
                                              index + 1
                                            } Name*`}
                                            value={member.memberName}
                                            onChange={(e) =>
                                              handleMemberInputChange(e, index)
                                            }
                                            required
                                          />
                                          <input
                                            type="tel" // Change to "tel" for phone numbers
                                            name={`memberPhoneNumber${index}`} // Update the name for phone numbers
                                            placeholder={`Member ${
                                              index + 1
                                            } Phone Number*`} // Update the placeholder
                                            pattern="[0-9]{10}" // Optionally, specify a pattern for phone number format
                                            value={member.memberPhoneNumber} // Update the value attribute
                                            onChange={(e) =>
                                              handleMemberInputChange(e, index)
                                            }
                                            required
                                          />
                                        </div>
                                      )
                                    )}
                                    <div className="ad">
                                      {memberCount < 3 && (
                                        <button
                                          className="add-member-button"
                                          onClick={addMember}
                                        >
                                          <img src={adding} />
                                        </button>
                                      )}
                                      {memberCount > 0 && (
                                        <button
                                          className="remove-member-button"
                                          onClick={() =>
                                            removeMember(memberCount - 1)
                                          }
                                        >
                                          <img src={minus} />
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                  <div className="button-proshow-1">
                                    <button
                                      className="reg-form"
                                      onClick={() =>
                                        handlePayment(
                                          profile.price,
                                          profile.username,
                                          "spotevent"
                                        )
                                      }
                                    >
                                      Register
                                    </button>

                                    <button
                                      className="close-button"
                                      onClick={() => {
                                        togglePopup(); // Close the popup when the close button is clicked
                                      }}
                                    >
                                      X
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
                            )
                          ) : (
                            <>
                              {!showRulesspotevents[index] ? (
                                <div className="bottommain">
                                  <div className="bottomitem">
                                    <p className="realp">₹{profile.price}</p>
                                    <p className="disp">
                                      ₹{profile.price + 200}
                                    </p>
                                  </div>
                                  <div className="bttnn">
                                    <button
                                      className="eventreg-event"
                                      onClick={() =>
                                        toggleRulesVisibilityspotevents(index)
                                      }
                                    >
                                      Register
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div className="rules-container">
                                  <div
                                    className="main-rules"
                                    style={{
                                      color: "black",
                                      padding: "10px",
                                      zIndex: 1,
                                      backgroundColor: "white",
                                      borderRadius: "5px",
                                      textAlign: "left",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignContent: "center",
                                      position: "fixed",
                                      left: "0",
                                      top: "0",
                                      height: "100%",
                                      flexDirection: "column",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div className="rules-container">
                                      <h1>{profile.username}</h1>
                                      <ul>
                                        {profile.userrules.map(
                                          (rule, ruleIndex) => (
                                            <li
                                              key={ruleIndex}
                                              class="pforli"
                                              style={{
                                                marginBottom: "5px",
                                                listStyle: "disc",
                                                wordWrap: "break-word",
                                                direction: "flex",
                                              }}
                                            >
                                              {rule}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                    <div className="button-down">
                                      <button
                                        className="reg-form"
                                        onClick={() =>
                                          handlePayment(
                                            profile.price,
                                            profile.username,
                                            "spotevent"
                                          )
                                        }
                                      >
                                        Pay Now!
                                      </button>

                                      <button
                                        className="close-button-down"
                                        onClick={() =>
                                          toggleRulesVisibilityspotevents(index)
                                        }
                                      >
                                        Close Rules
                                      </button>
                                    </div>
                                  </div>
                                  <div className="bottommain">
                                    <div className="bottomitem">
                                      <p className="realp">₹{profile.price}</p>
                                      <p className="disp">
                                        ₹{profile.price + 200}
                                      </p>
                                    </div>
                                    <div className="bttnn">
                                      <button
                                        className="eventreg-event"
                                        onClick={() =>
                                          toggleRulesVisibilityspotevents(index)
                                        }
                                      >
                                        Register
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      ) : (
                        <a className="eventreg-2">Registration on spot</a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeCategory === "works" && (
        <div className="team">
          <ToastContainer />
          <div className="team-section-1">
            <h1 className="team-heading-1">Workshop</h1>
            <div className="profiles-container-1">
              {workshops.map((profile, index) => (
                <div className="profile-1" key={index}>
                  <h2 className="profile-username-2">{profile.username}</h2>
                  <div className="profile-image-1">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <div className="septag">
                    <small className="profile-user-handle-2">
                      {profile.userHandle}
                    </small>
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                    ></div>
                  </div>
                  {showRulesworkshops[index] && (
                    <div className="rules-container">
                      <div
                        className="main-rules"
                        style={{
                          color: "black",
                          padding: "10px",
                          zIndex: 1,
                          backgroundColor: "white",
                          borderRadius: "5px",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          position: "fixed",
                          left: "0",
                          top: "0",
                          height: "100%",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div className="rules-container">
                          <h1>{profile.username}</h1>
                          <ul className="workshopscroll">
                            {profile.userrules.map((rule, ruleIndex) => (
                              <li
                                key={ruleIndex}
                                class="pforli"
                                style={{
                                  marginBottom: "5px",
                                  listStyle: "disc",
                                  wordWrap: "break-word",
                                  direction: "flex",
                                }}
                              >
                                {rule}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="button-down">
                          <button
                            className="reg-form"
                            onClick={() =>
                              handlePayment(
                                profile.price,
                                profile.username,
                                "work"
                              )
                            }
                          >
                            Pay Now!
                          </button>
                          {showRulesworkshops[index] && (
                            <button
                              className="close-button-down"
                              onClick={() =>
                                toggleRulesVisibilityworkshops(index)
                              }
                            >
                              Close Rules
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bottommain">
                    <div className="bottomitem">
                      <p className="realp">₹{profile.price}</p>
                      <p className="disp">₹{profile.price + 200}</p>
                    </div>
                    <div className="bttnn">
                      <button className="eventreg-event">
                        Registration Closed
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeCategory === "techno" && (
        <div className="team">
          <ToastContainer />
          <div className="team-section-1">
            <h1 className="team-heading-1">Technoholic</h1>
            <div className="profiles-container-1">
              {Technoholic.map((profile, index) => (
                <div className="profile-1" key={index}>
                  <h2 className="profile-username-2">{profile.username}</h2>
                  <div className="profile-image-1">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <div className="septag">
                    <small className="profile-user-handle-2">
                      {profile.userHandle}
                    </small>
                    {profile.domains && (
                      <div style={{ marginBottom: "10px" }}>
                        <strong>Domains:</strong> {profile.domains}
                      </div>
                    )}
                  </div>

                  {showRulesworkshops[index] && (
                    <div className="rules-container">
                      <div
                        className="main-rules"
                        style={{
                          color: "black",
                          padding: "10px",
                          zIndex: 1,
                          backgroundColor: "white",
                          borderRadius: "5px",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          position: "fixed",
                          left: "0",
                          top: "0",
                          height: "100%",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div className="rules-container">
                          <h1>{profile.username}</h1>
                          <ul className="workshopscroll">
                            {profile.userrules.map((rule, ruleIndex) => (
                              <li
                                key={ruleIndex}
                                class="pforli"
                                style={{
                                  marginBottom: "5px",
                                  listStyle: "disc",
                                  wordWrap: "break-word",
                                  direction: "flex",
                                }}
                              >
                                {rule}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="button-down">
                          <button
                            className="reg-form"
                            onClick={() =>
                              handlePayment(
                                profile.price,
                                profile.username,
                                "technohol"
                              )
                            }
                          >
                            Pay Now!
                          </button>
                          <a
                            className="reg-form"
                            href={profile.docFile}
                            download={profile.docFile}
                          >
                            Problem &#8595;
                          </a>
                          {showRulesworkshops[index] && (
                            <button
                              className="close-button-down"
                              onClick={() =>
                                toggleRulesVisibilityworkshops(index)
                              }
                            >
                              Close Rules
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {profile.username === "Innovatathon" ||
                  profile.username === "Paper Presentation" ||
                  profile.username === "Project Expo" ||
                  profile.username === "Poster Presentation" ||
                  profile.username === "Circuit Trace"||
                  profile.username === "Code Wars" ? (
                    <>
                      <div className="bottomitem">
                        <p className="realp">₹{profile.price}</p>
                        <p className="disp">₹{profile.price + 200}</p>
                        <button className="eventreg-event">
                          Registration Closed
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="bottommain">
                      <div className="bottomitem">
                        <p className="realp">₹{profile.price}</p>
                        <p className="disp">₹{profile.price + 200}</p>
                      </div>
                      <div className="bttnn">
                        <button
                          className="eventreg-event"
                          onClick={() => toggleRulesVisibilityworkshops(index)}
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default NewEvent;
