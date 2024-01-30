import React from 'react';
import Modal from 'react-modal';
import { Link, NavLink,useNavigate} from "react-router-dom";
import MockTests from './MockTests';
import PracticeHero from './PracticeHero';
import "../styles/Compete.css";

Modal.setAppElement('#root'); // Set the root element for accessibility

function PopupModal({ isOpen, onRequestClose }) {
  const navigate = useNavigate();
  const navigateToPrac = () => {
    navigate('/PracticeHero');
   
  };
  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
  
    
    content: {
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      padding: '20px',
      textAlign: 'center',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
      contentLabel="Example Modal"
    >
      <h2>Hi!</h2>
      <p className="pop"> 
        Worried about the competition, Check youself by attending some Quiz
         Go to practice session!!!!
      </p>
      <button  className="rounded-button">Practice</button>
      <button  className="rounded-button" onClick={onRequestClose}>Close</button>
      
    </Modal>
  );
}

export default PopupModal;