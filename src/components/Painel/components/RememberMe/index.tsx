import * as S from "./styles";

const RememberMe = () => {
  return (
    <S.Container>
      <label>
        <S.CheckRemember />
        <p className="rememberMeText">Lembrar-me</p>
      </label>
    </S.Container>
  );
};

export default RememberMe;
