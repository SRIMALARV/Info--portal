import React from "react";
import "../styles/homehero.css";
import imagei from "../assets/sc.png";
import { NavLink } from "react-router-dom";

const HomeHero = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scroll to the bottom of the page
      behavior: 'smooth', // Optional: Smooth scrolling animation
    });
  };
  return (
    <section className="home-hero">
     
      <div className="home-hero-container container">
        <div className="home-hero-left">
          <h1>
           Compete to
            <br />
            <strong>Win, Experience & Learn</strong>
          </h1>
          <p>
            Take a look at our competitions and see what oppurtunities are available right now! 
          </p>
        </div>
        <div className="downarr">
        <center>
              <button onClick={scrollToBottom} >
                <img 
                src= "https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/01_arrow_down-512.png"
                width={60}></img>
              </button>    
              ViewEvents
              </center></div>
        <div className="home-hero-right">

          <div className="home-hero-right-images">
             <img src={imagei}></img>
          
          </div>
          <button className="btn host1-btn">
              <NavLink to={"/Chatapp"}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/566/566769.png"
                  alt="host1 btn"
                  width={27}
                />
                
                <span color="white" style={{color:"white"}} className="fon">Chat online</span>
                </NavLink>
              </button>
              
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
