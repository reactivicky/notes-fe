import styled from "@emotion/styled";
import { colors } from "@/theme";

export const ButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  :disabled {
    background-color: ${colors.background};
    color: ${colors.grey};
  }
`;
