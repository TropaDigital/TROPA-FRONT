import styled from 'styled-components';
import { colors } from '../../assets/styles/mixin';

export const ContainerVideoLP = styled.div`
    min-width: 695px;
    min-height: 408px;
    display: flex;
    position: relative;
    background: url('/images/safari-tropa.png');
    padding: 53px 0px 0px 0px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0px 10px 10px 10px rgba(0, 0, 0, 0.05);
    .content-browser {
        width: 695px;
        height: 356px;
        position: relative;
    }
    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(204, 97, 56, 1);
        transition: all 0.2s;
        &.play {
            opacity: 0;
            visibility: hidden;
        }
        .thumbnail {
            background-image: url('/images/thumbinail-video.jpeg');
            background-size: 100% auto;
            background-color: ${colors.primaryLight};
            background-repeat: no-repeat;
            background-position: center;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
        button {
            display: flex;
            background: transparent;
            border: none;
            cursor: pointer;
            position: relative;
            z-index: 2;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(3px);
            background-color: rgba(0, 0, 0, 0.3);
            svg {
                width: 100px;
                height: 100px;
                color: ${colors.primary};
            }
        }
    }
    video {
        width: 100%;
        display: flex;
        position: relative;
        z-index: 2;
    }
`;
