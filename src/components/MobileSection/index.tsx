import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Animate from '../Animation/Animate';
import { IconArrow, IconArrowLeft, IconArrowRight, IconAstronaut } from '../Svg';
import { Mobilecontainer, MobileDiv, SliderDiv } from './styles';

const MobileSection: NextPage = () => {

    return (
        <Mobilecontainer>
            
            <SliderDiv>
                <Animate effect="fadeInLeft" startAnimation={100}>
                    <div className="title">
                        <h2>Nós Criamos</h2>
                        <IconAstronaut />
                    </div>
                </Animate>                
                <div className="slider">
                    <IconArrowLeft />
                    <IconArrowRight />
                </div>
            </SliderDiv>

            <MobileDiv>
                
                <div className="mobile">
                    <img src="/images/mobile.png" />
                    <div className="back-image">
                        <img src="/images/barca.jpg" alt="" />
                    </div>
                </div>
                
                <div className="mobile">
                        <img src="/images/mobile.png" />
                        <div className="back-image">
                            <p>Ver este</p> <br /><p className='bottom'> projeto</p>
                            <IconArrow />
                        </div>                    
                </div>

                <div className="mobile">
                    <img src="/images/mobile.png" />
                    <div className="back-image">
                        <img src="/images/hotdog.png" alt="" />
                    </div>
                </div>
                
            </MobileDiv>

        </Mobilecontainer>
    )
}

export default MobileSection