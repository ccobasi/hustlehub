// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProfileCard from "./ProfileCard";
import Img from "../../../assets/ellipse-782-bg-KhY.png";
import Img1 from "../../../assets/ellipse-782-bg-y4z.png";

export const ThirdFeature = () => {
  const thirdStyle = {
    marginBottom: '60px',
  }
  const containerStyle = {
    display: "flex",
    gap: "30px",
    width: "767px",
    height: "136px",
    top: "704px",
    left: "20px",
    borderRadius: "24px",
    border: "1px solid #FFFFFF",
  };

  const cardStyle = {
    width: '370px',
    height: '170px',
    top: '704px',
    left: '20px',
    borderRadius: '24px',
    background: '#D9D9D9',
  };

  return (
    <>
      <div className="third" style={thirdStyle}>
        <div className="container" style={containerStyle}>
          <div className="card" style={cardStyle}>
            <ProfileCard
              profilePicture={Img}
              name="Jane Doe"
              title="Software Engineer"
              rating={4.5}
            />
          </div>
          <div className="card" style={cardStyle}>
            <ProfileCard
              profilePicture={Img1}
              name="John Doe"
              title="Backend Engineer"
              rating={4.5}
            />
          </div>
        </div>
      </div>
    </>
  );
};

