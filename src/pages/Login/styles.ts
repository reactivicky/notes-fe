import styled from "@emotion/styled";
import { colors } from "@/theme";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
`;

export const StyledForm = styled.form`
  border: 1px solid ${colors.borderColor};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  input {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export const NavigateText = styled.p`
  text-align: center;

  span {
    color: ${colors.primary};
    cursor: pointer;
    font-weight: 500;
  }
`;
