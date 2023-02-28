import styled from "styled-components";
import { colors } from "../../../../assets/styles/mixin";

export const Container = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 8px;

    p {
      font-weight: 400;
    }
  }
`;

export const CheckRemember = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  cursor: pointer;
  aspect-ratio: 4/4;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1.5px solid ${colors.primaryWhite};
  background: none;
  position: relative;

  &:checked {
    background-color: ${colors.primary};
    border: 1.5px solid ${colors.primary};
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.6668 1.49976L4.25016 7.91642L1.3335 4.99976' stroke='white' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center center;
  }
`;