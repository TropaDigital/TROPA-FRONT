import React, { useState } from 'react';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
import { IconEvelope, IconEvelopeFull, IconWhatsapp } from '../Svg';
import { ContactContainer } from './styles';
import apiTropa from '../../pages/api/api';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContainerWaves } from '../../pages/desenvolvimento/sistemas';
import { IconPhone } from '../Svg/index';

const Contact = ({ redirect }: { redirect?: string }) => {
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
            router.push(redirect ?? '/');
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
                <div className="form-contact">
                    <h3>Contato</h3>
                    <p>
                        Vem conversar com a gente, esclarecer uma dúvida, ou
                        tirar o projeto do papel!
                    </p>
                    <form onSubmit={sendContact}>
                        <input
                            placeholder="Nome completo"
                            name="nome"
                            value={DTO.nome}
                            onChange={(e) =>
                                changeDTO(e.target.name, e.target.value)
                            }
                        />
                        <input
                            placeholder="E-mail para contato"
                            type={'email'}
                            name="email"
                            value={DTO.email}
                            onChange={(e) =>
                                changeDTO(e.target.name, e.target.value)
                            }
                        />
                        <textarea
                            placeholder="Nos conte mais sobre o seu projeto"
                            name="mensagem"
                            value={DTO.mensagem}
                            onChange={(e) =>
                                changeDTO(e.target.name, e.target.value)
                            }
                        />
                        <button type="submit">
                            {loading ? '...' : 'Enviar'}
                        </button>
                    </form>
                </div>
                <div className="other">
                    <span>ou</span>
                </div>
                <div className="qrcode">
                    <div className="container-qrcode">
                        <i>
                            <IconWhatsapp />
                        </i>
                        <p>
                            Aponte a camera do seu celular para o QRCode e fale
                            com um de nossos especialistas.
                        </p>
                        <img src="/images/qrcode-wpp.png" alt="QRCODE" />
                    </div>
                </div>
            </ContainerCenter>
            <ToastContainer position="top-center" />
        </ContactContainer>
    );
};

export default Contact;
