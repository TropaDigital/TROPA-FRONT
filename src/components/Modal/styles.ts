import styled from 'styled-components';
import { colors } from '../../assets/styles/mixin';

interface Props {
  openModal: boolean
  width?: string;
}

export const ContainerOverlay = styled.div<Props>`
  background: rgba(0, 0, 0, 0.8);
  opacity: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.primary};
    border-radius: 16px;
    width: 70%; 
    height: 85%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    width: 100%;
`;