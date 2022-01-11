import React, { useState } from 'react';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
import { IconEvelope, IconEvelopeFull } from '../Svg';
import { ContactContainer } from './styles';
import apiTropa from '../../pages/api/api';

const Contact: React.FC = () => {
    const [DTO, setDTO] = useState({
        nome: '',
        email: '',
        mensagem: '',
    });

    const sendContact = async() => {

        try {
            console.log(DTO);

            const response = await apiTropa.post(
                "/contato",
                DTO
            )

            alert(response.data.message)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }

    const changeDTO = (key:string, value:string) => {

        console.log(value);
        DTO[key] = value;
        setDTO({...DTO});
    }

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
                <form /* onSubmit={() => sendContact()} */ >
                    <input placeholder="SEU NOME" name='nome' value={DTO.nome} onChange={(e) => changeDTO(e.target.name, e.target.value)} />
                    <input placeholder="SEU E-MAIL" type={'email'} name='email' value={DTO.email} onChange={(e) => changeDTO(e.target.name, e.target.value)} />
                    <textarea
                        placeholder="DIGITE UMA MENSAGEM"
                        name='mensagem'
                        value={DTO.mensagem}
                        onChange={(e) => changeDTO(e.target.name, e.target.value)} 
                    />
                    <button type='button' onClick={() => sendContact()}>Enviar</button>
                </form>
            </ContainerCenter>
        </ContactContainer>
    );
};

export default Contact;
