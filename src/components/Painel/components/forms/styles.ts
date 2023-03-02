import styled from 'styled-components';
import { colors, fonts } from '../../../../assets/styles/mixin';

export const Container = styled.div`
  border-radius: 8px;
  width: 100%;
  .formAddProductWrapper {
    width: 100%;

    .inputLabel {
      font-family: ${fonts.manrope};
    }
    
    .inputField {
      font-family: ${fonts.inter};
      font-weight: 400;
      background-color: ${colors.primaryWhite};
    }

    span {
      color: ${colors.alert};
      font-weight: 500;
      font-size: 14px;
    }
  }
  .lineElementsWrapper {
    display: flex;
    gap: 24px;
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
    font-family: ${fonts.inter};
    max-width: min-content;
    font-weight: 600;
    font-size: 16px;
    padding: 14px 40px;

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
      background-color: ${colors.alert};
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
