// eslint-disable-next-line no-unused-vars
// import React from 'react';

// export const FirstFeature = () => {
//   return (
//     <div className="hero" style={{ marginTop: '20px', padding: '60px', textAlign: 'center', width: '100%', height: '70vh', fontSize: '35px',
//   lineHeight: '70px' }}>
//       <h1>
//         Require assistance? Seek assistance!
//         <br />
//         Discover service providers in your vicinity!
//       </h1>
//     </div>
//   );
// };
// eslint-disable-next-line no-unused-vars
import React from 'react';
import banner2 from '../../../assets/banner2.jpg';
import '../data/style.css'

export const FirstFeature = () => {
  return (
    <section className="slider_section">
      <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="first-slide" src={banner2} alt="First slide" style={{width: '100vw'}}/>
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


