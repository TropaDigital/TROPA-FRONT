import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { LandingPage, Mobile, PortfolioBanner, PortfolioContainer } from '../../assets/styles/PortfolioStyles';
import Head from 'next/head';
import Header from '../../components/Layout/Header';
import Animate from '../../components/Animation/Animate';
import { IconAstronaut, IconCube, IconFlag } from '../Svg';
import PulseLoader from "react-spinners/PulseLoader";
import Image from 'next/image'

interface IPort {
    portfolioSelected: object | any ;
}

const Portfolio: NextPage<IPort> = ({
    portfolioSelected,
}) => {
    const router = useRouter();

    const imageBack = portfolioSelected.imagem_tipo;

    return (
        <PortfolioContainer>
            <Head>
                    <title>Tropa.Digital - Infinitas possibilidades</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon1.ico" />
            </Head>
            <Header
                backgroundImage={'/images/PortfolioBackground.png'}
                className="bannerSystemAnimation"
                menus={[
                    {
                        href: '/home/o-que-fazemos',
                        value: 'O que fazemos',
                    },
                    {
                        href: '/home/a-tropa',
                        value: 'A Tropa',
                    },
                    {
                        href: '/home/social',
                        value: 'Social',
                    },
                    {
                        href: '/home/portfolio',
                        value: 'Portfolio',
                    },
                    {
                        href: '/home/contato',
                        value: 'contato',
                    },
                ]}
            >
                <PortfolioBanner>
                    <div className="main">
                        <Animate effect="fadeInLeft" className="title">
                            <h1>
                                {portfolioSelected.titulo} 
                            </h1>
                        </Animate>                                             
                    </div>                         
                </PortfolioBanner>
            </Header>

            <LandingPage>
                <div className='title'>
                    <h1>Landing Page</h1>
                    <IconFlag />
                </div>

                <div className='page'>
                    {
                        portfolioSelected.imagem_principal !== undefined
                        ?
                        <img src={portfolioSelected.imagem_principal} alt="Imagem principal do site" />                    
                        :
                        <PulseLoader 
                            color="#fff"
                            size={30} 
                        />
                    }
                </div>

                <div className='text'>
                    <p>
                        EYOU é uma plataforma online com diversas soluções utilizando SMS, Whatsapp, Telefonia e muito mais.
                        <br />   
                        A Tropa foi escolhida para o desenvolvimento do site institucional 100% responsivo, e também para o desenvolvimento de uma "Landing Page" para captação de novos clientes.
                        <br />
                        Veja nosso trabalho acessando: <a href="https://eyou.com.br" target='_blank'>EYOU</a>. 
                    </p>
                </div>
            </LandingPage>   

            <Mobile>                   
                <div className='mobile-cube'>
                    <h1>Mobile</h1>
                    <p>Versão responsiva desenvolvida para celulares</p>
                    <IconCube className="effect-stroke primary"/>
                </div>

                    <div className='phones'>
                        <div className='phone'>                        
                            <div className='cel'>
                                <img src="/images/MobileBlack.png" alt="Celular com imagem do site" />                                
                            </div>
                            {
                                portfolioSelected.imagem_tipo !== undefined
                                ?
                                <div 
                                    className='back'
                                    style={{backgroundImage: `url(${imageBack})`}}
                                />   
                                :
                                <div className='backLoader'>
                                    <PulseLoader 
                                        color="#fff"
                                        size={30} 
                                    />
                                </div>     
                            }                                                  
                        </div>
                                
                        <div className='phone2'>                        
                            <div className='cel2'>
                                <img src="/images/MobileBlack.png" alt="Celular com imagem do site" />
                            </div>
                            {
                                portfolioSelected.imagem_tipo !== undefined
                                ?
                                <div 
                                    className='back2'     
                                    style={{backgroundImage: `url(${imageBack})`}}
                                />        
                                :
                                <div className='backLoader2'>
                                    <PulseLoader 
                                        color="#fff"
                                        size={30} 
                                    />
                                </div>     
                            }                      
                        </div>
                    
                        <div className='phone3'>                        
                            <div className='cel3'>
                                <img src="/images/MobileBlack.png" alt="Celular com imagem do site" />
                            </div>
                            {
                                portfolioSelected.imagem_tipo !== undefined
                                ?
                                <div 
                                    className='back3'     
                                    style={{backgroundImage: `url(${imageBack})`}}
                                />                          
                                :
                                <div className='backLoader3'>
                                    <PulseLoader 
                                        color="#fff"
                                        size={30} 
                                    />
                                </div>     
                            }
                        </div> 
                    </div>     

                <div className='mobile-astro'>
                    <h1>mob</h1>
                    <IconAstronaut className="effect-stroke light"/>
                </div> 
                
                <div className='paper'>
                    <button onClick={() => router.push('/home/contato')}>
                        <p>Tire seu projeto do</p>
                        <img src="/images/Paper.png" alt="Palavra papel circulada" />
                    </button>
                </div>    

            </Mobile>
            
        </PortfolioContainer>
    )
}

export default Portfolio;