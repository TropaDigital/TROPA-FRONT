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
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    position: relative;
    z-index: 9999;
    .relative {
        background: rgba(206, 186, 168, 0.8);
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        position: relative;
        z-index: 999;
        backdrop-filter: blur(10px);
        transition: all 0.5s;
        &.fixed {
            position: fixed;
            animation: fadeInDown 0.5s;
            height: 50px;
        }
        .center {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0, 0, 0, 0.056);
            height: 100%;
            align-items: center;
            .logo {
                width: 180px;
                height: 50px;
                position: relative;
                .link-home {
                    position: absolute;
                    width: 180px;
                    height: 50px;
                    left: 0;
                    top: 0;
                    cursor: pointer;
                    color: transparent;
                }
                svg {
                    max-width: 100%;
                    z-index: -1;
                    .tropa {
                        fill: ${colors.primaryDark};
                    }
                }
            }

            ul {
                list-style: none;
                padding: 0px;
                margin: 0px;
            }
            .menu-hamburger {
                display: none;
                font-size: 30px;
                background: none;
                border: none;
                height: 100%;
                align-items: center;
                svg {
                    width: 50px;
                    height: 100%;
                }
            }
            @media (max-width: 600px) {
                .menu-hamburger {
                    display: flex;
                }
            }
            .menu {
                display: flex;
                gap: 15px;
                align-items: center;
                &.visible {
                    display: flex;
                }
                > li {
                    box-sizing: border-box;
                    display: flex;
                    position: relative;
                    height: 35px;
                    transition: all 0.2s;
                    > a {
                        font-size: 14px;
                        text-decoration: none;
                        font-weight: 600;
                        font-family: ${fonts.poppins};
                        color: ${colors.primaryDark};
                        display: flex;
                        position: relative;
                        z-index: 2;
                        padding: 7px 18px;
                        border-radius: 100px;
                        cursor: pointer;
                        &:after {
                            width: calc(100% - 36px);
                            height: 3px;
                            content: '';
                            background: ${colors.primary};
                            position: absolute;
                            bottom: 10px;
                            left: 18px;
                            z-index: -1;
                            transition: all 0.2s;
                            opacity: 0.5;
                        }
                    }
                    &:hover,
                    &.active {
                        > a {
                            background: rgba(255, 255, 255, 0.5);
                            &:after {
                                width: 0px;
                                left: 50%;
                            }
                        }
                    }
                    &:hover {
                        > a {
                            background: rgba(255, 255, 255, 0.5);
                            &:after {
                                width: 0px;
                                left: 50%;
                            }
                        }
                        ul {
                            opacity: 1;
                            visibility: visible;
                            transform: scale(1.1);
                        }
                    }
                    ul {
                        transition: all 0.2s;
                        position: absolute;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        background: ${colors.primaryGrey};
                        left: -5px;
                        top: -5px;
                        min-width: calc(100% + 10px);
                        border-radius: 20px;
                        padding-top: 0px;
                        transform: scale(0.8);
                        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
                        padding-bottom: 10px;
                        gap: 0px;
                        z-index: 0;
                        opacity: 0;
                        visibility: hidden;
                        padding-top: 45px;
                        > li {
                            padding: 0px 10px;
                            a {
                                color: ${colors.primaryDark};
                                font-size: 12px;
                                text-decoration: none;
                                font-weight: 500;
                                font-family: ${fonts.poppins};
                                color: ${colors.primaryDark};
                                &:hover {
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                }
                @media (max-width: 600px) {
                    display: none;
                    position: fixed;
                    flex-direction: column;
                    width: 100vw;
                    background: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(5px) !important;
                    left: 0;
                    top: 100px;
                    z-index: 99999999;
                    padding: 30px;
                    box-sizing: border-box;
                    gap: 10px;
                    align-items: flex-end;
                    li {
                        align-items: flex-end;
                        flex-direction: column;
                        height: unset;
                        a {
                            font-size: 30px !important;
                            color: ${colors.primaryLight};
                            text-align: right;
                            justify-content: flex-end;
                            position: relative;
                            &:after {
                                height: 8px;
                                bottom: 13px;
                            }
                        }
                        ul {
                            display: flex;
                            position: relative;
                            opacity: 1;
                            visibility: visible;
                            z-index: 1;
                            padding: 20px 0px;
                            justify-content: flex-end;
                            align-items: flex-end;
                            background: transparent;
                            transform: scale(1);
                            border-radius: 0px;
                            margin-right: 15px;
                            li {
                                a {
                                    color: ${colors.primaryLight};
                                    font-size: 20px !important;
                                }
                            }
                        }
                        &:hover {
                            a {
                                background: none;
                                &:after {
                                    width: calc(100% - 36px);
                                    left: 18px;
                                }
                            }
                            ul {
                                background: rgba(255, 255, 255, 0.1);
                                transform: scale(1);
                            }
                        }
                    }
                }
            }
            .contacts {
                display: flex;
                gap: 8px;
                flex-direction: column;
                li {
                    display: flex;
                    flex-direction: column;
                    > div {
                        display: flex;
                        flex-direction: row;
                        background: transparent;
                        border: none;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        i {
                            width: 30px;
                            height: 30px;
                            background: #fff;
                            border-radius: 100px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-right: 10px;
                            position: relative;
                        }
                        &.whatsapp {
                            i {
                                svg {
                                }
                            }
                        }
                        span {
                            white-space: nowrap;
                            cursor: text;
                            font-size: 13px;
                        }
                        svg {
                            width: 50%;
                            height: 50%;
                        }
                    }
                }
            }
        }
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
