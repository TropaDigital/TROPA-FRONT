import React, { useState } from 'react';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
import { IconEvelope, IconEvelopeFull } from '../Svg';

import { ContactContainer } from './styles';

const Contact: React.FC = () => {
    const [DTO, setDTO] = useState({
        nome: '',
        email: '',
        mensagem: '',
    });

    return (
        <ContactContainer id="contato">
            <ContainerCenter className="center">
                <Animate effect="fadeInRight">
                    <div className="infos">
                        <div className="title">
                            <h2>Con-tato</h2>
                            <IconEvelope className="effect-stroke primary" />
                        </div>
                        <p>
                            Vem conversar com a gente, esclarecer uma dúvida, ou
                            tirar o projeto do papel!
                        </p>
                        <a>
                            <IconEvelopeFull />
                            <span>contato@tropa.digital</span>
                        </a>
                    </div>
                </Animate>
                <form>
                    <input placeholder="SEU NOME" defaultValue={DTO.nome} />
                    <input placeholder="SEU E-MAIL" defaultValue={DTO.email} />
                    <textarea
                        placeholder="DIGITE UMA MENSAGEM"
                        defaultValue={DTO.mensagem}
                    />
                    <button>Enviar</button>
                </form>
            </ContainerCenter>
        </ContactContainer>
    );
};

export default Contact;
