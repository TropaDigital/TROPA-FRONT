import React, { useState } from 'react';
import { ChevronTopIcon, LogoutIcon, PersonIcon } from "../../../Svg";
import * as S from './styles';
import { useRouter } from 'next/router';

export default function LogoutPanel() {
  const [modalLogOutOpen, setModalLogOutOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <S.Container isOpen={modalLogOutOpen}>
      <div className="avatarPerson">
        <PersonIcon color={'var(--color1D)'} />
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
            router.push('/');
          }}
        >
          <LogoutIcon />
          <p className="logoutText">Sair</p>
        </button>
      </S.ModalLogOut>
    </S.Container>
  );
}
