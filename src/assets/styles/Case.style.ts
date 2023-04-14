import styled from 'styled-components';
import { colors, fonts } from './mixin';

export const ContainerCase = styled.div`
    .nav-fixed {
        width: 100vw;
        &.active {
            background: ${colors.primaryDark};
            width: 100vw;
        }
        ul {
            li {
                a {
                    color: ${colors.primaryGrey};
                    &:hover {
                        color: ${colors.primary};
                    }
                }
            }
        }
        @media (max-width: 1100px) {
            width: 1100px;
        }
        @media (max-width: 425px) {
            width: 425px;
        }
    }
    .bannerSystemAnimation {
        background-color: ${colors.primaryDark};
    }
    .case-banner {
        background-color: ${colors.primaryDark};
        display: flex;
        &.auto {
            min-height: auto;
        }
        .head {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            height: 96px;
            @media (max-width: 420px) {
                flex-direction: column;
                height: auto;
            }
            h1 {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 40px;
                line-height: 120%;
                color: #ffffff;
                max-width: 50%;
                @media (max-width: 420px) {
                    max-width: 100%;
                }
            }
            .infos {
                display: flex;
                gap: 70px;
                @media (max-width: 420px) {
                    justify-content: space-between;
                    width: 100%;
                    gap: 0px;
                    margin-top: 20px;
                    flex-direction: column;
                    gap: 20px;
                }
                > div {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    @media (max-width: 420px) {
                    }
                    .label {
                        font-family: 'Poppins';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 120%;
                        color: #b3b3b3;
                        margin-bottom: 8px;
                    }
                    .value {
                        font-family: 'Poppins';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 120%;
                        color: #ffffff;
                    }
                }
            }
        }
        .video {
            width: 100%;
            height: 100%;
            flex: 1;
            margin-top: 50px;
            position: relative;
            display: flex;
            justify-content: center;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            @media (max-width: 420px) {
                width: calc(100% + 20px);
                margin-left: -10px;
                height: 350px;
                flex: unset;
            }
            &:before {
                content: '';
                background-color: #fff;
                position: absolute;
                left: -50%;
                top: 0;
                width: 200%;
                height: 100%;
                z-index: -1;
            }
        }
    }
    section {
        h2 {
            min-width: 300px;
            font-family: ${fonts.chaney};
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 120%;
            color: #ffffff;
            padding-bottom: 20px;
        }
        &#about {
            background-color: ${colors.primaryDark};
            padding-top: 100px;
            .text {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 32px;
            }
            > div {
                p {
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 32px;
                    color: #b3b3b3;
                }
            }
        }
        &#images {
            background-color: ${colors.primaryDark};
            padding-top: 50px;
            .resume {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom: 100px;
                .dialog {
                    width: 800px;
                    max-width: 100%;
                    p {
                        font-family: 'Poppins';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 36px;
                        line-height: 48px;
                        color: #ffffff;
                    }
                }
            }
            .image-border {
                border-radius: 10px !important;
            }
            .principal {
                margin-bottom: 100px;
            }
            @media (max-width: 420px) {
                h2 {
                    text-align: center;
                }
            }
            .list-mobile {
                display: flex;
                justify-content: space-between;
                @media (max-width: 420px) {
                    flex-direction: column;
                    align-items: center;
                }
                gap: 30px;
                margin-bottom: 100px;
                .phone {
                    width: 356px;
                    height: 698px;
                    position: relative;
                    padding: 12px 18px 12px 18px;
                    .overlay {
                        background-image: url('/images/case-phone.png');
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    .image {
                        width: 100%;
                        height: 100%;
                        border-radius: 43px;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: top center;
                        transition: all 0.5s;
                    }
                    &:hover {
                        .image {
                            background-position: bottom center;
                        }
                    }
                }
            }
            .extras {
                display: flex;
                flex-direction: column;
                gap: 50px;
            }
        }
    }
`;
