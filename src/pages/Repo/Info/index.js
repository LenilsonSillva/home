import React from 'react';
import useWindowDimensions from '../../../dimensions';
import { Box, Alert, Typography, Popover } from '@mui/material';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import InfoIcon from '@mui/icons-material/Info';

export default function Info() {

  const { height, width } = useWindowDimensions();
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const id1 = open1 ? 'simple-popover' : undefined;
  const id2 = open2 ? 'simple-popover' : undefined;
  const id3 = open3 ? 'simple-popover' : undefined;

  const hwPC = (value1, value2) => {
    return(
      (value1/100*height) + (value2/100*width)
    )
  }

  return (
    <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 11/100*height + 5/100*width}}>
      <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <p class='h2' style={{fontSize: 1.4/100*width + 2/100*height, color: 'white'}}>PROJETOS</p>
      </Box>
      {
        width >= height
      ? <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <Box style={{ display: 'flex', flexDirection: 'row'}}>
          <Alert variant='filled' iconMapping={{ success: <TaskAltIcon style={{fontSize: hwPC(0.7,1.2)}}/>}} severity="success" style={{ height: hwPC(1,3), width: 'auto', fontSize: hwPC(0.4,0.8), alignItems: 'center', justifyContent: 'center'}}>Projeto concluído</Alert>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row'}}>
          <Alert variant='filled' iconMapping={{ warning: <HourglassBottomOutlinedIcon style={{fontSize: hwPC(0.7,1.2)}}/> }} severity="warning" style={{ height: hwPC(1,3), width: 'auto', fontSize: hwPC(0.4,0.8), alignItems: 'center', justifyContent: 'center'}}>Projeto em andamento</Alert>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row'}}>
            <Alert variant='filled' iconMapping={{ error: <HighlightOffOutlinedIcon style={{fontSize: hwPC(0.7,1.2)}}/> }} severity="error" style={{ height: hwPC(1,3), width: 'auto', fontSize: hwPC(0.4,0.8), alignItems: 'center', justifyContent: 'center'}}>Projeto descontinuado</Alert>
        </Box>
      </Box>
      : <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <TaskAltIcon aria-describedby={id1} onClick={handleClick1} style={{borderRadius: 5, backgroundColor: '#388e3c', padding: 7, height: 45, width: 45, color: 'white'}}/>
            <Popover id={id1} open={open1} anchorEl={anchorEl1} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}>
              <Typography sx={{ p: 1, bgcolor: 'success.light', color: 'white' }}>Projeto concluído.</Typography>
            </Popover>
          <HourglassBottomOutlinedIcon aria-describedby={id2} onClick={handleClick2} style={{borderRadius: 5, backgroundColor: '#f57c00', padding: 7, height: 45, width: 45, color: 'white'}}/>
            <Popover id={id2} open={open2} anchorEl={anchorEl2} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}} transformOrigin={{vertical: 'top', horizontal: 'center'}}>
              <Typography sx={{ p: 1, bgcolor: 'warning.light', color: 'white' }}>Projeto em andamento.</Typography>
            </Popover>
          <HighlightOffOutlinedIcon aria-describedby={id3} onClick={handleClick3} style={{borderRadius: 5, backgroundColor: '#d32f2f', padding: 6, height: 45, width: 45, color: 'white'}}/>
            <Popover id={id3} open={open3} anchorEl={anchorEl3} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} transformOrigin={{vertical: 'top', horizontal: 'right'}}>
              <Typography sx={{ p: 1, bgcolor: 'error.light', color: 'white' }}>Projeto descontinuado.</Typography>
            </Popover>
        </Box>
      }
    </Box>
  )
}
