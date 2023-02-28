import React, { useState, useEffect, FormEvent } from "react";

import * as S from "./styles";

import Inputdefault from "../../components/inputs/InputDefault";
import InputPassword from "../../components/inputs/InputPassword";
import ButtonDefault from "../../components/ButtonDefault";

import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { Logo } from "../../../Svg";
import posterLoginPagel from "../../../../../public/images/posterLoginPanel.png";
import Image from "next/image";
import ForgotPassword from "../../components/ForgotPassword";
import RememberMe from "../../components/RememberMe";

interface IDTO {
  login: string;
  password: string;
}

export default function PanelLoginComponent() {
  // const [currentBgImage, setCurrentBgImage] =
  //   useState<StaticImageData>(bgLoginAcai);
  const [DTO, setDTO] = useState<IDTO>({
    login: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // useEffect(() => {
  //   handleBgImage();
  // }, []);

  function handleOnChange(pos: "login" | "password", value: string) {
    const newDTO: IDTO = DTO;
    newDTO[pos] = value;
    setDTO({ ...newDTO });
  }

  // function handleBgImage() {
  //   const options: Array<StaticImageData> = [
  //     bgLoginAcai,
  //     bgLoginChocolate,
  //     bgLoginMandioca,
  //     bgLoginPeixe,
  //   ];
  //   setInterval(() => {
  //     var imagePos = Math.floor(Math.random() * options?.length);
  //     setCurrentBgImage(options[imagePos]);
  //   }, 5000);
  // }

  async function checkDTO() {
    try {
      setIsLoading(true);
      if (!DTO.login || !DTO.password)
        throw new Error("Todos os campos são obrigatórios");
      if (DTO.login != "amazonia@teste.com")
        throw new Error("O login está incorreto");
      if (DTO.password !== "Mud@r123")
        throw new Error("A senha está incorreta");

      router.push("/painel/produtos");
    } catch (error: any) {
      toast.error(error.message);
      setIsLoading(false);
    }
  }

  function handleSubmitAccessForm(e: FormEvent) {
    e.preventDefault();
    checkDTO();
  }

  return (
    <S.Container>
      <S.RightWrapper>
        <div className="columnGreen">
          <Image src={posterLoginPagel} alt="Poster painel de login" />
        </div>
      </S.RightWrapper>

      <S.FormWrapper>
        <form
          className="panelAccess"
          onSubmit={(e: FormEvent) => {
            handleSubmitAccessForm(e);
          }}
        >
          <div className="logoGreenCasaAmazonia">
            <Logo />
          </div>

          <h2 className="welcomeBack">Bem-vindo de volta!</h2>
          <h3 className="subtitleForm">
            Entre com sua conta para acessar o painel.
          </h3>
          <div className="inputWrapper">
            <Inputdefault
              label="Email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleOnChange("login", event?.target?.value);
              }}
              value={DTO?.login}
              placeholder="email@exemplo.com"
              type={"email"}
            />
          </div>
          <div className="inputWrapper">
            <InputPassword
              label="Senha"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleOnChange("password", event?.target?.value);
              }}
              value={DTO?.password}
              placeholder="Digite sua senha"
            />
          </div>
          <div className="bottomForm">
            <RememberMe />
            <ForgotPassword />
          </div>

          <ButtonDefault
            type="submit"
            color="primaryButton"
            onClick={() => {
              SubmitEvent;
            }}
          >
            <p className="textSubmitPanel">Acessar minha conta</p>
          </ButtonDefault>
        </form>
        <p>Não tem uma conta? Cadastre-se</p>
      </S.FormWrapper>
    </S.Container>
  );
}
