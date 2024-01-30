import React, {useState, useEffect} from "react";
import "../styles/Compete.css";
import { NavLink } from "react-router-dom";
let courses=JSON.parse(localStorage.getItem('courses')||"[]")
let details=JSON.parse(localStorage.getItem('details')||"[]")
function displayOne(val){
  var individuals=JSON.parse(localStorage.getItem('individuals')||"[]")
   var individual={
    url:val.url,
    eventname:val.eventname,
    organizer:val.organizer,
    mode:val.mode,
    dateo:val.dateo,
    enddateo:val.enddateo,
    regdateo:val.regdateo,
    payment:val.payment,
    city:val.city,
    category:val.category,
    webaddress:val.webaddress,
    teamsize:val.teamsize,
    guidlines:val.guidlines,
    outcome:val.outcome,
    about:val.about,
    theme:val.theme,
    contactperson1:val.contactperson1,
    contactperson2:val.contactperson2,
    contactperson1num:val.contactperson1num,
    contactperson2num:val.contactperson2num
   }
   individuals.pop();
   individuals.push(individual);
   localStorage.setItem('individuals',JSON.stringify(individuals) )
  
}
function save(val){
  var details=JSON.parse(localStorage.getItem('details')||"[]");
  var detail={
    url:val.url,
    eventname:val.eventname,
    organizer:val.organizer,
    category:val.category}
    details.push(detail);
    localStorage.setItem('details',JSON.stringify(details) )
}
function Compete() {
  const searchTerm="Hackathon";

  return (
    <>
      <div className="templateContainer">
        
        <div className="template_Container">
          {
            courses
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.url} alt="" />
                      <h3 className="eventname">{val.eventname}</h3>
                      <h4>{val.organizer}</h4>
                      <h4>{val.category}</h4>
                      <h4>Coimbatore</h4>
                      <h4>Event date:  {val.dateo}</h4>
                      <button>
                      <NavLink to={"/Register"}>
                        <button onClick={()=>{displayOne(val);save (val)}} className="styled-btn">Register</button>   
                      </NavLink>
                       
                      </button>
                      

                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Compete;

