import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../../components/Layout/Footer";
import Contact from "../../components/Contact";
import { useCallback, useEffect, useState } from "react";
import { WPPButton } from "../../components/WPPButton/WPPButton";
import { ContainerDesenvolvimentos } from "../../assets/styles/DesenvolvimentosStyle";
import { Logo } from "../../components/Svg";
import * as ga from "../../lib/gtag";
import Image from "next/image";
import {
  IconEntedimento,
  LineMethodology,
  IconEntregaProjeto,
  IconSustentacao,
  IconDesenvolvimento,
  IconSolucaoProblema,
} from "../../components/Svg/index";
import { colors } from "../../assets/styles/mixin";
import ListCases from "../../components/Cases/Cases";
import { ContainerCenter } from "../../components/Layout/styles";
import { ICase } from "../api/cases";
import axios from "axios";

interface IPropsMethodology {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  steps: string[];
  top: number;
}

export const MethodologyItem = ({
  number,
  icon,
  title,
  description,
  steps,
  top = 0,
}: IPropsMethodology) => {
  return (
    <div
      className="item-methodology animate__animated animate__fadeInUp"
      style={{
        marginTop: top,
        animationDelay: `${number / 10 + 0.5}s`,
      }}
    >
      <div className="step">
        <div className="number">{number}</div>
        <div className="icon">{icon}</div>
      </div>
      <p className="title-item">{title}</p>
      <p className="description-item">{description}</p>
      <div className="items">
        {steps.map((row) => (
          <span key={row}>{row}</span>
        ))}
      </div>
    </div>
  );
};

export const ContainerWaves = ({
  color = "#cc6138",
  background = "transparent",
  className = "",
}) => {
  return (
    <div
      className={`waves-list ${className}`}
      style={{
        backgroundColor: background,
      }}
    >
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20962 10601"
      >
        <path
          className="wave-1"
          fill={color}
          fillOpacity={0.8}
          d="M27489 8635c504 1667 831 3818-27 5680s-2901 3434-6193 3904-7834-161-12155-589c-4321-427-8421-649-10976-1537-2555-889-3565-2443-4071-4061-505-1619-505-3302 938-4835 1442-1533 4327-2916 6274-3122s2958 764 3877 1522 1746 1304 2738 1382 2148-312 2976-730 1327-864 2136-1014c810-151 1929-6 2757 206s1363 490 1978 775c614 284 1308 574 1947 535s1223-407 1935-875c712-469 1552-1037 2240-1266 688-228 1223-117 1832 530 608 646 1290 1828 1794 3495z"
        ></path>

        <path
          className="wave-2"
          fill={color}
          fillOpacity={0.5}
          d="M25681 10400c-171 822-305 1990-646 3115-341 1124-889 2206-1856 2808-968 602-2355 724-4668 1064s-5550 898-8520 987-5672-290-9037-859c-3366-568-7394-1326-9403-2118-2008-791-1996-1616-1892-3305 103-1689 298-4242 1412-5731 1113-1488 3146-1912 4953-1627 1808 284 3390 1276 4522 1878s1814 814 2423 552 1145-998 2333-1388c1187-389 3025-432 4266 275 1240 707 1884 2164 2861 2407 976 244 2285-726 3493-1308 1209-581 2316-775 3731-567 1415 207 3137 815 4290 1221 1153 407 1737 612 1926 953 189 342-18 820-188 1643z"
        ></path>

        <path
          className="wave-3"
          fill={color}
          d="M30706 11822c-291 731-653 1801-1548 2972-895 1170-2321 2441-4988 3026-2667 586-6574 485-10469 541s-7778 268-10906-256-5501-1784-6906-3382c-1404-1598-1840-3533-1957-4910-118-1377 82-2195 1029-2854 946-659 2637-1158 4033-1002s2495 968 3440 1630 1737 1175 2905 1086c1169-89 2714-780 3810-1332 1095-552 1740-965 2665-820s2130 848 3110 1360c980 513 1734 837 2458 672s1416-819 2179-1050 1597-40 3058 269c1461 310 3550 739 5069 1177 1519 437 2469 883 2998 1112 529 228 639 240 584 440-55 201-274 591-564 1321z"
        ></path>
      </svg>
    </div>
  );
};

const ContainerButtons = ({
  position = "vertical",
  onClickGATAG = () => {},
}) => {
  return (
    <div className={`buttons-contact ${position}`}>
      <a
        className="wpp"
        href="https://api.whatsapp.com/send?phone=5511978675858&text=Olá, vim do site e tenho algumas dúvidas."
        target="_blank"
        rel="noreferrer"
        onClick={onClickGATAG}
      >
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <rect
              x="0"
              y="0"
              width="24"
              height="24"
              fill="none"
              stroke="none"
            ></rect>
            <path
              fill="currentColor"
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
            ></path>
          </svg>
        </i>
        <span>Falar via whatsapp</span>
      </a>
      <span>ou</span>
      <a href="#contato">
        <i>
          <IconEntedimento color="#FFF" />
        </i>
        <span>Falar via email</span>
      </a>
    </div>
  );
};

