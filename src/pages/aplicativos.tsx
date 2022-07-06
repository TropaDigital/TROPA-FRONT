import { useRouter } from 'next/router';
import Head from 'next/head';
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { AppContainer, BannerApp } from '../assets/styles/AppStyles';
import Header from '../components/Layout/Header';
import { ButtonDefault } from '../components/Form/styles';
import Animate from '../components/Animation/Animate';
import AcordionItems from '../components/AccordionItems';
import {
    IconArrowLeft,
    IconArrowRight,
    IconCube,
    IconGlobal,
} from '../components/Svg';
import WhyTropa from '../components/WhyTropa/WhyTropa';
import Contact from '../components/Contact';
import Footer from '../components/Layout/Footer';
import {
    LanguagesContainer,
    PortfolioContainer,
} from '../assets/styles/HomeStyles';
import { ContainerCenter } from '../components/Layout/styles';
import MobileSection from '../components/MobileSection';
import Carousel from 'react-elastic-carousel';
import { useEffect, useRef, useState } from 'react';
import apiTropa from './api/api';
import PulseLoader from 'react-spinners/PulseLoader';
import Link from 'next/link';

const Aplicativos: NextPage = () => {
    const router = useRouter();
    const [itemsToShowPortfolio, setItemsToShowPortfolio] = useState(3);

    const slider: any = useRef(null);

    const breakpoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 450, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
    ];

    const [portfoliosList, setPortfoliosList] = useState([]);

    useEffect(() => {
        getPortfolios();
    }, []);

    async function getPortfolios() {
        try {
            let portfolios = await apiTropa.get('/portifolio/?status=ativo');
            setPortfoliosList(portfolios.data.result);
        } catch (e: any) {}
    }

    return (
        <Layout>
            <AppContainer>
                <Head>
                    <title>Tropa.Digital - Infinitas possibilidades</title>
                    <meta
                        name="description"
                        content="Desenvolvimento de aplicativos."
                    />
                    <meta property="og:image" content="https://tropa.digital/images/phoneApp.jpg"></meta>
                    <link rel="icon" href="/favicon1.ico" />
                </Head>
                <Header
                    className="bannerAppAnimation"
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
                    <BannerApp>
                        <div className="text">
                            <Animate effect="fadeInLeft">
                                <h1>
                                    Criação
                                    <br /> de aplicativos <b>Android e iOS</b>
                                </h1>
                            </Animate>
                            <Animate effect="fadeInLeft" delayAnimation={0.5}>
                                <ButtonDefault
                                    onClick={() =>
                                        router.push('#mobile-section')
                                    }
                                >
                                    Conheça
                                </ButtonDefault>
                            </Animate>
                        </div>
                        <div className="phone">
                            <Animate effect="fadeInUp">
                                <img src="/images/phoneApp.png" />
                            </Animate>
                        </div>
                    </BannerApp>
                </Header>
                <AcordionItems
                    title="Como fun-ciona?"
                    description="Ajudamos você a tirar sua ideia do papel, desenvolvemos soluções de
                    aplicativos para potencializar os negócios da sua empresa."
                    icon={<IconCube className="effect-stroke light" />}
                    items={[
                        {
                            title: 'Análise',
                            description:
                                'Essa é uma das etapas principais, antes mesmo de iniciar o projeto, por meio de reuniões analisamos cada característica, para identificar qual a melhor estrutura e estratégia a ser aplicada.',
                        },
                        {
                            title: 'Escopo',
                            description:
                                'Depois de tudo ser esclarecido, temos as ideias principais, é nessa etapa que construímos o que chamamos de “wireframe”, que vai auxiliar na produção.',
                        },
                        {
                            title: 'Produção',
                            description:
                                'Nessa etapa, A TROPA inicia a criação do projeto através do design, seguindo com a programação (funcionamento do app) e por fim realiza a entrega.',
                        },
                        {
                            title: 'Suporte',
                            description:
                                'Antes mesmo da entrega do projeto/aplicativo, faremos uma reunião para fornecer ao cliente todo o suporte necessário.',
                        },
                    ]}
                />
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
                            <img src="/images/languages/flutter.png" className='flutter' />
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
                <MobileSection />

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
                        breakPoints={breakpoints}
                    >
                        {portfoliosList.length > 0
                            ? portfoliosList.map((row: any, key) => (
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
            </AppContainer>
        </Layout>
    );
};

export default Aplicativos;
