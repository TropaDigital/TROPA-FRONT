import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Header from '../components/Layout/Header';
import Animate from '../components/Animation/Animate';
import WhyTropa from '../components/WhyTropa/WhyTropa';
import Contact from '../components/Contact';
import Footer from '../components/Layout/Footer';
import { BannerSystem, LanguagesContainer, SystemContainer } from '../assets/styles/SystemStyles';
import { ContainerCenter } from '../components/Layout/styles';
import { IconAstroFill, IconCash, IconChatbot, IconClose, IconGlobal, IconMessage, IconSimpleCheck } from '../components/Svg';
import ModalDefault from '../components/Modal';
import { useState } from 'react';
import { WeDoContainer } from '../components/WeDo/styles';
import { Chat, ChatbotContainer, DivChat } from '../components/Chatbot/styles';
import { CardContainer, MessageContainer, Messages } from '../components/Mensagerias/styles';
import { MainCard, MainContainer } from '../components/CardCheckout/styles';
import CreditCard from '../components/CreditCard';

const Sistemas: NextPage = () => {
    const router = useRouter();
    
    const [selected, setSelected] = useState<any>(null);

    const [modalBot, setModalBot] = useState<boolean>(false);
    const [modalMsg, setModalMsg] = useState<boolean>(false);
    const [modalCheck, setModalCheck] = useState<boolean>(false);
    
    return (
    <>
        <Layout>
            <SystemContainer>

                <Head>
                    <title>Tropa.Digital - Infinitas possibilidades</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon1.ico" />
                </Head>
                <Header
                    backgroundImage={'/images/SystemBackground.png'}
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
                    <BannerSystem>
                        <div className="main">
                            <Animate effect="fadeInUp" className="title">
                                <h1>
                                    Sistemas                                   
                                </h1>
                                <h1 className="primary">
                                    Web                                   
                                </h1>
                            </Animate>                            
                            <button>Conheça</button>                            
                            <Animate effect="fadeInLeft" className="note">
                                <img src="/images/Notebook1.png" />
                            </Animate>
                        </div>                         
                    </BannerSystem>
                </Header>

                <WeDoContainer>
                    <ContainerCenter className="center">
                        <div className="left">
                            <Animate effect="fadeInLeft" startAnimation={200}>
                                <div className="title">
                                    <h3>O Que Fazemos?</h3>
                                    <IconGlobal className="effect-stroke grey" />
                                </div>
                            </Animate>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque suscipit nulla non vehicula.</p>
                        </div>
                        
                        <div className="stages">

                                <Animate effect="zoomIn" startAnimation={200}>
                                    <div onClick={() => setModalBot(true)}>
                                        <div
                                            className={`item ${
                                                selected === 'bot' ? 'active bot' : 'inactive bot'
                                            }`}                                
                                            onClick={() =>
                                                selected === 'bot'
                                                    ? setSelected(null)
                                                    : setSelected('bot')
                                            }
                                        >
                                            <div className="title" >
                                                <div><IconChatbot /></div>
                                                <span>Chatbot</span>                                    
                                            </div>
                                            <div className="description">
                                                SIMULE AGORA MESMO.
                                            </div>
                                        </div>
                                    </div>
                                </Animate>

                                <Animate effect="zoomIn" startAnimation={200}>
                                    <div onClick={() => setModalCheck(true)}>
                                        <div
                                            className={`item ${
                                                selected === "cash" ? 'active cash' : 'inactive cash'
                                            }`}                                
                                            onClick={() =>
                                                selected === "cash"
                                                    ? setSelected(null)
                                                    : setSelected('cash')
                                            }
                                        >
                                            <div className="title">
                                                <div><IconCash /></div>
                                                <span>checkout transparente</span>                                    
                                            </div>
                                            <div className="description">
                                                SIMULE AGORA MESMO.
                                            </div>
                                        </div>
                                    </div>
                                </Animate>

                                <Animate effect="zoomIn" startAnimation={200}>
                                    <div onClick={() => setModalMsg(true)}>
                                        <div
                                            className={`item ${
                                                selected === "msg" ? 'active msg' : 'inactive msg'
                                            }`}                                
                                            onClick={() =>
                                                selected === "msg"
                                                    ? setSelected(null)
                                                    : setSelected('msg')
                                            }
                                        >
                                            <div className="title">
                                                <div><IconMessage /></div>
                                                <span>Mensagerias</span>                                    
                                            </div>
                                            <div className="description">
                                                SIMULE AGORA MESMO.
                                            </div>
                                        </div>
                                    </div>
                                </Animate>
                            
                        </div>
                    </ContainerCenter>
                </WeDoContainer>

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
                
                <Contact />
                
                <Footer />

            </SystemContainer>

            {modalBot && (
                <ModalDefault
                    id="overlayModal"
                    onClose={() => setModalBot(!modalBot)}
                    openModal={modalBot}                
                >
                    <ChatbotContainer>
                        <DivChat>
                            
                            <div>
                                <h1>Com quem quer falar?</h1>
                            </div>
                            <div className="buttons">
                                <button>Astrobot</button>
                                <button>Einsteinbot</button>
                                <button>Outrobot</button>
                            </div>

                            <Chat>
                                <div className="bot">
                                    <div className="icon">
                                        <IconChatbot />
                                    </div>
                                    <div className="chat">
                                        <p>Astrobot</p>
                                        <span>Oi, eu sou o BOT, como posso te ajudar?</span>
                                    </div>
                                </div>

                                <div className="user">
                                    <div className="chat">
                                        <p>Você</p>
                                        <span>Eu gostaria de testar um sistema</span>
                                    </div>
                                    <div className="astro">
                                        <IconAstroFill />
                                    </div>
                                </div>

                                <div className="send">
                                    <input type="text" placeholder="Digite sua mensagem" />
                                    <button>
                                        <IconMessage /> 
                                    </button>
                                </div>
                            </Chat>

                            <div className="personalized">
                                <p>Quer um </p>
                                <p className="primary"> bot personalizado?</p>
                            </div>

                        </DivChat>           

                        <button className="close" 
                            onClick={() => setModalBot(false)}
                        >
                            <IconClose  className="effect-stroke light"/>
                        </button>
                    </ChatbotContainer>    
                    
                </ModalDefault>
            )}

            { modalCheck && (
                <ModalDefault
                    id="overlayModal"
                    onClose={() => setModalCheck(!modalCheck)}
                    openModal={modalCheck}                
                >
                    <MainContainer>

                        <div className="title">
                            <h1>Simule um pagamento</h1>

                            <button className="close" onClick={() => setModalCheck(false)}>
                                <IconClose className="effect-stroke dark" />
                            </button>
                        </div>

                        <MainCard>

                            <CreditCard />   

                        </MainCard>

                        <button className="payment">Quer integrar pagamento?</button>
                                
                    </MainContainer>
                </ModalDefault>
            )}


            { modalMsg && (
                <ModalDefault
                    id="overlayModal"
                    onClose={() => setModalMsg(!modalMsg)}
                    openModal={modalMsg}                
                >
                    <MessageContainer>

                        <div className="title">
                            <h1>Mensagerias</h1>

                            <button className="close" onClick={() => setModalMsg(false)}>
                                <IconClose className="effect-stroke primary"/>
                            </button>
                        </div>
                        

                        <CardContainer>
            
                            <div className="receiver">
                                <h3>Por onde quer receber?</h3>
                                
                                <div className="buttons">
                                    <button>Whatsapp</button>
                                    <button>SMS</button>
                                </div>
                            </div>
            
                            <Messages>
                                <div className="msg">
                                    <h3>Selecione uma mensagem:</h3>
                                    <button>Olá, eu sou uma mensagem automática</button>
                                    <button>Olá, eu sou uma mensagem automática</button>
                                    <button>Olá, eu sou uma mensagem automática</button>
                                </div>
            
                                <div className="edit">
                                    <p>Edite a mensagem</p>
                                    <textarea placeholder="Lorem Ipsum Stanley Ipkis" />
                                </div>
                            </Messages>
            
                            <button>Enviar mensagem</button>
            
                        </CardContainer>    

                        <div className="personalized">
                    
                            <p>Quer um </p>
                            <p className="primary"> bot personalizado?</p>
                        </div>
            
                    </MessageContainer>
                </ModalDefault>
            )}

            

        </Layout>

    </>
    )
};

export default Sistemas;
