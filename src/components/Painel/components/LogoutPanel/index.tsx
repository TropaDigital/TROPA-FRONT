import React, { useState } from "react";
import { BellIcon, ChevronTopIcon, LogoutIcon, PersonIcon } from "../../../Svg";
import * as S from "./styles";
import router, { useRouter } from "next/router";
import { colors } from "../../../../assets/styles/mixin";
import { useCookies } from "react-cookie";
import TropaAdminPhoto from "../../../../../public/images/insta.jpg";
import Image from "next/image";

export default function LogoutPanel() {
  const [modalLogOutOpen, setModalLogOutOpen] = useState<boolean>(false);
  const [cookie, setCookie, removeCookie] = useCookies();

  return (
    <S.Container isOpen={modalLogOutOpen}>
      <button
        className="chevronHandleLogOutVisibility"
        onClick={() => {
          setModalLogOutOpen(!modalLogOutOpen);
        }}
      >
        <div className="avatarPerson"></div>
        <ChevronTopIcon />
      </button>
      <S.ModalLogOut isOpen={modalLogOutOpen}>
        <button
          onClick={() => {
            removeCookie("AuthorizedTropaAdmin");
            router.push("/");
          }}
        >
          <LogoutIcon />
          <p className="logoutText">Sair</p>
        </button>
      </S.ModalLogOut>
    </S.Container>
  );
}
