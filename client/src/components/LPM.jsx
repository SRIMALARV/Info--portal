import React from "react";
import "../styles/lpm.css";
import { NavLink } from "react-router-dom";

const LPM = () => {
  const images = [
    {
      title: "Seminars",
      image:
        "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/23/posts/27224/image/competitor-analysis-for-small-buiness-competitors.jpg",
        link: "Seminar",
    },
    {
      title: "Workshops",
      image:
        "https://www.volusion.com/blog/content/images/2020/02/Search-Engine-Competition.png",
        link: "Workshops",
      
    },
    {
      title: "Conference",
      image:
        "https://sloanreview.mit.edu/wp-content/uploads/2021/03/GEN-Hughes-internal-competition-1290x860-1.jpg",
        link: "Conference",
    },
    {
      title: "Webinars",
      image:
        "https://assets.devx.work/images/haas/solution/hackathon/hackathon-img-2.png",
        link: "Webinars",
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
