import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlayClose {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .closeModal {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
    cursor: pointer;
  }
  .modalContent {
    position: relative;
    background-color: var(--bg);
    width: 536px;
    padding: 24px;
    border-radius: 12px;
    max-height: 80%;
    overflow-y: scroll;
    margin: 0 20px;
    @media (max-width: 450px) {
      border-radius: 8px;
      padding: 16px;

      &::-webkit-scrollbar-track,
      &::-webkit-scrollbar-thumb,
      &::-webkit-scrollbar-thumb:hover {
        border-radius: 8px;
      }
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: var(--white);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--color1B);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--color1D);
      border-radius: 12px;
    }
  }
`;
