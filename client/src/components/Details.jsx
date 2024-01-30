import React from 'react'
import {IoIosLocate,IoIosClock,IoIosHourglass,IoIosPeople,IoIosSearch,IoIosCash} from "react-icons/io";
let win=JSON.parse(localStorage.getItem('win')||"[]")

const Details = () => {
  return (
    <div className="details1">
      <div className="details1-header">
          <img src={win[0].url}/>
          <h2>{win[0].name}</h2>
          <p>{win[0].post}</p>
      </div>
      <hr className="dividers"/>
      
      <div className="details1-desc">
          <div className="abouts" >
              <h4>About company</h4>
              <p>{win[0].description}</p>
          </div>
          <hr className="dividers"/>
          <div style={{display:"flex",justifyContent:"space-around",marginRight:"3px"}}>
          <p ><span className="iconss"><IoIosHourglass/></span>{win[0].duration}</p>
          <p ><span className="iconss"><IoIosCash/></span>Salary:{win[0].salary}/year</p>
          </div>
          <hr className="dividers"/>
          <div className="qualifications">
              <h4>
              Skills Required:{win[0].skillsRequired}
              </h4>
              <hr className="dividers"/>
              <h3>Our Expectations</h3>
              <ul>
                  <li>Must Have Knowledge of statistical techniques and machine learning algorithms </li>
                  <li>Understanding of Text analysis- Natural Language processing (NLP)</li>
                
              </ul>
          </div>
      </div>
  
      <div className="details1-btn">
          <button className="btns-apply">Apply Now</button>
          <button className="btns-save">Save Job</button>
      </div>
      </div>
            
  )}

export default Details