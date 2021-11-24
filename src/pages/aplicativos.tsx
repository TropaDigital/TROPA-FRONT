import { useRouter } from 'next/router';
import Head from 'next/head';
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { AppContainer, BannerApp } from '../assets/styles/AppStyles';
import Header from '../components/Layout/Header';
import { ButtonDefault } from '../components/Form/styles';
import Animate from '../components/Animation/Animate';
import AcordionItems from '../components/AccordionItems';
import { IconCube, IconGlobal } from '../components/Svg';
import WhyTropa from '../components/WhyTropa/WhyTropa';
import Contact from '../components/Contact';
import Footer from '../components/Layout/Footer';
import { LanguagesContainer, PortfolioContainer } from '../assets/styles/HomeStyles';
import { ContainerCenter } from '../components/Layout/styles';
import MobileSection from '../components/MobileSection';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';

const Aplicativos: NextPage = () => {
    
    const router = useRouter();
    const [itemsToShowPortfolio, setItemsToShowPortfolio] = useState(3);

    return (
        <Layout>
            <AppContainer>
                <Head>
                    <title>Tropa.Digital - Infinitas possibilidades</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
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
                                <ButtonDefault>Conheça</ButtonDefault>
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
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque suscipit nulla non vehicula."
                    icon={<IconCube />}
                    items={[
                        {
                            title: 'Velocidade',
                            description:
                                'Lorem ipsum dolor sit amat, consectur apsdifja. Present pallange sucipt nulla nan vehicula.',
                        },
                        {
                            title: 'Facilidade',
                            description:
                                'Lorem ipsum dolor sit amat, consectur apsdifja. Present pallange sucipt nulla nan vehicula.',
                        },
                        {
                            title: 'Atendimento',
                            description:
                                'Lorem ipsum dolor sit amat, consectur apsdifja. Present pallange sucipt nulla nan vehicula.',
                        },
                        {
                            title: 'Design',
                            description:
                                'Lorem ipsum dolor sit amat, consectur apsdifja. Present pallange sucipt nulla nan vehicula.',
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
                            <img src="/images/languages/scss.png" />
                        </Animate>
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
                    </ContainerCenter>

                    <Animate effect="fadeInUp" startAnimation={200}>
                        <Carousel
                            itemsToShow={itemsToShowPortfolio}
                            isRTL={false}
                            className="cards"
                            itemPadding={[0]}
                            outerSpacing={0}
                            showArrows={false}
                            showEmptySlots={false}
                        >
                            {[0, 1, 2, 3, 4, 5].map((row, key) => (
                                <div
                                    className="card"
                                    key={key}
                                    style={{
                                        backgroundImage: `url(/images/bannerHome.jpg)`,
                                    }}
                                >
                                    <h4>Meat APP</h4>
                                    <i>Website</i>
                                </div>
                            ))}
                        </Carousel>
                    </Animate>
                </PortfolioContainer>

                <Contact />
                <Footer />
            </AppContainer>
        </Layout>
    );
};

export default Aplicativos;
