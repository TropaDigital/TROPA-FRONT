import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { LandingPage, Mobile, PortfolioBanner, PortfolioContainer } from '../../assets/styles/PortfolioStyles';
import Head from 'next/head';
import Header from '../../components/Layout/Header';
import Animate from '../../components/Animation/Animate';
import { IconAstronaut, IconCube, IconFlag } from '../Svg';

interface IPort {
    title: string;
    page?: any;
    mobile: any;
}

const Portfolio: NextPage<IPort> = ({
    title,
    page,
    mobile,
}) => {
    const router = useRouter();

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
                                {title}
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
                    <img src="/images/DocketPort.png" alt="" />
                </div>
            </LandingPage>   

            <Mobile>                   
                <div className='mobile-cube'>
                    <h1>Mobile</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium debitis laborum assumenda nesciunt explicabo dolore nisi! </p>
                    <IconCube className="effect-stroke primary"/>
                </div>

                <div className='phones'>
                    <div className='mobile'>
                        <img src="/images/TropaPhone.png" alt="Celular com logo da Tropa" />
                    </div>
                    <div className='phone'>                        
                        <div className='cel'>
                            <img src="/images/MobileBlack.png" alt="Celular com imagem do site" />
                        </div>
                        <div className='back'>
                            <img src="/images/Customer.png" alt="" />
                        </div>                        
                    </div>
                    <div className='phone2'>                        
                        <div className='cel2'>
                            <img src="/images/MobileBlack.png" alt="Celular com imagem do site" />
                        </div>
                        <div className='back2'>
                            <img src="/images/Customer.png" alt="" />
                        </div>                        
                    </div>
                    <div className='phone3'>                        
                        <div className='cel3'>
                            <img src="/images/MobileBlack.png" alt="Celular com imagem do site" />
                        </div>
                        <div className='back3'>
                            <img src="/images/Customer.png" alt="" />
                        </div>                        
                    </div>
                </div>     

                <div className='mobile-astro'>
                    <h1>mobile</h1>
                    <IconAstronaut className="effect-stroke light"/>
                </div>    


                <div className='paper'>
                    <button>
                        <p>Tire seu projeto do</p>
                        <img src="/images/Paper.png" alt="Palavra papel circulada" />
                    </button>
                </div>    

            </Mobile>
            
        </PortfolioContainer>
    )
}

export default Portfolio;