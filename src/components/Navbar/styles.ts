import styled from "@emotion/styled";
import { colors } from "@/theme";

export const NavContainer = styled.nav`
  background-color: ${colors.primary};
  padding: 1.5rem 3rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
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

export const UserDetailsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  button {
    border: none;
    background-color: ${colors.borderColor};
    padding: 0.2rem 0.5rem;
    cursor: pointer;

    svg {
      display: block;
    }
  }
`;

export const UserImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${colors.black};
`;
