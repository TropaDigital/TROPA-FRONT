import React from 'react';
import * as S from './styles';

interface IInputDefault extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: any;
}

export default function Inputdefault({ label, error, ...rest }: IInputDefault) {
  return (
    <S.Container>
      {label && <label className="inputLabel">{label}</label>}
      <input className="inputField" {...rest}></input>
      {error && <span className='validationError'>{error}</span>}
    </S.Container>
  );
}
