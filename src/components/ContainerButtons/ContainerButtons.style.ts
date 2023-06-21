import styled from 'styled-components';
import { colors } from '../../assets/styles/mixin';

export const ContainerElementButtons = styled.div`
    display: flex;
    width: 100%;
    &.vertical {
        flex-direction: column;
    }
    > a {
        display: flex;
        padding: 10px 15px;
        justify-content: center;
        align-items: center;
        border: none;
        color: ${colors.primaryDark};
        cursor: pointer;
        width: 100%;
        font-size: 16px;
        border-radius: 10px;
        background: #fff;
        transition: all 0.2s;
        padding-left: 50px;
        position: relative;
        height: 50px;
        box-sizing: border-box;
        border-radius: 100px;
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
        text-decoration: none;
        @media (max-width: 600px) {
            font-size: 20px;
        }
        &.wpp {
            background: #07bc0c;
            span {
                color: #fff;
            }
            i {
                background: #099b0d;
                svg {
                    path {
                        fill: white;
                    }
                }
            }
        }
        i {
            width: 40px;
            height: 40px;
            background-color: #fff;
            position: absolute;
            border-radius: 100px;
            left: 5px;
            top: 5px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
            svg {
                width: 15px;
                height: 15px;
                path {
                    fill: ${colors.primaryDark};
                }
            }
        }
        &:hover {
            i {
                transform: scale(1.5);
            }
        }
    }
    > span {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 10px 0px;
        &:after,
        &:before {
            content: '';
            width: 100%;
            height: 1px;
            background: black;
            opacity: 0.1;
        }
        &:before {
            margin-right: 10px;
        }
        &:after {
            margin-left: 10px;
        }
    }
`;
