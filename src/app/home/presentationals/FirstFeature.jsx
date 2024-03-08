// eslint-disable-next-line no-unused-vars
import React from 'react';
// import banner2 from '../../../assets/banner2.jpg';
import banner from '../../../assets/banner.jpg';
import '../data/style.css'

export const FirstFeature = () => {
  return (
    <section className="slider_section">
      <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="first-slide" src={banner} alt="First slide" style={{width: '100vw'}} />
            <div className="container">
              <div className="carousel-caption relative">
                <h1>
                  Require assistance?  
                <br /> <strong className="black_bold">Seek assistance!  </strong>
                  <br />
                  <strong className="yellow_bold">Discover service providers<br /> in your vicinity! </strong>
                </h1>
                <p>
                  Explore home service providers or join as a provider to offer your services to <br/>clients in search of them. Begin your journey by signing up!
                </p>
                <a href="sign-up">Get Started</a>
              </div>
            </div>
          </div>
          
        </div>
        <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
          <i className="fa fa-angle-right"></i>
        </a>
        <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
          <i className="fa fa-angle-left"></i>
        </a>
      </div>
    </section>
  );
};

export default FirstFeature;


