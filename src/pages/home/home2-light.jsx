import React, { useRef } from 'react';
import BlcSec from "../../components/Blc-sec";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import IntroWithSlider2 from "../../components/Intro-with-slider2";
import Navbar from "../../components/Navbar";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
import LightTheme from "../../layouts/Light";
import appData from "../../data/app.json";

const Homepage2 = () => {
  const clientRef = useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);

  return (

    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider2 />
      <BlcSec />
      {/* <Services2 /> */}
      {/* <VideoWithTestimonials /> */}
      {/* <SkillsCircle theme="l  ight" subBG /> */}
      <PortfolioCustomColumn column={3} hideFilter={"true"} filterPosition="left" />
      <Clients1 ref={clientRef} theme="light" subBG />
      <CallToAction theme="light" img="/img/pattern-light.png" />
      <Footer />
    </LightTheme>

  );
};

export default Homepage2;
