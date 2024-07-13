// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProfileCard from "./ProfileCard";
import Img from "../../../assets/ellipse-782-bg-KhY.png";
import Img1 from "../../../assets/ellipse-782-bg-y4z.png";
import './thirdFeature.css'

export const FourthFeature = () => {
  // const thirdStyle = {
  //   marginBottom: '60px',
  // }
  // const containerStyle = {
  //   display: "flex",
  //   gap: "30px",
  //   width: "767px",
  //   height: "170px",
  //   top: "704px",
  //   left: "20px",
  //   borderRadius: "24px",
  //   border: "1px solid #FFFFFF",
  // };

  // const cardStyle = {
  //   width: '370px',
  //   height: '170px',
  //   top: '704px',
  //   left: '20px',
  //   borderRadius: '24px',
  //   background: '#e9f1f4',
  // };

  return (
    <>
      <div className="third">
        <div className="container">
          <div className="card">
            <ProfileCard
              profilePicture={Img}
              name="Emily Willis"
              title="Outstanding Service"
              rating={4.5}
            />
          </div>
          <div className="card">
            <ProfileCard
              profilePicture={Img1}
              name="John Doe"
              title="Very Trusted"
              rating={4.5}
            />
          </div>
        </div>
      </div>
    </>
  );
};

