import styled from 'styled-components';
import { colors, fonts } from '../../assets/styles/mixin';

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`;

export const ContainerCenter = styled.div`
    width: 1140px;
    margin: 0px auto;
    max-width: 100%;
    .slider {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .buttons {
            width: 180px;
            display: flex;
            justify-content: space-between;
            button {
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                transition: all 0.2s;
                width: 25px;
                &:hover {
                    transform: scale(1.2);
                }
                svg {
                    width: 25px;
                    height: 59px;
                }
            }
        }
    }
    @media (max-width: 1140px) {
        padding: 0px 30px;
    }
    @media (max-width: 425px) {
        width: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 0px 10px;
    }
`;

export const HeaderContainer = styled.div`
    .content-banner {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
        position: relative;
        z-index: 1;
        padding-top: 15vh;
    }
`;

export const FooterContainer = styled.div`
    width: 100%;
    display: f;
    background: ${colors.primaryDark};
    .infos {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 20px 0px;
        @media (max-width: 425px) {
            height: 300px;
            padding: 30px;
            flex-direction: column-reverse;
            align-items: flex-start;
        }
        .item-group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 10px;
            padding: 15px 0px;
        }
        .item {
            display: flex;
            align-items: center;
            a {
                display: flex;
            }
            img {
                margin-right: 15px;
            }

            span {
                margin-right: 20px;
                font-size: 13px;
                color: ${colors.primaryLight};
                text-transform: uppercase;
                font-weight: 600;
            }
            &.full {
                flex: 1;
                justify-content: flex-end;
            }
            svg {
                width: 25px;
                height: 25px;
                margin-right: 15px;
                path {
                    fill: #b4613d;
                }
            }
            @media (max-width: 425px) {
                padding-bottom: 20px;
            }
        }
    }
    .powered {
        padding: 50px 0px;
        border-top: 1px solid ${colors.primary};
        margin-top: 20px;
        span {
            font-size: 13px;
            color: ${colors.primaryLight};
            text-transform: uppercase;
            font-weight: 600;
        }
        @media (max-width: 425px) {
            padding: 0 30px;
        }
    }
`;
