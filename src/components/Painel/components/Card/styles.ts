import styled from "styled-components";
import { colors, fonts } from "../../../../assets/styles/mixin";

type Props = {
  width?: string | number;
  height?: string | number;
};

export const Container = styled.div<Props>`
  width: 372px;
  height: 149px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${colors.primaryWhite};
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  border-radius: 8px;
  gap: 16px;

  > div {
    display: flex;
    justify-content: space-between;
  }

  .titulo,
  .percentage {
    font-family: ${fonts.manrope};
  }

  .label {
    font-family: ${fonts.dmsans};
    color: ${colors.grey};
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
  }

  .titulo {
    color: ${colors.secondaryDark};
    font-size: 32px;
    font-weight: 600;
  }

  .percentage {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.lightGrey};
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
