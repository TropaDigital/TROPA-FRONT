import React, { useState } from "react";
import { ChevronTopIcon, LogoutIcon, PersonIcon } from "../../../Svg";
import * as S from "./styles";
import { useRouter } from "next/router";
import { colors } from "../../../../assets/styles/mixin";
import { useCookies } from "react-cookie";

export default function LogoutPanel() {
  const [modalLogOutOpen, setModalLogOutOpen] = useState<boolean>(false);
  const [cookie, setCookie, removeCookie] = useCookies()

  return (
    <S.Container isOpen={modalLogOutOpen}>
      <div className="avatarPerson">
        <PersonIcon color={colors.primaryWhite} />
      </div>
      <button
        className="chevronHandleLogOutVisibility"
        onClick={() => {
          setModalLogOutOpen(!modalLogOutOpen);
        }}
      >
        <ChevronTopIcon />
      </button>
      <S.ModalLogOut isOpen={modalLogOutOpen}>
        <button
          onClick={() => {
            removeCookie("AuthorizedTropaAdmin");
          }}
        >
          <LogoutIcon />
          <p className="logoutText">Sair</p>
        </button>
      </S.ModalLogOut>
    </S.Container>
  );
}
