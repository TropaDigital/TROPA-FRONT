import styled from 'styled-components';
import { colors, fonts } from '../../assets/styles/mixin';

export const ContactContainer = styled.div`
    background-color: ${colors.primaryDark};
    background-image: url('/images/bannerContactR.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 100px 0px;
    box-sizing: border-box;
    margin: 0px;
    @keyframes animationBannerContact {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 0;
        }
    }
    &:after {
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        left: 0px;
        top: 0px;
        background: ${colors.primaryDark};
        background-size: cover;
        background-position: top center;
        z-index: 0;
        animation: animationBannerContact linear 5s infinite;
        animation-delay: 1.3s;
    }
    h3 {
        font-size: 55px;
        font-family: 'Chaney', sans-serif;
        text-transform: uppercase;
        font-weight: normal;
        color: ${colors.primaryLight};
        line-height: 50px;
        margin: 0px;
        margin-bottom: 50px;
        border-left: 10px solid #cc6138;
        padding-left: 15px;
    }
    .center {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        position: relative;
        z-index: 1;
        .form-contact {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            width: 50%;
            > p {
                margin-bottom: 25px;
                color: ${colors.primaryLight};
            }
            form {
                display: flex;
                flex-direction: column;
                gap: 20px;
                input,
                textarea {
                    padding: 10px;
                    min-height: 45px;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.05);
                    border: 2px solid ${colors.primary};
                    color: #fff;
                    resize: none;
                    font-weight: 400;
                    &::placeholder {
                        color: #fff;
                    }
                }
                textarea {
                    height: 140px;
                }
                button {
                    border: none;
                    background: ${colors.primary};
                    color: #fff;
                    padding: 15px;
                    cursor: pointer;
                    &:hover {
                        opacity: 0.9;
                    }
                }
            }
        }
        .other {
            display: flex;
            flex: 1;
            flex-direction: column;
            height: 190px;
            box-sizing: border-box;
            padding: 0px 30px;
            img {
                width: 200px;
                margin-bottom: 15px;
            }
            span {
                display: flex;
                align-items: center;
                width: 100%;
                margin: 10px 0px;
                color: ${colors.primaryLight};
                &:after,
                &:before {
                    content: '';
                    width: 100%;
                    height: 1px;
                    border-bottom: 2px dashed ${colors.primaryLight};
                    opacity: 0.5;
                }
                &:before {
                    margin-right: 10px;
                }
                &:after {
                    margin-left: 10px;
                }
            }
        }
        .qrcode {
            display: flex;
            .container-qrcode {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border: 5px solid ${colors.primaryLight};
                background: #fff;
                border-radius: 10px;
                box-shadow: 10px 0px 10px 10px rgba(0, 0, 0, 0.3);
                i {
                    width: 80px;
                    height: 80px;
                    border-radius: 100px;
                    background: #fff;
                    margin-top: -40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.1);
                    &:after {
                        width: 100%;
                        height: 100%;
                        border-radius: 100px;
                        position: absolute;
                        content: '';
                        z-index: -1;
                        border: 5px solid ${colors.primaryLight};
                    }
                    svg {
                        width: 60%;
                        height: 60%;
                        path {
                            fill: #07bc0c;
                        }
                    }
                }
                img {
                    border-radius: 10px;
                }
                p {
                    margin: 20px 0px;
                    font-weight: 500;
                    font-size: 14px;
                    max-width: 300px;
                    box-sizing: border-box;
                    padding: 0px 20px;
                    text-align: center;
                }
            }
        }
        @media (max-width: 600px) {
            .form-contact {
                width: 100%;
                box-sizing: border-box;
                padding: 0px 30px;
                input, textarea, button {
                    font-size: 20px;
                }
            }
            .qrcode {
                display: none;
            }
            .other {
                display: none;
            }
        }
    }
`;
