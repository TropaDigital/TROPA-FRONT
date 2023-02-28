import styled from 'styled-components';

export const Container = styled.div`
  .inputWrapper {
    position: relative;
    height: 200px;
    margin-bottom: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--base3);
    border-radius: 8px;

    .inputImage {
      position: absolute;
      border: 1px dashed var(--text3);
      background-color: transparent;
      border-radius: 8px;
      width: 100%;
      height: 100%;
      color: transparent;

      cursor: pointer;

      &::-webkit-file-upload-button {
        display: none;
      }
    }
    .inputContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      .inputTitle {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: var(--text4);
      }
      .inputButton {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;

        color: var(--text1);
      }
    }
  }
`;
