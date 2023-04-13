import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { ContainerSistemasLP } from '../assets/styles/SistemasLP';
import Head from 'next/head';
import {
    IconDesenvolvimento,
    IconEntedimento,
    IconEntregaProjeto,
    IconSolucaoProblema,
    IconSustentacao,
    LineMethodology,
    Logo,
} from '../components/Svg';
import Image from 'next/image';
import Footer from '../components/Layout/Footer';
import Contact from '../components/Contact';
import { useEffect, useState } from 'react';
import Animate from '../components/Animation/Animate';
import { clearInterval } from 'timers';
import ListCases from '../components/Cases/Cases';

interface IPropsMethodology {
    number: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    steps: string[];
    top: number;
}

export const MethodologyItem = ({
    number,
    icon,
    title,
    description,
    steps,
    top = 0,
}: IPropsMethodology) => {
    return (
        <div
            className="item-methodology animate__animated animate__fadeInUp"
            style={{
                marginTop: top,
                animationDelay: `${number / 10 + 0.5}s`,
            }}
        >
            <div className="step">
                <div className="number">{number}</div>
                <div className="icon">{icon}</div>
            </div>
            <p className="title-item">{title}</p>
            <p className="description-item">{description}</p>
            <div className="items">
                {steps.map((row) => (
                    <span key={row}>{row}</span>
                ))}
            </div>
        </div>
    );
};

