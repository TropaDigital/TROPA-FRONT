import { NextPage } from 'next';
import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Animate from '../Animation/Animate';
import { SliderDiv } from '../MobileSection/styles';
import { IconArrow, IconArrowLeft, IconArrowRight, IconAstronaut } from '../Svg';
import { WebContainer, WebDiv } from './style';


interface IProps {
    itemsToShow?: number;
}

const WebSection: NextPage<IProps> = ({ itemsToShow = 1 }) => {

    const [data, setData] = useState([
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

    return(
        <WebContainer>

            <SliderDiv>
                <Animate effect="fadeInLeft" startAnimation={100}>
                    <div className="title">
                        <h2>Nós Criamos</h2>
                        <IconAstronaut />
                    </div>
                </Animate>                                
            </SliderDiv>

            <WebDiv>
                <Carousel
                    itemsToShow={itemsToShow}
                    isRTL={false}
                    className="cards"
                    renderArrow={myArrow}
                    itemPadding={[0, 15]}
                >   
                    {data.map((data, key) => (
                        <div className="web">
                            <img src="/images/Notebook.png" />
                            <div className="card" key={key}>
                                <div className="back-image">
                                    <img src={data.image} />
                                </div>                                
                                <div className="project-image">
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