import styled from 'styled-components';
import { colors, fonts } from './mixin';
import 'animate.css';

export const ContainerSistemasLP = styled.div`
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: hidden;
    #video {
        width: 100%;
        display: flex;
        background: ${colors.primaryLight};
        &:after {
            width: 100%;
            height: 50%;
            position: absolute;
            content: '';
            left: 0px;
            bottom: 0px;
            background: ${colors.primaryDark};
        }
        #container-video-cases {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.3);
            .overlay {
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 3;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(204, 97, 56, 0.8);
                backdrop-filter: blur(10px);
                transition: all 0.2s;
                &.play {
                    opacity: 0;
                    visibility: hidden;
                }
                button {
                    display: flex;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    svg {
                        width: 100px;
                        height: 100px;
                        color: ${colors.primaryLight};
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
    }
    background: #cc6138;
    .title-back {
        display: flex;
        align-items: center;
        h1 {
            height: auto !important;
        }
        > span {
            cursor: pointer;
        }
        svg {
            width: 30px;
            height: 40px;
            margin-top: -6px;
            margin-right: 15px;
            * {
                stroke: ${colors.primary};
                cursor: pointer;
            }
        }
    }
    .nav-fixed {
        width: 100vw;
        &.active {
            background: ${colors.primaryDark};
            width: 100vw;
        }
        ul {
            li {
                a {
                    color: ${colors.primaryLight};
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
    @media (min-width: 421px) {
        .mobile {
            display: none;
        }
    }
    .swipe {
        display: flex;
        justify-content: flex-end;
        width: 50%;
        margin-left: 25%;
        position: absolute;
        margin-top: 30px;
        .hand-swipe {
            width: 80px;
            height: 60px;
            animation: mover 2s ease-in-out infinite;
            opacity: 0;
        }
        @keyframes mover {
            0% {
                opacity: 1;
                transform: translateX(0px);
            }
            50% {
                opacity: 1;
                transform: translateX(-120px);
            }
            100% {
                opacity: 1;
                transform: translateX(0px);
            }
        }
    }
    .center-page {
        width: 1140px;
        margin: 0px auto;
        padding: 30px 0px;
        max-width: 95%;
        @media (max-width: 420px) {
            max-width: 100%;
        }
    }
    .title {
        font-size: 55px;
        font-family: ${fonts.chaney};
        text-transform: uppercase;
        font-weight: normal;
        color: ${colors.primaryLight};
        line-height: 50px;
    }
    @media (max-width: 420px) {
        .title {
            font-size: 35px;
            line-height: 35px;
        }
    }
    .lp-banner {
        width: 100%;
        background: url('/images/SystemBackground.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        position: relative;
        min-height: auto;
        .content-banner {
            padding-top: 10vh;
        }
        @media (max-width: 420px) {
            padding: 30px;
        }
        .text {
            max-width: 40%;
            @media (max-width: 420px) {
                max-width: 100%;
            }
            p {
                color: ${colors.primaryLight};
                font-size: 15px;
                font-weight: 500;
                margin-top: 30px;
                max-width: 80%;
                @media (max-width: 420px) {
                    max-width: 100%;
                }
            }
        }
        &:after {
            width: 120%;
            height: 200px;
            background: #cc6138;
            content: '';
            position: absolute;
            bottom: -140px;
            left: -10%;
            transform: rotate(-4deg);
        }
        .top {
            display: flex;
        }
        .content {
            position: relative;
            z-index: 3;
            padding-bottom: 50px;

            h1 {
                width: 400px;
                height: 80px;
            }
            .notebook {
                width: 755px;
                height: 640px;
                position: absolute;
                right: -190px;
                top: -80px;
                background-image: url('/images/Notebook1.png');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                z-index: -1;
                opacity: 0;
                transform: rotate(90deg);
                animation: aparecer 1s ease forwards;
                animation-delay: 0.5s;
                @media (max-width: 420px) {
                    display: none;
                }
            }
            @keyframes aparecer {
                0% {
                    opacity: 0;
                    transform: rotate(90deg);
                }
                100% {
                    opacity: 1;
                    transform: rotate(0deg);
                    right: 0px;
                    bottom: -190px;
                }
            }
        }
    }
    section {
        position: relative;
        &#nossos-cases {
            background: #cebaa8;
            padding: 30px 0px;
            .title {
                width: 200px;
            }
            @media (max-width: 420px) {
                padding: 30px;
            }
            &:before {
                width: 120%;
                height: 200px;
                background: #cc6138;
                content: '';
                position: absolute;
                top: -140px;
                left: -10%;
                transform: rotate(4deg);
            }
            .center-page {
                position: relative;
                z-index: 2;
                display: flex;
                flex-direction: column;
                .logo {
                    margin-top: -120px;
                    margin-bottom: 40px;
                    @media (max-width: 420px) {
                        margin-top: -95px;
                    }
                }
                .text {
                    width: calc(100% - 650px);
                    @media (max-width: 420px) {
                        width: 100%;
                    }
                    p {
                        font-size: 15px;
                        margin-top: 20px;
                        font-weight: 500;
                    }
                }
                .image-mockup {
                    min-width: 857px;
                    position: absolute;
                    right: -120px;
                    top: -40px;
                    @media (max-width: 420px) {
                        display: none;
                    }
                }
            }
            .title {
                color: #24201a;
            }
        }
        &#different {
            background: ${colors.primaryLight};
            z-index: 2;
            .center-page {
                padding-top: 0px !important;
                display: flex;
                justify-content: space-between;
                gap: 30px;
                align-items: center;
                @media (max-width: 420px) {
                    overflow: auto;
                    padding: 0px 30px 30px 30px;
                }
                .item {
                    display: flex;
                    background: #24201a;
                    border-radius: 10px;
                    height: 82px;
                    width: 262px;
                    align-items: center;
                    padding: 20px;
                    justify-content: space-between;
                    .icon {
                        display: flex;
                        align-items: center;
                        margin-right: 10px;
                    }
                    .text {
                        text-align: right;
                        .title-item {
                            font-family: 'CHANEY';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 20px;
                            text-align: right;
                            text-transform: uppercase;
                            color: ${colors.primaryLight};
                        }
                        .description-item {
                            font-family: 'Poppins';
                            font-style: italic;
                            font-weight: 500;
                            font-size: 15px;
                            line-height: 21px;
                            text-align: right;
                            text-transform: uppercase;
                            color: #cc6138;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
        &#cases {
            z-index: 1;
            margin-bottom: -50px;
        }
    }

    .item-methodology {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        min-width: 200px;
        .step {
            width: 85px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            height: 85px;
            border-radius: 100px;
            background: linear-gradient(180deg, #4f473c 0%, #24201a 100%);
            border: 2px solid #e78e6d;
            box-shadow: 0px 20px 15px -10px rgba(0, 0, 0, 0.24);
            .number {
                background: linear-gradient(180deg, #4f473c 0%, #24201a 100%);
                border: 2px solid #e78e6d;
                box-shadow: 0px 20px 15px -10px rgba(0, 0, 0, 0.24);
                width: 34px;
                height: 34px;
                border-radius: 100px;
                position: absolute;
                left: -5px;
                top: -5px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 33px;
                text-align: center;
                text-transform: uppercase;
                color: #cebaa8;
            }
            .icon {
                display: flex;
            }
        }
        .title-item {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            text-transform: uppercase;
            color: #ffffff;
            margin-top: 9px;
        }
        .description-item {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 17px;
            text-align: center;
            color: #ffffff;
            margin-top: 1px;
        }
        .items {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin-top: 5px;
            gap: 5px;
            span {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                line-height: 17px;
                padding: 5px 10px;
                text-align: center;
                color: #ffffff;
                background: #a85130;
                border-radius: 25px;
                text-transform: uppercase;
            }
        }
    }
    .effect {
        position: relative;
        z-index: 0;
    }
`;
