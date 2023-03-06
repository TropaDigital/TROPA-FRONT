// import {
//   DoubleChevronWithCircle,
//   LogoWhite,
//   PageIcon,
// } from '@/src/assets/icons';
import { ReactNode, useState } from "react";
import { Container } from "./styles";
import SelectSideBar from "../components/SelectSideBar";

import panelConfig from "../panelConfig.json";
import LogoutPanel from "../components/LogoutPanel";
import Link from "next/link";
import {
  BellIcon,
  BellNotificationIcon,
  ExitIcon,
  LogoutIcon,
  LogoWithoutDigital,
  PageIcon,
} from "../../Svg";
import useCookies from "react-cookie/cjs/useCookies";
import { useRouter } from "next/router";
import NotificationPanel from "../components/NotificationPanel";
import MobileMenu from "../components/MobileMenu";
interface ILayoutPanelProps {
  children: ReactNode;
}

export default function LayoutPainel({ children }: ILayoutPanelProps) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(true);
  const [cookie, setCookie, removeCookie] = useCookies();

  const router = useRouter();

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
          <div className="leftSideWrapper">
            <MobileMenu />
            <p className="noticeUser">
              <span className="largeScreen">
                Olá, bom dia! Você possui 3 novos pedidos para processar.
              </span>
              <span className="mediumScreen">
                Você possui 3 novos pedidos para processar.
              </span>
              <span className="tinyScreen">
                3 novos pedidos para processar.
              </span>
            </p>
          </div>
          <div className="userContainer">
            <NotificationPanel />
            <LogoutPanel />
          </div>
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
          <div className="sideBarFooter">
            <p className="adminUserName">Username</p>
            <p className="adminEmail">admin@tropa.digital.com</p>

            <button
              className="handleCloseSideBar"
              onClick={() => {
                removeCookie("AuthorizedTropaAdmin");
                router.push("/");
              }}
            >
              <ExitIcon />
              <p className="textHandleCloseSideBar">Sair</p>
            </button>
          </div>
        </div>

        <main className="mainWrapperWithChildren">{children}</main>
      </div>
      <footer className="footerWrapper">
        <div>&copy; 2023, Todos os direitos reservados.</div>
        <div>
          <Link href="/painel/dashboard">Privacy policy</Link>
          <Link href="/painel/dashboard">Terms of use</Link>
        </div>
      </footer>
    </Container>
  );
}
