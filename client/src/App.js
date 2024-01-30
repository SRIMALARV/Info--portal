import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import "./styles/app.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import JobPortal from "./pages/JobPortal";
import MobileNav from "./components/MobileNav";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Compete from "./components/Compete";
import News from "./components/News";
import Calendar from "./components/Calendar";
import Chatbot from "./components/Chatbot";
import Jobh from "./components/Jobh";
import Create from "./components/Create";
import Bavya from"./components/Bavya";
import Harsh from"./components/Harsh";
import Sri from "./components/Sri";
import Code from "./components/Code";
import Resume from "./components/Resume";
import Pop from"./components/Pop";
import PracticeHero from "./components/PracticeHero";
import Chatapp from"./components/Chatapp";
import Register from"./components/Register";
import RegisterEvent from"./components/RegisterEvents";
import Hotels from"./components/Hotels";
import Compete1 from "./components/Compete1";
import LPM from "./components/LPM";
import Profile from "./components/Profile";



function App() {
  const user = localStorage.getItem("token");
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/practice"
          element={<Practice />}
        />
        <Route
          path="/job-portal"
          element={<JobPortal />}
        />
        <Route
          path="/Hotels"
          element={<Hotels/>}
        />
        <Route
          path="/Login"
          element={<Login />}
        />
        <Route
         path="/Compete"
         element={<Compete/>}
         />
         <Route
         path="/News"
         element={<News/>}
         />
          <Route
         path="/Calendar"
         element={<Calendar/>}
         />
         <Route
         path="/Chatbot"
         element={<Chatbot/>}
         />
          <Route
         path="/Jobh"
         element={<Jobh/>}
         />
         <Route
         path="/Create"
         element={<Create/>}
         />
         
         <Route
          path="/Bavya"
          element={<Bavya/>}
          />
          <Route
          path="/Harsh"
          element={<Harsh/>}
          />
          <Route
          path="/Sri"
          element={<Sri/>}
          />
          <Route
          path="/Code"
          element={<Code/>}
          />
          <Route
          path="/Resume"
          element={<Resume/>}
          />
          <Route
          path="/Pop"
          element={<Pop/>}
          />
          <Route
          path="/Chatapp"
          element={<Chatapp/>}
          />
          <Route
          path="/RegisterEvent"
          element={<RegisterEvent/>}
          />
          <Route
          path="/Compete1"
          element={<Compete1/>}
          />
          <Route
          path="/LPM"
          element={<LPM/>}
          />
           <Route
          path="/Profile"
          element={<Profile/>}
          />
          
        <Route 
      path="/Register" 
      element={<Register />}/>
      {user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
      <MobileNav />
    </Router>
  );
}
export default App;
