import React, { useState } from 'react';
import '../styles/create.css';
import Confetti from 'react-confetti';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal'; // Import the modal library
let details=JSON.parse(localStorage.getItem('details')||"[]")
const Create = () => {
  const[participant1,setParticipant1]=React.useState('');
    const [participant2,setParticipant2]=React.useState('');
    const [participant3,setPartcipant3]=React.useState('');
  const [confettiActive, setConfettiActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the modal

  const handleConfetti = () => {
    setConfettiActive(true);
    setIsModalOpen(true); // Open the modal

    setTimeout(() => {
      setConfettiActive(false);
    }, 10000); // Stop confetti after 10 seconds
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };


  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="right">
          <form className="form_container">
            <h1>Registration form</h1>
            <input
              type="name"
              placeholder="Enter participant 1"
              name="Participant1"
              className="input"

            />
             <input
              type="name"
              placeholder="Enter participant 2"
              name="Participant2"
              className="input"

            />
             <input
              type="name"
              placeholder="Enter participant 3"
              name="Participant3"
              className="input"

            />
            <input
              type="name"
              placeholder="Enter your college name"
              name="collegename"
              className="input"

            />
            <input
              type="name"
              placeholder="Enter participant 1 mail id"
              name="Participant1mail"
              className="input"

            />
             <input
              type="name"
              placeholder="Enter participant 2 mail id"
              name="Participant2mail"
              className="input"

            />
             <input
              type="name"
              placeholder="Enter participant 3 mail id"
              name="Participant3mail"
              className="input"

            />
            <input
              type="text"
              placeholder="Team name"
              name="teamname"
              className="input"
            />
            
          </form>
          {confettiActive && <Confetti />}
          <button onClick={()=>{handleConfetti()} } className="buttonso">Register</button>

          {/* Modal for success message */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Registration Success Modal"
            ariaHideApp={false}
          >
            <div className="modal-content">
              <h2>You have registered successfully!</h2>
              <button onClick={closeModal}>Close</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Create;
