import styled from 'styled-components';
import { colors } from '../../assets/styles/mixin';

export const ContainerVideoLP = styled.div`
    width: 100%;
    display: flex;
    #container-video-cases {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
        .overlay {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 3;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(204, 97, 56, 1);=
            transition: all 0.2s;
            &.play {
                opacity: 0;
                visibility: hidden;
            }
            .thumbnail {
                background-image: url('/images/thumbinail-video.jpeg');
                background-size: auto 100%;
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
                background-color: rgba(255,255,255,.5);
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
    }
`;
