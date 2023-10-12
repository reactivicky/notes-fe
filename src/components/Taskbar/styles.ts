import styled from "@emotion/styled";
import { colors } from "@/theme";
import Select from "react-select";

export const TaskbarContainer = styled.nav`
  background-color: ${colors.background};
  padding: 1rem 3rem;
  display: flex;
  border-bottom: 1px solid ${colors.borderColor};
  gap: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const FilterInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${colors.borderColor};
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;

export const StyledSelect = styled(Select)`
  & .Select__control {
    border-radius: 0;
    cursor: pointer;
    border: 1px solid ${colors.borderColor};
    box-shadow: none;
    :hover {
      border: 1px solid ${colors.borderColor};
    }
  }
`;
