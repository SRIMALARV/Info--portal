import React from "react";
import "../styles/lpm.css";
import { NavLink } from "react-router-dom";

const LPM = () => {
  const images = [
    {
      title: "Jobs",
      image:
        "http://www.jobstreet.co.id/en/cms/employer/wp-content/uploads/sites/20/2020/03/rsz_19765.jpg",
        link: "Jobh",
    },
    {
      title: "Practice",
      image:
        "https://images.techhive.com/images/article/2016/09/hackathon_innovation-100682586-primary.idge.jpg",
        link: "Practice", 
    },
    {
      title: "News",
      image:
        "https://programminglibrarian.org/sites/default/files/event_planning.jpg",
        link: "News",
    },
    {
      title: "Hackathons",
      image:
        "https://www.statworx.com/wp-content/uploads/Titelbild_Hackathon.png",
        link: "Calendar",
    },

  ];
  return (
    
    <section className="lpm">
      
      <div className="lpm-container container">
        <div className="lpm-images">
          {images.map((ele) => {
            return (    
              <div
                className="lpm-image"
                key={ele.image}
              >
                <span>{ele.title}</span>
                <a href={ele.link}>
                  <img
                    src={ele.image}
                    alt={ele.title}
                  />
                </a>
               
              </div>
              
            );
          })}
        </div>
        <NavLink  to={"/Compete"}>
        <img
                src="https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-3-1/16/5109-256.png"
                width={50}
                />
                </NavLink>
      </div>
    </section>
  );
};

export default LPM;
