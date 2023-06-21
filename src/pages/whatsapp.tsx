import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../components/Layout/Footer';
import { WPPButton } from '../components/WPPButton/WPPButton';
import { ContainerEnviado } from '../assets/styles/Enviado.style';
import { ContainerCenter } from '../components/Layout/styles';
import { IconArrowLeft } from '../components/Svg';
import { ContainerButtons } from '../components/ContainerButtons/ContainerButtons';
import Image from 'next/image';
import Contact from '../components/Contact';

const WhatsappPage: any = () => {
    const router = useRouter();

    return (
        <ContainerEnviado>
            <Head>
                <title>Contato enviado - Tropa Digital</title>
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

            <section id="back">
                <ContainerCenter>
                    <button onClick={() => router.back()}>
                        <IconArrowLeft />
                        <span>Voltar</span>
                    </button>
                </ContainerCenter>
            </section>

            <section id="enviado">
                <ContainerCenter className="center-page">
                    <div className="text">
                        <h1>Obrigado!</h1>
                        <p>
                            Obrigado pelo seu interesse! Assim que recebemos
                            suas informações, entraremos em contato em breve
                            para discutir suas necessidades. Se preferir,
                            estamos disponíveis via email.
                            <br />
                        </p>
                        <ContainerButtons whatsapp={false} />
                    </div>
                    <div className="image">
                        <Image
                            alt="Obrigado"
                            width="500"
                            height="500"
                            src="/images/astroanuts.png"
                        />
                    </div>
                </ContainerCenter>
            </section>
            <Contact />
            <Footer />
            <WPPButton text="Olá, estou com dúvidas em relação a Tropa, poderia me ajudar?" />
        </ContainerEnviado>
    );
};

export default WhatsappPage;
