import styled from "@emotion/styled";
import { colors } from "@/theme";

export const NotesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding: 3rem;
  max-height: 73vh;
  overflow: auto;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Note = styled.div`
  background-color: ${colors.background};
  height: 300px;
  width: 100%;
  cursor: pointer;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NoteName = styled.h3`
  font-size: 2rem;
  font-weight: 400;
`;

export const NoteDescription = styled.p`
  overflow: auto;
  font-weight: 300;
  line-height: 150%;
`;

export const PaginationContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
`;
