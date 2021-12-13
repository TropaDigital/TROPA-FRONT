import { NextPage } from 'next';
import { useRef, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Animate from '../Animation/Animate';
import { SliderDiv } from '../MobileSection/styles';
import { IconArrow, IconArrowLeft, IconArrowRight, IconAstronaut } from '../Svg';
import { WebContainer, WebDiv } from './style';


interface IProps {
    itemsToShow?: number;    
}

const WebSection: NextPage<IProps> = ({ itemsToShow = 3, }) => {

    const [data, setData] = useState([
        {
            image: '/images/MeatW.png',            
        },
        {
            image: '/images/EyouW.png',            
        },
        {
            image: '/images/AlphaW.png',            
        },
        {
            image: '/images/MeatW.png',            
        },
        {
            image: '/images/AlphaW.png',            
        },
        {
            image: '/images/EyouW.png',            
        },
        {
            image: '/images/MeatW.png',            
        },
        {
            image: '/images/AlphaW.png',            
        },
        {
            image: '/images/EyouW.png',            
        },
    ]);

    const slider = useRef(null)    

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
                >   
                    {data.map((data, key) => (
                        <div className="web">
                            <img src="/images/Notebook.png" />
                            <div className="card" key={key}>
                                <div className="back-image">
                                    <img src={data.image} />
                                </div>                                
                                <div className="overlay">
                                    <p>Ver este</p> <br /><p className='bottom'> projeto</p>
                                    <IconArrow />
                                </div>                                         
                            </div>                        
                        </div>                                                
                    ))}                    
                </Carousel>
            </WebDiv>

        </WebContainer>
    )
}

export default WebSection