import LayoutPainel from "../../../components/Painel/LayoutPainel"
import Head from "next/head"

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Painel</title>
        <meta name="description" content="Dashboard de projetos da Tropa Digital" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
        <LayoutPainel>
            Dashboard
        </LayoutPainel>
    </>
  )
}

export default Dashboard