import React from 'react';
import {Box, Typography, Link, Button, Skeleton} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import useWindowDimensions from "../../../dimensions.js";
import { LoadingButton } from '@mui/lab';
import eu from './eu.jpg'

export default function Details() {

  const { width, height } = useWindowDimensions();
  const [ itemIcon, setItemIcon ] = React.useState(false);

  const hwPC = (value1, value2) => {
    return(
    (value1/100*height) + (value2/100*width)
    )
  //Função que recebe valores e determina o tamanho dos elementos com relação a altura e largura da tela
  }

  return (
    <div style={{display: 'flex', flex: width >= height ? 1.3 : 1, alignItems: 'center', justifyContent: width >= height ? 'flex-end' : 'center', height:  width >= height ? 'auto' : height - 56, paddingBlock: width >= height ? 0 : 5/100*height}}>
      <Box style={{display: 'flex', backgroundColor: '#03a9f4', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 7, height: width >= height ? '80%' : 80/100*height, width: '92%'}}>
        <Box style={{backgroundColor: 'rgb(245,225,213)', display: 'flex', flex: 1.6, flexDirection: 'column', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'space-evenly', borderTopLeftRadius: 7, borderTopRightRadius: 7}}>
          <Box style={{height: width > height ? hwPC(8,8) : hwPC(15,6), maxHeight: '90%', aspectRatio: 1/1, width: 'auto', borderRadius: 90, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img onLoad={()=>{setItemIcon(true)}} src={eu} style={{display: itemIcon ? 'flex' : 'none',width: 'auto', height: width > height ? hwPC(8,8) : hwPC(15,6), maxHeight: '100%', padding: 0, margin: 0, borderRadius: width > height ? hwPC(8,8)/2 : hwPC(15,6)/2, display: 'flex'}}/>
            <Skeleton animation="wave" style={{display: itemIcon ? 'none' : 'flex', maxHeight: '100%', padding: 0, margin: 0}} variant="circular" width={width > height ? hwPC(8,8) : hwPC(15,6)} height={width > height ? hwPC(8,8) : hwPC(15,6)}/>
          </Box>
          <Box style={{display: 'flex', flexDirection: 'column', maxHeight: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <Typography fontSize={22} fontWeight='bold'>LENILSON SILVA DE OLIVEIRA</Typography>
            <Typography fontSize={15}>Desenvolvedor de Software</Typography>
          </Box>
        </Box>
        <Box  style={{display: 'flex', backgroundColor: 'rgb(245,225,213)', flex: 1.1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
          <Link href="http://www.linkedin.com/in/lenilson-sillva" target='blank' rel='LinkedIn'>
            <LinkedInIcon style={{fontSize: 50, color: "rgb(200,200,210)"}}/>
          </Link>
          <Link href="http://www.facebook.com/lenilson.sillva"  target='blank' rel='Github'>
            <GitHubIcon style={{fontSize: 50, color: "rgb(200,200,210)"}}/>
          </Link>
          <Link href="http://www.instagram.com/lenilson.sillva"  target='blank' rel='Instagram'>
            <InstagramIcon style={{fontSize: 50, color: "rgb(200,200,210)"}}/>
          </Link>
          <Link href="http://www.facebook.com/lenilson.sillva"  target='blank' rel='Facebook'>
            <FacebookIcon style={{fontSize: 50, color: "rgb(200,200,210)"}}/>
          </Link>
        </Box>
        <Box style={{display: 'flex', flex: 0.3, height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
          <LoadingButton variant='contained' sx={{borderRadius: 5, backgroundColor: 'white', color: 'black'}}>Ver currículo</LoadingButton>
        </Box>
      </Box>
    </div>
  )
}