const SistemasSobMedida: any = () => {
  const [indicePosition, setIndicePosition] = useState<number>(0);
  const [randomImage, setRandomImage] = useState<any>(
    "/images/cases/alpha-fm/principal.png"
  );
  const [data, setData] = useState<ICase[]>([]);
  const [scrolledMethodology, setScrolledMethodology] = useState(false);

  const getData = useCallback(async () => {
    const response = await axios.get("/api/cases");
    setData([...response.data]);
  }, []);

  useEffect(() => {
    getData();
    const hash = window.location.hash.substring(1); // obtem a âncora da URL
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // rola suavemente até o elemento
      }
    }
  }, [getData]);

  const onClickGATAG = () => {
    ga.gtagReportConversion("/send-whatsapp");
  };

  useEffect(() => {
    const intervalRanomImage = setInterval(() => {
      if (data.length > 0) {
        if (data[indicePosition].images.principal) {
          setRandomImage(
            `/images/cases/${data[indicePosition].slug}/${data[indicePosition]?.images?.principal}`
          );
        }
        if (indicePosition + 1 === data.length) {
          setIndicePosition(0);
        } else {
          setIndicePosition(indicePosition + 1);
        }
      }
    }, 5000);
    return () => clearInterval(intervalRanomImage);
  }, [data, indicePosition]);

  return (
    <ContainerDesenvolvimentos>
      <Head>
        <title>Tropa.Digital - Desenvolvimento de sistema sob medida</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=600px" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="mobile-web-app-status-bar-style"
          content="black-translucent"
        />
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

      <div id="head-dev">
        <div className="center-page">
          <div className="text">
            <div id="logo">
              <Logo />
            </div>
            <h1>Criação de Sites Profissionais</h1>
            <span>Mais barato e mais rápido</span>
            <p>
              Somos uma agência de criação de sites profissionais, nossos sites
              são desenvolvidos nas melhores tecnologias do mercado. Obtenha
              quantas contas de e-mail precisar.
            </p>
            <ContainerButtons onClickGATAG={onClickGATAG} />
          </div>
          <div id="cases-roles">
            <div
              className="browser-case"
              style={{
                backgroundImage: `url(${randomImage})`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <ContainerWaves
        color={colors.primaryGrey}
        background={colors.primaryLight}
        className="wave-banner"
      />

      <section className="light">
        <ContainerCenter>
          <h4>
            A verdadeira tecnologia por trás
            <br />
            <u>dos</u>
            <u> </u>
            <u>melhores</u>
            <u> </u>
            <u>sites!</u>
          </h4>

          <div className="row-item-line">
            <div className="text-default">
              <p>
                Diferentemente de muitos concorrentes, que optam por vender
                exclusivamente na plataforma{" "}
                <span>WordPress, uma solução popular de sites prontos</span>,
                temos o compromisso de oferecer aos nossos clientes algo
                verdadeiramente excepcional.
              </p>
              <p>
                Ao escolher os nossos serviços, você está optando pela
                confiabilidade e desempenho incomparáveis. Essa tecnologia
                avançada nos permite{" "}
                <span>criar sites seguros, rápidos e adaptáveis</span>,
                garantindo uma experiência excepcional para os visitantes.
              </p>
              <div className="list-images-ft">
                <img src="/images/languages/reactjs.png" />
                <img src="/images/languages/nextjs.png" />
                <img src="/images/languages/angularjs.png" />
                <img src="/images/languages/vuejs.png" />
                <img src="/images/languages/flutter.png" />
                <img src="/images/languages/node.png" />
              </div>
            </div>
            <div className="image astronaut">
              <Image
                alt="astronaut"
                className="effect-astronaut"
                src="/images/astronauts.png"
                width="500"
                height="500"
              />
            </div>
          </div>
        </ContainerCenter>
      </section>

      <ContainerWaves
        className="wave-first"
        background={colors.primaryGrey}
        color={colors.primaryLight}
      />

      <section
        style={{
          backgroundColor: colors.primaryLight,
        }}
      >
        <ContainerCenter>
          <div className="row-item-line">
            <div
              className="text-default"
              style={{
                maxWidth: "70%",
              }}
            >
              <h4>
                Contas de Email Personalizadas
                <br />
                <u>Ilimitadas</u>
                <u> </u>
                <u>para</u>
                <u> </u>
                <u>o</u>
                <u> </u>
                <u>seu</u>
                <br />
                <u>Site</u>
              </h4>
              <p>
                Tenha total controle sobre a comunicação do seu negócio! Com a
                nossa <span>solução de hospedagem</span>, oferecemos a você a
                liberdade de criar quantas contas de e-mail personalizadas forem
                necessárias, exemplo: <span>nome@empresa.com.br</span>
              </p>
            </div>
            <div className="image email">
              <Image
                alt="email"
                src="/images/discussion.png"
                width="500"
                height="500"
              />
            </div>
          </div>
        </ContainerCenter>
      </section>

      <ContainerWaves
        className="wave-first"
        background={colors.primaryLight}
        color={colors.primaryGrey}
      />

      <section id="oque-fazemos">
        <div className="center-page">
          <div className="text">
            <h2 className="title">O que fazemos</h2>
            <p>
              A Tropa Digital é uma software house especializada no
              desenvolvimento de soluções personalizadas para empresas. Com uma
              abordagem ágil e utilizando linguagens de programação modernas,
              oferecemos serviços que incluem o desenvolvimento de Sistemas WEB
              sob medida, aplicativos para iOS e Android, e criação de sites.
            </p>
          </div>
          <div className="produtos">
            <ul>
              <li>
                <i>
                  <svg
                    width="28"
                    height="40"
                    viewBox="0 0 28 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.75 3.75C7.8425 3.75 3.75 7.975 3.75 13.125C3.75 15.585 4.81 17.1875 6.21 18.885L6.745 19.5175C7.3025 20.1775 7.92 20.9075 8.4275 21.6375C9.1375 22.665 9.77 23.8775 9.98 25.3625C10.03 25.8449 9.89123 26.3279 9.59269 26.7102C9.29415 27.0924 8.85911 27.344 8.37895 27.4123C7.89878 27.4806 7.41084 27.3602 7.0176 27.0763C6.62435 26.7924 6.3564 26.3672 6.27 25.89C6.17 25.185 5.8625 24.5225 5.345 23.7725C4.92279 23.183 4.47052 22.6156 3.99 22.0725C3.78 21.8225 3.5575 21.56 3.32 21.2725C1.7525 19.375 0 16.915 0 13.125C0 5.775 5.9075 0 13.75 0C21.5925 0 27.5 5.775 27.5 13.125C27.5 16.915 25.7475 19.375 24.18 21.2725C23.9425 21.56 23.72 21.8225 23.51 22.07C22.9925 22.6825 22.5525 23.2025 22.1575 23.7725C21.6375 24.5225 21.3325 25.185 21.2325 25.89C21.1403 26.3625 20.8701 26.7815 20.4778 27.0605C20.0855 27.3395 19.601 27.4572 19.1244 27.3891C18.6478 27.3211 18.2156 27.0726 17.917 26.695C17.6184 26.3173 17.4763 25.8394 17.52 25.36C17.73 23.8775 18.3625 22.665 19.0725 21.6375C19.58 20.9075 20.1975 20.1775 20.755 19.5175C20.9425 19.2975 21.1225 19.085 21.2875 18.885C22.69 17.1875 23.75 15.585 23.75 13.125C23.75 7.975 19.6575 3.75 13.75 3.75ZM8.125 30H19.375C19.8723 30 20.3492 30.1975 20.7008 30.5492C21.0525 30.9008 21.25 31.3777 21.25 31.875C21.25 32.3723 21.0525 32.8492 20.7008 33.2008C20.3492 33.5525 19.8723 33.75 19.375 33.75H8.125C7.62772 33.75 7.15081 33.5525 6.79917 33.2008C6.44754 32.8492 6.25 32.3723 6.25 31.875C6.25 31.3777 6.44754 30.9008 6.79917 30.5492C7.15081 30.1975 7.62772 30 8.125 30ZM8.75 38.125C8.75 37.6277 8.94754 37.1508 9.29917 36.7992C9.65081 36.4475 10.1277 36.25 10.625 36.25H16.875C17.3723 36.25 17.8492 36.4475 18.2008 36.7992C18.5525 37.1508 18.75 37.6277 18.75 38.125C18.75 38.6223 18.5525 39.0992 18.2008 39.4508C17.8492 39.8025 17.3723 40 16.875 40H10.625C10.1277 40 9.65081 39.8025 9.29917 39.4508C8.94754 39.0992 8.75 38.6223 8.75 38.125Z"
                      fill="#CC6138"
                    />
                  </svg>
                </i>
                <div>
                  <h3>Sistemas sob medida</h3>
                  <p>
                    Nós somos especializados em entender o seu problema e criar
                    a melhor solução para o seu negócio.
                  </p>
                  <a>
                    Um sistema personalizado é a melhor opção para funções,
                    ferramentas e resolução de problemas com utilidade, além de
                    representar uma nova ideia de mercado.
                  </a>
                </div>
              </li>

              <li>
                <i>
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.8344 4.69198H32.8319L37.0219 5.52948C37.2469 5.57448 37.4319 5.73948 37.4969 5.96198C37.5298 6.07006 37.5327 6.18502 37.5054 6.29463C37.4781 6.40424 37.4216 6.50441 37.3419 6.58448L33.9094 10.0195C33.4988 10.4294 32.9422 10.6596 32.3619 10.6595H29.5169L22.3669 17.812C22.5034 18.327 22.5284 18.8652 22.4405 19.3908C22.3526 19.9163 22.1537 20.417 21.8571 20.8596C21.5605 21.3022 21.173 21.6766 20.7204 21.9577C20.2677 22.2388 19.7604 22.4202 19.2322 22.4899C18.7039 22.5595 18.1669 22.5158 17.6569 22.3616C17.1469 22.2075 16.6756 21.9464 16.2743 21.5958C15.8731 21.2452 15.5513 20.8131 15.3301 20.3284C15.109 19.8436 14.9937 19.3173 14.9919 18.7845C14.9923 18.2092 15.125 17.6417 15.3796 17.1259C15.6343 16.61 16.0041 16.1596 16.4605 15.8095C16.917 15.4594 17.4478 15.2189 18.012 15.1066C18.5763 14.9943 19.1587 15.0133 19.7144 15.162L26.8669 8.00698V5.16448C26.8669 4.58448 27.0969 4.02698 27.5069 3.61698L30.9419 0.181977C31.022 0.102299 31.1222 0.0458108 31.2318 0.018518C31.3414 -0.00877489 31.4564 -0.0058515 31.5644 0.0269773C31.7869 0.0919773 31.9519 0.276977 31.9969 0.501977L32.8344 4.69198Z"
                      fill="#CC6138"
                    />
                    <path
                      d="M3.74193 18.7844C3.7445 20.9293 4.20704 23.0487 5.09835 24.9997C5.98966 26.9506 7.28901 28.6877 8.90874 30.0938C10.5285 31.4999 12.4309 32.5422 14.4878 33.1505C16.5446 33.7589 18.708 33.919 20.832 33.6201C22.9559 33.3213 24.9911 32.5704 26.8002 31.4181C28.6093 30.2658 30.1503 28.7389 31.3191 26.9405C32.4879 25.142 33.2575 23.1138 33.5758 20.9926C33.8941 18.8715 33.7539 16.7067 33.1644 14.6444C33.0817 14.4035 33.0488 14.1482 33.0679 13.8942C33.0869 13.6401 33.1575 13.3926 33.2752 13.1667C33.393 12.9408 33.5555 12.7412 33.7528 12.5801C33.9502 12.419 34.1783 12.2997 34.4232 12.2296C34.6681 12.1595 34.9247 12.1399 35.1774 12.1721C35.4301 12.2043 35.6736 12.2876 35.8931 12.4169C36.1126 12.5462 36.3035 12.7189 36.4542 12.9243C36.6048 13.1297 36.7121 13.3637 36.7694 13.6119C37.9107 17.6057 37.6939 21.8654 36.1531 25.7227C34.6122 29.5801 31.8344 32.8167 28.2555 34.9249C24.6766 37.0331 20.499 37.8936 16.3783 37.3714C12.2576 36.8492 8.42678 34.9738 5.48693 32.0394C2.55028 29.1003 0.672866 25.2691 0.149437 21.1475C-0.373992 17.0258 0.486209 12.8469 2.59498 9.26709C4.70376 5.68724 7.94169 2.90907 11.8004 1.36876C15.6591 -0.171541 19.9201 -0.386755 23.9144 0.756912C24.39 0.895942 24.7913 1.21758 25.0304 1.65154C25.2696 2.0855 25.3273 2.5965 25.1909 3.07285C25.0544 3.54921 24.735 3.95219 24.3023 4.19374C23.8697 4.43528 23.359 4.49574 22.8819 4.36191C20.6484 3.72108 18.2965 3.60782 16.0117 4.03108C13.7269 4.45433 11.5717 5.40253 9.71591 6.80091C7.86012 8.19929 6.35453 10.0096 5.31783 12.0892C4.28112 14.1688 3.74165 16.4608 3.74193 18.7844Z"
                      fill="#CC6138"
                    />
                    <path
                      d="M11.2419 18.7844C11.2421 20.1509 11.6153 21.4914 12.3213 22.6613C13.0274 23.8312 14.0394 24.7862 15.2483 25.4232C16.4573 26.0602 17.8172 26.3551 19.1813 26.276C20.5455 26.1969 21.8622 25.7468 22.9894 24.9744C24.1164 24.2 25.0102 23.1322 25.5742 21.8865C26.1383 20.6409 26.351 19.2647 26.1894 17.9069C26.1457 17.5774 26.1906 17.2422 26.3195 16.9358C26.4484 16.6295 26.6567 16.363 26.9228 16.1638C27.1889 15.9647 27.5033 15.8401 27.8336 15.8028C28.1639 15.7656 28.4981 15.817 28.8019 15.9519C29.1056 16.085 29.3686 16.2963 29.5641 16.5642C29.7595 16.8321 29.8804 17.147 29.9144 17.4769C30.1861 19.7971 29.7287 22.1444 28.6057 24.1929C27.4827 26.2414 25.7499 27.8895 23.6478 28.9085C21.5456 29.9274 19.1784 30.2667 16.8747 29.8792C14.5709 29.4917 12.445 28.3967 10.7918 26.746C9.1387 25.0954 8.04042 22.9711 7.64943 20.668C7.25843 18.3648 7.59411 15.9971 8.60988 13.8934C9.62565 11.7897 11.2711 10.0544 13.3179 8.9283C15.3647 7.80223 17.7113 7.34127 20.0319 7.60939C20.2804 7.63244 20.5218 7.70487 20.7419 7.82243C20.9621 7.93998 21.1565 8.1003 21.3139 8.29398C21.4713 8.48766 21.5884 8.7108 21.6584 8.95034C21.7284 9.18987 21.7499 9.44097 21.7216 9.68891C21.6933 9.93686 21.6158 10.1767 21.4936 10.3943C21.3715 10.6119 21.2071 10.8029 21.0101 10.9562C20.8132 11.1094 20.5876 11.2218 20.3467 11.2868C20.1057 11.3517 19.8542 11.3679 19.6069 11.3344C18.5561 11.2124 17.4913 11.3141 16.4825 11.6328C15.4737 11.9515 14.5438 12.48 13.7538 13.1836C12.9638 13.8872 12.3315 14.75 11.8986 15.7152C11.4657 16.6805 11.2419 17.7265 11.2419 18.7844Z"
                      fill="#CC6138"
                    />
                  </svg>
                </i>
                <div>
                  <h3>Aplicativo iOS & Android</h3>
                  <p>
                    Possuímos experiência e qualidade para desenvolver seu
                    aplicativo, desde a concepção da ideia até a resolução de
                    problemas específicos da sua empresa.
                  </p>
                  <a>
                    O aplicativo é a melhor opção para funções e ferramentas com
                    utilidade, desde a resolução de problemas até o fornecimento
                    de um produto.
                  </a>
                </div>
              </li>

              <li>
                <i>
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.0675 4.8241L4.105 7.8616C6.92981 4.16346 10.9555 1.56582 15.4891 0.515863C20.0227 -0.534095 24.7805 0.029323 28.9435 2.10912C33.1064 4.18893 36.4141 7.65498 38.297 11.9106C40.1799 16.1662 40.5203 20.9452 39.2596 25.4247C37.9988 29.9043 35.2159 33.8042 31.3897 36.453C27.5636 39.1019 22.9337 40.334 18.297 39.9372C13.6604 39.5404 9.30715 37.5396 5.98669 34.2792C2.66623 31.0187 0.586311 26.7027 0.105001 22.0741C0.0539468 21.5791 0.201606 21.0842 0.515495 20.6981C0.829384 20.312 1.28379 20.0664 1.77875 20.0154C2.27371 19.9643 2.76868 20.112 3.15477 20.4258C3.54086 20.7397 3.78645 21.1941 3.8375 21.6891C4.23165 25.4701 5.93892 28.9932 8.66225 31.6455C11.3856 34.2979 14.9526 35.9114 18.7427 36.2055C22.5328 36.4997 26.306 35.4557 29.406 33.2553C32.5059 31.0548 34.7362 27.8372 35.7089 24.1623C36.6817 20.4874 36.3352 16.5877 34.7298 13.1419C33.1245 9.69598 30.3618 6.92199 26.9225 5.30254C23.4832 3.68309 19.585 3.32068 15.9061 4.27837C12.2273 5.23605 9.00059 7.45322 6.7875 10.5441L10.1825 13.9391C10.2701 14.0265 10.3298 14.138 10.354 14.2594C10.3783 14.3807 10.3659 14.5066 10.3185 14.6209C10.2711 14.7353 10.1908 14.833 10.0878 14.9016C9.98483 14.9703 9.86378 15.0068 9.74 15.0066H0.625001C0.459241 15.0066 0.30027 14.9408 0.183059 14.8235C0.065849 14.7063 1.00081e-06 14.5474 1.00081e-06 14.3816V5.2666C-0.000220456 5.14282 0.0363151 5.02177 0.104976 4.91878C0.173636 4.8158 0.27133 4.73552 0.385672 4.68812C0.500014 4.64072 0.625854 4.62834 0.747239 4.65255C0.868625 4.67676 0.980089 4.73647 1.0675 4.8241ZM19.375 10.0066C19.8723 10.0066 20.3492 10.2041 20.7008 10.5558C21.0525 10.9074 21.25 11.3843 21.25 11.8816V19.3616L26.32 21.3916C26.7668 21.5864 27.1202 21.9475 27.3053 22.3983C27.4904 22.8492 27.4926 23.3544 27.3115 23.807C27.1305 24.2595 26.7803 24.6237 26.3353 24.8224C25.8902 25.0212 25.3853 25.0388 24.9275 24.8716L18.6775 22.3716C18.3301 22.232 18.0324 21.9918 17.8226 21.6817C17.6128 21.3717 17.5004 21.006 17.5 20.6316V11.8816C17.5 11.3843 17.6975 10.9074 18.0492 10.5558C18.4008 10.2041 18.8777 10.0066 19.375 10.0066Z"
                      fill="#CC6138"
                    />
                  </svg>
                </i>
                <div>
                  <h3>Website</h3>
                  <p>
                    Somos especializados em criar sites de alto desempenho em
                    SEO utilizando as linguagens mais modernas, como React,
                    Next, Angular e Vue.js.
                  </p>
                  <a>
                    O site é a melhor opção para fins genéricos, como:
                    informações institucionais, serviços e contato.
                  </a>
                </div>
              </li>
              <li>
                <i>
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.1647 2.96851e-10H35.6297C38.0447 2.96851e-10 40.0047 1.96 40.0047 4.375V4.84C40.0025 10.6409 37.6969 16.2035 33.5947 20.305L32.4497 21.4525C31.6647 22.2375 30.8472 22.9925 30.0022 23.7125V31.73C30.0022 33.25 29.2147 34.66 27.9197 35.455L20.9847 39.7225C20.741 39.8731 20.4661 39.9658 20.181 39.9934C19.896 40.0211 19.6084 39.983 19.3403 39.882C19.0723 39.7811 18.831 39.62 18.635 39.4112C18.439 39.2024 18.2935 38.9514 18.2097 38.6775L15.8247 30.9225C15.6958 30.828 15.5746 30.7235 15.4622 30.61L9.38966 24.54C9.27701 24.4275 9.17335 24.3063 9.07966 24.1775L1.32466 21.7925C1.05078 21.7087 0.799782 21.5632 0.590962 21.3672C0.382141 21.1712 0.221068 20.9299 0.120134 20.6618C0.0191997 20.3938 -0.0189053 20.1062 0.00875042 19.8211C0.0364061 19.5361 0.129085 19.2611 0.279658 19.0175L4.55466 12.0825C4.94575 11.4459 5.49352 10.9202 6.14566 10.5556C6.7978 10.191 7.53253 9.99974 8.27966 10H16.2897C17.0097 9.155 17.7647 8.3375 18.5497 7.5525L19.6972 6.4075C21.7283 4.37608 24.1396 2.76465 26.7936 1.66525C29.4475 0.565839 32.292 -1.49652e-05 35.1647 2.96851e-10ZM22.3497 9.0575H22.3447L21.1997 10.2025C19.2997 12.1025 17.6072 14.1975 16.1497 16.4525L12.3997 22.245L17.7572 27.6025L23.5497 23.8525C25.8047 22.395 27.8997 20.7025 29.7972 18.8025L30.9447 17.6575C32.6276 15.9742 33.9626 13.9759 34.8733 11.7766C35.7839 9.5774 36.2525 7.22033 36.2522 4.84V4.375C36.2522 4.20924 36.1863 4.05027 36.0691 3.93306C35.9519 3.81585 35.7929 3.75 35.6272 3.75H35.1622C30.3565 3.75042 25.7479 5.65954 22.3497 9.0575ZM8.90466 36.4C7.07466 38.23 3.06966 39.0125 1.39216 39.27C1.30172 39.2845 1.20914 39.2776 1.12186 39.2498C1.03458 39.222 0.955043 39.1741 0.889658 39.11C0.825511 39.0446 0.777614 38.9651 0.749824 38.8778C0.722033 38.7905 0.715126 38.6979 0.729658 38.6075C0.987158 36.93 1.76966 32.925 3.60466 31.1C3.94395 30.7154 4.35843 30.4044 4.82255 30.1861C5.28666 29.9679 5.79056 29.847 6.30318 29.831C6.8158 29.8149 7.32627 29.9041 7.80312 30.0929C8.27996 30.2818 8.71306 30.5663 9.07571 30.9289C9.43837 31.2916 9.72289 31.7247 9.91173 32.2015C10.1006 32.6784 10.1897 33.1889 10.1737 33.7015C10.1577 34.2141 10.0368 34.718 9.81854 35.1821C9.60028 35.6462 9.28926 36.0607 8.90466 36.4ZM26.2547 26.5625C26.0347 26.7125 25.8122 26.8575 25.5897 27L19.7147 30.8025L21.0847 35.26L25.9572 32.26C26.0481 32.204 26.1232 32.1257 26.1753 32.0325C26.2274 31.9393 26.2547 31.8343 26.2547 31.7275V26.5625ZM9.19966 20.29L13.0047 14.415C13.1497 14.19 13.2972 13.97 13.4447 13.75H8.27716C8.17038 13.75 8.06537 13.7773 7.97215 13.8294C7.87893 13.8815 7.80061 13.9566 7.74466 14.0475L4.74466 18.9225L9.19966 20.29ZM30.0047 12.5C30.0047 13.163 29.7413 13.7989 29.2724 14.2678C28.8036 14.7366 28.1677 15 27.5047 15C26.8416 15 26.2057 14.7366 25.7369 14.2678C25.2681 13.7989 25.0047 13.163 25.0047 12.5C25.0047 11.837 25.2681 11.2011 25.7369 10.7322C26.2057 10.2634 26.8416 10 27.5047 10C28.1677 10 28.8036 10.2634 29.2724 10.7322C29.7413 11.2011 30.0047 11.837 30.0047 12.5Z"
                      fill="#CC6138"
                    />
                  </svg>
                </i>
                <div>
                  <h3>Alocação de SQUAD</h3>
                  <p>
                    Você já possui a ideia e precisa apenas da equipe? Conte
                    conosco para oferecer a melhor equipe e transformar seu
                    projeto em realidade. Nossos profissionais são
                    especializados nas linguagens de programação mais modernas.
                  </p>
                  <a>
                    A alocação de um time (SQUAD) é a melhor opção quando você
                    já tem um escopo de projeto definido e precisa apenas da mão
                    de obra. Você fica responsável por gerenciar a equipe e
                    determinar o que será desenvolvido.
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ContainerWaves background={colors.primaryGrey} />
      <section id="metodologia">
        <div className="center-page">
          <h2 className="title">
            Seu site <u>pronto em 10 dias</u> úteis
          </h2>
          <div className="mobile">
            <div
              className={`swipe animate__animated ${
                scrolledMethodology === false
                  ? "animate__fadeInRight"
                  : "animate__zoomOut"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="700pt"
                height="700pt"
                version="1.1"
                viewBox="0 0 700 700"
                className="hand-swipe"
              >
                <g fillRule="evenodd">
                  <path d="m462 205.33c-7.6836 0-14.828 2.3242-20.762 6.3047-5.1055-14.543-18.953-24.969-35.238-24.969-6.8008 0-13.176 1.8164-18.668 4.9922v-79.66c0-20.617-16.715-37.332-37.332-37.332s-37.332 16.715-37.332 37.332v182.17l-18.848-32.645c-10.309-17.855-33.141-23.973-51-13.664-17.855 10.309-23.973 33.141-13.664 50.996 2.375 4.1133 11.52 19.934 13.418 23.242 14.531 25.293 19.559 68.152 34.152 93.477 20.367 35.34 54.453 81.895 56.367 84.551 3.0156 4.1797 8.8477 5.1289 13.031 2.1133 4.1797-3.0117 5.1289-8.8477 2.1133-13.027-1.8789-2.6055-38.621-53.75-55.383-83.02-11.383-19.879-18.168-66.059-34.117-93.426-1.9141-3.293-11.043-19.129-13.414-23.242-5.1562-8.9297-2.0977-20.344 6.832-25.5 8.9258-5.1523 20.344-2.0938 25.496 6.832l34.926 60.496c3.2695 6.8438 18.754 6.5 18.754-4.6836v-214.67c0-10.309 8.3594-18.668 18.668-18.668s18.668 8.3594 18.668 18.668v158.67c0 5.1523 4.1758 9.332 9.332 9.332s9.332-4.1797 9.332-9.332v-46.668c0-10.309 8.3594-18.668 18.668-18.668s18.668 8.3594 18.668 18.668v46.668c0 5.1523 4.1758 9.332 9.332 9.332s9.332-4.1797 9.332-9.332v-28c0-10.312 8.3594-18.668 18.668-18.668s18.668 8.3555 18.668 18.668v46.664c0 5.1562 4.1758 9.3359 9.332 9.3359s9.332-4.1797 9.332-9.3359v-28c0-10.309 8.3594-18.664 18.668-18.664s18.668 8.3555 18.668 18.664v65.336c0 61.125-37.336 119.38-37.336 168 0 5.1523 4.1797 9.332 9.3359 9.332 5.1523 0 9.332-4.1797 9.332-9.332 0-41.898 37.332-106.64 37.332-168v-65.336c0-20.617-16.715-37.332-37.332-37.332-7.6836 0-14.828 2.3203-20.762 6.3008-5.1055-14.539-18.953-24.969-35.238-24.969z" />
                  <path d="m179.27 114.73c3.6445 3.6445 3.6445 9.5547 0 13.199-3.6445 3.6445-9.5547 3.6445-13.199 0l-37.332-37.332c-3.6445-3.6484-3.6445-9.5547 0-13.203l37.332-37.332c3.6445-3.6445 9.5547-3.6445 13.199 0 3.6445 3.6445 3.6445 9.5547 0 13.199l-21.398 21.402h126.8c5.1523 0 9.332 4.1758 9.332 9.332s-4.1797 9.332-9.332 9.332h-126.86z" />
                  <path d="m520.73 114.73c-3.6445 3.6445-3.6445 9.5547 0 13.199 3.6445 3.6445 9.5547 3.6445 13.199 0l37.332-37.332c3.6445-3.6484 3.6445-9.5547 0-13.203l-37.332-37.332c-3.6445-3.6445-9.5547-3.6445-13.199 0-3.6445 3.6445-3.6445 9.5547 0 13.199l21.398 21.402h-126.8c-5.1523 0-9.332 4.1758-9.332 9.332s4.1797 9.332 9.332 9.332h126.86z" />
                </g>
              </svg>
            </div>
          </div>
          <div
            className="container-line"
            onScroll={() => setScrolledMethodology(true)}
          >
            <div className="line animate__animated animate__fadeIn">
              <LineMethodology />
            </div>
            <div className="steps animate__animated animate__fadeIn">
              <MethodologyItem
                number={1}
                top={75}
                icon={<IconEntedimento />}
                title="Start"
                description="Reuniões da equipe com o cliente para melhor entedimento do projeto."
                steps={["Reuniões", "Pesquisas", "Wireframe"]}
              />
              <MethodologyItem
                number={2}
                top={55}
                icon={<IconSolucaoProblema />}
                title="Criativo"
                description="Onde tiramos todas as ideias da etapa start e desenhamos o escopo final."
                steps={["UX/UI", "Alinhamentos"]}
              />
              <MethodologyItem
                top={60}
                number={3}
                icon={<IconDesenvolvimento />}
                title="Desenvolvimento"
                description="Desenvolvimento ágil, baseado em SCRUM."
                steps={[
                  "Planejamentos",
                  "Testes",
                  "Ambiente de dev",
                  "Reuniões",
                ]}
              />
              <MethodologyItem
                top={95}
                number={4}
                icon={<IconEntregaProjeto />}
                title="Entrega do Projeto"
                description="Projeto entregue e monitoramento sobre bugs."
                steps={[
                  "Ambiente produção",
                  "Monitoramaneto",
                  "Correção de bugs",
                ]}
              />
              <MethodologyItem
                top={30}
                number={5}
                icon={<IconSustentacao />}
                title="Manutenção"
                description="Manutenção, correção de bugs e melhorias."
                steps={["Melhorias"]}
              />
            </div>
          </div>
        </div>
        <div className="text-buttons">
          <p>Ficou alguma dúvida?</p>
          <p className="line">Entre em contato</p>
          <ContainerButtons onClickGATAG={onClickGATAG} />
        </div>
      </section>

      <ContainerWaves color={colors.primaryGrey} background={colors.primary} />
      <section id="clientes">
        <div className="center-page">
          <h2 className="title">Clientes</h2>
          <div className="list">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            ].map((row) => (
              <img key={row} src={`/images/clientes/${row}.png`} />
            ))}
          </div>
        </div>
      </section>

      <ContainerWaves
        color={colors.primaryDark}
        background={colors.primaryGrey}
      />

      <section id="cases">
        <ListCases />
      </section>

      <Contact redirect="https://tropa.digital/sistemas-sob-medida/sucesso" />

      <Footer />
      <WPPButton
        onClickGATAG={onClickGATAG}
        text="Olá, estou interessado em Sistemas Sob Medida. Gostaria de algumas informações, poderia me ajudar?"
      />
    </ContainerDesenvolvimentos>
  );
};

export default SistemasSobMedida;
