import styled from "@emotion/styled";
import { colors } from "@/theme";

export const NotesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding: 3rem;
  max-height: 70vh;
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
  height: 250px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NoteName = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
`;

export const NoteDescription = styled.p`
  overflow: auto;
  font-weight: 300;
  line-height: 150%;
  margin: 0;
`;

export const NoteBtns = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NoteBtn = styled.button`
  cursor: pointer;
  background-color: ${colors.primaryLight};
  border: none;
  color: ${colors.white};
  padding: 0.3rem 0.5rem;
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
  background-color: ${colors.white};
`;
