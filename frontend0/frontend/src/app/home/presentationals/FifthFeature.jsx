// eslint-disable-next-line no-unused-vars
import React from 'react';
import Img from "../../../assets/auto-group-lnaj.png";
import './fifthFeature.css'

export const FifthFeature = () => {
  
  return (
    <>
      <div className="fifth">
        <div className="container">
          <div className="card" style={{background: "#87ceeb", borderRadius: "24px"}}>
             <div className="one">
                <img src={Img}  alt="google" />
                <div className="product">
                    <h4>Product Design</h4>
                    <h6>Google</h6>
                </div>
             </div>
             <div className="two">
              <span>Design</span>
              <span>UI/UX</span>
              <span>Junior</span>
             </div>
             <div className="three">
              <h6>UI Design Job</h6>
             </div>
          </div>
          <div className="card" style={{background: "#87ceeb", borderRadius: "24px"}}>
              <div className="one">
                <img src={Img}  alt="google" />
                <div className="product">
                    <h4>Product Design</h4>
                    <h6>Google</h6>
                </div>
             </div>
             <div className="two">
              <span>Design</span>
              <span>UI/UX</span>
              <span>Junior</span>
             </div>
             <div className="three">
              <h6>UI Design Job</h6> 
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

