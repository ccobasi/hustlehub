// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProfileCard from "./ProfileCard";
import Img from "../../../assets/ellipse-782-bg-KhY.png";
import Img1 from "../../../assets/ellipse-782-bg-y4z.png";
import './thirdFeature.css'

export const ThirdFeature = () => {
 
  return (
    <>
      <div className="third">
        <div className="container">
          <div className="card" >
            <ProfileCard
              profilePicture={Img}
              name="Jane Doe"
              title="Software Engineer"
              rating={4.5}
            />
          </div>
          <div className="card">
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
