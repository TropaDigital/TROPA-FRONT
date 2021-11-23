import styled from "styled-components";
import { colors, fonts } from "../../assets/styles/mixin";

export const SocialContainer = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background:${colors.primaryLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    }
  }
`

export const SocialContainerCarousel = styled.div`
    width: calc(100% + 100px);
    margin-left: -50px;
    margin-bottom: 70px;
    @media(max-width: 1280px) {
      width: 100%;
      margin-left: 0px;
    }
    .arrow {
        background: transparent;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all .2s;
        width: 25px;
        &:hover {
          transform: scale(1.2);
        }
        svg {
          width: 25px;
          height: 59px;
        }
    }
    .rec-pagination {
        display: none;
    }
    .card {
        background: ${colors.primaryDark};
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        margin-bottom: 15px;
        transition: all .2s;
        &:after {
            width: 100%;
            height: 100%;
            content: '';
            background:${colors.primary};
            margin: 10px 0px 0px 10px;
            z-index: 0;
            position: absolute;
            transition: all .2s;
        }
        * {
            position: relative;
            z-index: 1;
        }
        .image {
            width: 100%;
            height: 255px;
            background-size: cover;
            background-position: center;
        }
        .text {
            height: 120px;
            padding: 20px 30px;
            box-sizing: border-box;
            width: 100%;
            display: flex;
            overflow: auto;
            flex-direction: column;
            align-items: flex-start;
            background-color: ${colors.primaryDark};
            transition: all .2s;
            > a {
                border-radius: 100px;
                border: 2px solid ${colors.primary};
                color: #FFF;
                text-transform: uppercase;
                text-decoration: none;
                font-size: 13px;
                padding: 10px 20px;
                font-family: ${fonts.poppins};
                font-weight: bold;
                margin-bottom: 10px;
            }
            p {
                color: ${colors.primaryLight};
                font-size: 13px;
                text-overflow: ellipsis;
                overflow: hidden;
                max-width: 100%;
                white-space: nowrap;
                transition: all .2s;
            }
           
        }
        &:hover {
            .text {
                margin-top: -255px;
                height: 375px;
                opacity: .8;
                p {
                    white-space: unset;
                }
            }
        }
    }
`

