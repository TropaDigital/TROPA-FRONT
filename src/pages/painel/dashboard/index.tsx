import LayoutPainel from "../../../components/Painel/LayoutPainel";
import Head from "next/head";
import { DashContainer } from "../../../assets/styles/DashBoard";
import Table from "../../../components/Painel/components/Table";
import Checkbox from "../../../components/Painel/components/Checkbox";
import { ImageIcon, SearchIcon } from "../../../components/Svg";
import InputIcon from "../../../components/Painel/components/inputs/InputIcon";
import { useRouter } from "next/router";

const PainelDashboard = () => {
  const header = [
    {
      key: "select_product",
      label: <Checkbox />,
      type: "string",
    },
    {
      key: "project_image",
      label: <ImageIcon />,
      type: "image",
    },
    {
      key: "project_name",
      label: `Name`,
      type: "string",
    },
    {
      key: "project_sku",
      label: `SKU`,
      type: "string",
    },
    {
      key: "project_price",
      label: `Preço`,
      type: "string",
    },
    {
      key: "project_date",
      label: `Data`,
      type: "date",
    },
    {
      key: "project_stock",
      label: `Estoque`,
      type: "string",
    },
    {
      key: "status",
      label: `Status`,
      type: "status",
    },
    {
      key: "",
      label: ``,
      type: "options",
    },
  ];

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
          <Table
            header={header}
            data={[
              {
                select_product: <Checkbox/>,
                project_name: "Consórcio Tradição",
                project_stock: "Em Estoque",
                project_sku: "A14B56C78",
                project_price: "R$ 232,00",
                status: "Ativo",
              }
            ]}
            title="Todos os Produtos"
            search={[
              <form key="">
                <InputIcon
                  placeholder="Buscar produtos"
                  icon={<SearchIcon />}
                  name="search"
                />
              </form>,
            ]}
          />
        </DashContainer>
      </LayoutPainel>
    </>
  );
};

export default PainelDashboard;
