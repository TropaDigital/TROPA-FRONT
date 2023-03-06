import styled from "styled-components";
import { colors, fonts } from "../../../../assets/styles/mixin";

type Props = {
  wasRead?: boolean;
  isNotificationPanelOpen?: boolean;
};

export const Container = styled.div`
  position: relative;
`;

export const NotificationContainer = styled.div<Props>`
  position: absolute;
  max-height: 620px;
  width: 400px;
  right: 0;
  background-color: ${colors.primaryWhite};
  border-radius: 12px;
  box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.3);
  color: ${colors.primaryDark};
  overflow: ${({ isNotificationPanelOpen }) =>
    isNotificationPanelOpen ? "auto" : "hidden"};
  height: ${({ isNotificationPanelOpen }) =>
    isNotificationPanelOpen ? "620px" : "0px"};
  transition: height 0.3s ease-in-out;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background: #555;
  }

  .notificationHeader {
    padding: 30px 26px 15px;

    p {
      font-size: 20px;
      font-family: ${fonts.dmsans};
      font-weight: 700;
    }
  }
`;

export const NotificationWrapper = styled.div<Props>`
  padding: 20px 26px;
  border-bottom: 1px solid ${colors.primaryGrey};
  cursor: pointer;

  h4,
  p {
    font-size: 16px;
    font-family: ${fonts.dmsans};
    font-weight: 500;
    color: ${({ wasRead }) => (wasRead ? colors.grey : colors.neutralDark)};
  }

  p {
    text-align: justify;
  }

  h4 {
    margin-bottom: 6px;
    font-size: 18px;
    font-weight: ${({ wasRead }) => (wasRead ? "600" : "700")};
  }

  &:last-child {
    border-bottom: none;
  }
`;