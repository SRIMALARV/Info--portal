import React,{useState}  from 'react'
import "../styles/eventdetails.css";
import axios from 'axios';
import { NavLink } from "react-router-dom";
let individuals=JSON.parse(localStorage.getItem('individuals')||"[]")
let details=JSON.parse(localStorage.getItem('details')||"[]")
const Register = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);
  const competitionUrl=individuals[0].webaddress;
  const apiKey = 'AIzaSyBLghonn-saPRpIoSVXdWSG-WX3BsLPNOA';
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(competitionUrl)}`;
  const whatsappShareUrl = `whatsapp://send?text=Check out this competition: ${encodeURIComponent(competitionUrl)}`;
  const subject = 'Check out this competition';
  const body = `Hey! I found this interesting competition: ${competitionUrl}`;
  const gmailShareUrl = `https://mail.google.com/mail/?view=cm&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  function save(val){
    var details=JSON.parse(localStorage.getItem('details')||"[]");
    var detail={
      url:val.url,
      eventname:val.eventname,
      organizer:val.organizer}
      details.push(detail);
      localStorage.setItem('details',JSON.stringify(details) )
  }
  const searchVideos = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchTerm}&part=snippet&type=video`);
      const videoData = response.data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
      }));
      setVideos(videoData);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };
    return (
        <div className="fulldetails">
          {
            individuals.map((val)=>{return(
              <div className="whole">
          <div className="whole1">
            <div className="image1">
              <img src={val.url} style={{width:"200px",height:"200px"}}/>
            </div>
            <div className="details2">
              <h2>{val.eventname}</h2>
              <h4>{val.category}</h4>
              <h4>{val.organizer}</h4>
              <h4>Coimbatore</h4>
            </div>
          </div>
          <div className="whole2">
            <div className="watchlist">
              <button className="watchlist1">+Watchlist</button>
              <button className="calender">+Calender</button>
            </div>
            <div className="amount">
              <h5 className="amounts">Fees:Rs.450</h5>
            
                      <NavLink to={"/RegisterEvent"}>
                        <button className="registerss" onClick={()=>{save(val)}}>Register</button>
                        
                      </NavLink>
                       
                      <NavLink to={"/Hotels"}>
                        <button className="registerss" >Accomodations</button>
              
                      </NavLink>
            </div>
          </div>
          <div className="whole3">
            <div className="impression">
              <h5>Impressions:45678</h5>
            </div>
            <div className="deadline">
              <div >
                <h6>Registration Deadline:    30 Aug 23,11:59 PM IST</h6>
              </div>
            </div>
            <div className="teamsize">
              <h5>Team Size :{val.teamsize}</h5>
            </div>
          </div>
          <div className="whole4">
            <div className="aboutss">
              <h3>About:</h3>
              <ul>
                <li>
                  {val.about}
                </li>
                
              </ul>
            </div>
            <hr />
            <div className="outcomess">
              <h3>Outcomes</h3>
              <ul>
                <li>
                  {val.outcome}
                </li>
                
              </ul></div>
            <hr />
            <div className="detailss">
              <p><strong>Details:</strong></p>
              <ul>
                <li><strong>Registration Fee Details (per team):</strong>
                  <ul>
                    <li>IEEE Members: Rs. 300</li>
                    <li>Non-IEEE Members: Rs. 450</li>
                    <li><strong>Note</strong>: The fee is to be paid at the venue</li>
                  </ul>
                </li>
                <li><strong>Abstract Submission deadline: </strong>
                  <ul>
                    <li>25 August 2023</li>
                  </ul>
                </li>
                <li><strong>Finals Date: </strong>
                  <ul>
                    <li>8 September 2023</li>
                  </ul>
                </li>
                <li><strong>Time: </strong>
                  <ul>
                    <li>9:30 AM - 4:30 PM @KCT Campus</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="guideliness">
              <div>
                <p><strong>Guidelines:</strong></p>
                <div>
                  <ul>
                    <li>A maximum of 3 members per team is allowed.</li>
                    <li>The participants are required to carry their college ID Cards.</li>
                    <li>Teams will be given space to set up their model/design at the venue for the review.</li>
                    <li>The presentation should be in poster format.</li>
                    <li>Each team will be given 10 to 15 minutes for presentation.</li>
                    <li>Bring your own laptops.</li>
                    <li>All should bring their own components.</li>
                    <li>Food and Refreshments will be provided.</li>
                  </ul>
                </div>
              </div>
              <div className="themess">
                <h3>Themes</h3>
                <ul>
                  <li>Sustainable Development Goals</li>
                  <li>Society-Specific Themes (but not restricted to)
                    <ul>
                      <li>Antenna and Propagation</li>
                      <li>Signal Processing&nbsp;</li>
                      <li>Power and Energy</li>
                    </ul>
                  </li>
                  <li>Must bring their <strong>P</strong><strong>rototype or Simulation.</strong></li>
                </ul>
              </div>
            </div>
            <div className="prizess">
              <img src="prizes.png" alt="" style={{width: '100%'}} />
            </div>
            <div>
           <div>
      <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="linko">
        Share on Facebook
      </a>
      <a href={whatsappShareUrl} data-action="share/whatsapp/share" className="linko">
        Share on WhatsApp
      </a>
      <a href={gmailShareUrl} className="linko">
        Share via Email
      </a>
      
                        
    </div>
            

      <div className="youtubess">

      <h3>Suggested videos</h3>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
        className="search"
      />
      <span><button onClick={searchVideos} className="searchBtns">Search</button></span>
      
      
      <div className="videos-container">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
              <div className="video-thumbnail">
              <img  src={video.thumbnail} alt={video.title} />
              <h3>{video.title}</h3>
              </div>
               
            </a>
          </div>
        ))}
      </div>
    </div>
          </div> 

        </div>
</div>
            )})
          }
          </div>
        
      );
}

export default Register

