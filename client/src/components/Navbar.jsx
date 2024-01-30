import React from "react";
import "../styles/navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.png";
import Login from "./Login";

const Navbar = () => {
  
  return (
    <>
      <nav>
        <div className="navbar container">
          <div className="nav-left">
            <div className="nav-img">
              <NavLink to={"/"}>
                <img
                  src={logo} width="250px"
                  alt="logo"
                />
              </NavLink>
              
            </div>
    
          </div>
          <div className="nav-right">
            <div className="nav-tabs">
             
              <div className="practice-tab">
                <NavLink to={"/practice"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">practice</span>
                </NavLink>
              </div>
              <div className="compete-tab">
                <NavLink to={"/Compete1"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">compete</span>
                </NavLink>
              </div>
             
              <div className="jobs-tab">
                <NavLink to={"/job-portal"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">jobs</span>
                </NavLink>
              </div>
            </div>
            <div className="nav-btns">
              <button className="btn host-btn">
              <NavLink to={"/Create"}>
                <img
                  src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/host-icon.svg"
                  alt="host btn"
                />
                <span color="white" style={{color:"white"}}>CREATE EVENT</span>
                </NavLink>
              </button>
              <button className="btn login-btn">
                <NavLink to={"/Login"}>
                <span style={{color:"white"}}>Login</span>
                <img
                  src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/login_icon.svg"
                  alt="host btn"
                />
                </NavLink>
              </button>
              <button className="menu-btn">
              <NavLink to={"/News"}>
                <img
                  src="https://th.bing.com/th/id/OIP.9-B66WDvQATM9XC3EFOuIQHaHl?pid=ImgDet&rs=1"
                  alt="menu"
                  width={35}
                />
                </NavLink>
              </button>
              <button className="Calendar-btn">
              <NavLink to={"/Calendar"}>
                <img
                  src="https://icon-library.com/images/calendar-icon-png/calendar-icon-png-2.jpg"
                  alt="menu"
                  width={35}
                />
                </NavLink>
              </button>
              <button className="Chatbot-btn">
              <NavLink to={"/Chatbot"}>
                <img
                  src="https://cdn.jim-nielsen.com/ios/1024/mimo-learn-to-code-2018-11-28.png"
                  alt="Chatbot"
                  width={35}
                />
                </NavLink>
              </button>
              <button className="Profile-btn">
              <NavLink to={"/Profile"}>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/interface-20/24/ui_interface_user_user_interface_person-512.png"
                  alt="Chatbot"
                  width={35}
                />
                </NavLink>
              </button>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
