import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
`

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
                transition: all .2s;
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
    @media(max-width:1140px) {
        padding: 0px 30px;
    }
    @media (max-width: 425px) {
      width: 100%;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 0px 10px;
    }   
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    box-sizing:border-box;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    @media (max-width: 425px) {
        background-position: 59%;
    }
    .center-banner {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        flex: 1;
    }
    nav {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 99;
        height: 67px;
        @media (max-width: 425px) {
            width: 100%;
            flex-direction: column;
        }  
        .logo {
            display: flex;
            align-items: center;
            svg {
                transition: all .2s;
            }
        }
        .center {
            display: flex;
            justify-content: space-between;
            @media (max-width: 425px) {
                gap: 20px;
            }  
        }
        .nav-fixed {
            position: fixed;
            width: 100vw;
            padding: 70px 0px;
            top: 0px;
            transition: all .5s;
            @media (max-width: 425px) {
                width: 100vw;
            }  
            &.active {
                position: fixed;
                top: 0px;
                padding: 10px 0px;
                height: 50px;
                .logo {
                    svg {
                        width: 126px;
                        height: 30px;
                    }
                }
                .search {
                    width: 30px;
                    height: 30px;
                    svg {
                        width: 15px;
                        height: 15px;
                    }
                }
                .hidden-menu {
                    top: 40px;
                }
            }
        }
        .hidden-menu {
            position: absolute;
            background-color: ${colors.primaryDark};
            border: 2px solid ${colors.primary};
            padding: 10px;
            width: 150px;
            top: 50px;
            left: 10px;
            color: ${colors.primaryLight};
            text-align: center;
            border-radius: 8px;
            line-height: 40px;
            .app {
                border-radius: 8px 8px 0 0;
                border: 2px solid ${colors.primary};
                margin-bottom: 10px;
            }
            .system {
                border: 2px solid ${colors.primary};
                margin-bottom: 10px;
            }
            .web {
                border-radius: 0 0 8px 8px;
                border: 2px solid ${colors.primary};
            }
            .app,
            .system,
            .web {
                text-transform: uppercase;
                font-size: 16px;
                font-family: ${fonts.bebasNeue};
                letter-spacing: 2px;
                font-weight: 400;
                cursor: pointer;
                &:hover {
                    background-color: ${colors.primary};
                    color: ${colors.primaryWhite};
                }
            }
            ::after{
                content: "";
                position: absolute;
                bottom: 100%;
                left:0;
                right: 0;
                margin: auto;
                height: 30px;
                background: none;
            }
        }
        ul {
            display: flex;
            list-style:none;
            padding: 0px;
            margin: 0px;
            align-items: center;
            position: relative;
            li {
                margin-left: 35px;
                @media (max-width: 425px) {
                    margin-left: 15px;
                }  
                a {
                    text-decoration:none;
                    text-transform: uppercase;
                    font-size: 16px;
                    font-family: ${fonts.bebasNeue};
                    letter-spacing: 2px;
                    font-weight: 400;
                    cursor: pointer;
                    &:hover {
                        color: #FFF;
                    }
                }                
            }
            @media (max-width: 425px) {
                display: none;
            }
        }
        .hidden {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            list-style:none;
            padding: 10px;
            margin: 0px;
            border-radius: 16px;
            align-items: center;
            background-color: ${colors.primaryDark};
            border: 2px solid ${colors.primary};
            width: 100%;
            height: 275px;
            position: relative;
            top: -65px;
            text-align: center;
            li {
                width: 98%;
                margin-left: 35px;
                @media (max-width: 425px) {
                    margin-left: 0;
                    padding: 5px;
                    border-radius: 8px;
                    border: 2px solid #cc6138;
                    margin: 5px 0;
                }  
                a {
                    text-decoration:none;
                    text-transform: uppercase;
                    font-size: 20px;
                    font-family: ${fonts.bebasNeue};
                    letter-spacing: 2px;
                    font-weight: 400;
                    color: ${colors.primaryLight} !important;
                    cursor: pointer;
                    &:hover {
                        color: #FFF;
                    }
                }
            }
        }
        .hamburguer {
            color: ${colors.primaryLight};
            display: none;
            @media (max-width: 425px) {
                display: flex;
                position: relative;
                left: 90%;
                top: -53px;
            }  
        }
    }
    .content-banner {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
        position: relative;
        z-index: 1;
        padding-top: 15vh;
    }
`

export const FooterContainer = styled.div`
    width: 100%;
    display: f;
    background: ${colors.primaryDark};
    .infos {
        height: 200px;
        display: flex;
        width: 100%;
        justify-content: space-around;
        border-bottom: 1px solid ${colors.primary};
        @media (max-width: 425px) {
            height: 300px;
            padding: 30px;
            flex-direction: column-reverse;
            align-items: flex-start;
        }   
        .item {
            display: flex;
            align-items: center;
            a {
                display:flex;
            }
            img {
                margin-right: 15px;
            }
            span {
                margin-right: 100px;
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
                width: 62px;
                height: 58px;
            }
            @media (max-width: 425px) {
                padding-bottom: 20px;
            }   
        }
    }
    .powered {
        margin: 70px 0px;
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
`