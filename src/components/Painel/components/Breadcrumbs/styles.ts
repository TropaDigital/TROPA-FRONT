import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    font-size: 12px;
    line-height: 16px;
    color: var(--text3);
    font-weight: 500;
  }

  .darkLetter {
    color: var(--text2);
  }

  span {
    display: flex;
    gap: 12px;
  }
`;
