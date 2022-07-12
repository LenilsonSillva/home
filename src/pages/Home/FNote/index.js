import { Box } from '@mui/system/';
import {Typography, Avatar, Button, Link} from '@mui/material';
import useWindowDimensions from "../../../dimensions.js";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PublicIcon from '@mui/icons-material/Public';
import React from 'react';
import MyPhoto from './principal.png'

export default function FNote() {
    const { height, width } = useWindowDimensions();

    const hwPC = (value1, value2) => {
      return(
      (value1/100*height) + (value2/100*width)
      )
  }

  return (
    <Box>
      {
        width >= height

        ? <Box style={{height: (10/100*height) + 12/100*width, backgroundColor: 'black', display: 'flex', flex: 1}}>
            <Box style={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 1/100*height + 2/100*width}}>
              <Avatar alt="Lenilson" src={MyPhoto} sx={{ width: hwPC(2, 2), minWidth: 30, maxWidth: 60, height: 'auto'}}/>
              <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    fontSize={0.5/100*height + 1/100*width}
                    sx={{
                      mr: 2,
                      display: { xs: 'none', sm: 'flex' },
                      fontFamily: 'arial',
                      fontWeight: 600,
                      letterSpacing: '.1rem',
                      color: "rgb(200,200,210)",
                      textDecoration: 'none',
                      marginTop: 1
                    }}
                  >
                    LENILSON SILLVA
                  </Typography>
            </Box>
            <Box style={{display: 'flex', flex: 2, flexDirection: 'column', paddingTop: 4/100*height + 4/100*width, alignItems: 'center'}}>
              <Typography variant='subtitle2' fontSize={0.5/100*height + 1/100*width} style={{letterSpacing: '.1rem', fontWeight: '500', color: "rgb(200,200,210)"}}>Desenvolvido por mim mesmo.</Typography>
              <Button href='/#/Contato' variant="text" style={{marginBlock: 0.3/100*width + 0.1/100*height, fontSize: 0.5/100*width + 0.5/100*height, color: "rgb(200,200,210)"}}>Entrar em contato</Button>
            </Box>
            <Box style={{display: 'flex', flex: 1, flexDirection: 'column', paddingTop: 1/100*height + 2/100*width, justifyContent: 'space-evenly'}}>
              <Box style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Link href="http://www.linkedin.com/in/lenilson-sillva" target='blank' rel='LinkedIn'>
                    <LinkedInIcon style={{fontSize: 1.5/100*height + 2.5/100*width, color: "rgb(200,200,210)"}}/>
                </Link>
                <Link href="http://www.instagram.com/lenilson.sillva"  target='blank' rel='Instagram'>
                    <InstagramIcon style={{fontSize: 1.5/100*height + 2.5/100*width, color: "rgb(200,200,210)"}}/>
                </Link>
                <Link href="http://www.facebook.com/lenilson.sillva"  target='blank' rel='Facebook'>
                    <FacebookIcon style={{fontSize: 1.5/100*height + 2.5/100*width, color: "rgb(200,200,210)"}}/>
                </Link>
              </Box>
              <Box style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                    <PublicIcon style={{fontSize: 0.4/100*height + 0.9/100*width, color: "rgb(200,200,210)"}}/>
                    <Typography variant='p' style={{color: "rgb(200,200,210)", marginLeft: 0.2/100*height + 0.2/100*width, fontSize: 0.2/100*height + 0.7/100*width, paddingRight: 4/100*width}}>Brasil, 2022</Typography>
              </Box>
            </Box>      
          </Box>

        : <Box style={{height: (10/100*height) + 12/100*width, backgroundColor: 'black', display: 'flex', flex: 1}}>
              <Box style={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <Avatar alt="Lenilson" src={MyPhoto} sx={{ width: hwPC(3, 3), minWidth: 35, maxWidth: 35, height: 'auto'}}/>
                <Typography variant='subtitle2' fontSize={0.5/100*height + 1/100*width} style={{letterSpacing: '.1rem', fontWeight: '500', color: "rgb(200,200,210)"}}>Desenvolvido por mim mesmo.</Typography>
              </Box>
              <Box style={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
                <Box style={{display: 'flex', flex: 1}}>
                  <Button href='/#/Contato' variant="text" style={{fontSize: 1/100*width + 0.5/100*height, color: "rgb(200,200,210)"}}>Entrar em contato</Button>
                </Box>
                <Box style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
                  <Link href="http://www.linkedin.com/in/lenilson-sillva" target='blank' rel='LinkedIn'>
                      <LinkedInIcon style={{fontSize: 1.8/100*height + 5/100*width, color: "rgb(200,200,210)"}}/>
                  </Link>
                  <Link href="http://www.instagram.com/lenilson.sillva"  target='blank' rel='Instagram'>
                      <InstagramIcon style={{fontSize: 1.8/100*height + 5/100*width, color: "rgb(200,200,210)"}}/>
                  </Link>
                  <Link href="http://www.facebook.com/lenilson.sillva"  target='blank' rel='Facebook'>
                      <FacebookIcon style={{fontSize: 1.8/100*height + 5/100*width, color: "rgb(200,200,210)"}}/>
                  </Link>
                </Box>
                <Box style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'flex-end', width: '90%'}}>
                      <PublicIcon style={{fontSize: 0.5/100*height + 1/100*width, color: "rgb(200,200,210)"}}/>
                      <Typography variant='p' style={{color: "rgb(200,200,210)", marginLeft: 0.2/100*height + 0.2/100*width, fontSize: 0.3/100*height + 1/100*width, paddingRight: 4/100*width}}>Brasil, 2022</Typography>
                </Box>  
              </Box>      
          </Box>
      }
    </Box>
  )
}
