import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Carousel from 'react-elastic-carousel';

//components
import Header from '../components/Layout/Header';
import Layout from '../components/Layout/Layout';
import {
    IconCode,
    IconCube,
    IconGlobal,
    IconDesktop,
    IconPhone,
    IconArrowLeft,
    IconArrowRight,
} from '../components/Svg';
import Animate from '../components/Animation/Animate';

//styles
import {
    AboutContainer,
    BannerHome,
    HomeContainer,
    LanguagesContainer,
    PortfolioContainer,
} from '../assets/styles/HomeStyles';
import { ContainerCenter } from '../components/Layout/styles';
import Social from '../components/Social';
import WhyTropa from '../components/WhyTropa/WhyTropa';
import Contact from '../components/Contact';
import Footer from '../components/Layout/Footer';
import apiTropa from './api/api';
import PulseLoader from 'react-spinners/PulseLoader';

interface IProps {
    scrollTo?: string;
}

const Home: NextPage<IProps> = ({ scrollTo }) => {
    const router = useRouter();

    const [widthWindow, setWidthWindow] = useState(1920);
    const [itemsToShowSocial, setItemToShowSocial] = useState(3);
    const [itemsToShowPortfolio, setItemsToShowPortfolio] = useState(3);
    const [portfoliosList, setPortfoliosList] = useState([]);

    useEffect(() => {
        getPortfolios();
    }, []);

    async function getPortfolios() {
        try {
            let portfolios = await apiTropa.get('/portifolio/?status=ativo');
            setPortfoliosList(portfolios.data.result);
        } catch (e) {
            console.log('Erro - Não recebendo os dados dos portfólios.');
        }
    }

    useEffect(() => {
        if (scrollTo) {
            handleScrollTo(scrollTo);
        }
    }, [router]);

    useEffect(() => {
        var w = window.innerWidth;
        setWidthWindow(w);
        window.addEventListener('resize', handleResizeWindow);
        return () => window.removeEventListener('resize', handleResizeWindow);
    }, []);

    useEffect(() => {
        if (widthWindow < 800) setItemsToShowPortfolio(1);
        if (widthWindow < 1280 && widthWindow > 800) setItemsToShowPortfolio(2);
        if (widthWindow < 1600 && widthWindow > 1280)
            setItemsToShowPortfolio(3);
        if (widthWindow > 1800 && widthWindow < 1920)
            setItemsToShowPortfolio(4);
        if (widthWindow > 2400) setItemsToShowPortfolio(5);
        if (widthWindow > 1200) setItemToShowSocial(3);
        if (widthWindow < 1300 && widthWindow > 800) setItemToShowSocial(2);
        if (widthWindow < 800) setItemToShowSocial(1);
    }, [widthWindow]);

    function handleResizeWindow(e: any) {
        setWidthWindow(e.currentTarget.outerWidth);
    }

    function handleScrollTo(el: any) {
        const documentElement: any = document;
        documentElement.getElementById(el).scrollIntoView({});
        window.history.pushState({}, 'teste', '/home/' + el);
    }

    const slider: any = useRef(null);

    const [selected, setSelected] = useState('');
    console.log(selected);

    return (
        <Layout>
            <HomeContainer>
                <Head>
                    <title>Tropa.Digital - Infinitas possibilidades</title>
                    <meta
                        name="description"
                        content="Desenvolvimento de aplicativos, sistemas e sites."
                    />
                    <meta property="og:image" content="https://tropa.digital/images/instagram.jpg"></meta>
                    <link rel="icon" href="/favicon1.ico" />
                </Head>
                <Header
                    backgroundImage={'/images/bannerHome.jpg'}
                    className="bannerHomeAnimation"
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
                    <BannerHome>
                        <Animate effect="fadeInDown" delayAnimation={0.2}>
                            <p className="title">Infinitas</p>
                        </Animate>
                        <Animate effect="fadeInDown" delayAnimation={0.4}>
                            <p className="description">Possibilidades</p>
                        </Animate>
                        <Animate effect="backInUp" delayAnimation={0.4}>
                            <button
                                onClick={() => router.push('#o-que-fazemos')}
                            >
                                Inicie seu projeto
                            </button>
                        </Animate>
                    </BannerHome>
                </Header>
                <AboutContainer id="o-que-fazemos">
                    <ContainerCenter>
                        <Animate delayAnimation={0.5} effect="fadeInUp">
                            <div className="title">
                                <h2>O que fazemos?</h2>
                                <IconCube className="effect-stroke primary" />
                            </div>
                        </Animate>

                        <div className="products">
                            <div className="product app">
                                <Link href="/aplicativos">
                                    <a>
                                        <IconPhone />
                                        <p>aplicativos</p>
                                    </a>
                                </Link>
                            </div>
                            <div className="product sys">
                                <Link href="/sistemas">
                                    <a>
                                        <IconCode />
                                        <p className="title">Sistemas</p>
                                    </a>
                                </Link>
                            </div>
                            <div className="product web">
                                <Link href="/sites">
                                    <a>
                                        <IconDesktop />
                                        <p>sites</p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </ContainerCenter>
                </AboutContainer>
                <LanguagesContainer>
                    <ContainerCenter className="center">
                        <Animate effect="zoomIn">
                            <img src="/images/languages/node.png" />
                        </Animate>
                        <Animate effect="zoomIn">
                            <img src="/images/languages/reactjs.png" />
                        </Animate>
                        <Animate effect="zoomIn">
                            <img src="/images/languages/reactnative.png" />
                        </Animate>
                        <Animate effect="zoomIn">
                            <img src="/images/languages/angularjs.png" className='angular' />
                        </Animate>
                        <Animate effect="zoomIn">
                            <img src="/images/languages/flutter.png" className='flutter'/>
                        </Animate>
                        {/* <Animate effect="zoomIn">
                            <img src="/images/languages/scss.png" />
                        </Animate> */}
                        <Animate effect="zoomIn">
                            <img src="/images/languages/mysql.png" />
                        </Animate>
                        <Animate effect="zoomIn">
                            <img src="/images/languages/sqlserver.png" />
                        </Animate>
                    </ContainerCenter>
                </LanguagesContainer>

                <WhyTropa />

                <Social itemsToShow={itemsToShowSocial} />

                <PortfolioContainer id="portfolio">
                    <ContainerCenter className="head-portfolio">
                        <Animate effect="fadeInUp" startAnimation={200}>
                            <div className="title">
                                <h2>Portfólio</h2>
                                <IconGlobal className="effect-stroke light" />
                            </div>
                        </Animate>
                        <div className="buttons">
                            <button onClick={() => slider.current.slidePrev()}>
                                <IconArrowLeft />
                            </button>
                            <button onClick={() => slider.current.slideNext()}>
                                <IconArrowRight />
                            </button>
                        </div>
                    </ContainerCenter>

                    <Carousel
                        itemsToShow={itemsToShowPortfolio}
                        isRTL={false}
                        className="cards"
                        itemPadding={[0]}
                        outerSpacing={0}
                        pagination={false}
                        showArrows={false}
                        showEmptySlots={false}
                        ref={slider}
                    >
                        {portfoliosList.length > 0
                            ? portfoliosList.map((row: any, key: any) => (
                                  <Link href={`/portfolio/${row.slug}`}>
                                      <div
                                          className="card"
                                          key={key}
                                          style={{
                                              backgroundImage:
                                                  'url(' +
                                                  row.imagem_principal +
                                                  ')',
                                          }}
                                      >
                                          <h4>{row.titulo}</h4>
                                          <i>{row.descricao}</i>
                                      </div>
                                  </Link>
                              ))
                            : [1, 2, 3].map((row: any, key) => (
                                  <div
                                      className="loader"
                                      key={key}
                                      style={{
                                          backgroundImage:
                                              'url(' +
                                              row.imagem_principal +
                                              ')',
                                      }}
                                  >
                                      <PulseLoader color="#fff" size={30} />
                                  </div>
                              ))}
                    </Carousel>
                </PortfolioContainer>
                <Contact />
                <Footer />
            </HomeContainer>
        </Layout>
    );
};

export default Home;
