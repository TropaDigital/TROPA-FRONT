import { useState } from "react";
import { LogoWithoutDigital, PageIcon } from "../../../Svg";
import { Menu, MobileMenuContainer } from "./styles";
import PanelConfig from "../../panelConfig.json";
import SelectSideBar from "../SelectSideBar";
import Link from "next/link";

const MobileMenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  return (
    <>
      <Menu
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        isOpen={isSideBarOpen}
      />
      <MobileMenuContainer isOpen={isSideBarOpen}>
        <div className="sideBarMenuHeader">
          <LogoWithoutDigital />
        </div>

        <SelectSideBar
          title="Dashboard"
          icon={<PageIcon />}
          pages={PanelConfig.pages}
          openSideBar={() => setIsSideBarOpen(isSideBarOpen)}
        />
      </MobileMenuContainer>
    </>
  );
};

export default MobileMenu;