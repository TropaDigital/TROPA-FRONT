// import {
//   DoubleChevronWithCircle,
//   LogoWhite,
//   PageIcon,
// } from '@/src/assets/icons';
import { ReactNode, useState } from "react";
import { Container } from "./styles";
import SelectSideBar from "../components/SelectSideBar";

import panelConfig from "../panelConfig.json";
// import LogoutPanel from '../components/LogoutPanel';
import Link from "next/link";
import { LogoutIcon, LogoWithoutDigital, PageIcon } from "../../Svg";
import useCookies from "react-cookie/cjs/useCookies";
import { useRouter } from "next/router";
interface ILayoutPanelProps {
  children: ReactNode;
}

export default function LayoutPainel({ children }: ILayoutPanelProps) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(true);
  const [cookie, setCookie, removeCookie] = useCookies()

  const router = useRouter()

  return (
    <Container sideBarIsOpen={sideBarIsOpen}>
      <header className="headerLayoutDashboard">
        <div className="leftSideWithLogo">
          <Link href="/" passHref>
            <a>
              <LogoWithoutDigital />
            </a>
          </Link>
        </div>
        <div className="rigthSideWithAvatar">
          <p className="noticeUser">
            Olá, bom dia! Você possui 3 novos pedidos para processar.
          </p>
          {/* <LogoutPanel /> */}
        </div>
      </header>
      <div className="mainWrapper">
        <div className="sideBarWithContent">
          <div className="navigateOptions">
            <SelectSideBar
              sideBarIsOpen={sideBarIsOpen}
              openSideBar={() => {
                setSideBarIsOpen(true);
              }}
              pages={panelConfig.pages}
              title={"Dashboard"}
              icon={<PageIcon />}
            />
          </div>
          <button
            className="handleCloseSideBar"
            onClick={() => {
              removeCookie("admin")
              router.push("/painel");
            }}
          >
            <LogoutIcon />
            <p className="textHandleCloseSideBar">Sair</p>
          </button>
        </div>

        <main className="mainWrapperWithChildren">{children}</main>
      </div>
    </Container>
  );
}
