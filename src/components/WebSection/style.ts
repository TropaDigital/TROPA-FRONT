import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const WebContainer = styled.div`
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    background:${colors.primaryGrey};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 0px;
    box-sizing: border-box;
    .title {
        justify-content: space-between;
        align-items: center;
        margin: 70px 0px;
        position: relative;
        display: flex;
        width: 449px;
        h2 {
        font-family: ${fonts.chaney};
        font-size: 62px;
        font-weight: normal;
        line-height: 55px;
        color: ${colors.primary};
        }
        svg {
            transform: rotate(15deg);
            margin-top: -50px;
            margin-left: -180px;
            position: absolute;
            left: 400px;
            top: 25px;
        }
    }
    @media (max-width: 425px) {
        padding: 25px;
        .title {
            width: 200px;
            h2 {
                font-size: 35px;
            }
            svg {
                left: 280px;
                width: 130px;
            }
        }
    }
`

export const WebDiv = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    
    padding-bottom: 30px;       
    position: relative;
    .center {
        .cards {
            width: 120% !important;
            margin-left: -10% !important;
        }
    }
    .web {
        width: 400px;
        height: 233px;
        background: url('/images/Notebook.png');
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
        box-sizing: border-box;
        padding: 15px 50px 25px 53px;
        position: relative;
        .card {
            width: 100%;
            height: 100%;
        }
        &:hover {
            .overlay  {
                opacity: 1;                
            }
        }                  
        .back-image { 
            height: 100%;
            width: 100%;
            z-index: 0;                        
            background-size: cover;
            background-position: center; 
            img {
                width: 100%;
                height: 100%;
                border-radius: 8px;                
            }        
        }     
        .loader {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
        }   
        .overlay {            
            position: absolute; 
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            background: ${colors.primary};                        
            transition: .5s ease;
            opacity:0;                 
            p {
                position: absolute;
                top: 90px;
                left: 30%;
                font-family: ${fonts.chaney};
                font-size: 20px;
                font-weight: normal;
                line-height: 55px;
                color: ${colors.primaryDark};
                text-decoration: underline;
                z-index: 2;
            }  
            .bottom {
                top: 120px;
            }              
            svg {
                width: 85px;
                position: absolute;
                top: 20px;
                left: 50%;
                path {
                    fill: ${colors.primaryLight};
                }
            }     
        }
    }

    @media (max-width: 425px) {
        .web {
            width: 350px;
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
   
`