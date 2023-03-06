import styled from "styled-components";
import { colors } from "../../../../assets/styles/mixin";

type Props = {
  isOpen: boolean;
};

export const Menu = styled.div<Props>`
  height: 2.5px;
  width: 25px;
  border-radius: 3px;
  background-color: ${colors.primaryWhite};
  transition: 250ms;
  position: relative;
  display: none;
  min-width: 12px;

  &::before,
  &::after {
    content: "";
    height: 2.5px;
    width: 25px;
    border-radius: 3px;
    background-color: ${colors.primaryWhite};
    position: absolute;
  }

  &::before {
    top: -8px;
  }

  &::after {
    bottom: -8px;
  }

  @media (max-width: 835px) {
    display: block;
  }
`;

export const MobileMenuContainer = styled.div<Props>`
  position: fixed;
  top: 64px;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 40%;
  background-color: ${colors.primaryWhite};
  height: calc(100vh - 65px);
  transition: 0.75s linear;
  box-shadow: 0px 4px 12px rgba(25, 73, 62, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  a {
    color: ${colors.primaryDark};
    font-weight: 500;
  }
  @media (max-width: 450px) {
    width: 50%;
  }

  .sideBarMenuHeader {
    background-color: ${colors.neutralDark};
    display: flex;
    justify-content: center;
    padding: 18px;
    width: 100%;
  }
  
  @media(min-width: 835px) {
    left: -100%;
  }
`;
