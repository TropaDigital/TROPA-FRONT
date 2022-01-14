import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import apiTropa from '../../pages/api/api';
import Carousel from 'react-elastic-carousel';
import Animate from '../Animation/Animate';
import { IconArrow, IconArrowLeft, IconArrowRight, IconAstronaut } from '../Svg';
import { Mobilecontainer, MobileDiv, SliderDiv } from './styles';
import PulseLoader from "react-spinners/PulseLoader";

interface IProps {
    itemsToShow?: number;
    width?: number;
}

const MobileSection: NextPage<IProps> = ({ itemsToShow = 3 }) => { 

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
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 }, 
    ])

    const slider: any = useRef(null)     

    return (
        <Mobilecontainer id="mobile-section">
            
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

            <MobileDiv>

                <Carousel
                    itemsToShow={itemsToShow}
                    isRTL={false}
                    className="cards"
                    pagination={false}
                    showArrows={false}
                    itemPadding={[0, 15]}
                    ref={slider}
                    breakPoints={breakpoints}
                >   
                    {   
                        image.length > 0
                        ?
                        image.map((data: any, key) => (
                            <Link href={`/portfolio/${data.slug}`}>
                                <div className="mobile">
                                    <img src="/images/mobile.png" />
                                        <div className="card" key={key}>
                                            <div className="back-image">
                                                <img src={data.imagem_tipo} alt="" />
                                            </div>                                
                                            <div className="overlay">
                                                <p>Ver este</p> <br /><p className='bottom'> projeto</p>
                                                <IconArrow />
                                            </div>                                         
                                        </div>                        
                                </div>                                                
                            </Link>
                        ))
                        :
                        [1,2,3].map(() => (
                            <div className="mobile">
                                <img src="/images/mobile.png" />
                                <div className="card">
                                    <div className="loader">
                                        <PulseLoader 
                                            color="#cc6138"
                                            size={30} 
                                        />
                                    </div>                                
                                </div>                        
                            </div>          
                        ))
                    }                    
                </Carousel>
                
            </MobileDiv>
              
        </Mobilecontainer>
    )
}

export default MobileSection