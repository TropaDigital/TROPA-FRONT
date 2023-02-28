import styled from 'styled-components';

type Props = {
  maxWidth?: number;
}

export const Container = styled.div<Props>`
  max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : '100%'};
  display: flex;
  flex-direction: column;
  gap: 12px;
  .inputLabel {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--text1);
  }
  .inputField {
    min-height: 48px;
    border-radius: 8px;
    border: 1px solid var(--base2);
    background-color: var(--white);
    padding: 10px 14px;
    resize: none;
    font-size: 16px;
    font-weight: 400;
    color: var(--text1);
  }
`;