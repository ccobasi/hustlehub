import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { ArrowForwardIos } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '25%',
  left: '70%',
  transform: 'translate(-50%, -50%)',
  width: 240,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
};

const TransitionsModal=()=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>

           <Stack direction="column">
           <Stack direction="row">
           <NavLink id="transition-modal-link"  style={{color:"red", textDecoration:"none"}} href="">Profile </NavLink>   <ArrowForwardIos sx={{ml:"56%"}}/>
           </Stack>
           <Divider/>
          
           <Stack direction="row">
           <NavLink id="transition-modal-link"  style={{color:"red", textDecoration:"none"}} href="">Messages </NavLink>   <ArrowForwardIos sx={{ml:"41%"}}/>
           </Stack>
            <Divider/>
            <Stack direction="row">
           <NavLink id="transition-modal-link"  style={{color:"red", textDecoration:"none"}} href="">Settings </NavLink>   <ArrowForwardIos sx={{ml:"48%"}}/>
           </Stack>
            <Divider/>
            <Stack direction="row">
           <NavLink id="transition-modal-link"  style={{color:"red", textDecoration:"none", }} href="">How It Works </NavLink>   <ArrowForwardIos sx={{ml:"27%"}}/>
           </Stack>
            <Divider/>
           </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default TransitionsModal;