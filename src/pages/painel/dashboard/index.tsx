import LayoutPainel from "../../../components/Painel/LayoutPainel";
import Head from "next/head";
import { DashContainer } from "../../../assets/styles/DashBoard";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Painel</title>
        <meta
          name="description"
          content="Dashboard de projetos da Tropa Digital"
        />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <LayoutPainel>
        <DashContainer>
          <p>Dashboard</p>
        </DashContainer>
      </LayoutPainel>
    </>
  );
};

export default Dashboard;
