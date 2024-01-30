import React from "react";
import "../styles/jobportal.css";
import { NavLink } from "react-router-dom";
import Jobh from "./Jobh";
const JobPortalHero = () => {
  return (
    <section className="jobportal">
      <div className="jobportal-container container">
        <div className="jobportal-left">
          <div className="jobportal-left-top">
            <h1>
            Find your dream 
              <br />Job now!
            </h1>
            <p>
            Services to help you get hired, faster: from preparing your CV, finding the right jobs, and more!
            </p>
          </div>
          
          <div className="jobportal-cards">
           <a>
           <NavLink to={"/jobh"}>
              <strong>Jobs</strong>
                </NavLink>
              </a>
            
            <a href="">
              <strong>Interships</strong>
            </a>
            <a href="">
              <strong>Hiring Challenges</strong>
            </a>
          </div>
        </div>
        <div className="jobportal-img" >
          <img
            src="https://o.remove.bg/downloads/e39689a2-5be4-4767-9d88-870e7c03fb8e/woman-working-telecommuting-inside-house_23-2148503808-removebg-preview.png"
            alt="job postal hero"
            width={1000}
            height={500}
            
          />
          <div className="speaker">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d74c0f70dbe_internships_icon.png?d=80x80"
              alt="Internships"
            />
            <div>
              <span> Internships</span>
            </div>
          </div>
          <div className="building">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d74bc4b38e2_companies_icon.png?d=80x80"
              alt="Companies"
            />
            <div>
              <span> Companies </span>
            </div>
          </div>
          <div className="bag">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d74becd0c8f_job_icon.png?d=80x80"
              alt="bag"
            />
            <div>
             <span> Jobs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPortalHero;
