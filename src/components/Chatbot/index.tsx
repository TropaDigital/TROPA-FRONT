import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { Chat, ChatbotContainer, DivChat } from './styles';
import { IconMessage } from '../Svg';

const Chatbot: NextPage = () => {
    const router = useRouter();

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
                        <div>Imagem do bot</div>
                        <div>
                            <p>Astrobot</p>
                            <span>Oi, eu sou o BOT, como posso te ajudar?</span>
                        </div>
                    </div>
                    <div>
                        <div>Imagem do user</div>
                        <div>
                            <p>Nome do user</p>
                            <span>Eu gostaria de testar um sistema</span>
                        </div>
                    </div>
                    <div>
                        <input type="text" placeholder="Digite sua mensagem">
                            <IconMessage />
                        </input>
                    </div>
                </Chat>

                <div className="personalized">
                    <p>Quer um</p>
                    <p className="primary">bot personalizado?</p>
                </div>

            </DivChat>            

        </ChatbotContainer>
    )
}

export default Chatbot;