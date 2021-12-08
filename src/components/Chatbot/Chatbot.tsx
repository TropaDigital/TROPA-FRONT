import type { NextPage } from 'next';
import { Chat, ChatbotContainer, DivChat } from './styles';
import { IconAstroFill, IconChatbot, IconClose, IconMessage } from '../Svg';

const Chatbot: NextPage = () => {
    
    return (
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

            <button className="close">
               <IconClose />
            </button>
        </ChatbotContainer>
    )
}

export default Chatbot;