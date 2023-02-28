import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  width: 100%;
  .formAddProductWrapper {
    width: 100%;

    span {
      color: var(--alert);
      font-weight: 500;
      font-size: 14px;
    }
  }
  .lineElementsWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
  }
  .inputsProductWrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .buttonsWrapper {
    justify-content: flex-end;
  }
  .button {
    max-width: 152px;
    font-weight: 500;
    font-size: 16px;

    @media (max-width: 835px) {
      max-width: 100%;
    }
  }
  .imageComponentWrapper {
    margin-top: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    .removeImage {
      position: absolute;
      transition: 0.7s linear;
      height: 80px;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      .removeIcon {
        display: none;
        transition: 0.7s linear;
      }
    }
    .removeImage:hover {
      background-color: var(--alert);
      cursor: pointer;
      opacity: 0.65;
      .removeIcon {
        display: block;
      }
    }
    .imageComponent {
      border-radius: 8px;
      width: 80px;
      height: 80px;
      position: relative;
      img {
        object-fit: cover;
        border-radius: 8px;
      }
    }
  }
`;