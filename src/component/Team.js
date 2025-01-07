import { useState, useEffect } from 'react';
import './Team.css';
import CustomCursor from './customCursor';
import p from '../Images/p.png';
import side from '../Images/MOHANAMANTRA 2023.svg';
import earth from '../Images/earth.svg';
import instagram from '../Images/instagramNew.svg';
import phone from '../Images/phoneNew.svg';
import linkedin from '../Images/linkedinNew.svg';
import mail from '../Images/mailNew.svg';
import Footer from './Footer';
import userIcon from '../user.png'


import NavigationComponent from './NavBar';
import tech1 from '../user.png';
import tech2 from '../user.png';
import tech3 from '../user.png';
import tech4 from '../user.png';
import tech5 from '../user.png';
import tech6 from '../user.png';
import tech7 from '../user.png';
import tech8 from '../user.png';
import tech9 from '../user.png';
import tech10 from '../user.png';
import tech11 from '../user.png';
import tech12 from '../user.png';
import tech13 from '../user.png';
import tech14 from '../user.png';
import tech15 from '../user.png';
import tech16 from '../user.png';
import tech17 from '../user.png';
import tech18 from '../user.png';
import tech19 from '../user.png';
import cul1 from '../user.png';
import cul2 from '../user.png';
import proimg1 from '../user.png';
import proimg2 from '../user.png';
import proimg3 from '../user.png';
import proimg4 from '../user.png';
import proimg5 from '../user.png';
import proimg6 from '../user.png';
import proimg7 from '../user.png';
import proimg8 from '../user.png';
import dec1 from '../user.png';
import dec2 from '../user.png';
import dec3 from '../user.png';
import dec4 from '../user.png';
import dec5 from '../user.png';
import fm1 from '../user.png';
import fm2 from '../user.png';
import fm4 from '../user.png';
import fm5 from '../user.png';
import fm7 from '../user.png';
import fm8 from '../user.png';
import k1 from '../user.png';
import k2 from '../user.png';
import k3 from '../user.png';
import k4 from '../user.png';
import k5 from '../user.png';
import k6 from '../user.png';
import k7 from '../user.png';

import s8 from '../user.png';
import ad1 from '../user.png';
import ad2 from '../user.png';
import ad3 from '../user.png';
import l1 from '../user.png';
import l2 from '../user.png';
import l3 from '../user.png';
import l4 from '../user.png';
import l5 from '../user.png';
import l6 from '../user.png';
import l7 from '../user.png';
import mk1 from '../user.png';
import mk2 from '../user.png';
import mk3 from '../user.png';
import mk4 from '../user.png';
import mk5 from '../user.png';
import mk7 from '../user.png';
import fc1 from '../user.png';
import fc2 from '../user.png';
import fc3 from '../user.png';
import fc4 from '../user.png';
import sp1 from '../user.png';
import sp2 from '../user.png';
import sp3 from '../user.png';
import fi1 from '../user.png';
import fi2 from '../user.png';
import fi3 from '../user.png';
import fi4 from '../user.png';
import fi5 from '../user.png';
import fi6 from '../user.png';
import pr1 from '../user.png';
import pr2 from '../user.png';
import pr3 from '../user.png';
import pr4 from '../user.png';
import pr5 from '../user.png';
import pr6 from '../user.png';
import pr7 from '../user.png';
import pr8 from '../user.png';
import pb1 from '../user.png';
import pb2 from '../user.png';
import pb3 from '../user.png';
import pb5 from '../user.png';
import h1 from '../user.png';
import h2 from '../user.png';
import h4 from '../user.png';
import h5 from '../user.png';
import h6 from '../user.png';
import reg1 from '../user.png';
import reg2 from '../user.png';
import reg4 from '../user.png';
import reg5 from '../user.png';
import reg3 from '../user.png';
import w2 from '../user.png';
import w3 from '../user.png';
import w1 from '../user.png';
import soc2 from '../user.png';
import tech100 from '../user.png';
import tech99 from '../user.png';
import mk6 from '../user.png';
import sp6 from '../user.png';
import h3 from '../user.png';
import sp5 from '../user.png';
import fi7 from '../user.png';
import fi8 from '../user.png';
import fi9 from '../user.png';
import fi10 from '../user.png';
import fc5 from '../user.png';
import fc6 from '../user.png';
import fc7 from '../user.png';





