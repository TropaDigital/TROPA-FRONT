import styled from "styled-components";
import { colors, fonts } from "../../../../../assets/styles/mixin";

export const Container = styled.td`
  position: relative;
  h1, h2, h3, span, p {
    font-family: ${fonts.dmsans};
  } 
  span {
    img {
      border-radius: 4px;
    }
  }
  .ativo,
  .Ativo {
    color: ${colors.primaryDark};
    font-weight: 500;
    &::before {
      content: ".";
      font-size: 40px;
      margin-right: 5px;
      position: absolute;
      margin-top: -10px;
      margin-left: -12px;
    }
  }
  .inativo,
  .Inativo {
    color: ${colors.primaryDark};
    font-weight: 500;
    &::before {
      content: ".";
      font-size: 40px;
      margin-right: 5px;
      position: absolute;
      margin-top: -10px;
      margin-left: -12px;
    }
  }
  .buttonOptions {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transition: all 0.4s;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      transition: all 0.4s;
      background-color: ${colors.primaryGrey};
    }
  }
`;
