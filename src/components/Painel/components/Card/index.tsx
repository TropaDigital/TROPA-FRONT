import { TrendingDownIcon, TrendingIcon } from "../../../Svg";
import * as S from "./styles";

interface ICard {
  titulo: string | number;
  percentage?: string;
  label?: string | number;
}

const Card = ({ titulo, percentage, label }: ICard) => {
  const handlePercentage = (percentage: string) => {
    return percentage?.replace("[^\d+\-]", "")?.replaceAll("%", "")
  }

  

  return (
    <S.Container>
        <div>
            <p className="label">{label}</p>
        </div>

      <div>
        <p className="titulo">{titulo}</p>
        <p className="percentage">
          {percentage?.includes("+") ? <TrendingIcon /> : <TrendingDownIcon />}
          {percentage && handlePercentage(percentage)}%
        </p>
      </div>
    </S.Container>
  );
};

export default Card;
