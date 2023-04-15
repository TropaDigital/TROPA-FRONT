import { useRouter } from "next/router";
import { ContainerSistemasLP } from "../../assets/styles/SistemasLP";
import Head from "next/head";
import { IconArrowLeft } from "../../components/Svg";
import Footer from "../../components/Layout/Footer";
import { useState } from "react";
import { WPPButton } from "../../components/WPPButton/WPPButton";
import Header from "../../components/Layout/Header";
import Link from "next/link";

interface IPropsMethodology {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  steps: string[];
  top: number;
}

const SistemasSobMedida: any = ({ menus = [] }: { menus?: any }) => {
  const router = useRouter();
  const finalSlashIndex = router.asPath.lastIndexOf("/");
  const previousPath = router.asPath.slice(0, finalSlashIndex);

  const [scrolledMethodology, setScrolledMethodology] = useState(false);
  const [scrollDifferent, setSCrollDiferent] = useState(false);

  return (
    <ContainerSistemasLP>
      <Head>
        <title>Tropa.Digital - Desenvolvimento de sistema sob medida</title>
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

      <Header
        backgroundImage={"/images/SystemBackground.png"}
        className="lp-banner success"
        menus={menus}
      >
        <div className="content">
          <div className="text">
            <div className="title-back">
              <Link passHref href={"/sistemas-sob-medida"}>
                <span>
                  <IconArrowLeft />
                </span>
              </Link>
              <h1 className="title">Enviado</h1>
            </div>
            <p>Alcance o sucesso digital com a Tropa Digital! </p>
            <p>
              Líderes em soluções digitais, desenvolvemos sistemas web sob
              medida para seu negócio. Equipe qualificada, soluções
              personalizadas e integradas aos processos de negócios. Tire seu
              projeto do papel e alcance seu potencial máximo online! Entre em
              contato para saber mais e impulsione seu negócio para o sucesso
              digital!
            </p>
          </div>
          <div className="notebook animate__animated"></div>
        </div>
      </Header>

      <Footer />
      <WPPButton text="Olá, estou interessado em Sistemas Sob Medida. Gostaria de algumas informações, poderia me ajudar?" />
    </ContainerSistemasLP>
  );
};

export default SistemasSobMedida;
