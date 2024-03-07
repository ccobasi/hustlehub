// eslint-disable-next-line no-unused-vars
import React from 'react';
import Img from "../../../assets/auto-group-lnaj.png";

export const FifthFeature = () => {
  const fifthStyle = {
    marginBottom: '60px',
  }
  const containerStyle = {
    display: "flex",
    gap: "30px",
    width: "767px",
    height: "170px",
    top: "704px",
    left: "20px",
    borderRadius: "24px",
   
  };

  const cardStyle = {
    width: '370px',
    height: '186px',
    top: '704px',
    left: '20px',
    borderRadius: '24px',
    background: '#87CEEB',
  };

  const oneStyle = {
    width: '184px',
    height: '47px',
    top: '1521px',
    left: '55px',
    borderRadius: '12px',
    color: '#FFFFFF',
    marginLeft: '55px',
    marginTop: '20px',
    display: 'flex'
  }

  const imgStyle  = {
    width:'46px',  
    height:'46px',
    marginRight: '20px'
  }

  const twoStyle = {
    width: '240px',
    height: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '11px',
    color: '#FFFFFF',
    marginTop: '30px',
    marginLeft: '60px',
  }

  const spanStyle = {
    width: '69px',
    height: '26px',
    borderRadius: '65px',
    background: '#99d5ee',
    textAlign: 'center',
    paddingTop: '5px'
    
  }

  const threeStyle = {
    width: '87px',
    height: '21px',
    color: '#fff',
    fontSize: '18px',
    lineHeight: '21px',
    marginLeft: '55px',
    marginTop: '20px'
  }

  return (
    <>
      <div className="fifth" style={fifthStyle}>
        <div className="container" style={containerStyle}>
          <div className="card" style={cardStyle}>
             <div className="one" style={oneStyle}>
                <img src={Img} style={imgStyle}  alt="google" />
                <div className="product">
                    <h4>Product Design</h4>
                    <h6>Google</h6>
                </div>
             </div>
             <div className="two"  style={twoStyle}>
              <span style={spanStyle}>Design</span>
              <span style={spanStyle}>UI/UX</span>
              <span style={spanStyle}>Junior</span>
             </div>
             <div className="three" style={threeStyle}>
              <h6>UI Design Job</h6>
             </div>
          </div>
          <div className="card" style={cardStyle}>
              <div className="one" style={oneStyle}>
                <img src={Img} style={imgStyle}  alt="google" />
                <div className="product">
                    <h4>Product Design</h4>
                    <h6>Google</h6>
                </div>
             </div>
             <div className="two"  style={twoStyle}>
              <span style={spanStyle}>Design</span>
              <span style={spanStyle}>UI/UX</span>
              <span style={spanStyle}>Junior</span>
             </div>
             <div className="three" style={threeStyle}>
              <h6>UI Design Job</h6>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

