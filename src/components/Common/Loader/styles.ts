import styled from "@emotion/styled";
import { colors } from "@/theme";

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid ${colors.primary};
    border-color: ${colors.primary} transparent ${colors.primary} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
