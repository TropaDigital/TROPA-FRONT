import Image from "next/image";
import { useState } from "react";
import MiniModal from "../../modal/MiniModal";
import moment from "moment";

import * as S from "./styles";
import { IRenderTD } from "./types";
import { CloseIcon, MenuIcon, PencilIcon } from "../../../../Svg";
import { Skeleton } from "@mui/material";

export default function RenderTD({ head, item, isLoading, onClickOptions }: IRenderTD) {
  const [miniModal, setMiniModal] = useState<boolean>(false);

  const labelKey:
    | "peso"
    | "status"
    | "titulo"
    | "produtoImagens"
    | "id_produto"
    | "criado" = head.key;

  return (
    <S.Container id="td">
      {head.type === "date" && isLoading ? <Skeleton/> : head.type === "date" && <span>{moment(item.criado).format("DD/MM/YYYY")}</span>}
      {head.type === "options" && (
        <button
          className="buttonOptions"
          onClick={() => {
            setMiniModal(!miniModal);
          }}
        >
          <MenuIcon />
          {miniModal && (
            <MiniModal
              onClick={(modalType) => {
                onClickOptions(modalType, item);
              }}
              closeModal={() => {
                setMiniModal(false);
              }}
              options={[
                {
                  label: "Editar",
                  value: "editar",
                  icon: <a />,
                },
                {
                  label: "Visualizar",
                  value: "visualizar",
                  icon: <a />,
                },
                {
                  label: "Deletar",
                  value: "deletar",
                  icon: <a />,
                },
              ]}
            />
          )}
        </button>
      )}
      {head.type === "status" && isLoading ? <Skeleton width={35}/>  
      : head.type === "status" && (
        <span className={item[head.key] as string}>
          {item.status.toLowerCase() === "ativo" ? "Ativo" : "Inativo"}
        </span>
      )}

      {head.type === "select_product" && <span>{item[labelKey]}</span>}

      {head.type === "string" && isLoading ? <Skeleton width={80} /> 
      : head.type === "string" && <span>{item[labelKey] as string}</span>}

      {head.type === "number" && isLoading ? <Skeleton width={80} /> 
      : head.type === "number" && <span>{item[labelKey] as number}</span>}

      {head.type === "image" && (
        <Image
          alt={head?.label}
          width={60}
          height={60}
          src={"https://via.placeholder.com/60"}
        />
      )}
    </S.Container>
  );
}
