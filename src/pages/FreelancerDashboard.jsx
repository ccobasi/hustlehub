// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './styles/freelancer-dashboard.css'; 
import './styles/profile-drop.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Img from '../assets/mask-group-kU6.png'
import Left from '../assets/akar-icons-chevron-left-ZQr.png'
import Verify from '../assets/ic-round-verified.png';
import Icon from '../assets/image-4-rWA.png'
import One from '../assets/star-1-oie.png'
import Two from '../assets/star-2-zvS.png'
import Three from '../assets/star-3-hCa.png'
import Four from '../assets/star-4-XLi.png'
import Five from '../assets/star-5-TEN.png'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Close from '../assets/akar-icons-cross.png'
import Personal from '../assets/group-187.png'
import Vector from '../assets/vector-dav.png'
import Proposal from '../assets/group.png'
import Resume from '../assets/group-186.png'
import Portfolio from '../assets/group-188.png'
import Support from '../assets/vector-FNE.png'
import Settings from '../assets/vector-KMx.png'
import Logout from '../assets/group-191.png'
import { Link } from 'react-router-dom';
// import Premium from '../assets/group-181.png'

const theme = createTheme();

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


const FreelancerDashboard = () => {
  
const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };




  return (
    <ThemeProvider theme={theme}>
    <div className="freelancer-dashboard-vUN">
      <div className="auto-group-cypa-JvA">
    <div className="auto-group-6cte-EJ2">
      <img className="akar-icons-chevron-left-ABg" onClick={handleOpen} src={Left}/>
      <Link to="/edit"><p className="edit-tdU" >Edit</p></Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200}}>
          <div className="profile-drop-toQ">
  <div className="group-185-dkz">
    
    <div className="group-215-4za">
      <div className="group-214-R4S">
        <div className="auto-group-822a-7CA">
          <div className="group-180-psG">
            <div className="group-90-xyU">
              <img className="mask-group-hAN" src={Img}/>
            </div>
            <p className="haley-jessica-pEz">Haley Jessica</p>
            <div className="group-101-LUE">
              <p className="ux-designer-Gsg">UX Designer</p>
              <img className="ic-round-verified-Ay4" src={Verify}/>
            </div>
          </div>
          <img className="akar-icons-cross-6ri" src={Close} onClick={handleClose}/>
        </div>
        <p className="view-profile-dLr">View Profile</p>
        <div className="auto-group-h2az-YTp">
          <img className="group-187-skz" src={Personal}/>
          <p className="type8-D4A">Personal Info</p>
        </div>
        <div className="auto-group-qiji-XqY">
          <img className="vector-4qU" src={Vector}/>
          <p className="type8-oo4">Applications</p>
        </div>
        <div className="auto-group-g2kq-YVk">
          <img className="group-4yt" src={Proposal}/>
          <p className="type8-QH4">Proposals</p>
        </div>
        <div className="auto-group-sjjc-LwQ">
          <img className="group-186-HLr" src={Resume}/>
          <p className="type8-opz">Resumes</p>
        </div>
        <div className="auto-group-os58-kES">
          <img className="group-188-5Xc" src={Portfolio}/>
          <p className="type8-oCi">Portfolio</p>
        </div>
        <div className="auto-group-pbwv-js4">
          <img className="vector-H7t" src={Support}/>
          <p className="type8-DnE">Support</p>
        </div>
        <div className="group-193-xzi">
          <img className="vector-u9G" src={Settings}/>
          <p className="type8-ESS">Settings</p>
        </div>
        <div className="group-192-y98">
          <img className="group-191-WPx" src={Logout}/>
          <p className="type8-SHc">Logout</p>
        </div>
        {/* <div className="button-man">
          <div className="group-182-VWn">
            <img className="group-181-TCi" src={Premium}/>
            <p className="next-CAJ">Go Premium</p>
          </div>
        </div> */}
      </div>
    </div>
  </div>
          </div>
          
        </Box>
      </Modal>
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
            <img className="ic-round-verified-Lvi" src={Verify}/>
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
            <img className="image-4-sWe" src={Icon}/>
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
                <img className="star-1-xrA" src={One}/>
                <img className="star-2-W6z" src={Two}/>
                <img className="star-3-36v" src={Three}/>
                <img className="star-4-yWN" src={Four}/>
                <img className="star-5-K4S" src={Five}/>
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
