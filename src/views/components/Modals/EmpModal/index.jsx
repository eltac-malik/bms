import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Stepper from 'views/components/Stepper';
import {useDispatch, useSelector} from 'react-redux'
import {setEmployeeModal} from 'redux/stepperSlice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  border:"none"
};

export default function TransitionsModal() {
  const dispatch = useDispatch()
  const handleClose = () => dispatch(setEmployeeModal(false));
  const open = useSelector((state)=> state.stepper.employeeModal)

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
              <Stepper/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}