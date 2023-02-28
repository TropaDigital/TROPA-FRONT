import {
  DoubleChevronWithCircle,
  LogoWhite,
  PageIcon,
} from '@/src/assets/icons';
import { ReactNode, useState } from 'react';
import { Container } from './styles';
import SelectSideBar from '../components/SelectSideBar';

import panelConfig from '../panelConfig.json';
import LogoutPanel from '../components/LogoutPanel';
import Link from 'next/link';

interface ILayoutPanelProps {
  children: ReactNode;
}

export default function LayoutPainel({ children }: ILayoutPanelProps) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);

  return (
    <Container sideBarIsOpen={sideBarIsOpen}>
      <header className="headerLayoutDashboard">
        <div className="leftSideWithLogo">
          <Link href="/">{sideBarIsOpen && <LogoWhite />}</Link>
        </div>
        <div className="rigthSideWithAvatar">
          <div className="navigateOptions">
            <div className="sideBarMenuWrapper">
              <div onClick={() => setSideBarIsOpen(!sideBarIsOpen)}>
                <PageIcon color={'var(--white)'} />
              </div>
              <div className="sideBarMenu">
                {panelConfig.pages.map(page => {
                  return <Link href={`/painel/${page.path}`}>{page.name}</Link>
                })}
              </div>
            </div>
          </div>
          <p className="congratsUser">Olá, seja bem-vindo(a) de volta.</p>
          <LogoutPanel />
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
              title={'Páginas'}
              icon={<PageIcon />}
            />
          </div>
          <button
            className="handleCloseSideBar"
            onClick={() => {
              setSideBarIsOpen(!sideBarIsOpen);
            }}
          >
            <DoubleChevronWithCircle />
            <p className="textHandleCloseSideBar">Recolher Menu</p>
          </button>
        </div>

        <main className="mainWrapperWithChildren">{children}</main>
      </div>
    </Container>
  );
}
