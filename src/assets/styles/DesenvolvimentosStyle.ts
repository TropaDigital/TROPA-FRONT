import styled, { keyframes } from 'styled-components';
import { colors, fonts } from './mixin';
import 'animate.css';

export const ContainerDesenvolvimentos = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.primaryLight};

    @keyframes astronautEffect {
        0% {
            transform: rotate(-10deg);
        }
        100% {
            transform: rotate(10deg) scale(0.9);
        }
    }

    .effect-astronaut {
        animation: astronautEffect 10s linear infinite alternate;
    }
    .wave-first {
        margin-top: -20px;
    }
    .wave-banner {
        position: relative;
        z-index: 1;
    }
    .center-page {
        width: 1140px;
        margin: 0px auto;
        max-width: 95%;
    }

    .waves-list {
        width: 100%;
        display: flex;
        height: 17vw;
        overflow: hidden;
    }
    .waves {
        position: relative;
        width: 4000px;
        height: 35vw;
        margin-top: -13vw;
    }

    .wave-1 {
        animation: moveWave1 3s linear infinite alternate;
    }

    @keyframes moveWave1 {
        from {
            transform: translateX(-2000px);
        }
    }

    .wave-2 {
        animation: moveWave2 3.5s linear infinite alternate;
    }

    @keyframes moveWave2 {
        from {
            transform: translateX(-1800px);
        }
    }

    .wave-3 {
        transform: translateX(0px);
        animation: moveWave3 2.5s linear infinite alternate;
    }

    @keyframes moveWave3 {
        from {
            transform: translateX(-1600px);
        }
    }
    .title {
        font-size: 55px;
        font-family: ${fonts.chaney};
        text-transform: uppercase;
        font-weight: normal;
        color: ${colors.primaryDark};
        line-height: 50px;
        margin: 0px;
        margin-bottom: 50px;
        border-left: 10px solid ${colors.primary};
        padding-left: 15px;
        u {
            text-decoration: none;
            font-family: ${fonts.chaney};
            font-weight: normal;
            position: relative;
            z-index: 1;
            &:after {
                content: '';
                width: 100%;
                height: 10px;
                background: rgba(255, 255, 255, 0.4);
                position: absolute;
                bottom: 15px;
                z-index: -1;
                left: 0%;
            }
        }
    }
    @media (max-width: 600px) {
        .title {
            font-size: 35px;
            line-height: 35px;
        }
    }
    @media (min-width: 601px) {
        .mobile {
            display: none;
        }
    }
    .swipe {
        display: flex;
        justify-content: center;
        width: 90%;
        margin-left: 5%;
        position: absolute;
        margin-top: 0px;
        left: 0;
        padding-left: 120px;
        box-sizing: border-box;
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
    section {
        display: flex;
        flex-direction: column;
        margin: 0px;
        padding: 30px 0px;
        position: relative;
        box-sizing: border-box;
        h4 {
            font-size: 45px;
            font-family: ${fonts.chaney};
            text-transform: uppercase;
            font-weight: normal;
            color: ${colors.primaryDark};
            line-height: 50px;
            margin: 0px;
            margin-bottom: 50px;
            border-left: 10px solid ${colors.primary};
            padding-left: 15px;
            position: relative;
            u {
                text-decoration: none;
                font-family: ${fonts.chaney};
                font-weight: normal;
                position: relative;
                z-index: 1;
                &:after {
                    content: '';
                    width: 100%;
                    height: 10px;
                    background: rgba(204, 97, 56, 0.4);
                    position: absolute;
                    bottom: 15px;
                    z-index: -1;
                    left: 0%;
                }
            }
        }
        .row-item-line {
            display: flex;
            justify-content: space-between;
            .text-default {
                display: flex;
                flex-direction: column;
                flex: 1;
                max-width: 45%;
                p {
                    font-size: 15px;
                    font-weight: 500;
                    margin-bottom: 15px;
                    span {
                        background: rgba(204, 97, 56, 0.4);
                    }
                }
            }
            .image {
                display: flex;
                flex-direction: column;
                img {
                    max-width: 100%;
                }
                &.astronaut {
                    margin-top: -100px;
                    width: 500px;
                    height: 500px;
                    margin-right: 100px;
                    margin-bottom: -50px;
                }
                &.email {
                    margin-top: -50px;
                    min-width: 500px;
                    height: 500px !important;
                    max-height: unset !important;
                    right: -120px;
                }
            }
        }
        .list-images-ft {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 60px;
            gap: 10px;
            img {
                height: 30px;
            }
        }
        &.light {
            background: ${colors.primaryGrey};
        }
        &.reverse {
            background: ${colors.primaryGrey};
            p {
                span {
                    background: rgba(255, 255, 255, 0.4) !important;
                }
            }
            .row-item-line {
                flex-direction: row-reverse;
            }
        }
        @media (max-width: 600px) {
            overflow: hidden;
            max-width: 100vw;
            h4 {
                font-size: 35px;
                line-height: 40px;
            }
            .list-images-ft {
                margin-bottom: 40px;
            }
            .text-default {
                width: 100%;
                max-width: 100% !important;
                position: relative;
                z-index: 1;
                p {
                    padding-right: 190px !important;
                    box-sizing: border-box;
                    font-size: 13px !important;
                    line-height: 22px !important;
                    font-family: ${fonts.poppins};
                }
            }
            .image {
                z-index: 0;
                &.astronaut {
                    transform: rotate(0deg);
                    position: absolute;
                    width: 400px !important;
                    height: 400px !important;
                    right: -270px;
                    bottom: calc(50% - 150px);
                    &:after {
                        content: '';
                        background-color: ${colors.primary};
                        width: 350px;
                        height: 350px;
                        border-radius: 100%;
                        z-index: -1;
                        position: absolute;
                        left: 25px;
                        top: 25px;
                    }
                }
                &.email {
                    position: absolute;
                    width: 300px !important;
                    height: 300px !important;
                    min-width: unset !important;
                    right: -12vw !important;
                    bottom: -190px !important;
                    &:after {
                        content: '';
                        background-color: ${colors.primaryDark};
                        width: 300px;
                        height: 300px;
                        transform: rotate(123deg);
                        z-index: -1;
                        position: absolute;
                        left: 50px;
                        top: 50px;
                    }
                }
            }
        }
    }

    #head-dev {
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 9999;
        margin-bottom: -120px;
        background-image: url('/images/noise.png');
        overflow: hidden;
        .center-page {
            align-items: center;
            display: flex;
            padding: 10vh 0px;
            #logo {
                .tropa {
                    fill: ${colors.primaryDark};
                }
            }
            .text {
                display: flex;
                flex-direction: column;
                gap: 20px;
                margin-right: 100px;
                align-items: flex-start;
                h1 {
                    line-height: 35px;
                    font-weight: 700;
                }
                p {
                    font-weight: 500;
                    font-size: 14px;
                }
                > span {
                    background: rgba(204, 97, 56, 0.4);
                    font-size: 25px;
                    font-weight: 600;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                .container-qr {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    align-items: center;
                    gap: 10px;

                    span {
                        font-size: 13px;
                        text-align: center;
                        font-weight: 500;
                    }
                    img {
                        width: 200px;
                        background: #fff;
                        border-radius: 5px;
                        border: 4px solid #fff;
                    }
                }
            }
            #video-institucional {
                height: 360px;
                min-width: 695px;
                display: flex;
                flex-direction: column;
                border-radius: 10px;
                .browser-case {
                    width: 100%;
                    height: 100%;
                }
            }
            #phone-app {
                min-width: 700px;
                height: 580px;
                display: flex;
                justify-content: flex-end;
                img {
                    margin-right: -90px;
                    width: 130%;
                    height: 130%;
                    @media (max-width: 600px) {
                        margin-top: -100px;
                    }
                }
            }
            #cases-roles {
                height: 580px;
                min-width: 700px;
                display: flex;
                flex-direction: column;
                border-radius: 10px;
                background-image: url('/images/computer-mask.png');
                background-size: 100% auto;
                margin-bottom: -100px;
                z-index:;
                .browser-case {
                    width: 603px;
                    height: 342px;
                    margin: 12px 8px 8px 84px;
                    background-size: 102% auto;
                    background-position: center top;
                    border-radius: 5px;
                    background-color: #fff;
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-start;
                    box-sizing: border-box;
                    position: relative;
                    p {
                        display: flex;
                        background: ${colors.primary};
                        padding: 20px;
                        backdrop-filter: blur(3px);
                        font-size: 20px;
                        font-family: ${fonts.chaney};
                        text-transform: uppercase;
                        font-weight: normal;
                        text-align: left;
                        color: ${colors.primaryLight};
                        max-width: 80%;
                        animation: fadeInLeft 0.5s;
                        border-radius: 10px;
                    }
                }
            }
            @media (max-width: 600px) {
                box-sizing: border-box;
                padding: 20px;
                padding-top: 50px;
                flex-direction: column;
                .text {
                    > span {
                        font-size: 39px;
                    }
                }
                #video-institucional {
                    width: 100%;
                    min-width: 100%;
                    max-width: 100%;
                    margin-bottom: 150px !important;
                    > div {
                        width: 100%;
                        min-width: 100%;
                        max-width: 100%;
                        background-position: center;
                    }
                }
                #cases-roles {
                    width: 100%;
                    min-width: unset;
                    max-width: 100%;
                    margin-left: -54px;
                    margin-bottom: 50px;
                    margin-top: 50px;
                    height: 440px;
                    .browser-case {
                        width: 445px;
                        height: 254px;
                        margin: 12px 8px 8px 69px;
                    }
                }
                .text {
                    width: 100%;
                    margin: 0px;
                    p {
                        font-size: 20px !important;
                    }
                }
                #video-institucional {
                    margin-top: 50px;
                    margin-bottom: -100px;
                }
            }
        }
    }
    #cases {
        width: 100%;
        position: relative;
        overflow: hidden;
        padding: 0px;
        margin-bottom: -25px;
    }
    .wave-case {
        display: flex;
        margin-top: -50px;
        position: relative;
    }
    #oque-fazemos {
        display: flex;
        background: ${colors.primaryGrey};
        .center-page {
            flex-direction: column;
            display: flex;
        }
        .text {
            p {
                font-size: 15px;
                font-weight: 500;
                padding-right: 50px;
            }
        }
        @media (max-width: 600px) {
            padding: 20px;
            box-sizing: border-box;
            padding-bottom: 50px;
            .text {
                width: 100%;
                p {
                    padding-right: 0px;
                    font-size: 20px;
                }
            }
        }
        .produtos {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            ul {
                display: flex;
                list-style: none;
                gap: 30px;
                flex-wrap: wrap;
                align-items: flex-end;
                justify-content: center;
                margin-top: 20px;
                li {
                    box-sizing: border-box;
                    width: 100%;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    i {
                        margin-right: 20px;
                    }
                    h3 {
                        white-space: nowrap;
                        font-weight: 600;
                        font-size: 20px;
                        color: ${colors.primary};
                    }
                    p {
                        margin-top: 0px;
                        font-size: 16px;
                        font-weight: 500;
                    }
                    a {
                        font-size: 13px;
                        display: flex;
                        margin-top: 10px;
                        color: rgba(0, 0, 0, 0.5);
                        font-weight: 500;
                        &:before {
                            content: '';
                            display: flex;
                            background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cpath fill="currentColor" d="M12 1.998c5.524 0 10.002 4.478 10.002 10.002c0 5.523-4.478 10-10.002 10c-5.524.001-10-4.477-10-10C1.999 6.476 6.476 1.998 12 1.998Zm0 1.5a8.502 8.502 0 1 0 0 17.003a8.502 8.502 0 0 0 0-17.003Zm-.004 7a.75.75 0 0 1 .744.648l.007.102l.004 5.502a.75.75 0 0 1-1.494.102l-.006-.101l-.004-5.502a.75.75 0 0 1 .75-.75Zm.005-3.497a.999.999 0 1 1 0 1.997a.999.999 0 0 1 0-1.997Z"%2F%3E%3C%2Fsvg%3E');
                            min-width: 20px;
                            width: 20px;
                            min-height: 20px;
                            height: 20px;
                            background-size: cover;
                            background-repeat: no-repeat;
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
    }
    .foot-section {
        display: flex;
        gap: 50px;
        @media (max-width: 600px) {
            flex-direction: column;
        }
        img {
            max-width: 100%;
            margin-top: 30px;
        }
    }
    .text-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        margin: 30px auto;
        border-radius: 20px;
        padding: 30px;
        margin-bottom: -200px;
        position: relative;
        z-index: 999999;
        margin-top: 30px;
        backdrop-filter: blur(5px);
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 10px 10px 10px rgba(0, 0, 0, 0.05);
        .buttons-contact > span {
            color: ${colors.primaryDark};
        }
        .buttons-contact {
            margin-top: 20px;
        }
        p {
            font-size: 20px;
            text-align: center;
            font-weight: 600;
            color: ${colors.primaryDark};
            margin: 0px;
            position: relative;
            &.line {
                &:after {
                    content: '';
                    width: 100%;
                    height: 5px;
                    background: ${colors.primaryGrey};
                    position: absolute;
                    bottom: 5px;
                    z-index: -1;
                    left: 0%;
                }
            }
        }
        @media (max-width: 600px) {
            margin-bottom: 0px;
            margin-top: 0px;
            width: 80%;
            p {
                font-size: 30px;
            }
        }
    }
    #clientes {
        background: ${colors.primaryGrey};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 50px;
        .center-page {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 50px;
            img {
                max-height: 50px;
                filter: grayscale(100%);
                &:hover {
                    filter: grayscale(0%);
                }
            }
        }
        @media (max-width: 600px) {
            .list {
                justify-content: space-around;
                img {
                    max-height: 36px;
                }
            }
        }
    }
    #metodologia {
        display: flex;
        align-items: center;
        z-index: 2;
        background: ${colors.primary};
        .title {
            max-width: 100%;
            border-color: ${colors.primaryLight};
            svg {
                position: absolute;
            }
            @media (max-width: 600px) {
                padding: 0px 30px;
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
                background: linear-gradient(180deg, #4f473c 0%, #26001a 100%);
                border: 2px solid #e78e6d;
                box-shadow: 0px 20px 15px -10px rgba(0, 0, 0, 0.24);
                .number {
                    background: linear-gradient(
                        180deg,
                        #4f473c 0%,
                        #26001a 100%
                    );
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
        .container-line {
            position: relative;
            margin-top: 30px;
            overflow: auto;
            overflow-y: hidden;
            height: 360px;
            margin-bottom: 40px;
            .line {
                svg {
                    width: 1140px;
                }
            }
            .steps {
                display: flex;
                position: absolute;
                top: 0px;
                justify-content: space-between;
                width: 98%;
                margin: 0px 1%;
                max-width: 100%;
                gap: 28px;
            }
        }
    }
`;
