import LayoutPainel from "../../../components/Painel/LayoutPainel";
import Head from "next/head";
import { DashboardInfoContainer, DashContainer } from "../../../assets/styles/DashboardStyles";
import Table from "../../../components/Painel/components/Table";
import Checkbox from "../../../components/Painel/components/Checkbox";
import { DownArrow, ImageIcon, SearchIcon } from "../../../components/Svg";
import InputIcon from "../../../components/Painel/components/inputs/InputIcon";
import { useRouter } from "next/router";
import { useState } from "react";
import Card from "../../../components/Painel/components/Card";

const PainelDashboard = () => {
  const header = [
    {
      key: "select_product",
      label: <Checkbox id="selectAll" />,
      type: "string",
    },
    {
      key: "produtoImagens",
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
      label: "Status",
      type: "status",
    },
    {
      key: "",
      label: ``,
      type: "options",
    },
  ];

  const products = [
    {
      select_product: <Checkbox id="select" />,
      project_name: "Camiseta Wild Frontier",
      project_stock: "Em Estoque",
      project_sku: "A14B56C78",
      project_price: "R$ 232,00",
      status: "Ativo",
    },
    {
      select_product: <Checkbox id="select" />,
      project_name: "Tênis Urban Explorer",
      project_stock: "Em Estoque",
      project_sku: "D25E36F49",
      project_price: "R$ 371,98",
      status: "Ativo",
    },
    {
      select_product: <Checkbox id="select" />,
      project_name: "Jaqueta Eagle Flight",
      project_stock: "Em Estoque",
      project_sku: "G12H34I56",
      project_price: "R$ 439,99",
      status: "Ativo",
    },
    {
      select_product: <Checkbox id="select" />,
      project_name: "Camisa Sharp Edge",
      project_stock: "Em Estoque",
      project_sku: "J78K12L90",
      project_price: "R$ 299,00",
      status: "Ativo",
    },
    {
      select_product: <Checkbox id="select" />,
      project_name: "Calça Rugged Denim",
      project_stock: "Em Estoque",
      project_sku: "M89N45O12",
      project_price: "R$ 400,00",
      status: "Ativo",
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
        <h1 style={{ marginBottom: "32px" }}>Dashboard</h1>
        <DashContainer>
          <DashboardInfoContainer>
            <Card
              label="TOTAL NO MÊS"
              titulo="R$ 43.324,00"
              percentage="+22"
            />
            <Card
              label="TAXA DE CONVERSÃO"
              titulo="2.25% ~ 2.3%"
              percentage="-0.02"
            />
            <Card
              label="visitantes únicos"
              titulo="4.607"
              percentage="-15"
            />
          </DashboardInfoContainer>
          <Table
            header={header}
            data={products}
            title="Todos os Produtos"
            search={[
              <form key="">
                <InputIcon
                  placeholder="Buscar produtos"
                  icon={<SearchIcon />}
                  name="search"
                />
              </form>
            ]}
          />
        </DashContainer>
      </LayoutPainel>
    </>
  );
};

export default PainelDashboard;
