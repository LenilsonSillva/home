import useWindowDimensions from "../../../dimensions.js";
import * as React from 'react'
import {Button, Typography, Box} from '@mui/material/';
import Carousel from 'react-material-ui-carousel'
import myPhoto from "./logo192.png";
import Gratable1 from '../../Repo/Proj/gratable/gratable1.png'
import Mail1 from '../../Repo/Proj/mail/gmail1.png'
import Chat1 from '../../Repo/Proj/chat/chat1.png'

export default function BodyProj() {

    const { height, width } = useWindowDimensions();

    const confWid = (width, height) => {
        if(width >= height) {
            return 'd-flex flex-row container-lg'
        } else{
            return 'd-flex flex-column container-lg'
        }
    }

    const hwPC = (value1, value2) => {
        return(
        (value1/100*height) + (value2/100*width)
        )
    //Função que recebe valores e determina o tamanho dos elementos com relação a altura e largura da tela
    }

    const contentCard = (item) => {
        if(width - height < 400){
            return 'center'
        } else
        if(item === 3) { 
            return 'flex-end'
        }else {
            return 'flex-start'
        }
    }

    const dados = [
        {id : 1, title : 'Gratable', description: 'Jogo criado com JavaScript na plataforma P5JS', img : Gratable1, imgSize : 'vertical'},
        {id : 2, title : 'Email', description: 'Clone visual do aplicativo do Gmail', img : Mail1, imgSize : 'vertical'},
        {id : 3, title : 'Mensagens', description: 'Aplicativo de teste com troca de mensagens', img : Chat1, imgSize : 'vertical'}
    ];

    const cores = ['rgb(3,169,244)', 'rgb(237,97,69)', 'rgb(14,237,187)', 'rgb(214,177,51)', 'rgb(97,57,237)']
    const cores2 = ['rgb(13,179,254)', 'rgb(247,107,79)', 'rgb(24,247,197)', 'rgb(224,187,61)', 'rgb(107,67,247)']
    // Azul, salmão, verde, amarelo, roxo

  return (
    <div id='sobre' style={{height: `${height}px`, minHeight: width < 1100 ? 260 : 330, backgroundColor: 'rgb(235,235,235)', alignItems: 'center', justifyContent: 'space-around', paddingBottom: width >= height ? 0.5/100*height + 0.25/100*width : 3/100*height + 2/100*width, borderTopRightRadius: 12/100*width + 8/100*height}} class='d-flex flex-column'>
        <div style={{display: 'flex', height: 8/100*height + 1/100*width, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
            <p class='h2' style={{fontSize: 1.4/100*width + 2/100*height}}>SOBRE MIM</p>
        </div>
        <div class={confWid(width,height)} style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
            <div class='container' style={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <div>
                    <Typography variant='body2' textAlign='justify' fontSize={0.8/100*width + 1.5/100*height}>Tenho 24 anos e estou graduando em Ciências & Tecnologia pela UFRN. Minha linguagem de programação preferida, atualmente, é JavaScript, e gosto muito de desenvolver aplicações mobile e web com React Native e ReactJS. Já tive experiências também (embora poucas em algumas) em outras linguagens, como C++, PHP, TypeScript e Python. Além disso, já utilizei banco de dados MySQL e Firebase e tenho conhecimento em HTML5 e CSS3. Aqui estão algumas imagens do que já desenvolvi. Mas você pode ver mais clilcando aqui embaixo.</Typography>
                </div>
                <div class='d-flex' style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Button href='/#/Repo' variant="text" style={{fontWeight: 'bold', marginTop: 3/100*width + 1/100*height, fontSize: 0.5/100*width + 1.1/100*height}}>Ver todos os projetos</Button>
                </div>
            </div>
            <Box style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', marginLeft: height < width ? 50 : 0}}>
                {
                    width >= height
                        
                    ?   <Carousel animation='fade' sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1, flexDirection: 'column', width: 38/100*width, height: 70/100*height}}>
                        {
                            dados.map((item)=> {
                                return (
                                    <Box id='box-carousel' key={item.id} style={{display: 'flex', flex: 1, paddingInline: 4, paddingBlock: 6, flexDirection: item.id === 2 || item.id === 3 ? 'row-reverse' : 'row', flex: 1, justifyContent: 'center', alignItems: 'center', height: 47/100*height, background: `linear-gradient(to bottom left, ${cores2[Math.floor(Math.random()*5)]} 40%, ${cores[Math.floor(Math.random()*5)]} 100%)`, borderRadius: 15}}>
                                        <Box style={{display: 'flex', flexDirection: 'column', justifyContent: contentCard(item.id), maxHeight: 45/100*height, height: 45/100*height, width: '45%', padding: 7}}>
                                            <Typography style={{fontSize: hwPC(1.2,1.2), marginBottom: hwPC(0,1.5), fontWeight: 'bold', alignText: 'center'}}>{item.title}</Typography>
                                            <Typography style={{fontSize: hwPC(1.1,0.6), marginBottom: hwPC(0,2.5), color: 'white'}}>{item.description}</Typography>
                                            <Button href='/#/Repo' variant="outlined" style={{fontSize: hwPC(0.6,0.6), alignSelf: 'flex-start', color: 'white', borderColor: 'white',  maxWidth: 45, minWidth: hwPC(3.6,3.6), minHeight: hwPC(1.55,1.55), padding: 0}}>Ver mais</Button>
                                        </Box>
                                        <Box style={{display: 'flex', padding: 7, justifyContent: item.id === 1 ? 'center' : 'center', height: '100%', width: '65%', alignItems: 'center'}}>
                                            <img src={item.img} style={{ maxHeight: 44/100*height, maxWidth: '100%',borderRadius: 15, width: 'auto'}}/>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                        </Carousel>
                    :   <Carousel navButtonsAlwaysInvisible={true} indicators={false} animation='fade' sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1, flexDirection: 'column', height: 40/100*height, width: 90/100*width}}>
                        {
                            dados.map((item)=>{
                                return (
                                    <Box key={item.id} style={{display: 'flex', flex: 1, flexDirection: 'column', padding: 10, height: '100%', background: `linear-gradient(to bottom left, ${cores2[Math.floor(Math.random()*5)]} 40%, ${cores[Math.floor(Math.random()*5)]} 100%)`, borderRadius: 15}}>
                                        <Box style={{display: 'flex', flex: 1, flexDirection: item.id === 3 ? 'row' : 'row-reverse', alignItems: 'center', justifyContent: 'space-around'}}>
                                            <Box style={{alignItems: 'center', justifyContent: 'center', display: 'flex', width: '30%', height: '100%', flexDirection: 'column'}}>
                                                <Typography style={{fontSize: hwPC(1.6,1.5), fontWeight: 'bold', alignText: 'center', color: 'white', marginBottom: 10}}>{item.title}</Typography>
                                                <Button href='/#/Repo' variant="outlined" style={{fontSize: hwPC(1,0.5), color: 'white', borderColor: 'white', maxWidth: 45, minWidth: hwPC(6,3), padding: 0}}>Ver mais</Button>
                                            </Box>
                                            <Box style={{display: 'flex', flex: 1, width: '70%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                                <img src={item.img} style={ item.imgSize === 'horizontal'? {maxWidth: '70%', borderRadius: 15, width: hwPC(28.5,0), height: 'auto'} : {maxWidth: '100%', borderRadius: 15, height: hwPC(17,17), width: 'auto'}}/>
                                            </Box>
                                        </Box>
                                        <Box style={{display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', paddingTop: 5}}>
                                            <Typography style={{fontSize: hwPC(1.4,0.3), color: 'white'}}>{item.description}</Typography>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                        </Carousel>
                }
            </Box>
        </div>
    </div>
  )
}
