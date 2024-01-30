import React from "react";
import FeaturedOpp from "../components/FeaturedOpp";
import GetHired from "../components/GetHired";
import HomeHero from "../components/HomeHero";
import LPM from "../components/LPM";
import Opportunities from "../components/Opportunities";
import OurNumbers from "../components/OurNumbers";
import Showcase from "../components/Showcase";
import SlidingBrands from "../components/SlidingBrands";
import { useState } from 'react';
import '../styles/Home.css';
const Home = () => {
  const [contactClicked, setContactClicked] = useState(false);

  const handleContactClick = () => {
    // Toggle the contactClicked state when the contact option is clicked
    setContactClicked(!contactClicked);}
  return (
    <>

      <HomeHero />
      <Showcase type={"home"} />
      <LPM />
      <FeaturedOpp type={"home"} />
      
    </>
  );
};

export default Home;

