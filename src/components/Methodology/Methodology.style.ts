import styled from 'styled-components';
import { colors, fonts } from '../../assets/styles/mixin';

export const ContainerMethodology = styled.div`
    padding: 70px 0px;
    .title {
        position: relative;
        width: 390px;
        h3 {
            font-size: 60px;
            color: ${colors.primaryDark};
            line-height: 80px;
            font-family: ${fonts.chaney};
            font-weight: normal;
            @media (max-width: 425px) {
                width: 70%;
            }
        }
        svg {
            position: absolute;
            right: 30px;
            top: 15px;
            transform: rotate(40deg);
            @media (max-width: 425px) {
                right: 60px;
            }
            path {
                fill: ${colors.primary};
            }
        }
    }
`;
