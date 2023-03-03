import * as S from "./styles";

interface ICheckbox {
  label?: string;
  id?: string;
}

const Checkbox = ({ label, id }: ICheckbox) => {
  return (
    <>
      {label !== "" && (
        <S.Container>
          <label>
            <S.CheckRemember id={id} className="customCheckbox" />
            <p className="rememberMeText">{label}</p>
          </label>
        </S.Container>
      )}
      {label === "" && <S.CheckRemember id={id} className="customCheckbox" />}
    </>
  );
};

export default Checkbox;
