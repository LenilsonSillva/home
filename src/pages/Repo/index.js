import React from 'react';
import useWindowDimensions from '../../dimensions';
import { Container } from '@mui/material';
import Proj from './Proj';

export default function Repo() {

  const {height, width} = useWindowDimensions();

  return (
    <Container sx={{ bgcolor: 'black', minHeight: `${height - 56}px` }} style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', paddingBlock: 5/100*height}}>
      <Proj/>
    </Container>
  )
}
