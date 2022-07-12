import React, {Suspense, lazy} from 'react';
import {Box, CircularProgress, Typography} from '@mui/material'
import useWindowDimensions from '../../../dimensions';
import Info from '../Info';

const Contents = lazy(() => import('./Contents'));

export default function Proj() {

    const { height, width } = useWindowDimensions();

    return (
      <div>
        <Suspense fallback={
        <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress disableShrink sx={{color:'rgb(3,169,244)'}}/>
            <Typography sx={{color: 'rgb(245,245,245)'}}>Aguarde</Typography>
        </Box>
        }>
            <Info/>
            <Contents/>
        </Suspense>
      </div>
    );
  }