const SistemasSobMedida: NextPage = () => {
    const router = useRouter();
    const [messageWPP, setMessageWPP] = useState('hidden');
    const [preview, setPreview] = useState('/images/cases/123jus.png');
    const [textPreview, setTextPreview] = useState('');
    useEffect(() => {
        const internval = setInterval(() => {
            setMessageWPP('animate__animated animate__fadeInRight');
            setTimeout(() => {
                setMessageWPP('animate__animated animate__fadeOutRight');
            }, 5000);
        }, 10000);
    }, []);

    useEffect(() => {
        if (preview === '/images/cases/text2you.png') {
            setTextPreview(
                'Text2you é uma plataforma que permite enviar mensagens automatizadas através de diversos canais de comunicação, incluindo WhatsApp, SMS, email e integrações com Instagram, Telegram, Facebook e chat web Firebase. Com Text2you, é possível criar e gerenciar campanhas de marketing, comunicação com clientes e outras mensagens personalizadas de forma eficiente e escalável. A plataforma oferece recursos avançados de automação, segmentação e análise para ajudar a melhorar a efetividade das suas campanhas.'
            );
        } else if (preview === '/images/cases/123jus.png') {
            setTextPreview(
                '123Jus é uma plataforma de sistema jurídico online que oferece uma solução eficiente e inovadora para escritórios de advocacia e profissionais do direito. Com a plataforma, é possível gerenciar todos os processos jurídicos de forma digital, desde a criação de documentos e petições até o controle de prazos e andamentos processuais. A 123Jus também conta com um sistema de gerenciamento de clientes e uma biblioteca jurídica com conteúdos atualizados e relevantes para auxiliar na tomada de decisões. Além disso, a plataforma oferece recursos de automação de tarefas, como o preenchimento automático de documentos e o agendamento de prazos. Com a 123Jus, os profissionais do direito podem aumentar a produtividade e eficiência do seu trabalho, além de garantir mais segurança e praticidade para seus clientes.'
            );
        } else if (preview === '/images/cases/eyouomni.png') {
            setTextPreview(
                'Eyou Omni é uma plataforma inovadora que oferece uma solução unificada para atendimento ao cliente via chat web e WhatsApp. Com a tecnologia de socket, a plataforma garante uma experiência de chat em tempo real, permitindo que os usuários interajam com os atendentes de forma instantânea e eficiente. Além disso, a integração com o WhatsApp permite que as empresas se comuniquem com os clientes em um canal popular e conveniente. Com Eyou Omni, é possível gerenciar todas as conversas em um único lugar, tornando o processo de atendimento mais ágil e organizado. A plataforma também oferece recursos avançados de análise e relatórios para ajudar as empresas a monitorar o desempenho do atendimento e aprimorar a experiência do cliente.'
            );
        }
    }, [preview]);
    useEffect(() => {
        const intervalID = setTimeout(() => {
            if (preview === '/images/cases/text2you.png') {
                setPreview('/images/cases/123jus.png');
            } else if (preview === '/images/cases/123jus.png') {
                setPreview('/images/cases/eyouomni.png');
            } else if (preview === '/images/cases/eyouomni.png') {
                setPreview('/images/cases/text2you.png');
            }
        }, 5000);

        return () => {
            clearTimeout(intervalID);
        };
    }, [preview]);

    return (
        <ContainerSistemasLP>
            <Head>
                <title>
                    Tropa.Digital - Desenvolvimento de sistema sob medida
                </title>
                <meta
                    name="description"
                    content="Desenvolvimento de sistemas personalizados sob medida."
                />
                <meta
                    property="og:image"
                    content="https://tropa.digital/images/bannerHome.jpg"
                ></meta>
                <link rel="icon" href="/favicon1.ico" />
            </Head>
            <header>
                <div className="top">
                    <div className="center">
                        <Logo />
                    </div>
                </div>
                <div className="content">
                    <div className="center">
                        <div className="text">
                            <h1 className="title">Sistemas sob medida</h1>
                            <p>
                                Alcance o sucesso digital com a Tropa Digital!{' '}
                            </p>
                            <p>
                                Líderes em soluções digitais, desenvolvemos
                                sistemas web sob medida para seu negócio. Equipe
                                qualificada, soluções personalizadas e
                                integradas aos processos de negócios. Tire seu
                                projeto do papel e alcance seu potencial máximo
                                online! Entre em contato para saber mais e
                                impulsione seu negócio para o sucesso digital!
                            </p>
                        </div>
                        <div className="notebook animate__animated"></div>
                    </div>
                </div>
            </header>
            <section id="methodology">
                <div className="center">
                    <Animate effect="fadeInUp" className="effect">
                        <h2 className="title">Metodologia Tropa</h2>
                    </Animate>
                    <div className="container-line">
                        <div className="line animate__animated animate__fadeIn">
                            <LineMethodology />
                        </div>
                        <div className="steps animate__animated animate__fadeIn">
                            <Animate effect="fadeInUp" className="effect">
                                <MethodologyItem
                                    number={1}
                                    top={75}
                                    icon={<IconEntedimento />}
                                    title="Entendimento"
                                    description="Etapa de reuniões para entendimento da necessidade e cenario do cliente."
                                    steps={['Reuniões', 'Pesquisas']}
                                />
                            </Animate>
                            <MethodologyItem
                                number={2}
                                top={55}
                                icon={<IconSolucaoProblema />}
                                title="Solução do Problema"
                                description="A melhor forma de resolução com técnicas e tecnologias consolidadas."
                                steps={[
                                    'UX/UI',
                                    'Protótipos',
                                    'Testes com usuários',
                                ]}
                            />
                            <MethodologyItem
                                top={60}
                                number={3}
                                icon={<IconDesenvolvimento />}
                                title="Desenvolvimento"
                                description="Planejamento, codificação e acompanhamento do projeto."
                                steps={[
                                    'Testes',
                                    'Deploy',
                                    'Dailys',
                                    'Plannings',
                                ]}
                            />
                            <MethodologyItem
                                top={95}
                                number={4}
                                icon={<IconEntregaProjeto />}
                                title="Entrega do Projeto"
                                description="Projeto entregue com estratégias de deploy contínuo."
                                steps={['Deploy', 'Monitoramento']}
                            />
                            <MethodologyItem
                                top={30}
                                number={5}
                                icon={<IconSustentacao />}
                                title="Sustentação"
                                description="Manutenção e atualização contínua do software da empresa."
                                steps={['Tarefas', 'Bugs e melhorias']}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="wedo">
                <div className="center">
                    <div className="logo">
                        <svg
                            width="94"
                            height="89"
                            viewBox="0 0 94 89"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M84.0863 57.8274L94 53.9899V28.0962L84.0863 24.2586C77.732 9.96211 63.5228 0 47 0C30.4772 0 16.268 9.96211 9.91365 24.2586L0 28.0962V53.9864L9.91365 57.8239C12.2411 63.0605 15.626 67.712 19.7889 71.5108V74.2736H12.4086L7.53382 89H86.4662L81.5914 74.2736H73.9773V71.7258C78.2484 67.8917 81.7135 63.1591 84.0863 57.8274ZM36.1686 12.531H57.8314V18.0319H36.1686V12.531ZM71.4893 54.9942L64.0148 62.5424H29.8108L22.2769 54.9343V30.2845L29.8003 22.687H64.1299L71.4858 30.1154V54.9942H71.4893Z"
                                fill="#CEBAA8"
                            />
                        </svg>
                    </div>
                    <div className="text">
                        <Animate effect="fadeInUp" className="effect">
                            <h2 className="title">Nossos cases</h2>
                        </Animate>
                        <p>
                            A Tropa Digital é uma empresa líder em soluções
                            digitais, especializada no desenvolvimento de
                            sistemas web sob medida que atendam às necessidades
                            exclusivas de cada cliente. Com uma equipe altamente
                            qualificada e experiente, trabalhamos em estreita
                            colaboração com nossos clientes para criar soluções
                            personalizadas que se integram perfeitamente aos
                            seus processos de negócios. Nosso objetivo é
                            oferecer as melhores soluções digitais para nossos
                            clientes, ajudando-os a levar seus negócios para o
                            próximo nível. Entre em contato conosco hoje mesmo
                            para saber mais sobre nossos serviços de
                            desenvolvimento de sistemas web sob medida.
                        </p>
                    </div>
                    <div className="image-mockup">
                        <Image
                            alt="Notebbok e computador com sitemas Omni abertos"
                            src="/images/mockup-pc-system.png"
                            width="857"
                            height="470"
                        />
                    </div>
                </div>
            </section>
            <section id="different">
                <div className="center">
                    <div className="item">
                        <div className="icon">
                            <svg
                                width="28"
                                height="40"
                                viewBox="0 0 28 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.75 3.75C7.8425 3.75 3.75 7.975 3.75 13.125C3.75 15.585 4.81 17.1875 6.21 18.885L6.745 19.5175C7.3025 20.1775 7.92 20.9075 8.4275 21.6375C9.1375 22.665 9.77 23.8775 9.98 25.3625C10.03 25.8449 9.89123 26.3279 9.59269 26.7102C9.29415 27.0924 8.85911 27.344 8.37895 27.4123C7.89878 27.4806 7.41084 27.3602 7.0176 27.0763C6.62435 26.7924 6.3564 26.3672 6.27 25.89C6.17 25.185 5.8625 24.5225 5.345 23.7725C4.92279 23.183 4.47052 22.6156 3.99 22.0725C3.78 21.8225 3.5575 21.56 3.32 21.2725C1.7525 19.375 0 16.915 0 13.125C0 5.775 5.9075 0 13.75 0C21.5925 0 27.5 5.775 27.5 13.125C27.5 16.915 25.7475 19.375 24.18 21.2725C23.9425 21.56 23.72 21.8225 23.51 22.07C22.9925 22.6825 22.5525 23.2025 22.1575 23.7725C21.6375 24.5225 21.3325 25.185 21.2325 25.89C21.1403 26.3625 20.8701 26.7815 20.4778 27.0605C20.0855 27.3395 19.601 27.4572 19.1244 27.3891C18.6478 27.3211 18.2156 27.0726 17.917 26.695C17.6184 26.3173 17.4763 25.8394 17.52 25.36C17.73 23.8775 18.3625 22.665 19.0725 21.6375C19.58 20.9075 20.1975 20.1775 20.755 19.5175C20.9425 19.2975 21.1225 19.085 21.2875 18.885C22.69 17.1875 23.75 15.585 23.75 13.125C23.75 7.975 19.6575 3.75 13.75 3.75ZM8.125 30H19.375C19.8723 30 20.3492 30.1975 20.7008 30.5492C21.0525 30.9008 21.25 31.3777 21.25 31.875C21.25 32.3723 21.0525 32.8492 20.7008 33.2008C20.3492 33.5525 19.8723 33.75 19.375 33.75H8.125C7.62772 33.75 7.15081 33.5525 6.79917 33.2008C6.44754 32.8492 6.25 32.3723 6.25 31.875C6.25 31.3777 6.44754 30.9008 6.79917 30.5492C7.15081 30.1975 7.62772 30 8.125 30ZM8.75 38.125C8.75 37.6277 8.94754 37.1508 9.29917 36.7992C9.65081 36.4475 10.1277 36.25 10.625 36.25H16.875C17.3723 36.25 17.8492 36.4475 18.2008 36.7992C18.5525 37.1508 18.75 37.6277 18.75 38.125C18.75 38.6223 18.5525 39.0992 18.2008 39.4508C17.8492 39.8025 17.3723 40 16.875 40H10.625C10.1277 40 9.65081 39.8025 9.29917 39.4508C8.94754 39.0992 8.75 38.6223 8.75 38.125Z"
                                    fill="#CC6138"
                                />
                            </svg>
                        </div>
                        <div className="text">
                            <p className="title-item">Personalização</p>
                            <p className="description-item">Completa</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <svg
                                width="41"
                                height="41"
                                viewBox="0 0 41 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.0675 4.8241L4.105 7.8616C6.92981 4.16346 10.9555 1.56582 15.4891 0.515863C20.0227 -0.534095 24.7805 0.029323 28.9435 2.10912C33.1064 4.18893 36.4141 7.65498 38.297 11.9106C40.1799 16.1662 40.5203 20.9452 39.2596 25.4247C37.9988 29.9043 35.2159 33.8042 31.3897 36.453C27.5636 39.1019 22.9337 40.334 18.297 39.9372C13.6604 39.5404 9.30715 37.5396 5.98669 34.2792C2.66623 31.0187 0.586311 26.7027 0.105001 22.0741C0.0539468 21.5791 0.201606 21.0842 0.515495 20.6981C0.829384 20.312 1.28379 20.0664 1.77875 20.0154C2.27371 19.9643 2.76868 20.112 3.15477 20.4258C3.54086 20.7397 3.78645 21.1941 3.8375 21.6891C4.23165 25.4701 5.93892 28.9932 8.66225 31.6455C11.3856 34.2979 14.9526 35.9114 18.7427 36.2055C22.5328 36.4997 26.306 35.4557 29.406 33.2553C32.5059 31.0548 34.7362 27.8372 35.7089 24.1623C36.6817 20.4874 36.3352 16.5877 34.7298 13.1419C33.1245 9.69598 30.3618 6.92199 26.9225 5.30254C23.4832 3.68309 19.585 3.32068 15.9061 4.27837C12.2273 5.23605 9.00059 7.45322 6.7875 10.5441L10.1825 13.9391C10.2701 14.0265 10.3298 14.138 10.354 14.2594C10.3783 14.3807 10.3659 14.5066 10.3185 14.6209C10.2711 14.7353 10.1908 14.833 10.0878 14.9016C9.98483 14.9703 9.86378 15.0068 9.74 15.0066H0.625001C0.459241 15.0066 0.30027 14.9408 0.183059 14.8235C0.065849 14.7063 1.00081e-06 14.5474 1.00081e-06 14.3816V5.2666C-0.000220456 5.14282 0.0363151 5.02177 0.104976 4.91878C0.173636 4.8158 0.27133 4.73552 0.385672 4.68812C0.500014 4.64072 0.625854 4.62834 0.747239 4.65255C0.868625 4.67676 0.980089 4.73647 1.0675 4.8241ZM19.375 10.0066C19.8723 10.0066 20.3492 10.2041 20.7008 10.5558C21.0525 10.9074 21.25 11.3843 21.25 11.8816V19.3616L26.32 21.3916C26.7668 21.5864 27.1202 21.9475 27.3053 22.3983C27.4904 22.8492 27.4926 23.3544 27.3115 23.807C27.1305 24.2595 26.7803 24.6237 26.3353 24.8224C25.8902 25.0212 25.3853 25.0388 24.9275 24.8716L18.6775 22.3716C18.3301 22.232 18.0324 21.9918 17.8226 21.6817C17.6128 21.3717 17.5004 21.006 17.5 20.6316V11.8816C17.5 11.3843 17.6975 10.9074 18.0492 10.5558C18.4008 10.2041 18.8777 10.0066 19.375 10.0066Z"
                                    fill="#CC6138"
                                />
                            </svg>
                        </div>
                        <div className="text">
                            <p className="title-item">Agilidade</p>
                            <p className="description-item">
                                no desenvolvimento
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <svg
                                width="38"
                                height="38"
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M32.8344 4.69198H32.8319L37.0219 5.52948C37.2469 5.57448 37.4319 5.73948 37.4969 5.96198C37.5298 6.07006 37.5327 6.18502 37.5054 6.29463C37.4781 6.40424 37.4216 6.50441 37.3419 6.58448L33.9094 10.0195C33.4988 10.4294 32.9422 10.6596 32.3619 10.6595H29.5169L22.3669 17.812C22.5034 18.327 22.5284 18.8652 22.4405 19.3908C22.3526 19.9163 22.1537 20.417 21.8571 20.8596C21.5605 21.3022 21.173 21.6766 20.7204 21.9577C20.2677 22.2388 19.7604 22.4202 19.2322 22.4899C18.7039 22.5595 18.1669 22.5158 17.6569 22.3616C17.1469 22.2075 16.6756 21.9464 16.2743 21.5958C15.8731 21.2452 15.5513 20.8131 15.3301 20.3284C15.109 19.8436 14.9937 19.3173 14.9919 18.7845C14.9923 18.2092 15.125 17.6417 15.3796 17.1259C15.6343 16.61 16.0041 16.1596 16.4605 15.8095C16.917 15.4594 17.4478 15.2189 18.012 15.1066C18.5763 14.9943 19.1587 15.0133 19.7144 15.162L26.8669 8.00698V5.16448C26.8669 4.58448 27.0969 4.02698 27.5069 3.61698L30.9419 0.181977C31.022 0.102299 31.1222 0.0458108 31.2318 0.018518C31.3414 -0.00877489 31.4564 -0.0058515 31.5644 0.0269773C31.7869 0.0919773 31.9519 0.276977 31.9969 0.501977L32.8344 4.69198Z"
                                    fill="#CC6138"
                                />
                                <path
                                    d="M3.74193 18.7844C3.7445 20.9293 4.20704 23.0487 5.09835 24.9997C5.98966 26.9506 7.28901 28.6877 8.90874 30.0938C10.5285 31.4999 12.4309 32.5422 14.4878 33.1505C16.5446 33.7589 18.708 33.919 20.832 33.6201C22.9559 33.3213 24.9911 32.5704 26.8002 31.4181C28.6093 30.2658 30.1503 28.7389 31.3191 26.9405C32.4879 25.142 33.2575 23.1138 33.5758 20.9926C33.8941 18.8715 33.7539 16.7067 33.1644 14.6444C33.0817 14.4035 33.0488 14.1482 33.0679 13.8942C33.0869 13.6401 33.1575 13.3926 33.2752 13.1667C33.393 12.9408 33.5555 12.7412 33.7528 12.5801C33.9502 12.419 34.1783 12.2997 34.4232 12.2296C34.6681 12.1595 34.9247 12.1399 35.1774 12.1721C35.4301 12.2043 35.6736 12.2876 35.8931 12.4169C36.1126 12.5462 36.3035 12.7189 36.4542 12.9243C36.6048 13.1297 36.7121 13.3637 36.7694 13.6119C37.9107 17.6057 37.6939 21.8654 36.1531 25.7227C34.6122 29.5801 31.8344 32.8167 28.2555 34.9249C24.6766 37.0331 20.499 37.8936 16.3783 37.3714C12.2576 36.8492 8.42678 34.9738 5.48693 32.0394C2.55028 29.1003 0.672866 25.2691 0.149437 21.1475C-0.373992 17.0258 0.486209 12.8469 2.59498 9.26709C4.70376 5.68724 7.94169 2.90907 11.8004 1.36876C15.6591 -0.171541 19.9201 -0.386755 23.9144 0.756912C24.39 0.895942 24.7913 1.21758 25.0304 1.65154C25.2696 2.0855 25.3273 2.5965 25.1909 3.07285C25.0544 3.54921 24.735 3.95219 24.3023 4.19374C23.8697 4.43528 23.359 4.49574 22.8819 4.36191C20.6484 3.72108 18.2965 3.60782 16.0117 4.03108C13.7269 4.45433 11.5717 5.40253 9.71591 6.80091C7.86012 8.19929 6.35453 10.0096 5.31783 12.0892C4.28112 14.1688 3.74165 16.4608 3.74193 18.7844Z"
                                    fill="#CC6138"
                                />
                                <path
                                    d="M11.2419 18.7844C11.2421 20.1509 11.6153 21.4914 12.3213 22.6613C13.0274 23.8312 14.0394 24.7862 15.2483 25.4232C16.4573 26.0602 17.8172 26.3551 19.1813 26.276C20.5455 26.1969 21.8622 25.7468 22.9894 24.9744C24.1164 24.2 25.0102 23.1322 25.5742 21.8865C26.1383 20.6409 26.351 19.2647 26.1894 17.9069C26.1457 17.5774 26.1906 17.2422 26.3195 16.9358C26.4484 16.6295 26.6567 16.363 26.9228 16.1638C27.1889 15.9647 27.5033 15.8401 27.8336 15.8028C28.1639 15.7656 28.4981 15.817 28.8019 15.9519C29.1056 16.085 29.3686 16.2963 29.5641 16.5642C29.7595 16.8321 29.8804 17.147 29.9144 17.4769C30.1861 19.7971 29.7287 22.1444 28.6057 24.1929C27.4827 26.2414 25.7499 27.8895 23.6478 28.9085C21.5456 29.9274 19.1784 30.2667 16.8747 29.8792C14.5709 29.4917 12.445 28.3967 10.7918 26.746C9.1387 25.0954 8.04042 22.9711 7.64943 20.668C7.25843 18.3648 7.59411 15.9971 8.60988 13.8934C9.62565 11.7897 11.2711 10.0544 13.3179 8.9283C15.3647 7.80223 17.7113 7.34127 20.0319 7.60939C20.2804 7.63244 20.5218 7.70487 20.7419 7.82243C20.9621 7.93998 21.1565 8.1003 21.3139 8.29398C21.4713 8.48766 21.5884 8.7108 21.6584 8.95034C21.7284 9.18987 21.7499 9.44097 21.7216 9.68891C21.6933 9.93686 21.6158 10.1767 21.4936 10.3943C21.3715 10.6119 21.2071 10.8029 21.0101 10.9562C20.8132 11.1094 20.5876 11.2218 20.3467 11.2868C20.1057 11.3517 19.8542 11.3679 19.6069 11.3344C18.5561 11.2124 17.4913 11.3141 16.4825 11.6328C15.4737 11.9515 14.5438 12.48 13.7538 13.1836C12.9638 13.8872 12.3315 14.75 11.8986 15.7152C11.4657 16.6805 11.2419 17.7265 11.2419 18.7844Z"
                                    fill="#CC6138"
                                />
                            </svg>
                        </div>
                        <div className="text">
                            <p className="title-item">Experiência</p>
                            <p className="description-item">e conhecimento</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <svg
                                width="41"
                                height="41"
                                viewBox="0 0 41 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M35.1647 2.96851e-10H35.6297C38.0447 2.96851e-10 40.0047 1.96 40.0047 4.375V4.84C40.0025 10.6409 37.6969 16.2035 33.5947 20.305L32.4497 21.4525C31.6647 22.2375 30.8472 22.9925 30.0022 23.7125V31.73C30.0022 33.25 29.2147 34.66 27.9197 35.455L20.9847 39.7225C20.741 39.8731 20.4661 39.9658 20.181 39.9934C19.896 40.0211 19.6084 39.983 19.3403 39.882C19.0723 39.7811 18.831 39.62 18.635 39.4112C18.439 39.2024 18.2935 38.9514 18.2097 38.6775L15.8247 30.9225C15.6958 30.828 15.5746 30.7235 15.4622 30.61L9.38966 24.54C9.27701 24.4275 9.17335 24.3063 9.07966 24.1775L1.32466 21.7925C1.05078 21.7087 0.799782 21.5632 0.590962 21.3672C0.382141 21.1712 0.221068 20.9299 0.120134 20.6618C0.0191997 20.3938 -0.0189053 20.1062 0.00875042 19.8211C0.0364061 19.5361 0.129085 19.2611 0.279658 19.0175L4.55466 12.0825C4.94575 11.4459 5.49352 10.9202 6.14566 10.5556C6.7978 10.191 7.53253 9.99974 8.27966 10H16.2897C17.0097 9.155 17.7647 8.3375 18.5497 7.5525L19.6972 6.4075C21.7283 4.37608 24.1396 2.76465 26.7936 1.66525C29.4475 0.565839 32.292 -1.49652e-05 35.1647 2.96851e-10ZM22.3497 9.0575H22.3447L21.1997 10.2025C19.2997 12.1025 17.6072 14.1975 16.1497 16.4525L12.3997 22.245L17.7572 27.6025L23.5497 23.8525C25.8047 22.395 27.8997 20.7025 29.7972 18.8025L30.9447 17.6575C32.6276 15.9742 33.9626 13.9759 34.8733 11.7766C35.7839 9.5774 36.2525 7.22033 36.2522 4.84V4.375C36.2522 4.20924 36.1863 4.05027 36.0691 3.93306C35.9519 3.81585 35.7929 3.75 35.6272 3.75H35.1622C30.3565 3.75042 25.7479 5.65954 22.3497 9.0575ZM8.90466 36.4C7.07466 38.23 3.06966 39.0125 1.39216 39.27C1.30172 39.2845 1.20914 39.2776 1.12186 39.2498C1.03458 39.222 0.955043 39.1741 0.889658 39.11C0.825511 39.0446 0.777614 38.9651 0.749824 38.8778C0.722033 38.7905 0.715126 38.6979 0.729658 38.6075C0.987158 36.93 1.76966 32.925 3.60466 31.1C3.94395 30.7154 4.35843 30.4044 4.82255 30.1861C5.28666 29.9679 5.79056 29.847 6.30318 29.831C6.8158 29.8149 7.32627 29.9041 7.80312 30.0929C8.27996 30.2818 8.71306 30.5663 9.07571 30.9289C9.43837 31.2916 9.72289 31.7247 9.91173 32.2015C10.1006 32.6784 10.1897 33.1889 10.1737 33.7015C10.1577 34.2141 10.0368 34.718 9.81854 35.1821C9.60028 35.6462 9.28926 36.0607 8.90466 36.4ZM26.2547 26.5625C26.0347 26.7125 25.8122 26.8575 25.5897 27L19.7147 30.8025L21.0847 35.26L25.9572 32.26C26.0481 32.204 26.1232 32.1257 26.1753 32.0325C26.2274 31.9393 26.2547 31.8343 26.2547 31.7275V26.5625ZM9.19966 20.29L13.0047 14.415C13.1497 14.19 13.2972 13.97 13.4447 13.75H8.27716C8.17038 13.75 8.06537 13.7773 7.97215 13.8294C7.87893 13.8815 7.80061 13.9566 7.74466 14.0475L4.74466 18.9225L9.19966 20.29ZM30.0047 12.5C30.0047 13.163 29.7413 13.7989 29.2724 14.2678C28.8036 14.7366 28.1677 15 27.5047 15C26.8416 15 26.2057 14.7366 25.7369 14.2678C25.2681 13.7989 25.0047 13.163 25.0047 12.5C25.0047 11.837 25.2681 11.2011 25.7369 10.7322C26.2057 10.2634 26.8416 10 27.5047 10C28.1677 10 28.8036 10.2634 29.2724 10.7322C29.7413 11.2011 30.0047 11.837 30.0047 12.5Z"
                                    fill="#CC6138"
                                />
                            </svg>
                        </div>
                        <div className="text">
                            <p className="title-item">Qualidade</p>
                            <p className="description-item">
                                e alta perfomance
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cases">
                <ListCases filter="Sistema" />
            </section>
            <Contact />
            <Footer />
            <div className="contact-wpp">
                <span className={messageWPP}>
                    Ficou alguma dúvida? Entre em contato!
                </span>
                <a
                    href="https://api.whatsapp.com/send?phone=5511954141119"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <rect
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="none"
                        />
                        <path
                            fill="currentColor"
                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
                        />
                    </svg>
                </a>
            </div>
        </ContainerSistemasLP>
    );
};

export default SistemasSobMedida;
