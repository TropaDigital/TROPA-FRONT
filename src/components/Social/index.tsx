import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import apiTropa from '../../pages/api/api';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
import { IconArrowLeft, IconArrowRight, IconFlag } from '../Svg';
import { SocialContainer, SocialContainerCarousel } from './styles';

interface IProps {
    itemsToShow?: number;
}

const Social: React.FC<IProps> = ({ itemsToShow = 3 }) => {
    const [socialMedia, setSocialMedia] = useState([])
    // const [data, setData] = useState([
    //     {
    //         image: 'http://instagram.fcgh17-1.fna.fbcdn.net/v/t51.2885-15/e35/96286641_149876740000698_1508641614209261210_n.jpg?_nc_ht=instagram.fcgh17-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=-2YOVlhDWiMAX9R9JLT&tn=i2qYe6JJQZg2wtYV&edm=AP_V10EBAAAA&ccb=7-4&oh=963c2d8013a5e116e26f3523fa737010&oe=6195F977&_nc_sid=4f375e',
    //         text: '🌹',
    //     },
    //     {
    //         image: 'https://instagram.fcgh17-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/95493455_1087465958313213_1744366779184380857_n.jpg?_nc_ht=instagram.fcgh17-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=tRstQMXyj8QAX9FHO4y&edm=AP_V10EBAAAA&ccb=7-4&oh=b151a51122dd4e8aa81451bc14fd9cc9&oe=619494A3&_nc_sid=4f375e',
    //         text: 'Estamos aqui para te ajudar!🚀 #sites #sitesresponsivos #seo #ecommerce #apps #midiadigital #plataforma #desenvolvimento #programação #fiqueemcasa #quarentena',
    //     },
    //     {
    //         image: 'https://instagram.fcgh17-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/91260512_891668344625552_8816620437755387538_n.jpg?_nc_ht=instagram.fcgh17-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=yfF02m8NvqoAX8W_aNZ&edm=AP_V10EBAAAA&ccb=7-4&oh=b1b63ee869be9d4d37a798ed490d3095&oe=61965584&_nc_sid=4f375e',
    //         text: 'A Internet oferece um mundo de possibilidades e conte conosco para tirar seus planos do papel e levar ao mundo digital! 💻 Juntos sairemos dessa! 😉🙏#ficaemcasa',
    //     },
    //     {
    //         image: 'https://instagram.fcgh17-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/91136567_686247741914436_862729972517005629_n.jpg?_nc_ht=instagram.fcgh17-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=sJZjHYfkfsMAX9f4wrc&edm=AP_V10EBAAAA&ccb=7-4&oh=d4d6f8355915e29eb75a146cf0735a45&oe=619544D1&_nc_sid=4f375e',
    //         text: 'Diante dessa quarentena, a internet está sendo nossa grande aliada, né?! Estamos conseguindo nos comunicar com as pessoas que estamos com saudades, as aulas/cursos estão podendo ser assistidos, as vendas sendo realizadas, as informações podendo ser conferidas, enfim...mesmo longe um dos outros, ela está nos unindo! Como está sendo sua quarentena, conte para nós!? Ah....e lembrando que ficamos à disposição para te ajudar nesse mundo digital e não parar o seu ramo profissional, hein! E tomem cuidado com as Fakenews! 😉 https://tropa.digital/ contato@tropa.digital 11-96368-6361 #tropadigital #sites #desenvolvimentodesites #plataformas #ecommerce #digital #apps #coronavirus #quarentena #covid19 #conscientizacao',
    //     },
    // ]);    

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
                            {socialMedia.map((row: any, key: any) => (
                                <div className="card" key={key}>
                                    <div
                                        className="image"
                                        style={{
                                            backgroundImage: 'url('+row.media_url+')',
                                        }}
                                    />
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
                            ))}
                        </Carousel>
                    </Animate>
                </SocialContainerCarousel>
            </ContainerCenter>
        </SocialContainer>
    );
};

export default Social;
