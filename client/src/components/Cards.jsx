import React from 'react'
import {BsBriefcase} from "react-icons/bs";
import {IoIosLocate,IoIosClock,IoIosHourglass,IoIosPeople,IoIosSearch} from "react-icons/io";
import "../styles/jobs.css";
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Details from './Details'
export let win=JSON.parse(localStorage.getItem('win')||"[]")
 const arr=[{
    id:1,
    url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
    name:"Google",
    post:"Data science Engineer",
    location:"Chennai",
    posted:"1 minute ago",
    duration:"Fulltime",
    applicants:"100 Applicants",
    division:"Data Engineer",
    salary:"350k",
    skillsRequired:["machine learning ,deep learning ,data science"],
    description:"Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information"
},
{   id:2,
    name:"ZohoCorp",
    url:"https://betanews.com/wp-content/uploads/2019/04/zoho.jpg",
    post:"Java Full Stack Developer",
    location:"Coimbatore",
    posted:"1 week ago",
    duration:"fulltime",
    applicants:"500 Applicants",
    division:"Full stack",
    salary:"550k",
    skillsRequired:["html ","css ","jss "],
    description:"Work with brands to understand their business objectives and develop the Meta strategy in partnership with the Client Partner, which will constitute building on insights, crafting media plans, page strategy, creative and measurement recommendations"
},
{   id:3,
  name:"Amazon",
  url:"https://www.mytotalretail.com/wp-content/uploads/sites/14/2015/05/Amazon-logo4.jpg",
  post:"Cloud platform offering",
  location:"Banglore",
  posted:"2 weeks ago",
  duration:"fulltime",
  applicants:"300 Applicants",
  division:"Cloud computing",
  salary:"600k",
  skillsRequired:["Big data, ", "DevOps"],
  description:"Amazon.com, Inc. is an online retailer that offers a wide range of products. Amazon offers personalized shopping services, Web-based credit card payment, and direct shipping to customers. Amazon also operates a cloud platform offering services globally."
},
{   id:4,
  name:"Infosys",
  url:"https://www.itvoice.in/wp-content/uploads/2018/12/infosys-logo.jpg",
  post:"Data strategist",
  location:"Karnataka",
  posted:"1 month ago",
  duration:"parttime",
  applicants:"400 Applicants",
  division:"IT Solutions and Services",
  salary:"90k ",
  skillsRequired:["Cloud Services, ", "Artificial Intelligence, ", "Digital"],
  description:"Our always-on learning agenda drives their continuous improvement through building and transferring digital skills, expertise, and ideas from our innovation ecosystem."
  
},
{   id:5,
  name:"Tata Consultancy Services",
  url:"https://media-exp3.licdn.com/dms/image/C4E0BAQFrYjS52BIjbA/company-logo_200_200/0/1610441152873?e=2159024400&v=beta&t=2NX1muG8HsCh8zxca6bSbxzO6wghCkX_Aic1DKxYE2I",
  post:"Programmer",
  location:"Chennai",
  posted:"1 month ago",
  duration:"fulltime",
  applicants:"700 Applicants",
  division:"High Performance Computing",
  salary:"150k ",
  skillsRequired:[" DBMS, ", "Programming, ", "Digital"],
  description:"The most valuable IT service brands worldwide, and is the top Big Tech (India) company. The company announced a partnership with Aurus, a payments technology company, to deliver payment solutions for retailers using TCS OmniStore, a first of its kind unified store commerce platform."
  
},



]  
export let id=1;
win=JSON.parse(localStorage.getItem('win')||"[]");
function Cards (){
    const navigate=useNavigate();
    const navigateToCon=()=>{
      navigate('/Cards');
    };
    const[names,setName]=useState('');
    const [posts,setPost]=useState('');
    const [locations,setLocation]=useState('');
    const[posteds,setPosted]=useState('');
    const[durations,setDuration]=useState('');
    const[applicantss,setApplicant]=useState('');
    const[divisions,setDivision]=useState('');
    const[salaries,setSalary]=useState('');
    const[skillsRequireds,setSkillsRequired]=useState('[]');
    const[descriptions,setDescription]=useState('');
    const[urls,setUrl]=useState('');
    function reloadPage(){
        window.location.reload(false);
    }
    function save(item){
        setName(item.name)
        setPost(item.post)
        setLocation(item.location)
        setPosted(item.posted)
        setDuration(item.duration)
        setApplicant(item.applicants)
        setDivision(item.division)
        setSalary(item.salary)
        setSkillsRequired(item.skillsRequired)
        setDescription(item.description)
        setUrl(item.url)
            var harshus={
                name:names,
                post:posts,
                location:locations,
                posted:posteds,
                duration:durations,
                applicants:applicantss,
                division:divisions,
                salary:salaries,
                skillsRequired:skillsRequireds,
                description:descriptions,
                url:urls
            }
            win.pop();
            win.push(harshus);

        localStorage.setItem('win',JSON.stringify(win));
        
    }
    const mystyle = {
        position:"relative",
        right:"20px"
      };
    const [searchTerm, setSearchTerm] = useState("");
        return (
        <>   
          <div className="main">
            <div  className="main-header">
            <div className="search">
            <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        </div>
            </div>
            <div className="sort">
                <p>Sort</p>
                <div className="sort-list">
                    <select>
                        <option value="0">All</option>
                        <option value="1" >Newest post</option>
                        <option value="2">Oldest post</option>
                        <option value="2">Most Relevant</option>
                    </select>
                </div>
             </div>
             <div className="template_Container">
          {
            arr
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val)=>{
                return (
                    <>
                   <div className="wrapper" >
                       <div className="card" >
                           <div className="card-left blue-bg" onClick={()=>{save(val)}}>
                               <img src={val.url}/>
                           </div>
                         
        
                           <div className="card-center" >
                              
                               <h3>{val.name}</h3>
                               <p className="card-detail">{val.post}</p>
                            
                               <p className="card-loc"  style={{position:"relative",right:"14px"}} ><span className="iconss"><IoIosLocate/></span>{val.location}</p>
                             
                               <div className="card-sub">
                               
                                <p style={mystyle}>
                                    <span className="iconss"><IoIosClock/></span>{val.posted}</p>
                                <div style={{display:"flex"}}>
                                <p style={mystyle}><span className="iconss"><IoIosHourglass/></span>{val.duration}</p>
                                <p style={mystyle}><span className="iconss"><IoIosPeople/></span>{val.applicants}</p>
                                </div>
                               </div>
                           </div>
                           <div className="card-right">
                            <div className="card-tag">
                                <h5>Divison</h5>
                                <a href="#">{val.division}</a>
                            </div>
                            <div className="card-salary">
                                <p><b>${val.salary}</b><span>/year</span></p>
                                <button onClick={()=>{reloadPage()}}>View More</button>
                            </div>
                           </div>
                       </div>
                   </div>
                  </>
                  )
                })
              
          }
          </div>
          <Details/>
          </div>
          </>
        )
  
}

export default Cards