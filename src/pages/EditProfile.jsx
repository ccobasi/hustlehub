// eslint-disable-next-line no-unused-vars
import React from 'react';
import './styles/edit-profile.css';
import Back from '../assets/akar-icons-chevron-left-ypS.png'

const EditProfile = () => {
  return (
    <div className="edit-profile-ghC">
     
      <img className="akar-icons-chevron-left-UHc" src={Back} alt="Back"/>
      <div className="auto-group-delv-o4z">
        {/* Rest of your content goes here */}
        {/* Ensure to replace the image src paths and other content accordingly */}
      </div>
      <div className="menu-bar-1KC">
        <img className="home-Kqg" src="./assets/home.png" alt="Home"/>
        <img className="connection-esx" src="./assets/connection.png" alt="Connection"/>
        <img className="add-nUN" src="./assets/add-Nyc.png" alt="Add"/>
        <img className="chat-WvA" src="./assets/chat.png" alt="Chat"/>
        <img className="save-rUE" src="./assets/save.png" alt="Save"/>
      </div>
    </div>
  );
};

export default EditProfile;
