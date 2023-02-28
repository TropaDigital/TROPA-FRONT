import React, { useState } from "react";
import { EyeIcon, EyeIconClose } from "../../../../Svg";
import * as S from "./styles";

interface IInputDefault extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelType?: "default" | "inner";
}

export default function InputPassword({ label, labelType = "default", ...rest }: IInputDefault) {
  const [visibility, setVisibility] = useState<boolean>(false);

  return (
    <S.Container labelType={labelType}>
      <label className="inputLabel">{label}</label>
      <div className="inputWrapper">
        <input
          className="inputField"
          {...rest}
          type={visibility ? "text" : "password"}
        ></input>
        <button
          type="button"
          className="eyeIcon"
          onClick={() => {
            setVisibility(!visibility);
          }}
        >
          {visibility ? <EyeIconClose /> : <EyeIcon />}
        </button>
      </div>
    </S.Container>
  );
}
