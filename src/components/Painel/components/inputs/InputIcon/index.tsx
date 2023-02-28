import React, { ReactNode } from 'react';
import * as S from './styles';

interface IInputDefault extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export default function InputIcon({ icon, ...rest }: IInputDefault) {
  return (
    <S.Container>
      <span className="iconWrapper">{icon}</span>
      <input className="inputField" {...rest}></input>
    </S.Container>
  );
}
