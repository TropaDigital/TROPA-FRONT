import * as S from "./styles";

interface ICheckbox {
  label?: string;
  id?: string;
}

const Checkbox = ({ label, id }: ICheckbox) => {
  return (
    <S.Container>
      <label>
        <S.CheckRemember id={id} className="customCheckbox" />
        <p className="rememberMeText">{label}</p>
      </label>
    </S.Container>
  );
};

export default Checkbox;
