import styled from "@emotion/styled";
import { colors } from "@/theme";

export const NotesContainer = styled.section`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 3rem;
`;

export const Note = styled.div`
  background-color: ${colors.background};
  height: 300px;
  width: 300px;
  cursor: pointer;
`;
