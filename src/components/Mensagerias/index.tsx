import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { CardContainer, MessageContainer, Messages } from './styles';

const Mensagerias: NextPage = () => {
    const router = useRouter();
    
    return (
        <MessageContainer>
            
            <CardContainer>

                <div className="receiver">
                    <h3>Por onde quer receber?</h3>
                    
                    <div>
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
                        <input type="text" placeholder="Lorem Ipsum Stanley Ipkis" />
                    </div>
                </Messages>

                <button>Enviar mensagem</button>

            </CardContainer>    

        </MessageContainer>
    )
}

export default Mensagerias;