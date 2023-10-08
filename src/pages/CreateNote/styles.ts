import styled from "@emotion/styled";
import { colors } from "@/theme";

export const FormStyled = styled.form`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem auto;

  @media (max-width: 700px) {
    margin: 3rem;
  }
`;

export const TitleInput = styled.input`
  font-size: 2rem;
  padding: 0.5rem;
  border: 1px solid ${colors.borderColor};
`;

export const DescriptionInput = styled.textarea`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid ${colors.borderColor};
  resize: vertical;
`;

export const ErrorText = styled.p`
  color: ${colors.error};
`;
