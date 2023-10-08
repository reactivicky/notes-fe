import { Taskbar } from "@/components";
import { NotesContainer, Note } from "./styles";

const notesArr = [1, 2, 3, 4, 5, 6, 7, 8];

const Notes = () => {
  return (
    <>
      <Taskbar />
      <NotesContainer>
        {notesArr.map((note) => (
          <Note key={note} />
        ))}
      </NotesContainer>
    </>
  );
};

export default Notes;
