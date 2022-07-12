import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import {Box, TextField, Typography, Button, Slide, Alert, Snackbar, Container} from '@mui/material';
import useWindowDimensions from '../../../dimensions';
import { LoadingButton } from '@mui/lab'

export default function Email() {

    const { height, width } = useWindowDimensions();
    const form = useRef();
    const [loadButton, setLoadButton] = React.useState(false);
    const [fieldName, setFieldName] = React.useState('');
    const [fieldEmail, setFieldEmail] = React.useState('');
    const [fieldMsg, setFieldMsg] = React.useState('');
    const [openErrorNet, setOpenErrorNet] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [alert1, setAlert1] = React.useState(false);
    const [alert2, setAlert2] = React.useState(false);
    const [alert3, setAlert3] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
    const [sizeFx, setSizeFx] = React.useState(0);
    
    React.useEffect( () => {

      const onScroll = () => setSizeFx(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true }); 
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const sendEmail = (event) => {
      event.preventDefault();

      fieldName === '' ? setAlert1(true) : setAlert1(false)
      fieldEmail === '' ? setAlert2(true) : setAlert2(false)
      fieldMsg === '' ? setAlert3(true) : setAlert3(false)
  
      if( (fieldName === '') || (fieldEmail === '') || (fieldMsg === '')){

        handleClick(TransitionUp, 1)

        } else {
          setLoadButton(true)

        emailjs.sendForm('LeniWebsite', 'template_ayi3h9p', form.current, 'aIMs2zhF81gBNydGz')
          .then((result) => {
              console.log('Mensagem enviada!');
              setLoadButton(false);
              event.target.reset();
              setFieldName(''); setFieldEmail(''); setFieldMsg('');
              handleClick(TransitionUp, 2);
          }, (error) => {
              console.log(error);
              setLoadButton(false);
              error.status === 0 ? handleClick(TransitionUp, 4) : handleClick(TransitionUp, 3)
          });
        }
    };

    const cores = ['rgb(223, 239,255)', 'rgb(255,227,201)', 'rgb(174,255,217)', 'rgb(255,217,181)', 'rgb(197,137,255)']
    const cores2 = ['rgb(13,179,254)', 'rgb(247,107,79)', 'rgb(24,247,197)', 'rgb(224,187,61)', 'rgb(107,67,247)']

    function TransitionUp(props) {
      return <Slide {...props} direction="up" />;
    }

    const handleClick = (Transition, value) => {
        setTransition(() => Transition);

        value === 1 ? setOpen(true) : value === 2 ? setOpenSuccess(true) : value === 3 ? setOpenError(true) : setOpenErrorNet(true)
    }

    const handleClose = () => {
        setOpen(false);
        setOpenSuccess(false);
        setOpenError(false)
    }

    const hwPC = (value1, value2) => {
      return(
      (value1/100*height) + (value2/100*width)
      )
    //Função que recebe valores e determina o tamanho dos elementos com relação a altura e largura da tela
    }
  
    return (
      <div style={{display: 'flex', flex: width >= height ? 1 : 0, alignItems: 'center', justifyContent: 'center'}}>
          <form style={{display: 'flex', backgroundColor: 'white', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', padding: 20, borderRadius: 7, height: '80%', width: width >= height ? '80%' : `${70 + sizeFx/15}%`, maxWidth: '90%', minWidth: '60%'}} ref={form} onSubmit={sendEmail}>
            <Typography sx={{color: 'black', textAlign: 'center'}} fontSize={ width > height ? hwPC(1.2,1.2) : (sizeFx/7) < 16 ? sizeFx/7 : 16} fontWeight='bold'>Envie-me uma mensagem</Typography>
            <Box style={{display: 'flex', flexDirection: width < 1000 && width > height * 1.6 ? 'row' : 'column', width: '100%', alignItems: 'center', justifyContent: 'space-between', height: '25%'}}>
            <TextField 
              value={fieldName}
              onChange={(event)=>{setFieldName(event.target.value)}} 
              error={fieldName === '' ? alert1 : false} 
              sx={{width: '100%', input: { height: hwPC(1,1)}, marginRight: width > height * 1.6 ? 1 : 0}} 
              margin='dense'
              size='small'
              id="standard-basic1" 
              label="Nome" 
              variant="filled" 
              name="name" 
              type="text"
            />
            <TextField 
              value={fieldEmail} 
              size='small' 
              onChange={(event)=>{setFieldEmail(event.target.value)}} 
              error={fieldEmail === '' ? alert2 : false} 
              sx={{width: '100%', input: { height: hwPC(1,1)}}} 
              margin='dense' 
              id="standard-basic" 
              label="Email" 
              variant="filled" 
              name="email" 
              type="email"
            />
          </Box>
            <TextField 
              value={fieldMsg} 
              size='small' 
              onChange={(event)=>{setFieldMsg(event.target.value)}} 
              error={fieldMsg === '' ? alert3 : false} 
              style={{width: '100%', input: { height: hwPC(1,1)}}} 
              margin='dense' 
              id="standard-multiline-static" 
              label="Digite a mensagem" 
              multiline rows={ (height < 500) && (height > 350) ? 3 : height <= 350 ? 1.5 : 4 } 
              variant="filled" 
              name="message"
            />
            <LoadingButton style={{backgroundColor: '#03a9f4', width: '100%'}} variant='contained' size='small' loading={loadButton} type="submit" value="Send">Enviar</LoadingButton>
          </form>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} TransitionComponent={transition}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Preencha os campos!
            </Alert>
          </Snackbar>
          <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose} TransitionComponent={transition}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Mensagem enviada!
              </Alert>
          </Snackbar>
          <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose} TransitionComponent={transition}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  Erro ao enviar. Tente novamente.
              </Alert>
          </Snackbar>
          <Snackbar open={openErrorNet} autoHideDuration={6000} onClose={handleClose} TransitionComponent={transition}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  Verifique a conexão com a internet.
              </Alert>
          </Snackbar>
      </div>
    );
}
