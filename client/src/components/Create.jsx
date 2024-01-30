import React from 'react'
import "../styles/create.css";
let courses=JSON.parse(localStorage.getItem('courses')||"[]")
const Create = () => {
    const[url,setUrl]=React.useState('');
    const [eventname,setEventname]=React.useState('')
    const [organizer,setOrganizer]=React.useState('')
    const [mode,setMode]=React.useState('')
    const [dateo,setstartDateo]=React.useState('')
    const [enddateo,setendDateo]=React.useState('')
    const [regdateo,setregDateo]=React.useState('')
    const [payment,setPayment]=React.useState('')
    const [city,setCity]=React.useState('')
    const [category,setCategory]=React.useState('')
    const [webaddress,setAddress]=React.useState('')
    const [teamsize,setTeamsize]=React.useState('')
    const [guidlines,setGuidlines]=React.useState('')
    const [outcome,setOutcome]=React.useState('')
    const [about,setAbout]=React.useState('')
    const [theme,setTheme]=React.useState('')
    const [contactperson1,setContactperson1]=React.useState('')
    const [contactperson2,setContactperson2]=React.useState('')
    const [contactperson1num,setContactperson1num]=React.useState('')
    const [contactperson2num,setContactperson2num]=React.useState('')
    function save(){
        var courses=JSON.parse(localStorage.getItem('courses')||"[]")//convert string to object
        var course={
           url:url,
           eventname:eventname,
           organizer:organizer,
           mode:mode,
           dateo:dateo,
           enddateo:enddateo,
           regdateo:regdateo,
           payment:payment,
           city:city,
           category:category,
           webaddress:webaddress,
           teamsize:teamsize,
           guidlines:guidlines,
           outcome:outcome,
           about:about,
           theme:theme,
           contactperson1:contactperson1,
           contactperson2:contactperson2,
           contactperson1num:contactperson1num,
           contactperson2num:contactperson2num
        }
        courses.push(course);

        localStorage.setItem('courses',JSON.stringify(courses) )
        
}
    return (
        <div className="signup_container">
            <div className="signup_form_container">
                <div className="left">
                    <form className="form_container">
                    <h1>Event Credentials</h1>
                        <input
                            type="url"
                            placeholder="Enter image url"
                            value={url}
                            onChange={(e)=>{setUrl(e.target.value)}}
                            name="event name"
                            className="input"
       
                        />
                        <input
                            type="text"
                            placeholder="Event name"
                            value={eventname}
                            onChange={(e)=>{setEventname(e.target.value)}}
                            name="event name"
                            className="input"
                        />
                        
        <div className="input1"  value={category} onChange={(e)=>{setCategory(e.target.value)}}>
         <label>
            <input
              type="radio"
              name="category"
              value="Coding"  
            />
            Coding event &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </label>
          
          <label>
            <input
              type="radio"
              name="category"
              value="Webinar"  
            />
            Webinar   <br />
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Seminar"  
            />
             Seminar  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Workshop"  
            />
            Workshop   < br />
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Competition"  
            />
            Competition   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Symposium"  
            />
            Symposium  <br/>
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Conference"  
            />
            Conference    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                      </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Hackathon"  
            />
            Hackathon
          </label>
        </div>
                        <input
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e)=>{setCity(e.target.value)}}
                            name="city"
                            className="input"
                        />
                       
                        <input
                            type="text"
                            placeholder="Organized by"
                            value={organizer}
                            onChange={(e)=>{setOrganizer(e.target.value)}}
                            name="organizer"
                            className="input"
                        />
                            <input
                            type="text"
                            placeholder="Event Mode"
                            value={mode}
                            onChange={(e)=>{setMode(e.target.value)}}
                            name="mode"
                            className="input"
                        />
                        
                        <input
                            type="date"
                            placeholder="Competition start date"
                            value={dateo}
                            onChange={(e)=>{setstartDateo(e.target.value)}}
                            name="date"
                            className="input"
                        />
                           <input
                            type="date"
                            placeholder="Competition end date"
                            value={enddateo}
                            onChange={(e)=>{setendDateo(e.target.value)}}
                            name="date"
                            className="input"
                        /> 
                         <input
                            type="date"
                            placeholder="Registration dead line"
                            value={regdateo}
                            onChange={(e)=>{setregDateo(e.target.value)}}
                            name="date"
                            className="input"
                        /> 
                        
                        <input
                            type="text"
                            placeholder="Payment amount"
                            value={payment}
                            onChange={(e)=>{setPayment(e.target.value)}}
                            name="payment"
                            className="input"
                           />
                      </form>
                </div>      
                <div className="right">
                <form className="form_container">
                           <input
                            type="text"
                            placeholder="Enter your website Address"
                            value={webaddress}
                            onChange={(e)=>{setAddress(e.target.value)}}
                            name="webaddress"
                            className="input"
                           />  
                           <input
                            type="text"
                            placeholder="Enter team size"
                            value={teamsize}
                            onChange={(e)=>{setTeamsize(e.target.value)}}
                            name="teamsize"
                            className="input"
                           />
                           
                           
        <textarea rows = "4" cols = "40" name = "description" value={about}   placeholder="Enter about the event"  onChange={(e)=>{setAbout(e.target.value)}} className="input" >
            Enter about the event
         </textarea>
         <textarea rows = "4" cols = "40" name = "description" value={outcome}   placeholder="Enter the outcome of the event"  onChange={(e)=>{setOutcome(e.target.value)}} className="input" >
            Enter the outcomes of the event
         </textarea>
         <textarea rows = "4" cols = "40" name = "description" value={guidlines}   placeholder="Enter the guidlines of the event"  onChange={(e)=>{setGuidlines(e.target.value)}} className="input" >
            Enter the Guidlines of the event
         </textarea>
         <input
                            type="text"
                            placeholder="Enter theme of the event"
                            value={theme}
                            onChange={(e)=>{setTheme(e.target.value)}}
                            name="theme"
                            className="input"
                           />
                            <input
                            type="text"
                            placeholder="Contact person1"
                            value={contactperson1}
                            onChange={(e)=>{setContactperson1(e.target.value)}}
                            name="contactperson1"
                            className="input"
                           />
                           <input
                            type="text"
                            placeholder="Contact person1 mobile number"
                            value={contactperson1num}
                            onChange={(e)=>{setContactperson1num(e.target.value)}}
                            name="contactperson1num"
                            className="input"
                           />
                            <input
                            type="text"
                            placeholder="Contact person2"
                            value={contactperson2}
                            onChange={(e)=>{setContactperson2(e.target.value)}}
                            name="contactperson2"
                            className="input"
                           />
                            <input
                            type="text"
                            placeholder="Contact person2 mobile number"
                            value={contactperson2num}
                            onChange={(e)=>{setContactperson2num(e.target.value)}}
                            name="contactperson2num"
                            className="input"
                           />

                        <button className="green_btn"
                          onClick={() => {
                         save();
        } 
        
                            }>CREATE EVENT</button>
                        
    
                 
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create
