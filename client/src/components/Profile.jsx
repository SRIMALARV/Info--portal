// src/components/UserProfile.js
import React from 'react';
import '../styles/profile.css'; // Import your CSS stylesheet

const UserProfile = () => {
  return (
    <div>
    <div className="user-profile">
      <img
        className="profile-picture"
        src="https://t4.ftcdn.net/jpg/02/82/72/09/360_F_282720917_7ZtAfEqEfA6CRT66imV9avGWXEg9w6Jt.jpg" // Replace with the user's profile picture URL
        alt="Profile"
      />
     
      
      <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="profile.css" />
  <title>User Scoreboard</title>
  <div className="scoreboard">
    <div className="user">
     
      <h2>   Harshni   </h2>
    </div>
    <div className="score">
      <h3>Score:</h3>
      <p>2500</p>
    </div>
  </div>
</div>

    <div className="container">
            <h1>Skill Set</h1>
            <div className="bar learning" data-skill="C"></div>
            <div className="bar back basic" data-skill="Python"></div>
            <div className="bar back intermediate" data-skill="C++"></div>
            <div className="bar front advanced" data-skill="Java"></div>
          </div>
          </div>
   </div> 
  );
};

export default UserProfile;
