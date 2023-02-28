import Head from "next/head";
import PanelLoginComponent from "../../components/Painel/pages/Login";

const LoginPanel = () => {
  return (
    <>
      <Head>
        <title>Login | Painel</title>
        <meta name="description" content="Painel de login da Tropa Digital" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <PanelLoginComponent />
    </>
  );
};

export default LoginPanel;
