import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import apiTropa from '../../pages/api/api';
import Animate from '../Animation/Animate';
import { SliderDiv } from '../MobileSection/styles';
import { IconArrow, IconArrowLeft, IconArrowRight, IconAstronaut } from '../Svg';
import { WebContainer, WebDiv } from './style';
import PulseLoader from "react-spinners/PulseLoader";

interface IProps {
    itemsToShow?: number;    
}

const WebSection: NextPage<IProps> = ({ itemsToShow = 3, }) => {

    const [image, setImage] = useState([]);

    useEffect(() => {
        getImages();
    }, []);

    async function getImages() {
        try{
            let images = await apiTropa.get('/portifolio/?status=ativo');
            setImage(images.data.result);
        }catch(e){

        }
    }

    const breakpoints = ([
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
    ]);

    const slider: any = useRef(null)    

    return(
        <WebContainer>

            <SliderDiv>
                <Animate effect="fadeInLeft" startAnimation={100}>
                    <div className="title">
                        <h2>Nós Criamos</h2>
                        <IconAstronaut className="effect-stroke dark"/>
                    </div>
                </Animate>
                <div className="buttons">
                    <button onClick={() => slider.current.slidePrev()}><IconArrowLeft /></button>
                    <button onClick={() => slider.current.slideNext()}><IconArrowRight /></button>
                </div>                                
            </SliderDiv>

            <WebDiv>
                <Carousel
                    itemsToShow={itemsToShow}
                    isRTL={false}
                    className="cards"                    
                    pagination={false}
                    itemPadding={[0, 5]} 
                    showArrows={false}                   
                    ref={slider} 
                    breakPoints={breakpoints}                   
                >   
                    {   image.length > 0
                        ?
                        image.map((data: any, key) => (
                            <div className="web">
                                <img src="/images/Notebook.png" />
                                <div className="card" key={key}>
                                    <div className="back-image">
                                        <img src={data.imagem_tipo} />
                                    </div>                                
                                    <div className="overlay">
                                        <p>Ver este</p> <br /><p className='bottom'> projeto</p>
                                        <IconArrow />
                                    </div>                                         
                                </div>                        
                            </div>                                                
                        ))
                        :
                        [1,2,3].map((data: any, key) => (
                            <div className="web">
                                <img src="/images/Notebook.png" />
                                <div className="loader">
                                    <PulseLoader 
                                        color="#cc6138"
                                        size={30} 
                                    />
                                </div>
                            </div>                                                
                        ))
                    }                    
                </Carousel>
            </WebDiv>

        </WebContainer>
    )
}

export default WebSection