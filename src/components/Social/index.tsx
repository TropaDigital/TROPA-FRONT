import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import apiTropa from '../../pages/api/api';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
import { IconArrowLeft, IconArrowRight, IconFlag } from '../Svg';
import { SocialContainer, SocialContainerCarousel } from './styles';
import PulseLoader from "react-spinners/PulseLoader";

interface IProps {
    itemsToShow?: number;
}

const Social: React.FC<IProps> = ({ itemsToShow = 3 }) => {
    const [socialMedia, setSocialMedia] = useState([])
    
    const breakpoints = ([
        { width: 1, itemsToShow: 1 },
        { width: 450, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },        
    ])

    const slider: any = useRef(null)

    useEffect(() => {
        getSocial();
    }, []);

    async function getSocial() {
        try{
            let socials = await apiTropa.get('/instagram');
            setSocialMedia(socials.data.result.data);
        }catch(e){

        }
    }    

    return (
        <SocialContainer id="social">
            <ContainerCenter>
                <div className="slider">
                    <Animate effect="fadeInLeft" startAnimation={100}>
                        <div className="title">
                            <h2>Tropa nas redes</h2>
                            <IconFlag className="effect-stroke dark" />
                        </div>
                    </Animate>
                    <div className="buttons">
                        <button onClick={() => slider.current.slidePrev()}><IconArrowLeft /></button>
                        <button onClick={() => slider.current.slideNext()}><IconArrowRight /></button>
                    </div>  
                </div>
                <SocialContainerCarousel>
                    <Animate startAnimation={200} effect="bounceInUp">
                        <Carousel
                            itemsToShow={itemsToShow}
                            isRTL={false}
                            className="cards"
                            showArrows={false}
                            pagination={false}
                            itemPadding={[0, 15]}
                            ref={slider}
                            breakPoints={breakpoints}
                        >
                            {   socialMedia.length > 0 
                                ?
                                socialMedia.map((row: any, key: any) => (
                                    <div className="card" key={key}>
                                        {   
                                            row.media_type !== "VIDEO"
                                            ?
                                            <div
                                                className="image"
                                                style={{
                                                    backgroundImage: 'url('+row.media_url+')',
                                                }}
                                            />
                                            :
                                            <div className="image video">
                                                <video loop autoPlay>
                                                    <source
                                                    src={row.media_url}
                                                    type="video/mp4"
                                                    />
                                                </video>
                                            </div>
                                        }
                                        <div className="text">
                                            <a
                                                href={row.permalink}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                @tropadigitalagencia
                                            </a>
                                            <p>{row.caption}</p>
                                        </div>
                                    </div>
                                ))
                                :
                                [1, 2, 3].map((key: any) => (
                                    <div className='loader' key={key}>
                                        <PulseLoader 
                                            color="#cc6138"
                                            size={30} 
                                        />
                                    </div>
                                ))   
                            }
                        </Carousel>
                    </Animate>
                </SocialContainerCarousel>
            </ContainerCenter>
        </SocialContainer>
    );
};

export default Social;
