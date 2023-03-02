import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./mixin";

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    //bebas neue
    @font-face {
        font-family: "Bebas Neue";
        src: url("/fonts/BEBAS NEUE/BebasNeue-Regular.ttf");
        font-style: normal;
        font-weight: 500;
        font-display: swap;
    }
    //chaney
    @font-face {
        font-family: "Chaney";
        src: url("/fonts/Chaney/CHANEY-UltraExtended.ttf");
        font-style: normal;
        font-weight: 600;
        font-display: swap;
    }
    @font-face {
        font-family: "Chaney";
        src: url("/fonts/Chaney/CHANEY-Extended.ttf");
        font-style: normal;
        font-weight: 500;
        font-display: swap;
    }
    @font-face {
        font-family: "Chaney";
        src: url("/fonts/Chaney/CHANEY-Regular.ttf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: "Chaney";
        src: url("/fonts/Chaney/CHANEY-Wide.ttf");
        font-style: normal;
        font-weight: 300;
        font-display: swap;
    }
    //Poppins
    @font-face {
        font-family: "Poppins";
        src: url("/fonts/POPPINS/Extra-Light.ttf");
        font-style: normal;
        font-weight: 300;
        font-display: swap;
    }
    @font-face {
        font-family: "Poppins";
        src: url("/fonts/POPPINS/Poppins-Light.ttf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: "Poppins";
        src: url("/fonts/POPPINS/Poppins-Regular.ttf");
        font-style: normal;
        font-weight: 500;
        font-display: swap;
    }
    @font-face {
        font-family: "Poppins";
        src: url("/fonts/POPPINS/Poppins-SemiBold.ttf");
        font-style: normal;
        font-weight: 600;
        font-display: swap;
    }
    @font-face {
        font-family: "Poppins";
        src: url("/fonts/POPPINS/Poppins-Bold.ttf");
        font-style: normal;
        font-weight: 700;
        font-display: swap;
    }
    @font-face {
        font-family: "Poppins";
        src: url("/fonts/POPPINS/Poppins-ExtraBold.ttf");
        font-style: normal;
        font-weight: 800;
        font-display: swap;
    }
    // Inter
    @font-face {
        font-family: "Inter";
        src: url("/fonts/INTER/Inter-Thin.ttf");
        font-style: normal;
        font-weight: 300;
        font-display: swap;
    }
    @font-face {
        font-family: "Inter";
        src: url("/fonts/INTER/Inter-Light.ttf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: "Inter";
        src: url("/fonts/INTER/Inter-Regular.ttf");
        font-style: normal;
        font-weight: 500;
        font-display: swap;
    }
    @font-face {
        font-family: "Inter";
        src: url("/fonts/INTER/Inter-SemiBold.ttf");
        font-style: normal;
        font-weight: 600;
        font-display: swap;
    }
    @font-face {
        font-family: "Inter";
        src: url("/fonts/INTER/Inter-Bold.ttf");
        font-style: normal;
        font-weight: 700;
        font-display: swap;
    }
    @font-face {
        font-family: "Inter";
        src: url("/fonts/INTER/Inter-ExtraBold.ttf");
        font-style: normal;
        font-weight: 800;
        font-display: swap;
    }
    // Manrope
    @font-face {
        font-family: "Manrope";
        src: url("/fonts/MANROPE/Manrope-ExtraLight.ttf");
        font-style: normal;
        font-weight: 300;
        font-display: swap;
    }
    @font-face {
        font-family: "Manrope";
        src: url("/fonts/MANROPE/Manrope-Light.ttf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: "Manrope";
        src: url("/fonts/MANROPE/Manrope-Regular.ttf");
        font-style: normal;
        font-weight: 500;
        font-display: swap;
    }
    @font-face {
        font-family: "Manrope";
        src: url("/fonts/MANROPE/Manrope-SemiBold.ttf");
        font-style: normal;
        font-weight: 600;
        font-display: swap;
    }
    @font-face {
        font-family: "Manrope";
        src: url("/fonts/MANROPE/Manrope-Bold.ttf");
        font-style: normal;
        font-weight: 700;
        font-display: swap;
    }
    @font-face {
        font-family: "Manrope";
        src: url("/fonts/MANROPE/Manrope-ExtraBold.ttf");
        font-style: normal;
        font-weight: 800;
        font-display: swap;
    }
    //DM Sans
    @font-face {
        font-family: "DM Sans";
        src: url("/fonts/DMSANS/DMSans-Regular.ttf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: "DM Sans";
        src: url("/fonts/DMSANS/DMSans-Medium.ttf");
        font-style: normal;
        font-weight: 600;
        font-display: swap;
    }
    @font-face {
        font-family: "DM Sans";
        src: url("/fonts/DMSANS/DMSans-Bold.ttf");
        font-style: normal;
        font-weight: 700;
        font-display: swap;
    }

    //global styles
    * {
        font-family: ${fonts.poppins};
        font-weight: 600;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html {
        min-height: 100%;
    }
    body {
        margin: 0px;
        padding: 0px;
        height: 100%;
    }

    @keyframes strokeEffectPrimary {
        50% {
            stroke-dashoffset: 0;
            fill: ${colors.primary};
        }
    }
    @keyframes strokeEffectPrimaryLight {
        50% {
            stroke-dashoffset: 0;
            fill: ${colors.primaryLight};
        }
    }
    @keyframes strokeEffectPrimaryDark {
        50% {
            stroke-dashoffset: 0;
            fill: ${colors.primaryDark};
        }
    }
    @keyframes strokeEffectPrimaryGrey {
        50% {
            stroke-dashoffset: 0;
            fill: ${colors.primaryGrey};
        }
    }
    .effect-stroke{
        fill: transparent;
        stroke-width: 1px;
        stroke-dasharray: 1353px;
        stroke-dashoffset: 1353px;
        animation-fill-mode: forwards;
        &.primary {
            stroke: ${colors.primary};
            animation: strokeEffectPrimary 2s linear infinite;
        }
        &.light {
            stroke: ${colors.primaryLight};
            animation: strokeEffectPrimaryLight 2s linear infinite;
        }
        &.dark {
            stroke: ${colors.primaryDark};
            animation: strokeEffectPrimaryDark 2s linear infinite;
        }
        &.grey {
            stroke: ${colors.primaryGrey};
            animation: strokeEffectPrimaryGrey 2s linear infinite;
        }
    }
`;
