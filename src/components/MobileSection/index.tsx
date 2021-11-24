import { NextPage } from 'next';
import { useEffect, useState } from 'react';
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

    const myArrow = ({ type, onClick, isEdge }: any) => {
        return (
            <button
                onClick={onClick}
                className={`arrow ${isEdge ? 'inactive' : 'active'}`}
            >
                <Animate effect={'rubberBand'}>
                    {type === 'PREV' ? <IconArrowLeft /> : <IconArrowRight />}
                </Animate>
            </button>
        );
    };

    return (
        <Mobilecontainer>
            
            <SliderDiv>
                <Animate effect="fadeInLeft" startAnimation={100}>
                    <div className="title">
                        <h2>Nós Criamos</h2>
                        <IconAstronaut />
                    </div>
                </Animate>                                
            </SliderDiv>

            <MobileDiv>

                <Carousel
                    itemsToShow={itemsToShow}
                    isRTL={false}
                    className="cards"
                    renderArrow={myArrow}
                    itemPadding={[0, 15]}
                >   
                    {data.map((data, key) => (
                        <div className="mobile">
                            <img src="/images/mobile.png" />
                            <div className="card" key={key}>
                                <div className="back-image">
                                    <img src={data.image} alt="" />
                                </div>                                
                                <div className="project-image">
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