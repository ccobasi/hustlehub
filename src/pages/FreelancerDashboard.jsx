import React from 'react';
import './styles/freelancer-dashboard.css'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Img from '../assets/mask-group-kU6.png'
import Left from '../assets/akar-icons-chevron-left-ZQr.png'

const theme = createTheme();


const FreelancerDashboard = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className="freelancer-dashboard-vUN">
      <div className="auto-group-cypa-JvA">
    <div className="auto-group-6cte-EJ2">
      <img className="akar-icons-chevron-left-ABg" src={Left}/>
      <p className="edit-tdU">Edit</p>
    </div>
    <div className="auto-group-qktu-NYe">
      <div className="group-102-HvW">
        <div className="auto-group-pba6-E54">
          <div className="group-90-wkA">
            <img className="mask-group-HJE" src={Img}/>
          </div>
          <p className="haley-jessica-oGa">Haley Jessica</p>
          <div className="group-101-7YA">
            <p className="ux-designer-Esg">UX Designer</p>
            <img className="ic-round-verified-Lvi" src="../assets/ic-round-verified.png"/>
          </div>
        </div>
        <div className="group-94-sQr">
          <div className="group-91-22r">
            <p className="item-27-NcW">27</p>
            <p className="applied-UvS">Applied</p>
          </div>
          <div className="group-92-PnW">
            <p className="item-19-wZ8">19</p>
            <p className="completed-GLW">Completed</p>
          </div>
          <div className="group-93-znJ">
            <p className="item-14-AAz">14</p>
            <p className="interviews-Gzi">Interviews</p>
          </div>
        </div>
      </div>
      <div className="group-100-1Bc">
        <div className="auto-group-spsa-Ljg">
          <p className="analytics-sUi">Analytics</p>
          <div className="auto-group-fgar-zpE">
            <p className="my-projects-xWA">My Projects</p>
            <p className="see-all-ffU">See all</p>
          </div>
        </div>
        <div className="component-2-Npn">
          <div className="auto-group-z4lw-Wg6">
            <img className="image-4-sWe" src="./assets/image-4-rWA.png"/>
          </div>
          <div className="auto-group-51fk-QmU">
            <p className="product-manager-Ycn">UX Intern</p>
            <p className="beats-fSW">Spotify</p>
          </div>
          <div className="auto-group-nwv6-bLA">
            <p className="y-YWJ">San Jose, US</p>
            <p className="florida-us-sHg">Dec 20 - Feb 21</p>
          </div>
        </div>
      </div>
    </div>
    <div className="auto-group-u2rk-Y8v">
      <div className="group-99-oKk">
        <div className="auto-group-uvn2-8sp">
          <p className="earnings-63x">Earnings</p>
          <p className="see-all-Br6">See all</p>
        </div>
        <p className="view-more-h3k">View More</p>
      </div>
      <div className="group-103-1q8">
        <p className="ux-design-project-1-iUe">UX Design Project 1</p>
        <p className="item-500-pna">$500</p>
      </div>
      <div className="group-104-vKp">
        <p className="ux-design-project-2-qBt">UX Design Project 2</p>
        <p className="item-450-wVp">$450</p>
      </div>
    </div>
    <div className="auto-group-pbnn-Rft">
      <div className="home-indicator-B9G">
      </div>
      <div className="group-98-JDt">
        <p className="reviews-and-ratings-F98">Reviews and Ratings</p>
        <div className="auto-group-c2ia-NjY">
          <div className="auto-group-7ygv-gkE">
            <div className="auto-group-jh42-CCn">
              <p className="very-professional-and-has-a-good-eye-for-design-XVx">
              Very professional and
              <br/>
              has a good eye for design.
              </p>
              <div className="rating-d3C">
                <img className="star-1-xrA" src="./assets/star-1-oie.png"/>
                <img className="star-2-W6z" src="./assets/star-2-zvS.png"/>
                <img className="star-3-36v" src="./assets/star-3-hCa.png"/>
                <img className="star-4-yWN" src="./assets/star-4-XLi.png"/>
                <img className="star-5-K4S" src="./assets/star-5-TEN.png"/>
              </div>
            </div>
            <div className="line-184-raA">
            </div>
            <p className="emilia-smith-BMY">Emilia Smith</p>
          </div>
          <div className="rectangle-166-5xi">
          </div>
        </div>
      </div>
    </div>
  </div>
      
    </div>
    </ThemeProvider>
  );
};

export default FreelancerDashboard;
