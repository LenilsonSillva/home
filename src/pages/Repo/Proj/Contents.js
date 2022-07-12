import React from 'react'
import useWindowDimensions from '../../../dimensions';
import { Box, CircularProgress, Typography, Grid, Card, Paper, Snackbar, Alert, Button, Slide, createTheme, Modal, Fade, Backdrop} from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import CloseIcon from '@mui/icons-material/Close';
import Marcadores1 from './marcadores/marcadores1.png'
import Marcadores2 from './marcadores/marcadores2.png'
import Chat1 from './chat/chat1.png'
import Chat2 from './chat/chat2.png'
import Gratable1 from './gratable/gratable1.png'
import Gratable2 from './gratable/gratable2.png'
import Gratable3 from './gratable/gratable3.png'
import Mail1 from './mail/gmail1.png'
import Mail2 from './mail/gmail2.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
  };

export default function Contents() {

    const { height, width } = useWindowDimensions();
    const [open, setOpen] = React.useState(false);
    const [openImgAlert, setOpenImgAlert] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [openModalImagens, setOpenModalImagens] = React.useState(false);
    const [dadosModal, setDadosModal] = React.useState({
        id: '', title: '', img: '', link: '', status: '', description: ''
    });
    const [transition, setTransition] = React.useState(undefined);
    const [loadImg, setLoadImg] = React.useState(false)

    function TransitionUp(props) {
        return <Slide {...props} direction="up" />;
      }

    const handleClick = (Transition) => () => {
        setTransition(() => Transition);
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleClickImgAlert = (Transition) => () => {
        setLoadImg(true);
        setTransition(() => Transition);
        setOpenImgAlert(true);
    }

    const handleCloseImgAlert = () => {
        setOpenImgAlert(false)
    }

    const buttonDisable = (value) => {
        if(value === '')
            return <div onClick={handleClick(TransitionUp)}><Button variant='contained' disabled style={{backgroundColor: 'grey', fontSize: width <= height ? hwPC(1,1) : hwPC(1.1,0.4)}} href={value} target='blank'>Acessar repopsitório</Button></div>
            else return <Button style={{fontSize: width <= height ? hwPC(1,1) : hwPC(1.1,0.4), color: 'white'}} variant='contained' href={value} target='blank'>Acessar repositório</Button>
    // Função que desabilita o botão de acesso ao repositório no menu
        }

    const modalButtonDisable = (value) => {
        if(value === '')
            return <div onClick={handleClick(TransitionUp)}><Button disabled variant="text" style={{fontWeight: 'bold', fontSize: 11}}>Acessar repositório</Button></div>
            else return <Button href={value} target='blank' variant="text" style={{fontWeight: 'bold', fontSize: 11}}>Acessar repositório</Button>
    // Função que desabilita o botão de acesso ao repositório no modal
        }

    const handleOpenModal = (value) => {
        setOpenModal(true); setDadosModal(value);
        }
    const handleCloseModal = () => setOpenModal(false);

    const handleOpenModalImagens = () => {
        setOpenModalImagens(true)
        }
    const handleCloseModalImagens = () => {setOpenModalImagens(false); setLoadImg(false)}

    const loadImgRender = () => {
        return (
        <Box style={{display: loadImg ? 'none' : 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', color:'rgb(3,169,244)'}}>
            <CircularProgress/>
        </Box>
        )
    }

    const modalStatusBG = {
        done : 'rgb(240,255,243)',
        load : 'rgb(255,255,235)',
        end : 'rgb(255,215,220)'
    }

    const status = {
        done: '#198754',
        load: '#fd7e14',
        end: '#dc3545'
    // Cores do progresso dos projetos
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width - 3/100*width,
        maxWidth: 500,
        bgcolor: dadosModal.status === '#198754' ? modalStatusBG.done : '#fd7e14' ? modalStatusBG.load : modalStatusBG.end,
        border: `3px solid ${dadosModal.status}`,
        boxShadow: 24,
        p: 4,
        borderRadius: 5,
        maxHeight: height - 10,
    // Estilo dos modais
      };

    const dados = [
        { id : 1, title : "GRATABLE", img : [Gratable1, Gratable2, Gratable3], link : 'https://editor.p5js.org/lenilson.sillva/full/mHQPjQ7E7', status : status.done, description : 'Este projeto consiste em um jogo criado totalmente em JavaScript através da web utilizando a plataforma P5JS. Ele foi desenvolvido através da aula de Lógica de Programação, podendo ser encontrado no site da COLABEDUC juntamente com tanto outros jogos desenvolvidos por alunos e orientadores.'},
        { id : 2, title : "MARCADORES", img : [Marcadores1, Marcadores2], link : 'https://github.com/LenilsonSillva/Marcadores', status : status.done, description : 'Projeto desenvolvido na Faculdade nas aulas de Desenvolvimento em Dispositivos Móveis utilizando React Native. Consiste em inserir marcadores em um banco de dados e renderizar em um mapa marcadores já adicionados posteriormente.'},
        { id : 3, title : "EMAIL", img : [Mail1, Mail2], link : 'https://github.com/LenilsonSillva/Trabalho-1', status : status.done, description : 'Aplicativo desenvolvido com React Native na Faculdade nas aulas de Desenvolvimento em Dispositívos Móveis. Este App é um clone do Gmail e mostra informações de dados de usuários e emails que estão armazenados em um banco de dados.'},
        { id : 4, title : "MENSAGENS", img : [Chat1, Chat2], link : '', status : status.load, description : 'Aplicativo de teste pessoal e aprendizado que consiste em trocas de mensagens entre usuários com um design único e contendo algumas opções que facilitam na conversação.'},
    // Função com os dados dos projetos.
    ]

    const hwPC = (value1, value2) => {
        return(
        (value1/100*height) + (value2/100*width)
        )
    //Função que recebe valores e determina o tamanho dos elementos com relação a altura e largura da tela
    }

  return (
    <Box style={{ display: 'flex', marginBlock: hwPC(4,4)}}>
        <Grid container sx={{ flexGrow: 1}}  columns={{ xl: 12}} style={{justifyContent: 'center', alignItems: 'center', display: 'flex', backgroundColor: 'black'}}>
                {dados.map((dado) => (
                    <Grid xs={3} item key={dado.id} sx={{lignItems: 'center', justifyContent: 'center'}} >
                            <Card className='flip-card' sx={{ m:2 ,height: hwPC(30,3), width: hwPC(30,3) ,maxWidth: 345, borderRadius: 2, bgcolor: 'black'}}>
                                <div className='flip-card-inner'>
                                    <div className='flip-card-front'>
                                        <section className='cov' style={{ backgroundImage: `url(${dado.img[0]})`, height: hwPC(30,3), width: hwPC(30,3), backgroundSize: 'cover', display: 'flex', flex: 1, border: `3px solid ${dado.status}`}}>
                                            <Box className='transpBottom' style={{display: 'flex', flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                                                <Typography style={{color: 'rgb(5,5,5)', fontSize: hwPC(1.8,1), marginBottom: 10, fontFamily: 'fantasy'}}>{dado.title}</Typography>
                                            </Box>
                                        </section>
                                    </div>
                                    <div className='flip-card-back'>
                                        <section style={{display: 'flex', flex: 1}}>
                                            <Box className='cov2' style={{backgroundImage: `url(${dado.img[0]})`, height: hwPC(30,3), width: hwPC(30,3), backgroundSize: 'cover', display: 'flex', flex: 1, border: `3px solid ${dado.status}`}}/>
                                            <Box style={{position: 'absolute'}}>
                                                <Box style={{display: 'flex', flex: 1,flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: hwPC(30,3), width: hwPC(30,3)}}>
                                                    <Button style={{marginBottom: 10, fontSize: width <= height ? hwPC(1,1) : hwPC(1.1,0.4)}} onClick={()=>handleOpenModal(dado)} variant='contained'>Ver sobre</Button>
                                                    {buttonDisable(dado.link)}
                                                </Box>
                                            </Box>
                                        </section>
                                    </div>
                                </div>
                            </Card>
                    </Grid>
                ))}
                
        </Grid>
        
        { 
        //Modal de SOBRE
        }
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
            <Fade in={openModal}>
            <Box sx={style} style={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                <button onClick={handleCloseModal} className='btnCloseModal' style={{position: 'absolute', right: 3, top: 3}}>
                    <CloseIcon style={{color:'rgba(190,192,194,0.7)', fontSize: hwPC(3,0.8), fontWeight: 'bold'}} />
                </button>
                <Typography id="transition-modal-title" variant="h6" component="h2" style={{ fontSize: 19, textAlign: 'center', fontWeight: 'bold'}}>
                SOBRE {dadosModal.title}
                </Typography>
                <Typography fontSize={15.5} id="transition-modal-description" sx={{ mt: 2 }}>
                {dadosModal.description}
                </Typography>
                <Button variant="text" onClick={handleOpenModalImagens} style={{fontWeight: 'bold', marginTop: 1.3/100*width + 0.5/100*height, fontSize: 11}}>Ver imagens</Button>
                {modalButtonDisable(dadosModal.link)}
            </Box>
            </Fade>
        </Modal>
        { 
        //Modal do Carrosel de Imagens
        }
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModalImagens}
        onClose={handleCloseModalImagens}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{display: 'flex', flex: 1}}
        >
            <Fade in={openModalImagens}>
            <Box style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Carousel animation='slide' sx={{alignItems: 'center', justifyContent: 'center', display: loadImg ? 'flex' : 'none', flex: 1, flexDirection: 'column'}}>
                    {
                        Object.keys(dadosModal.img).map((item)=> {
                            return (
                                <Box key={item} style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 1/100*height}}>
                                    <img onClick={handleCloseModalImagens} onLoad={handleClickImgAlert()} src={dadosModal.img[item]} style={{maxHeight: height - 10/100*height, maxWidth: width - 2/100*width}}/>
                                </Box>
                            )
                        })
                    }
                </Carousel>
                { openModalImagens ? loadImgRender() : null}
            </Box>
            </Fade>
        </Modal>
        { 
        //Aviso sobre a indisponibilidade do acesso ao repositório
        }
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} TransitionComponent={transition}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Acesso indisponível!
            </Alert>
        </Snackbar>
        <Snackbar open={openImgAlert} autoHideDuration={6000} onClose={handleCloseImgAlert} TransitionComponent={transition}>
            <Alert onClose={handleCloseImgAlert} severity="info" sx={{ width: '100%' }}>
                Clique na imagem para fechar.
            </Alert>
        </Snackbar>
    </Box>
  )
}
