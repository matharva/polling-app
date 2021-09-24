import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Faq from "./Faq";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import LandingNavbar from "./LandingNavbar";

const LandingPage = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/main/poll")
  }, [])
  return (
    <div>
      <LandingNavbar />
      <Hero />
      <AboutUs />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
