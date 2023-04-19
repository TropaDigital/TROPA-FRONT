import React, { useState } from 'react';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
import { IconEvelope, IconEvelopeFull } from '../Svg';
import { ContactContainer } from './styles';
import apiTropa from '../../pages/api/api';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ redirect }: { redirect: string }) => {
    const router = useRouter();

    const [DTO, setDTO] = useState<any>({
        nome: '',
        email: '',
        mensagem: '',
    });

    const [loading, setLoading] = useState(false);

    const sendContact = async (e: any) => {
        try {
            e.preventDefault();
            setLoading(true);
            const response = await apiTropa.post('/contato', DTO);
            setDTO({
                nome: '',
                email: '',
                mensagem: '',
            });
            toast.success(response.data.message, {
                className: 'toast-sucess',
                theme: 'colored',
            });
            setLoading(false);
            router.push(redirect);
        } catch (e: any) {
            setLoading(false);
            toast.error(e.response.data.message, {
                className: 'toast-error',
                theme: 'colored',
            });
        }
    };

    const changeDTO = (key: string, value: string) => {
        console.log(value);
        DTO[key] = value;
        setDTO({ ...DTO });
    };

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
                <form onSubmit={sendContact}>
                    <input
                        placeholder="SEU NOME"
                        name="nome"
                        value={DTO.nome}
                        onChange={(e) =>
                            changeDTO(e.target.name, e.target.value)
                        }
                    />
                    <input
                        placeholder="SEU E-MAIL"
                        type={'email'}
                        name="email"
                        value={DTO.email}
                        onChange={(e) =>
                            changeDTO(e.target.name, e.target.value)
                        }
                    />
                    <textarea
                        placeholder="DIGITE UMA MENSAGEM"
                        name="mensagem"
                        value={DTO.mensagem}
                        onChange={(e) =>
                            changeDTO(e.target.name, e.target.value)
                        }
                    />
                    <button type="submit">
                        {loading ? 'ENVIANDO...' : 'Enviar'}
                    </button>
                </form>
            </ContainerCenter>
            <ToastContainer position="top-center" />
        </ContactContainer>
    );
};

export default Contact;
