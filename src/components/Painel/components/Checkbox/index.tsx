import * as S from "./styles";

interface ICheckbox {
  label: string
}

const Checkbox = ({ label }: ICheckbox) => {
  return (
    <S.Container>
      <label>
        <S.CheckRemember />
        <p className="rememberMeText">{label}</p>
      </label>
    </S.Container>
  );
};

export default Checkbox;
