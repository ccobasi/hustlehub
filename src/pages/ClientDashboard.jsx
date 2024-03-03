// eslint-disable-next-line no-unused-vars
import React from 'react';
import './styles/client-dashboard.css'; 
import ImgChevronLeft from '../assets/akar-icons-chevron-left-Mvv.png';
import ImgMaskGroup1 from '../assets/mask-group-yca.png';
import ImgMaskGroup2 from '../assets/mask-group-jQS.png';
import ImgVerified from '../assets/ic-round-verified-zkv.png';
import ImgImage4 from '../assets/image-4.png';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import ProfileDrop from './ProfileDrop';

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

const ClientDashboard = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="client-dashboard-HeW">
      
      <div className="auto-group-5qci-8qU">
        <div className="auto-group-hykc-3Se">
          <img className="akar-icons-chevron-left-Zft" onClick={handleOpen} src={ImgChevronLeft} alt="Chevron Left" />
          <Link to="/edit"><p className="edit-ty4">Edit</p></Link>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200}}>
         <ProfileDrop/>
          
        </Box>
      </Modal>
        </div>
        <div className="group-102-DkS">
          <div className="auto-group-zgfx-kEa">
            <div className="group-90-GTp">
              <img className="mask-group-1RQ" src={ImgMaskGroup1} alt="Mask Group" />
            </div>
            <img className="mask-group-XPk" src={ImgMaskGroup2} alt="Mask Group" />
          </div>
          <p className="sebastian-haller-TYJ">Sebastian Haller</p>
          <div className="group-101-xEA">
            <p className="project-manager-tNi">Project Manager</p>
            <img className="ic-round-verified-oEn" src={ImgVerified} alt="Verified" />
          </div>
        </div>
        <div className="group-98-j8S">
          <p className="my-projects-TaE">My Projects</p>
          <p className="create-a-project-AzS">Create a Project</p>
        </div>
        <div className="component-2-J54">
          <div className="auto-group-phrx-CgE">
            <img className="image-4-95g" src={ImgImage4} alt="Image" />
          </div>
          <div className="auto-group-zrjr-fpi">
            <p className="product-manager-D5Y">UX Research</p>
            <p className="beats-7gi">Spotify</p>
          </div>
          <div className="auto-group-bzfx-Siz">
            <div className="auto-group-ekqe-yU2">View Project</div>
          </div>
        </div>
        <p className="view-all-projects-dBC">View All Projects</p>
        <div className="group-103-87x">
          <p className="payment-history-3ki">Payment History</p>
          <div className="auto-group-peq4-aEr">
            <p className="see-all-vpW">See all</p>
            <p className="see-all-EqC">See all</p>
          </div>
        </div>
        <div className="group-104-9SN">
          <p className="messages-sdG">Messages</p>
          <div className="auto-group-kbkc-b3U">
            <p className="see-all-wd8">See all</p>
            <p className="see-all-TbU">See all</p>
          </div>
        </div>
        <div className="home-indicator-ZPc"></div>
      </div>
    </div>
  );
};

export default ClientDashboard;
