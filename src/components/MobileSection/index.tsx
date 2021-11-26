import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Animate from '../Animation/Animate';
import { IconArrow, IconArrowLeft, IconArrowRight, IconAstronaut } from '../Svg';
import { Mobilecontainer, MobileDiv, SliderDiv } from './styles';

interface IProps {
    itemsToShow?: number;
}

const MobileSection: NextPage<IProps> = ({ itemsToShow = 3 }) => { 

    const [data, setData] = useState([
        {
            image: '/images/Meat.png',            
        },
        {
            image: '/images/Alpha.png',            
        },
        {
            image: '/images/Eyou.png',            
        },
        {
            image: '/images/Meat.png',            
        },
        {
            image: '/images/Alpha.png',            
        },
        {
            image: '/images/Eyou.png',            
        },
        {
            image: '/images/Meat.png',            
        },
        {
            image: '/images/Alpha.png',            
        },
        {
            image: '/images/Eyou.png',            
        },
    ]);

    const slider = useRef(null)     

    return (
        <Mobilecontainer>
            
            <SliderDiv>
                <Animate effect="fadeInLeft" startAnimation={100}>
                    <div className="title">
                        <h2>Nós Criamos</h2>
                        <IconAstronaut className="effect-stroke light"/>
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
                >   
                    {data.map((data, key) => (
                        <div className="mobile">
                            <img src="/images/mobile.png" />
                            <div className="card" key={key}>
                                <div className="back-image">
                                    <img src={data.image} alt="" />
                                </div>                                
                                <div className="overlay">
                                    <p>Ver este</p> <br /><p className='bottom'> projeto</p>
                                    <IconArrow />
                                </div>                                         
                            </div>                        
                        </div>                                                
                    ))}                    
                </Carousel>
                
            </MobileDiv>
              
        </Mobilecontainer>
    )
}

export default MobileSection