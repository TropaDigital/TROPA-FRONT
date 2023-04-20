import styled from 'styled-components';

export const ContainerWPPButton = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999;
    padding: 30px;
    display: flex;
    align-items: center;
    .button {
        width: 60px;
        height: 60px;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #07bc0c;
        box-shadow: 0px 0px 0px 10px rgba(7, 168, 12, 0);
        animation: pulse 1s linear infinite;
        position: relative;
        z-index: 99999;
        svg {
            color: #fff;
        }
    }
    @keyframes pulse {
        0% {
            box-shadow: 0px 0px 0px 0px rgba(7, 168, 12, 0.4);
        }
        50% {
            box-shadow: 0px 0px 0px 20px rgba(7, 168, 12, 0.4);
        }
        100% {
            box-shadow: 0px 0px 0px 30px rgba(7, 168, 12, 0);
        }
    }
    span {
        background: #fff;
        font-weight: 500;
        padding: 8px 12px;
        border-radius: 5px;
        margin-right: 10px;
        &.hidden {
            opacity: 0;
        }
    }
`;
