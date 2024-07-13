/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const ProfileCard = ({ profilePicture, name, title, rating }) => {
  return (
    <div className="profile-card">
      <img
        src={profilePicture}
        style={{ width: "50px", height: "50px", borderRadius: "25px" }}
        alt="Profile"
        className="profile-picture"
      />
      <div className="details">
        <h2 className="name">{name}</h2>
        <p className="title">{title}</p>
        <div className="rating">Rating: {rating}</div>
      </div>
      <style jsx="true">{`
        .profile-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
          
          border-radius: 10px;
          
          max-width: 370px;
          height: 170px;
          margin: 0 auto;
        }

        .profile-picture {
          margin-left: 10px;
          float: left;
        }

        .details {
          text-align: left;
        }

        .name {
          margin: 0;
          
            font-family: Poppins;
            font-size: 14px;
            font-weight: 600;
            line-height: 18px;
            letter-spacing: -0.01em;
            text-align: center;
            color: #5b5c5e;

        }

        .title {
          margin: 5px 0;
          font-size: 1rem;
          
font-family: Poppins;
font-size: 12px;
font-weight: 400;
line-height: 19px;
letter-spacing: -0.01em;
text-align: center;

        }

        .rating {
          font-size: 0.9rem;
        }

      `}</style>
    </div>
  );
};

export default ProfileCard;
