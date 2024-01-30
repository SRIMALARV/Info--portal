import React from 'react'
import {BsBriefcase} from "react-icons/bs";
import {IoIosLocate,IoIosClock,IoIosHourglass,IoIosPeople,IoIosSearch} from "react-icons/io";
import "../styles/jobs.css";
import Cards from "./Cards"
import Details from "./Details"
import { NavLink } from "react-router-dom";

const Jobs = () => {
    return(
    <div className="jobss">
            <div className="sidebar">
            <h1 className="logo">Jobsplace</h1>
           <p className="res" > Showcase your achievements and unique experiences with a stunning resume. Start building your own resume here,
           <button className="btn res-btn">
              <NavLink to={"/Resume"}><center>
                <img width={17}
                  src="https://cdn-icons-png.flaticon.com/128/3135/3135752.png"
                  alt="host btn"
                />
                <span color="white" style={{color:"white"}}>BUILD RESUME</span></center>
                </NavLink>
              </button></p>
           
           </div>
           
             <Cards/>
             </div>
    )
}

export default Jobs