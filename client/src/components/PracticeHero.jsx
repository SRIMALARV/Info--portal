import React, { useRef } from "react";
import "../styles/practicehero.css";
import "../styles/app.css";
import {useNavigate} from "react-router-dom";
import Motiv from "./Motiv";
const PracticeHero = () => {
  const windowSize = useRef(window.innerWidth);
 
  
  const navigate = useNavigate();
  const navigateToCont = () => {
    
    navigate('/Code');
  };
  const navigateToContacts = () => {
    navigate('/Harsh');
   
  };
  const navigateToCon = () => {
    navigate('/Bavya');
   
  };
  const navigateToCall = () => {
    navigate('/Sri');
   
  };
  
  
  return (
    <section className="practicehero">
      <div className="practicehero-container container">
        <div className="practicehero-left">
          <div className="practicehero-left-top">
          
            <h1>Practice</h1>
            <p>
              Solve easy to complex problems & get hands-on experience to get
              hired by your dream company!
            </p>
          </div>
          <div className="practicehero-cards">
            <a >
              <span>
                PYTHON
                <button  className="button" onClick={navigateToCall}>Take test</button>
              </span>
            </a>
            
            <a>
              <span>
                 C PROGRAM
                <button   className="button" onClick={navigateToContacts}>Take Test</button>
              </span>
             
            </a>
            <a>
              <span>
                C++
                <button  className="button" onClick={navigateToCont}>Take test</button>
              </span>
            </a>
            <a >
              <span>
                JAVA
              <button  className="button" onClick={navigateToCon}>Take test</button>
              </span>

            </a>
          </div>
        </div>
        
        <div className="practicehero-img">
          <img
            src={
              windowSize.current <= 1100
                ? " https://d8it4huxumps7.cloudfront.net/uploads/images/63ca2437e147a_practice_hero_mobile.png"
                : "https://d8it4huxumps7.cloudfront.net/uploads/images/63ca281cba532_practice_hero.png"
            }
            alt="practice hero"
          />
        </div>
      </div>
      <Motiv/>
    </section>
  );
};

export default PracticeHero;

