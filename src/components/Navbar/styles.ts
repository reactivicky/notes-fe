import styled from "@emotion/styled";
import { colors } from "@/theme";

export const NavContainer = styled.nav`
  background-color: ${colors.primary};
  padding: 1.5rem 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-weight: 500;
    font-size: 2rem;
  }
`;

export const NavText = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;
