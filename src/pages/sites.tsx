import { useRouter } from 'next/router';
import Head from 'next/head';
import type { NextPage } from 'next';
import StageItems from '../components/Stages';
import Header from '../components/Layout/Header';
import { IconCube } from '../components/Svg';
import { LanguagesContainer } from '../assets/styles/HomeStyles';
import { ContainerCenter } from '../components/Layout/styles';
import Animate from '../components/Animation/Animate';
import WhyTropa from '../components/WhyTropa/WhyTropa';
import WebSection from '../components/WebSection';
import Contact from '../components/Contact';
import Footer from '../components/Layout/Footer';
import { AppContainer, BannerApp } from '../assets/styles/AppStyles';
import Layout from '../components/Layout/Layout';

const Sites: NextPage = () => {
    const router = useRouter();

    return (
        <Layout>
            <AppContainer>
                <Head>
                    <title>Tropa.Digital - Infinitas possibilidades</title>
                    <meta
                        name="description"
                        content="Desenvolvimento de sites."
                    />
                    <meta property="og:image" content="https://tropa.digital/images/Mac.png"></meta>
                    <link rel="icon" href="/favicon1.ico" />
                </Head>
                <Header
                    className="bannerAppAnimation site"
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
                    <BannerApp className="site-variant">
                        <div className="main">
                            <Animate effect="fadeInLeft" className="title">
                                <h1>Website</h1>
                            </Animate>
                            <div className="title-transparent">
                                <h1 className="transparent">Website</h1>
                            </div>
                            <Animate effect="fadeInUp" className="mac">
                                <img src="/images/Mac.png" />
                            </Animate>
                        </div>
                    </BannerApp>
                </Header>

                <StageItems
                    title="O QUE FAZEMOS?"
                    description="Conhe??a um pouco do nosso trabalho e saiba quais as vantagens de contratar
                    um site da TROPA.
                    "
                    icon={<IconCube className="effect-stroke dark" />}
                    items={[
                        {
                            title: 'Responsivo',
                            description:
                                'Somos especializados em desenvolver sites responsivos, que s??o aqueles que se adaptam em todos dispositivos m??veis e desktop, um ??timo diferencial que auxilia nas vendas e na divulga????o do seu neg??cio',
                        },
                        {
                            title: 'Registro',
                            description:
                                'N??o se preocupe com a burocracia de ter o seu site no ar, faremos tudo isso pra voc??. N??s registramos o dom??nio do seu site e voc?? s?? paga ap??s 1 ano de uso.',
                        },
                        {
                            title: 'SEO',
                            description:
                                'Nossa metodologia de cria????o atende a todos os requisitos para que seu site seja listado nas buscas do Google e outros buscadores do mercado.',
                        },
                        {
                            title: '100% GERENCI??VEL',
                            description:
                                'Um site pra chamar de seu, voc?? ter?? total autonomia para administra-lo. Lembrando que o treinamento para gerenciar cada etapa ?? por nossa conta.',
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

                <WebSection />

                <Contact />

                <Footer />
            </AppContainer>
        </Layout>
    );
};

export default Sites;
