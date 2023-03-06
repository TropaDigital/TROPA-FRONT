import { propsPage } from "../../interface";
import React, { ReactNode, useEffect, useState } from "react";
import { Select, SubSelect } from "./styles";
import Link from "next/link";
import { ChevronArrowRight, ChevronTopIcon } from "../../../Svg";

interface ISelectProps {
  pages: Array<propsPage>;
  title: string;
  icon: ReactNode;
  openSideBar: () => void;
  sideBarIsOpen?: boolean;
}

export default function SelectSideBar({
  icon,
  pages,
  title,
  sideBarIsOpen,
  openSideBar,
  ...rest
}: ISelectProps) {
  const [selectIsOpen, setSelectIsOpen] = useState<boolean>(true);
  const [subSelectIsOpen, setSubSelectIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!selectIsOpen) {
      setSubSelectIsOpen(false);
    }
  }, [selectIsOpen]);

  function handleToogleSideBar() {
    if (!sideBarIsOpen) {
      openSideBar();
    }
  }

  return (
    <Select
      {...rest}
      isOpen={selectIsOpen}
      numberOfOptions={pages.length}
      onClick={() => {
        handleToogleSideBar();
      }}
      sideBarIsOpen={sideBarIsOpen}
    >
      <div
        className="titleSelectPageWrapper"
        onClick={() => setSelectIsOpen(!selectIsOpen)}
      >
        <div className="titleSelectLeftSide">
          <div className="iconMenu">{icon}</div>
          <p className="titleSelectPage">{title}</p>
        </div>
        <button
          className="handleOpenSelect"
          onClick={() => {
            setSelectIsOpen(!selectIsOpen);
          }}
        >
          <div className="iconOpenSelect">
            <ChevronTopIcon />
          </div>
        </button>
      </div>
      <div className="optionsSelect">
        {pages.map((row: propsPage, key: number) => (
          <>
            {!row.subpages && (
              <Link href={`/painel/${row.path}`} key={key}>
                <a className="cardToPage">{row.name}</a>
              </Link>
            )}

            {row.subpages && (
              <>
                <SubSelect
                  isOpen={subSelectIsOpen}
                  numberOfOptions={row.subpages?.length}
                  row={row}
                >
                  <div
                    className="subMenusCard"
                    onClick={() => {
                      setSubSelectIsOpen(!subSelectIsOpen);
                    }}
                  >
                    <a className="cardToPage ">{row.name}</a>
                    <ChevronArrowRight />
                  </div>
                  {row.subpages &&
                    row.subpages.map((subpage, key) => (
                      <Link href={subpage.path} key={key}>
                        <a>{subpage.name}</a>
                      </Link>
                    ))}
                </SubSelect>
              </>
            )}
          </>
        ))}
      </div>
    </Select>
  );
}
