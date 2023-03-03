import { ArrowHead } from "../../../Svg";
import * as S from "./styles";

const Pagination = () => {
  // Quantia de páginas de itens
  const pages = [1, 2, 3];

  return (
    <>
      <S.Container>
        <div className="previous button">
          <ArrowHead />
        </div>

        <div className="paginationIndex">
          {pages.map((pageIndex, key) => (
            <div
              className={pageIndex === 1 ? "pageIndex active" : "pageIndex"}
              key={key}
              onClick={() => {
                // Fazer chamada da api pelo index da página
              }}
            >
              {pageIndex}
            </div>
          ))}
        </div>

        <div className="next button">
          <ArrowHead />
        </div>
      </S.Container>
    </>
  );
};

export default Pagination;
