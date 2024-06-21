import useLogout from "../../hooks/useLogout.js";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext.jsx";


import Carousel from "./Carousel/Carousel.jsx";
import OnlineClass from "./OnlineClasses/OnlineClass.jsx";
import WhatWeOffer from "./WhatWeOffer.jsx/WhatWeOffer.jsx";
import LiveProject from "./LiveProject/LiveProject.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import WhyJoin from "./WhyJoin/WhyJoin.jsx";
import Footer from "./Footer/Footer.jsx";
import Navbar from "./Navbar/Navbar.jsx";

const Home = () => {

  const {logout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  }

  const goToDashboard = () => { 
    navigate("/dashboard");
  }

  return (
    <>
      <Navbar />
      <Carousel />
      <OnlineClass />
      <WhatWeOffer />
      <LiveProject/>
      <AboutUs />
      <WhyJoin />
      <Footer />
    </>
  )
}

export default Home;
