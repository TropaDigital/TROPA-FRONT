import styled from 'styled-components';
import { colors, fonts } from './mixin';

export const ContainerEnviado = styled.div`
    background: ${colors.primaryLight};
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 9999;
    #back {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        position: fixed;
        background: rgb(206 186 168 / 42%);
        backdrop-filter: blur(10px);
        z-index: 99999;
        button {
            height: 100px;
            display: flex;
            align-items: center;
            border: none;
            cursor: pointer;
            background: transparent;
            color: ${colors.primaryDark};
            text-transform: uppercase;
            svg {
                height: 30px;
                * {
                    stroke: ${colors.primaryDark};
                }
            }
        }
    }
    #enviado {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: calc(100vh - 392px);
        box-sizing: border-box;
        padding-top: 100px;
        box-sizing: border-box;
        position: relative;
        z-index: 999;
        @media (max-width: 600px) {
            box-sizing: border-box;
            padding: 100px 20px;
            .image {
                dis
            }
        }
        .center-page {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .text {
                flex: 1;
                max-width: 400px;
                color: ${colors.primaryDark};
                h1 {
                    font-family: ${fonts.chaney};
                    font-weight: normal;
                    font-size: 55px;
                }
                p {
                    margin-bottom: 50px;
                    font-weight: normal;
                }
            }
            .image {
                min-width: 400px;
                height: 400px;
            }
        }
    }
`;