const TheTeam1 = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [scrollY, setScrollY] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
   
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const newRotationAngle = (scrollY / 10) % 360;
    setRotationAngle(newRotationAngle);
  }, [scrollY]);

  
    const TechTeam = [
      {
        profileImage:tech1,
        username: 'N.Loka Harshith',
        userHandle: 'Coordinator',
        socialLinks: [
          { url: "tel:8688914505", icon: phone },
          { url: "mailto:lokaharshith2002@gmail.com", icon: mail },
          { url: 'https://www.linkedin.com/in/loka-harshith-488397229/', icon: linkedin },
          { url: 'https://www.instagram.com/lokaharshith_555/', icon: instagram },
        ],
      },
      {
        profileImage:tech2,
        username: 'Thanuja.S',
        userHandle: 'Co-Coordinator',
        socialLinks: [
          { url: "tel:9959077099", icon: phone },
          { url: "mailto:thanujasreesailam09@gmail.com", icon: mail },
          { url: 'https://www.linkedin.com/in/thanuja-sreesailam-647a3b256', icon: linkedin },
          { url: 'https://www.instagram.com/_thanu_09/', icon: instagram },
        ],
      },
    ]
    const webDevTeam = [
      {
        profileImage: w1,
        username: 'R.ChandraLekha',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: "tel:9391508021", icon: phone },
          { url: "mailto:chandhu2102@gmail.com", icon: mail },
          { url: 'https://www.linkedin.com/in/chandra-lekha-ramiredireddy-1aa025269/', icon: linkedin },
          { url: 'https://www.instagram.com/lekha_reddie/', icon: instagram },
        ],
      },
     
      {
        profileImage: w3,
        username: 'G.Charan Reddy',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: "tel:8121205507", icon: phone },
          { url: "mailto:charankrishna524@gmail.com", icon: mail },
          { url: 'https://www.linkedin.com/in/charan-reddy-07b6a9179/', icon: linkedin },
          { url: 'https://www.instagram.com/charan.ex3/', icon: instagram },
        ],
      },
      {
        profileImage: w2,
        username: 'Keshav Kant',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: "tel:7992424088", icon: phone },
          { url: "mailto:keshavkant7859@gmail.com", icon: mail },
          { url: 'www.linkedin.com/in/keshavkant-cseai', icon: linkedin },
          { url: 'https://www.instagram.com/keshavkant_/', icon: instagram },
        ],
      },
      {
        profileImage: l1,
        username: 'N. Nithin Reddy',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: "tel:9949367490", icon: phone },
          { url: "mailto:nithinr220802@gmail.com", icon: mail },
          { url: 'https://www.linkedin.com/in/nithin-reddy-6b3ab524a/', icon: linkedin },
          { url: 'https://www.instagram.com/_0nithinreddy0_', icon: instagram },
        ],
      },
      
    ];
    const SocTeam = [
      {
        profileImage: soc2,
        username: 'M.Santhosh',
        userHandle: 'WingHead',
        userHandle1: 'Team Manager',
        socialLinks: [
          { url: "tel:9629624534", icon: phone },
          { url: "mailto:Santhosh.Manku@gmail.com", icon: mail },
          { url: '#', icon: linkedin },
          { url: 'https://www.instagram.com/santhosh_manku/', icon: instagram },
        ],
      },
      
      
      {
        profileImage: w3,
        username: 'G. Charan Reddy',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: "tel:8121205507", icon: phone },
          { url: "mailto:charankrishna524@gmail.com", icon: mail },
          { url: 'https://www.linkedin.com/in/charan-reddy-07b6a9179/', icon: linkedin },
          { url: 'https://www.instagram.com/charan.ex3/', icon: instagram },
        ],
      },
    ];
    const DevTeam = [
      {
        profileImage: tech3,
      username: 'B.Leela Sai Sasank Reddy',
      userHandle: 'Wing head',
      socialLinks: [
      { url: "tel:9182502057", icon: phone },
      { url: "mailto:leelasaisasankreddy@gmail.com", icon: mail },
      { url: 'https://www.linkedin.com/in/sasank-reddy-358131216', icon: linkedin },
      { url: 'https://instagram.com/sasankkreddy?igshid=MzRlODBiNWFlZA==', icon: instagram },
    ]
      },
      {profileImage: tech4,
      username: 'R.Praseedha',
      userHandle: 'Senior core',
      socialLinks: [
        { url: "tel:8712394028", icon: phone },
        { url: "mailto:praseedha3r@gmail.com", icon: mail },
        { url: 'https://www.linkedin.com/in/praseedharayapati', icon: linkedin },
        { url: '#', icon: instagram },
        
        ],
      },
      {
        profileImage: tech5,
        username: 'T.Noble Siva Sai Ganesh',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: "tel:9160128601", icon: phone },
          { url: "mailto:tnssganesh13579@gmail.com", icon: mail },
          { url: 'https://www.linkedin.com/in/noble-siva-sai-ganesh-torati-745a4422a', icon: linkedin },
          { url: 'https://instagram.com/21121a05cute?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram },
        ],
      },
      {
        profileImage:tech6,
    username: 'K.Mohitha Chowdary',
    userHandle: 'Team manager',
    socialLinks: [
      { url: "tel:9182581405", icon: phone },
      { url: "mailto:mohithachowdary09@gmail.com", icon: mail },
      {url: '#', icon: linkedin },
          { url: 'https://instagram.com/mohithachowdary09?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
    ],
      },
    ];
    const WorkTeam = [
      {
  
          profileImage: tech7,
          username: 'K.Dinesh Babu',
          userHandle: 'Wing head',
          socialLinks: [
            { url: "tel:9392726011", icon: phone },
            { url: "mailto:kurubadineshbabu@gmail.com", icon: mail },
            { url: 'https://www.linkedin.com/in/kuruba-dinesh-babu-43b589215/', icon: linkedin },
            { url: 'https://instagram.com/_dinesh_2907?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
          ],
      
        
      },
      {
        profileImage: tech9,
        username: 'Shaik Kowsar',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: "tel:7989885219", icon: phone },
          { url: "mailto:kowsarshaik706@gmail.com", icon: mail },
          { url: 'https://www.linkedin.com/in/kowsar-shaik-3a2840204/', icon: linkedin },
          { url: 'https://www.instagram.com/candy_4_real/', icon: instagram },
        ],
      },
      {
        profileImage: tech11,
        username: 'T.Sai Divya Sree',
        userHandle: 'Senior core',
        socialLinks: [
          { url: "tel:YOUR_PHONE_NUMBER", icon: phone },
          { url: "mailto:YOUR_EMAIL_ADDRESS", icon: mail },
          { url: 'https://www.linkedin.com/in/tanguturi-sai-divya-sree-307b05242', icon: linkedin },
          { url: 'https://instagram.com/_divya_sree__423/', icon: instagram },
        ],
      },
      {
        profileImage: tech8,
        username: 'S.Mahesh',
        userHandle: 'Senior core',
        socialLinks: [
          { url: "tel:7995367273", icon: phone },
          { url: "mailto:Mahesh.official368@gmail.com", icon: mail },
          { url: 'https://www.linkedin.com/in/mahesh-senapathi-1a6058204', icon: linkedin },
          { url: 'https://instagram.com/lts_mahesh?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram },
        ],
      },
      {
        profileImage: tech12,
        username: 'Afrin Banu',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: "tel:8977240487", icon: phone },
          { url: "mailto:Lalithkumarbathala@gmail.com", icon: mail },
          { url: 'https://www.linkedin.com/in/lalith-kumar-8a4285226', icon: linkedin },
          { url: 'https://instagram.com/amore._.07?igshid=OGQ5ZDc2ODk2ZA==', icon: instagram },
        ],
      },
      {
        profileImage: tech10,
    username: 'S.Naga Swetha',
    userHandle: 'Team Manager',
    socialLinks: [
      { url: "tel:#", icon: phone }, 
      { url: "mailto:nagaswetha.sarabu@gmail.com", icon: mail },
      { url: 'https://www.linkedin.com/in/SARABU-NAGA-SWETHA', icon: linkedin },
      { url: 'https://instagram.com/swetha_3503', icon: instagram },
    ],
      },
      {
        profileImage: tech100,
    username: 'K.Poorna Chandra',
    userHandle: 'Team Manager',
    socialLinks: [
      { url: "tel:6301914400", icon: phone },
      { url: "mailto:kulalapoornachandra@gmail.com", icon: mail },
      { url: 'https://www.linkedin.com/in/kuala-poorna-chandra-b53468284', icon: linkedin },
      { url: 'https://instagram.com/poorna593', icon: instagram },
    ],
  
      },
    ];
    const TechnoTeam = [
      {
        profileImage: tech13, 
        username: 'V.Chaithanya Kumar Reddy',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://www.instagram.com/_.chai_tha_nya._/', icon: instagram },
          { url: 'www.linkedin.com/in/chaithanya-reddy-855518240', icon: linkedin },
          { url: 'mailto:chaithuchaithu4u@gmail.com', icon: mail },
          { url: 'tel:#', icon: phone }, 
        ],
      },
      {
        profileImage: tech14,
        username: 'B.Bindu Siva Sree',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://www.instagram.com/siva_sree_25/', icon: instagram },
          { url: 'mailto:Bindusivasree253@gmail.com', icon: mail },
          { url: 'tel:6300557983', icon: phone },
          { url: '#', icon: linkedin },
        ],
      },
      {
        profileImage: tech18, 
        username: 'N.Chandra Hasitha',
        userHandle: 'Senior core',
        socialLinks: [
          { url: 'https://instagram.com/nerellahasitha?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: 'https://www.linkedin.com/in/nerella-chandra-hasitha-044877240', icon: linkedin }, 
          { url: 'mailto:chandrahasitha.nerella@gmail.com', icon: mail }, 
          { url: 'tel:9603150118', icon: phone }, 
        ],
      },
      {
        profileImage: tech17, 
        username: 'B.Naveen',
        userHandle: 'Senior core',
        socialLinks: [
          { url: 'https://instagram.com/_life_racer143?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram },
          { url: 'https://www.linkedin.com/me?trk=p_mwlite_profile_self-secondary_nav', icon: linkedin },
          { url: 'mailto:bnaveenkumar098@gmail.com', icon: mail },
          { url: 'tel:6305915179', icon: phone },
        ],
      },
      {
        profileImage: tech16, 
        username: 'V.Sri varsha',
        userHandle: 'Senior core',
        socialLinks: [
          { url: 'https://instagram.com/varsha09_99?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: 'https://www.linkedin.com/in/varsha-varikunta-34b14b268', icon: linkedin }, 
          { url: 'mailto:srivarsha5088@gmail.com', icon: mail }, 
          { url: 'tel:8247092719', icon: phone }, 
        ],
      },
      {
        profileImage:tech19, 
        username: 'P.Madhusudhan',
        userHandle: 'Junior core',
        socialLinks: [
          { url: 'https://instagram.com/_madhusudhan___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram }, 
          { url: 'https://www.linkedin.com/in/madhusudhan-pasupuleti-371904225', icon: linkedin }, 
          { url: 'mailto:madhusudan2k20@gmail.com', icon: mail }, 
          { url: 'tel:9985963449', icon: phone }, 
        ],
      },
      {
        profileImage: tech99,
        username: 'R.Jyoshna',
        userHandle: 'Team manager',
        socialLinks: [
          { url: 'https://instagram.com/jyo_rasineni?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: '#', icon: linkedin }, 
          { url: '#', icon: mail },
          { url: '#', icon: phone }, 
        ],
      },
      {
        profileImage: tech15, 
        username: 'B.Lalith Kumar',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/amore._.07?igshid=OGQ5ZDc2ODk2ZA==', icon: instagram },
          { url: 'linkedin.com/in/lalith-kumar-8a4285226', icon: linkedin },
          { url: 'mailto:Lalithkumarbathala@gmail.com', icon: mail },
          { url: 'tel:8977240487', icon: phone },
        ],
      },
    ];
    const CultTeam = [
      {
        profileImage: cul1,
        username: 'N.Sachin Vardhan',
        userHandle: 'Coordinator',
        socialLinks: [
          { url: 'tel:9502675541', icon: phone },
          { url: 'mailto:sachinvardhan97@gmail.com', icon: mail },
          { url: 'https://www.linkedin.com/in/sachin-vardhan-813bb021a/', icon: linkedin },
          { url: 'https://www.instagram.com/its._.me_sachin/', icon: instagram },
        ],
      },
      {
        profileImage: cul2,
        username: 'V.Varshitaa',
        userHandle: 'Co-coordinator',
        socialLinks: [
          { url: 'tel:7674962178', icon: phone },
          { url: 'mailto:varshitaachowdary21@gmail.com', icon: mail },
          { url: 'https://www.linkedin.com/in/varshitaa-chowdary-3685b3286', icon: linkedin },
          { url: 'https://www.instagram.com/varshitaa_v', icon: instagram },
        ],
      },
    ];
    
    const ProTeam = [
      {
        profileImage: proimg2,
        username: 'A.Rithwik',
        userHandle: 'Wing head',
        socialLinks: [
          { url: 'https://www.instagram.com/slay_boy_06?r=nametag', icon: instagram },
          { url: 'https://www.linkedin.com/in/rithwik-akkana-100a31191', icon: linkedin },
          { url: 'mailto:rithwik.akkana@gmail.com', icon: mail },
          { url: 'tel:6281703998', icon: phone },
        ],
      },
      {
        profileImage: proimg7,
        username: 'G.Nitin Rahul Roy',
        userHandle: 'Wing head',
        socialLinks: [
          { url: 'https://instagram.com/fire_roy._?igshid=OGQ5ZDc2ODk2ZA==', icon: instagram },
          { url: '#', icon: linkedin }, 
          { url: 'mailto:nitinrahulroy@gmail.com', icon: mail },
          { url: 'tel:8977998802', icon: phone },
        ],
      },
      {
        profileImage: proimg1,
        username: 'C.Lasya Vasantha',
        userHandle: 'Senior core',
        socialLinks: [
          { url: 'https://www.instagram.com/__lasyaa/#', icon: instagram },
          { url: 'https://www.linkedin.com/in/lasya-vasantha-996a22276', icon: linkedin },
          { url: 'mailto:lasyavasantha.721@gmail.com', icon: mail },
          { url: 'tel:8247490178', icon: phone },
        ],
      },
      {
        profileImage: proimg3,
        username: 'V.Vaibhav Kumar',
        userHandle: 'SENIOR CORE',
        socialLinks: [
          { url: 'https://www.instagram.com/vkthelearner/#', icon: instagram },
          { url: 'https://www.linkedin.com/in/saivvk/', icon: linkedin },
          { url: 'mailto:vellalavaibhav744@gmail.com', icon: mail },
          { url: 'tel:8374670749', icon: phone },
        ],
      },
      {
        profileImage: proimg5,
        username: 'S.Sadiq',
        userHandle: 'Junior core',
        socialLinks: [
          { url: 'https://instagram.com/sadiq_.5?igshid=NjIwNzIyMDk2Mg==', icon: instagram },
          { url: '#', icon: linkedin }, 
          { url: 'mailto:mohammedsadiq3523@gmail.com', icon: mail },
          { url: 'tel:8790936466', icon: phone },
        ],
      },
      {
        profileImage:proimg6,
        username: 'S.Roopesh',
        userHandle: 'Junior core',
        socialLinks: [
          { url: 'https://instagram.com/roopesh_7676_?igshid=NjIwNzIyMDk2Mg==', icon: instagram },
          { url: 'mailto:roopeshsallagundla@gmail.com', icon: mail },
          { url: 'tel:7893939392', icon: phone },
          { url: '#', icon: linkedin },
        ],
      },
      {
        profileImage: proimg4,
        username: 'D.Naga Praharshini',
        userHandle: 'Team manager',
        socialLinks: [
          { url: 'https://instagram.com/nagapraharshini_siri?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: 'http://www.linkedin.com/in/praharshini', icon: linkedin },
          { url: 'mailto:nagapraharshinidurgam@gmail.com', icon: mail },
          { url: 'tel:8790699815', icon: phone },
        ],
      },
      {
        profileImage: proimg8,
        username: 'Y.Thanusha',
        userHandle: 'Team manager',
        socialLinks: [
          { url: 'https://www.instagram.com/_chiitti__.18/', icon: instagram },
          { url: 'https://www.linkedin.com/in/yeturu-thanusha-135286286', icon: linkedin },
          { url: 'mailto:thanushayeturu@gmail.com', icon: mail },
          { url: 'tel:6301632344', icon: phone },
        ],
      },
    ];
    const DecTeam = [
      {
        profileImage: dec1,
        username: 'M Sanjana',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://www.instagram.com/__d_lil_hea_ven__/', icon: instagram },
          { url: 'https://www.linkedin.com/in/sanjana-maankar-20aa82233/', icon: linkedin },
          { url: 'mailto:sanjanamaankar17@gmail.com', icon: mail },
          { url: 'tel:9059501379', icon: phone },
        ],
      },
      {
        profileImage: dec2,
        username: 'S Abhiteja',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://www.linkedin.com/in/ABHITEJA-SAMUDRALA', icon: linkedin },
          { url: 'mailto:abhisamudrala21@gmail.com', icon: mail },
          { url: 'tel:9701612015', icon: phone },
        ],
      },
      {
        profileImage: dec3,
        username: 'B.Praneetha Reddy',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/prani.tha_reddy_45?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram },
          { url: 'mailto:pranireddy4504@gmail.com', icon: mail },
          { url: 'tel:7075227297', icon: phone },
        ],
      },
      {
        profileImage: dec4,
        username: 'V.Chandana',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://www.instagram.com/chandanareddy2715', icon: instagram },
          { url: '#', icon: linkedin },
          { url: 'tel:8125332840', icon: phone },
        ],
      },
      {
        profileImage: dec5,
        username: 'B.Vishnu Vardhan Reddy',
        userHandle: 'Team manager',
        socialLinks: [
          { url: 'https://instagram.com/vishnuvardhan3028?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
          { url: 'https://www.linkedin.com/in/vishnuvardhanreddy-bommireddy-485640286', icon: linkedin },
          { url: 'mailto:bvishnu3004@gmail.com', icon: mail },
          { url: 'tel:9701901664', icon: phone },
        ],
      },
      
    ];
    const FlashTeam = [
      {
        profileImage: fm1,
        username: 'B.PAVAN VIKAS',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'tel:9492224029', icon: phone },
          { url: 'mailto:pavanvikas640@gmail.com', icon: mail },
          { url: 'https://www.linkedin.com/in/pavan-vikas-9a493b1aa', icon: linkedin },
          { url: 'https://instagram.com/__v.i.k.k.y____?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
        ],
      },
      {
        profileImage: fm2,
        username: 'S.Sanath Kumar',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'tel:9392520488', icon: phone },
          { url: 'mailto:sanathsunny765@gmail.com', icon: mail },
          { url: 'https://www.linkedin.com/in/sanath-kumar-56436a286', icon: linkedin },
          { url: 'https://instagram.com/__sanath__kumar?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D', icon: instagram },
        ],
      },
      {
        profileImage: fm7,
        username: 'K.Revanth',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'tel:9293744346', icon: phone },
          { url: 'mailto:revanthkuppala@gmail.com', icon: mail },
          { url: '#', icon: linkedin },
          { url: 'https://instagram.com/revanth._.kuppala?igshid=NTc4MTIwNjQ2YQ==', icon: instagram },
        ],
      },
      {
        profileImage: fm5,
        username: 'L.S Gulsahil',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'tel:8367313104', icon: phone },
          { url: 'mailto:sahilcsbs@gmail.com', icon: mail },
          { url: '#', icon: linkedin },
          { url: 'https://instagram.com/mr._sahil.__01?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
        ],
      },
      {
        profileImage: fm4,
        username: 'S.Radhika',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'tel:9966360350', icon: phone },
          { url: 'mailto:radhikasallagundla@gmail.com', icon: mail },
          { url: '#', icon: linkedin },
          { url: 'https://instagram.com/_itsmeradhi_?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram },
        ],
      },
      {
        profileImage: fm8,
        username: 'M.LIKITHA',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'tel:9603402326', icon: phone },
          { url: 'mailto:likithareddy44285@gmail.com', icon: mail },
          { url: '#', icon: linkedin },
          { url: 'https://instagram.com/likkiiiiiiiiiiii?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
        ],
      },
    ];
    const KalaTeam = [
      {
        profileImage: k1,
        username: 'Matasugur Indu',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://instagram.com/indu_matasugur?igshid=NGExMmI2YTkyZg==', icon: instagram },
          { url: 'https://www.linkedin.com/in/matasugur-indu-423584252', icon: linkedin },
          { url: 'mailto:matasugurindu@gmail.com', icon: mail },
          { url: 'tel:9110502451', icon: phone },
        ],
      },
      {
        profileImage: k3,
        username: 'I.Gowri Priya',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://www.instagram.com/gowripriya_i', icon: instagram },
          { url: 'https://www.linkedin.com/in/gowri-priya-6a6a5a236', icon: linkedin },
          { url: 'mailto:gowripriyaa2003@gmail.com', icon: mail },
          { url: 'tel:6303996256', icon: phone },
        ],
      },
      {
        profileImage: k4,
        username: 'G.Chatrapathi',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://www.instagram.com/_.snow_.banshee', icon: instagram },
          { url: 'https://www.linkedin.com/in/gantala-chatrapathi-b12221237', icon: linkedin },
          { url: 'mailto:chatrapathi.gantala@gmail.com', icon: mail },
          { url: 'tel:8099495555', icon: phone },
        ],
      },
      {
        profileImage: k2,
        username: 'P.Sri Sai Priya',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/priya.reddy._?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
          { url: 'mailto:peddamallusaipriya@gmail.com', icon: mail },
          { url: '#', icon: linkedin },
          { url: 'tel:9490864709', icon: phone },
        ],
      },
      {
        profileImage: k7,
        username: 'B.Madhu kumar reddy',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/m_k_reddy_31481?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram },
          { url: 'mailto:madhukumarr45@gmail.com', icon: mail },
          { url: 'https://www.linkedin.com/in/bojja-reddy-gari-madhu-kumar-reddy-8ba888279', icon: linkedin },
          { url: 'tel:6304419114', icon: phone },
        ],
      },
      {
        profileImage: k6,
        username: 'K.Runwika',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/runvika_?igshid=OGQ5ZDc2ODk2ZA==', icon: instagram },
          { url: 'mailto:runvika02@gmail.com', icon: mail },
          { url: 'https://www.linkedin.com/in/runvika-kopparam', icon: linkedin },
          { url: 'tel:9591665884', icon: phone },
        ],
      },
      {
        profileImage: k5,
        username: 'Bizili Gowtham Lohith',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/rough_boy_lohi?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
          { url: '#', icon: linkedin },
          { url: 'mailto:gowthamlohithbizili111@gmail.com', icon: mail },
          { url: 'tel:7013654482', icon: phone },
        ],
        }
    ];
    
    const SpotTeam = [
      {
        profileImage: s8,
        username: 'V.Adit Madhur',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://instagram.com/adit_madhur', icon: instagram },
          { url: 'https://www.linkedin.com/in/adit-madhur-vadanala-005758215', icon: linkedin },
          { url: 'mailto:aditmadhurvadanala18@gmail.com', icon: mail },
          { url: 'tel:9154907555', icon: phone },
        ],
      }
    ];
    
    const AdTeam = [
      {
        profileImage: ad1, 
        username: 'L.Venkata Datta Aamogh',
        userHandle: 'Coordinator',
        socialLinks: [
          { url: 'https://instagram.com/stalkers_of_midnights?igshid=MzNlNGNkZWQ4Mg==', icon: instagram },
          { url: 'venkatdatta21@gmail.com', icon: mail },
          { url: '6309255122', icon: phone },
          { url: '#', icon: linkedin },
        ],
      },
      {
        profileImage: ad2,
        username: 'Sake Sai Mokshith',
        userHandle: 'Co-coordinator',
        socialLinks: [
          { url: 'https://instagram.com/sai_mokshi_1298?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
          { url: 'mokshithsake@gmail.com', icon: mail },
          { url: '7893316540', icon: phone },
          { url: '#', icon: linkedin },
        ],
      },
      {
        profileImage: ad3, 
        username: 'Krishna Priya Nainappagari',
        userHandle: 'Co-coordinator',
        socialLinks: [
          { url: 'https://instagram.com/_priyaa_royal_?igshid=OGQ5ZDc2ODk2ZA==', icon: instagram },
          { url: 'krishnaapriya27@gmail.com', icon: mail },
          { url: '9347047357', icon: phone },
          { url: '#', icon: linkedin },
        ],
      },
     
    ];
    const RegTeam = [
      {
        profileImage: reg1,
        username: 'P.Sumanaswini',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://instagram.com/sumanaswini_03?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: 'https://www.linkedin.com/in/sumanaswini-pesala-526127236', icon: linkedin },
          { url: 'mailto:psumanaswini1@gmail.com', icon: mail },
          { url: 'tel:9381388168', icon: phone },
        ],
      },
      {
        profileImage: reg2,
        username: 'M.V.Goutham',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://instagram.com/g_o_u_t_h_a_msdian?igshid=OGQ5ZDc2ODk2ZA==', icon: instagram },
          { url: 'https://www.linkedin.com/in/venkata-gowtham-25aa05259', icon: linkedin },
          { url: 'mailto:venkatagoutham254@gmail.com', icon: mail },
          { url: 'tel:9550513621', icon: phone },
        ],
      },
      {
        profileImage: reg3,
        username: 'K.Sai Sahithi',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://www.instagram.com/sahithi1230/#', icon: instagram },
          { url: 'https://www.linkedin.com/in/sai-sahithi-a76747250/#', icon: linkedin },
          { url: 'mailto:ksaisahithi20@gmail.com', icon: mail },
          { url: 'tel:9494726995', icon: phone },
        ],
      },
      {
        profileImage: reg4,
        username: 'D.Mallikarjun',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/awesom_man_dmk?igshid=NTc4MTIwNjQ2YQ==', icon: instagram },
          { url: 'mailto:mallidmk80@gmail.com', icon: mail },
          { url: 'tel:93924715426', icon: phone },
        ],
      },
      {
        profileImage: reg5,
        username: 'G.Subrahmanyam',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/bunny_warrior__?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: 'https://www.linkedin.com/in/gunda-subrahmanyam-a7967a215', icon: linkedin },
          { url: 'mailto:gundasubramanyam1729@gmail.com', icon: mail },
          { url: 'tel:9676783867', icon: phone },
        ],
      },
    ];
    
    const LogTeam = [
      {
        profileImage: l1, 
        username: 'N.Nithin Reddy',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: "tel:9949367490", icon: phone },
          { url: "mailto:nithinr220802@gmail.com", icon: mail },
          { url: 'https://www.linkedin.com/in/nithin-reddy-6b3ab524a/', icon: linkedin },
          { url: 'https://www.instagram.com/_0nithinreddy0_', icon: instagram },
        ],
      },
      {
        profileImage: tech3,
      username: 'B.Leela Sai Sasank Reddy',
      userHandle: 'Wing head',
      socialLinks: [
      { url: "tel:9182502057", icon: phone },
      { url: "mailto:leelasaisasankreddy@gmail.com", icon: mail },
      { url: 'https://www.linkedin.com/in/sasank-reddy-358131216', icon: linkedin },
      { url: 'https://instagram.com/sasankkreddy?igshid=MzRlODBiNWFlZA==', icon: instagram },
    ]
      },
      {
        profileImage: l3, 
        username: 'J.M.Venkatesh',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://instagram.com/venky_____9__________?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram },
          { url: 'venkyappu45@gmail.com', icon: mail },
          { url: '8618320843', icon: phone },
          { url: 'https://www.linkedin.com/in/venkatesh-jaggappagari-55733925a', icon: linkedin },
        ],
      },
      {
        profileImage: l7, 
        username: 'E.Kavya',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://instagram.com/kavyaaa.sayz?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram }, 
          { url: 'mailto:kavyaerragopula12@gmail.com', icon: mail }, 
          { url: 'tel:7075815468', icon: phone }, 
          { url: 'https://www.linkedin.com/in/erragropula-kavya-40093b286', icon: linkedin }, 
        ],
      },
      {
        profileImage: l2, 
        username: 'S.SAI CHARAN KUMAR REDDY',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/sai___charann?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
          { url: 'saicharankumarreddy2107@gmail.com', icon: mail },
          { url: '8187828715', icon: phone },
          { url: 'https://www.linkedin.com/in/sai-charan-kumar-reddy-870887285', icon: linkedin },
        ],
      },
      {
        profileImage: l4, 
        username: 'K.Sowmya sree',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/sowmya_chowdaryy_?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram },
          { url: 'mailto:sowmyachowdarey@gmail.com', icon: mail },
          { url: '9985104311', icon: phone },
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage: l5, 
        username: 'G.S.Suchith',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/urstrulysuchith?igshid=OGQ5ZDc2ODk2ZA==', icon: instagram },
          { url: 'mailto:suchithsetty777@gmail.com', icon: mail },
          { url: 'tel:9550504525', icon: phone },
          { url: 'https://www.linkedin.com/in/suchith-g-s-406505225', icon: linkedin },
        ],
      },
      {
        profileImage: l6, 
        username: 'Vennelakanti Nirmal Prem',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/nirmal.vennelakanti?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram },
          { url: 'mailto:nirmalpremvennelakanti@gmail.com', icon: mail },
          { url: 'tel:', icon: phone },
          { url: 'https://www.linkedin.com/in/nirmal-prem-vennelakanti-a9b831244', icon: linkedin },
        ],
      },
    ];
    const FinTeam = [
      {
        profileImage: fi1, 
        username: 'S.Mohammed Imran',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://instagram.com/_c_.a_.l_.y_.p_.s_.o_?igshid=NzZhOTFlYzFmZQ==', icon: instagram },
          { url: 'mailto:shaikmimran202@gmail.com', icon: mail }, 
          { url: 'tel:7702673295', icon: phone }, 
          { url: '#', icon: linkedin },
        ],
      },
      {
        profileImage: fi2, 
        username: 'A.Shashanth Kumar',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://instagram.com/shashi13_?igshid=MzNlNGNkZWQ4Mg==', icon: instagram },
          { url: 'www.linkedin.com/in/shashanthkumarakkali', icon: linkedin },
          { url: 'mailto:er.shashanth7@gmail.com', icon: mail },
          { url: 'tel:7995658152', icon: phone },
        ],
      },
      {
        profileImage: fi7, 
        username: 'S.Ruhe Saniya',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/ruhesaniya_shaik?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: '#', icon: linkedin },
          { url: 'mailto:ruhesaniya@gmail.com', icon: mail },
          { url: 'tel:6303667017', icon: phone },
        ],
      },
      {
        profileImage: fi8, 
        username: 'M. Ompradeep Reddy',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/ompradeep28?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D', icon: instagram },
          { url: '#', icon: linkedin },
          { url: 'mailto:ompradeep2004@gmail.com', icon: mail },
          { url: 'tel:8008572389', icon: phone },
        ],
      },
      {
        profileImage: fi9, 
        username: 'K.B.Kailash',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://www.instagram.com/kailash._kailu/', icon: instagram },
          { url: '#', icon: linkedin },
          { url: 'mailto:kailashkbc2@gmail.com', icon: mail },
          { url: 'tel:7995438218', icon: phone },
        ],
      },
      {
        profileImage: fi10, 
        username: 'K.Bhavya Sree',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://www.instagram.com/bhavya._.kadiyala/', icon: instagram },
          { url: '#', icon: linkedin },
          { url: 'mailto:bhavyasreekadiyala2004@gmail.com', icon: mail },
          { url: 'tel:6300030324', icon: phone },
        ],
      },
      {
        profileImage: fi4, 
        username: 'V.Kumar',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: '#', icon: instagram },
          { url: 'mailto:kumarnaidu379@gmail.com', icon: mail },
          { url: 'tel:9515385759', icon: phone },
          { url: '#', icon: linkedin },
        ],
      },
      {
        profileImage: fi5,
        username: 'V.Gokul Sindhu',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/s_i_n_d_h_u29?igshid=OGQ5ZDc2ODk2ZA==', icon: instagram },
          { url: '#', icon: mail }, 
          { url: 'tel:7730937027', icon: phone },
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage: fi3, 
        username: 'Vasa Naveen',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/naveen_royal_23?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: '#', icon: mail }, 
          { url: 'tel:9390669787', icon: phone },
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage: fi6, 
        username: 'R.Deepak',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/sunny_archari?igshid=OGQ5ZDc2ODk2ZA==', icon: instagram }, 
          { url: 'mailto:rsunnymay11@gmail.com', icon: mail }, 
          { url: 'tel:8897446592', icon: phone }, 
          { url: '#', icon: linkedin }, 
  ],  
       },
    ];  
    
  
  
    const PubTeam = [
      {
        profileImage: pb2, 
        username: 'D.Hema Sai',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://instagram.com/sri_yesh_', icon: instagram },
          { url: 'mailto:sriyeshsai@gmail.com', icon: mail },
          { url: 'tel:9390530364', icon: phone },
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage: pb1, 
        username: 'V.Sai Sriyesh',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://instagram.com/hemasai_2k3', icon: instagram },
          { url: 'mailto:hemasaisvis@gmail.com', icon: mail },
          { url: 'tel:7981385195', icon: phone },
          { url: 'https://www.linkedin.com/in/hema-sai-dommaraju-451849273/', icon: linkedin },
        ],
      },
      {
        profileImage: pb3,
        username: 'M.Neelesh Sai',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/_mr_prince_4571', icon: instagram },
          { url: 'mailto:muppalamneeleshsai@gmail.com', icon: mail },
          { url: 'tel:6305696344', icon: phone },
          { url: 'https://www.linkedin.com/in/muppalam-neelesh-sai-79678b284/', icon: linkedin },
        ],
      },
      {
        profileImage: pb5, 
        username: 'S.Sameer',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/shaiks.insta/', icon: instagram },
          { url: 'mailto:shaiksameer0860@gmail.com', icon: mail },
          { url: 'tel:9542857667', icon: phone },
          { url: 'https://www.linkedin.com/in/sameer-s-a16358242/', icon: linkedin }, 
        ],
      },
    ];
    const MarkTeam = [
      {
        profileImage: mk1, 
        username: 'P.Amrutha valli',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://instagram.com/_mini_me19?igshid=OGQ5ZDc2ODk2ZA==', icon: instagram },
          { url: 'mailto:valliamrutha203@gmail.com', icon: mail },
          { url: 'tel:7075112582', icon: phone },
          { url: 'https://www.linkedin.com/in/valli-amrutha-02503227a', icon: linkedin },
        ],
      },
      {
        profileImage: mk2, 
        username: 'K.Dinesh kumar reddy',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://www.instagram.com/thekurli/?igshid=MzRlODBiNWFlZA%3D%3D', icon: instagram },
          { url: 'mailto:thekuril12@gmail.com', icon: mail },
          { url: 'tel:9581778202', icon: phone },
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage:mk3, 
        username: 'M.Harshavardhan Raju',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/harsha_mudduluru?igshid=MzNlNGNkZWQ4Mg==', icon: instagram },
          { url: 'mailto:mudduluruharsha@gmail.com', icon: mail },
          { url: 'tel:6309178914', icon: phone },
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage: mk4, 
        username: 'E.Pavan Kalyan',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/life_seeker_sharavath_3__?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram },
          { url: 'mailto:edigapavankalyan2002@gmail.com', icon: mail },
          { url: 'tel:9550382612', icon: phone },
          { url: 'https://www.linkedin.com/public-profile/settings', icon: linkedin },
        ],
      },
      {
        profileImage: mk5, 
        username: 'N.Sowmya sree',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/foodie_buddy_282_?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D', icon: instagram },
          { url: 'mailto:sowmyasree.svdc@gmail.com', icon: mail },
          { url: 'tel:8187825897', icon: phone },
          { url: 'http://www.linkedin.com/in/sowmya-sree-578320241', icon: linkedin },
        ],
      },
      {
        profileImage: mk6, 
        username: 'J.Megha charan',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/megha_jonna?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram },
          { url: 'mailto:jonnameghacharan@gmail.com', icon: mail },
          { url: 'tel:9100948879', icon: phone },
          { url: 'https://www.linkedin.com/in/megha-charan-jonna-1b77b0273', icon: linkedin },
        ],
      },
      {
        profileImage: mk7, 
        username: 'Y.Bhavana',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/bhavana___reddy___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
          { url: 'mailto:bhavanareddyyanamala@gmail.com', icon: mail },
          { url: 'tel:8897819471', icon: phone },
          { url: '#', icon: linkedin }, 
        ],
      },
    ];
    const SponTeam = [
      {
        profileImage: sp1, 
        username: 'C.Abhishek',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://instagram.com/abhishek_bobby?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: 'mailt0:abhishekbobby10@gmail.com', icon: mail }, 
          { url: 'tel:9182053201', icon: phone }, 
          { url: 'https://www.linkedin.com/in/abhishek-bobby-8a4246207', icon: linkedin }, 
        ],
      },
      {
        profileImage: sp6, 
        username: 'V.Sujay',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://instagram.com/gali_chandu_?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: 'mailtp:sujayvarigonda2003@gmail.com', icon: mail }, 
          { url: 'tel:9491684382', icon: phone }, 
          { url: 'https://www.linkedin.com/in/sujay-varigonda-791666211', icon: linkedin },
        ],
      },
      {
        profileImage: sp3, 
        username: 'G.Chandu Chowdary',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://instagram.com/gali_chandu_?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: 'mailto:galichanduchowdary@gmail.com', icon: mail }, 
          { url: 'tel:7569626347', icon: phone }, 
          { url: 'https://www.linkedin.com/in/gali-chandu-chowdary-5aa153229', icon: linkedin },
        ],
      },
      {
        profileImage: sp2, 
        username: 'Bhavish Kumar Shah',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/bhavish__shah?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: 'mailto:Bhavishkumar.shah@gmail.com', icon: mail }, 
          { url: 'tel:8688589058', icon: phone }, 
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage: proimg7,
        username: 'G.Nitin Rahul Roy',
        userHandle: 'Wing head',
        socialLinks: [
          { url: 'https://instagram.com/fire_roy._?igshid=OGQ5ZDc2ODk2ZA==', icon: instagram },
          { url: '#', icon: linkedin }, 
          { url: 'mailto:nitinrahulroy@gmail.com', icon: mail },
          { url: 'tel:8977998802', icon: phone },
        ],
      },
      {
        profileImage: sp5, 
        username: 'S.Likhith',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/likhith_rebel?igshid=MzNlNGNkZWQ4Mg==', icon: instagram },
          { url: 'mailto:likhithsarvisetti@gmail.com', icon: mail }, 
          { url: 'tel:9704231024', icon: phone }, 
          { url: 'https://www.linkedin.com/in/likhith-1024sl/', icon: linkedin }, 
        ],
      },
    ];
   
      
    const PRTeam = [
      {
        profileImage: pr1, 
        username: 'G.Sai Madhav',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://instagram.com/myself_madhav._?igshid=NjIwNzIyMDk2Mg==', icon: instagram },
          { url: 'https://www.linkedin.com/in/g-sai-madhav-73801a216', icon: linkedin },
          { url: 'mailto:#', icon: mail }, 
          { url: 'tel:8328408613', icon: phone },
        ],
      },
      {
        profileImage: pr2, 
        username: 'M.Chennakesava',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://instagram.com/keshavaroyals777?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
          { url: 'https://www.linkedin.com/in/mamilla-chennakesava-28a44a242', icon: linkedin },
          { url: 'mailto:vvrchenna9@gmail.com', icon: mail },
          { url: 'tel:6281297527', icon: phone },
        ],
      },
      {
        profileImage: pr6,
        username: 'S.Prashanthi',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/somannagari_prashanthi?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D', icon: instagram },
          { url: '#', icon: linkedin }, 
          { url: 'mailto:somannagariprashanthi1@gmail.com', icon: mail },
          { url: 'tel:9398694610', icon: phone },
        ],
      },
      {
        profileImage: pr7, 
        username: 'S.Mamatha',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/smamatha1309?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
          { url: '#', icon: linkedin }, 
          { url: 'mailto:smamatha1509@gmail.com', icon: mail },
          { url: 'tel:7416314281', icon: phone },
        ],
      },
      {
        profileImage: pr8, 
        username: 'Santhosh Naik',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/santhosh_bukke_825?igshid=NjIwNzIyMDk2Mg==', icon: instagram },
          { url: '#', icon: linkedin }, 
          { url: 'mailto:removersion143@gmail.com', icon: mail },
          { url: 'tel:6281231977', icon: phone },
        ],
      },
      {
        profileImage: pr3, 
        username: 'C.Sreenuja',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/sreenuja_sree?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: '#', icon: linkedin }, 
          { url: 'mailto:sreenujasree@gmail.com', icon: mail },
          { url: 'tel:8712157570', icon: phone },
        ],
      },
      {
        profileImage: pr4,
        username: 'M.Jyothi Prakash',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/darling_prakash_9638?igshid=MzRlODBiNWFlZA==', icon: instagram },
          { url: '#', icon: linkedin }, 
          { url: 'mailto:mallagundaprakash@gmail.com', icon: mail },
          { url: 'tel:9391761456', icon: phone },
        ],
      },
      {
        profileImage: pr5, 
        username: 'S.Yoshitha',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/seguyoshitha?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
          { url: '#', icon: linkedin }, 
          { url: 'mailto:yoshi.segu@gmail.com', icon: mail },
          { url: 'tel:9848089625', icon: phone },
        ],
      },
    ];
    const HosTeam = [
      {
        profileImage: h1, 
        username: 'K.Saleem Shaik',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://instagram.com/sallushaik9398', icon: instagram },
          { url: 'mailto:saleemshaik1948@gmail.com', icon: mail },
          { url: 'tel:9398458004', icon: phone },
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage: h2, 
        username: 'P.Eswar Rao',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://instagram.com/p_eswar_babu', icon: instagram },
          { url: 'mailto:peswarao646@gmail.com', icon: mail },
          { url: 'tel:9937013819', icon: phone },
          { url: 'https://www.linkedin.com/in/p-eswar-rao-29a22425a', icon: linkedin },
        ],
      },
    
      {
        profileImage: h4, 
        username: 'S.Sanjeeva Mithraaditya',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://instagram.com/__sanjjuu', icon: instagram },
          { url: 'mailto:sampangisanju1@gmail.com', icon: mail },
          { url: 'tel:8555050143', icon: phone },
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage: h5, 
        username: 'Harini Tonpe',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://instagram.com/harini_tonpe', icon: instagram },
          { url: 'mailto:hsss.tonpe@gmail.com', icon: mail },
          { url: 'tel:9676415602', icon: phone },
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage: h6, 
        username: 'S.R.Lohith',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://instagram.com/the_world_of_lohith', icon: instagram },
          { url: 'mailto:lohithmagnate2004@gmail.com', icon: mail },
          { url: 'tel:8121973057', icon: phone },
          { url: 'https://www.linkedin.com/in/lohith-s-r-b7b2aa22a', icon: linkedin },
        ],
      },
      {
        profileImage: h3, 
        username: 'P.LVV Siva',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/siva_7.2', icon: instagram },
          { url: 'mailto:lvvsiva0702@gmail.com', icon: mail },
          { url: 'tel:7337561611', icon: phone },
          { url: 'https://www.linkedin.com/in/lvv-siva-palla', icon: linkedin },
        ],
      },
    ]; 
    const FacTeam = [
      {
        profileImage: fc1, 
        username: 'M.Charan Teja',
        userHandle: 'Wing Head',
        socialLinks: [
          { url: 'https://www.instagram.com/charan_the_peculiar/', icon: instagram },
          { url: 'malepati.charanteja@gmail.com', icon: mail },
          { url: '8184969938', icon: phone },
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage: fc2, 
        username: 'D.Akash',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: 'https://www.instagram.com/akash_chowdary_04/', icon: instagram },
          { url: 'akashdabbara123@gmail.com', icon: mail },
          { url: '8885425855', icon: phone },
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage: fc3, 
        username: 'V.Yojitha',
        userHandle: 'Senior Core',
        socialLinks: [
          { url: '#', icon: instagram },
          { url: '#', icon: mail }, 
          { url: '#', icon: phone }, 
          { url: '#', icon: linkedin }, 
        ],
      },
      {
        profileImage: fc7,
        username: 'CH.Sumanth Reddy',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://www.instagram.com/nanireddy__412/', icon: instagram },
          { url: 'mailto:sumanthreddych2004@gmail.com', icon: mail },
          { url: 'tel:6305099604', icon: phone },
          { url: 'https://in.linkedin.com/in/ch-sumanth-1295b6286', icon: linkedin },
        ],
      },
      {
        profileImage: fc6, 
        username: 'C.Hema Varun',
        userHandle: 'Junior Core',
        socialLinks: [
          { url: 'https://www.instagram.com/hema_varun_/', icon: instagram },
          { url: 'mailto:Varunh263@gmail.com', icon: mail },
          { url: 'tel:9392500630', icon: phone },
          { url: 'https://www.linkedin.com/in/hema-varun/', icon: linkedin },
        ],
      },
      {
        profileImage: fc4, 
        username: 'K.Kushal Karthik',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: 'https://instagram.com/_kushalkarthik_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', icon: instagram },
          { url: 'Kushalrock4687@gmail.com', icon: mail },
          { url: '7013930467', icon: phone },
          { url: 'https://www.linkedin.com/mwlite/in/kushal-karthik-a38186225', icon: linkedin },
        ],
      },
      {
        profileImage: fc5, 
        username: 'B.Leela Ganesh',
        userHandle: 'Team Manager',
        socialLinks: [
          { url: '#', icon: instagram },
          { url: '#', icon: mail },
          { url: 'tel:8978517926', icon: phone },
          { url: '#', icon: linkedin },
        ],
      },
    ];


  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (  
 
    <div className='main-team'>
      <NavigationComponent />
      <CustomCursor />
      
        <div className="middle-button">
          
        <div className='middle-btn'>
      <div className="buttons-container">
        <div className="btn-team">
        <button className="rectangle-div-btn-top" onClick={() => handleCategoryClick('admin')}>Cultural</button>
        <button className="rectangle-div-btn-top" onClick={() => handleCategoryClick('cultural')}>Admin</button>
        </div>
        <button className="rectangle-div-btn" onClick={() => handleCategoryClick('technical')}>Technical</button>
      </div>
      </div>
      <div className="middle-btn-1">
      <div className="buttons-container-1">
      <button className="rectangle-div-btn-1" onClick={() => handleCategoryClick('technical')}>Technical</button>
        <button className="rectangle-div-btn-1" onClick={() => handleCategoryClick('admin')}>Cultural</button>
        <button className="rectangle-div-btn-1" onClick={() => handleCategoryClick('cultural')}>Admin</button>
      </div>
      </div>
      </div>
      <img
        src={earth}
        alt=""
        className="leftearth"
        style={{
          transform: `translate(-60%, -10%) rotate(${rotationAngle}deg)`,
          position: 'fixed',
          mixBlendMode: 'difference',
        }}
      />
      <img src={side} alt="" className='mmbar'/>
      {activeCategory === 'technical' && (
        <div className='team'>
          <div className="team-section">
            <h1 className="team-heading">Technical Department</h1>
            <div className="profiles-container">
              {TechTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Web Development Team</h1>
            <div className="profiles-container">
              {webDevTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Social Media Team</h1>
            <div className="profiles-container">
              {SocTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <small className="profile-user-handle">{profile.userHandle1}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Designing Team</h1>
            <div className="profiles-container">
              {DevTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Workshops Team</h1>
            <div className="profiles-container">
              {WorkTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Technoholic Team</h1>
            <div className="profiles-container">
              {TechnoTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeCategory === 'admin' && (
        <div className="team">
          <div className="team-section">
            <h1 className="team-heading">Cultural Department</h1>
            <div className="profiles-container">
              {CultTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Proshows Team</h1>
            <div className="profiles-container">
              {ProTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Decoration Team</h1>
            <div className="profiles-container">
              {DecTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Flashmob Team</h1>
            <div className="profiles-container">
              {FlashTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Kalakshetra Team</h1>
            <div className="profiles-container">
              {KalaTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Spot Events Team</h1>
            <div className="profiles-container">
              {SpotTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {activeCategory === 'cultural' && (
        <div className='team'>
          <div className="team-section">
            <h1 className="team-heading">Admin and Managment Department</h1>
            <div className="profiles-container">
              {AdTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Registrations Team</h1>
            <div className="profiles-container">
              {RegTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Logistics Team</h1>
            <div className="profiles-container">
              {LogTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Finance Team</h1>
            <div className="profiles-container">
              {FinTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Publicity Team</h1>
            <div className="profiles-container">
              {PubTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Marketing Team</h1>
            <div className="profiles-container">
              {MarkTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Sponsorship Team</h1>
            <div className="profiles-container">
              {SponTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Public Realtions Team</h1>
            <div className="profiles-container">
              {PRTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Hospitality Team</h1>
            <div className="profiles-container">
              {HosTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h1 className="team-heading">Facilities Team</h1>
            <div className="profiles-container">
              {FacTeam.map((profile, index) => (
                <div className="profile" key={index}>
                  <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                  </div>
                  <h2 className="profile-username">{profile.username}</h2>
                  <small className="profile-user-handle">{profile.userHandle}</small>
                  <div className="profile-links">
                    {profile.socialLinks.map((socialLink, index) => (
                      <a href={socialLink.url} className="link link--icon" key={index}>
                        <img src={socialLink.icon}></img>
                      </a>
                    ))}
                  </div>
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
export default TheTeam1;