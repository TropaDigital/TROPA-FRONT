import styled from "styled-components";
import { colors, fonts } from "./mixin";

export const DashContainer = styled.div`
  p, h1, h2, h3, span, a {
    font-family: ${fonts.manrope};
  }

  .customCheckbox {
    border: 2px solid ${colors.secondaryDark};
  }
`;

export const DashboardInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`