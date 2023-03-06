import React, { useEffect, useRef, useState } from "react";
import { ChevronTopIcon, LogoutIcon } from "../../../Svg";
import * as S from "./styles";
import router from "next/router";
import { useCookies } from "react-cookie";

export default function LogoutPanel() {
  const [modalLogOutOpen, setModalLogOutOpen] = useState<boolean>(false);
  const [cookie, setCookie, removeCookie] = useCookies();

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setModalLogOutOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

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
      <S.ModalLogOut isOpen={modalLogOutOpen} ref={wrapperRef}>
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
