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
import Link from "next/link";
import Checkbox from "../../components/Checkbox";
import { useCookies } from "react-cookie";
import "animate.css";
import Cookies from "react-cookie/cjs/Cookies";
import { Formik } from "formik";
import { loginSchema } from "./yupSchema";

interface IDTO {
  login: string;
  password: string;
}

export default function PanelLoginComponent() {
  // const [currentBgImage, setCurrentBgImage] =
  //   useState<StaticImageData>(bgLoginAcai);
  const [isLoading, setIsLoading] = useState(false);
  const [cookie, setCookie] = useCookies();

  const router = useRouter();

  const checkLogin = (email: string, password: string) => {
    const now = new Date();

    if (email === "admin@tropa.digital.com" || password === "tropadigital") {
      const rememberMe: any = document?.querySelector("input:checked");
      if (rememberMe) {
        setCookie("AuthorizedTropaAdmin", "JKoknHCxazT", {
          maxAge: now.setDate(now.getDate() + 3),
        });
      } else {
        setCookie("AuthorizedTropaAdmin", "JKoknHCxazT");
      }
      router.push("/painel/dashboard");
    }
  };

  return (
    <S.Container>
      <S.RightWrapper>
        <div className="columnGreen">
          <Image src={posterLoginPagel} alt="Poster painel de login" />
        </div>
      </S.RightWrapper>

      <S.FormWrapper>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={({ email, password }) => {
            checkLogin(email, password);
          }}
        >
          {({ touched, errors, handleChange, values, handleSubmit }) => (
            <form className="panelAccess" onSubmit={handleSubmit}>
              <div className="logo">
                <Logo />
              </div>

              <h2 className="welcomeBack">Bem-vindo de volta!</h2>
              <h3 className="subtitleForm">
                Entre com sua conta para acessar o painel.
              </h3>
              <div className="inputWrapper">
                <Inputdefault
                  label="Email"
                  labelType="inner"
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="email@exemplo.com"
                  error={touched.email ? errors.email : null}
                  autoComplete="off"
                />
              </div>
              <div className="inputWrapper">
                <InputPassword
                  label="Senha"
                  labelType="inner"
                  onChange={handleChange}
                  name="password"
                  value={values.password}
                  placeholder="Digite sua senha"
                  error={touched.password ? errors.password : null}
                  autoComplete="off"
                />
              </div>
              <div className="bottomForm">
                <Checkbox label="Lembrar-me" id="rememberMe" />
                <ForgotPassword />
              </div>

              <ButtonDefault type="submit" color="primaryButton">
                <p className="textSubmitPanel">Acessar minha conta</p>
              </ButtonDefault>
              <p className="registerAccount">
                Não tem uma conta? <Link href="/">Cadastre-se</Link>
              </p>
            </form>
          )}
        </Formik>
      </S.FormWrapper>
    </S.Container>
  );
}
