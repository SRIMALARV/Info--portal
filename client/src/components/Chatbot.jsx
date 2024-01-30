import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import "../styles/chatbot.css";

const Chatbot = () => {
    const steps = [
        {
          id: "Greet",        
          message: "Hello, Welcome to our website",        
          trigger: "Done",        
        },        
        {       
          id: "Done",        
          message: "Please enter your name!",        
          trigger: "waiting1",        
        },      
        {      
          id: "waiting1",      
          user: true,      
          trigger: "Name",      
        },      
        {       
          id: "Name",     
          message: "Hi {previousValue}, Let me know your issue",     
          trigger: "Issue",     
        },   
        {       
          id: "i",     
          message: "Let me know your issue",     
          trigger: "Issue",     
        }, 
        {      
          id: "Issue",      
          user: true,      
          trigger: "email1",      
        }, 
        {       
          id: "email1",     
          message: "Kindly enter your email",     
          trigger: "email",     
        },
        {      
          id: "email",      
          user: true,      
          trigger: "response",      
        },  
        {       
          id: "response",     
          message: "We will let you know once the issue is over",     
          trigger: "issues",     
        },   
        {      
          id: "issues",   
          options: [   
            {    
              value: "Any other issues",   
              label: "Any other issues",        
              trigger: "i",       
            },       
            { value: "No issues", label: "no issues", trigger: "Angular" },       
          ],       
        },       
          
        {       
          id: "Angular",       
          message:       
            "Thanks for contacting us",       
          end: true,       
        },       
      ]; 
        
  return (
     <div className="body1">
     <center><div className="chat">
   
    <p className="fullarea">
    <Segment className="mychatbot"> <ChatBot steps={steps}/></Segment> 
    </p>
    </div> </center>
    </div>
  );
}

export default Chatbot