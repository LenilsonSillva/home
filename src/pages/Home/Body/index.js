import useWindowDimensions from "../../../dimensions.js";
import myPhoto from "./principal.png";
import {Link} from 'react-scroll';
import React from "react";
import {Typography, Card, CardContent, CardActions, Skeleton} from '@mui/material/';

export default function Body() {

    const { height, width } = useWindowDimensions();
    const [ itemIcon, setItemIcon ] = React.useState(false);

    const confWid = (width, height) => {
        if(width >= height) {
            return 'd-flex flex-row'
        } else{
            return 'd-flex flex-column'
        }
    }

    const imgAjuste = (width, height) => {
        if(height >= width) {
            return {marginTop: 25}
        } else{
            return {marginTop: 45, alignItems: 'center', justifyContent: 'center'}
        }
    }

    const textAjuste = (width, height) => {
        if(width >= height) {
            return 'text-start'
        } else{
            return 'text-center'
        }
    }

    const renderIcon = () => {
        setItemIcon(true)
    }

  return (
    <div id='divBody' style={{height: `${height - 56}px`, minHeight: 250, backgroundColor: 'black', borderBottomLeftRadius: 12/100*width + 8/100*height}} class="d-flex flex-column align-items-center justify-content-center">
        <div class={`container-lg ${confWid(width, height)}`} style={{alignItems: 'center', justifyContent: 'space-evenly'}}>
            <div style={{borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderColor: 'blue'}}>
                <img onLoad={()=>{setItemIcon(true)}} src={myPhoto} class='img-fluid' alt="minhaFoto" style={{ display: itemIcon ? 'flex' : 'none', height: height - (70/100*height) + (15/100*width), width: 'auto'}}/>     
                <Skeleton animation="wave" sx={{bgcolor: 'grey.900'}} style={{display: itemIcon ? 'none' : 'flex', marginBottom: 15}} variant="rectangular" width={20/100*height + 20/100*width} height={height - (75/100*height) + (20/100*width)}/>
            </div>
            <Card variant="outlined" style={{backgroundColor: 'rgb(19,20,22)'}}>
                <React.Fragment>
                    <CardContent>
                    <Typography fontSize={1.2/100*width + 1.4/100*height} color="rgb(220,220,230)" fontWeight='bold' gutterBottom>
                        Olá,
                    </Typography>
                    <Typography variant="h5" component="div" color="rgb(220,220,230)" fontWeight='bold' fontSize={ 2.2/100*width + 2.5/100*height}>
                        me chamo <span style={{color: '#03a9f4'}}>Lenilson</span>.
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="rgb(220,220,230)" fontWeight='bold' fontSize={ 1.2/100*width + 1.4/100*height}>
                        Bem-vindo(a) ao meu Website!
                    </Typography>
                    </CardContent>
                    <CardActions sx={{alignItems: 'center', justifyContent: 'center'}}>
                        <Link to='sobre' smooth>
                        <button type="button" class="btn btn-outline-info">Sobre mim</button>
                        </Link>
                    </CardActions>
                </React.Fragment>
            </Card>
        </div>
    </div>
  )
}
