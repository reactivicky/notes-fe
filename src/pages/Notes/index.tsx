import { useQuery } from "@tanstack/react-query";
import axios from "@/api/axiosInstance";
import { Taskbar } from "@/components";
import { NotesContainer, Note, NoteName, NoteDescription } from "./styles";
import Loader from "@/components/Common/Loader";

interface NoteInterface {
  name: string;
  description?: string;
  _id: string;
}

const Notes = () => {
  const fetchTodoList = async () => {
    const res = await axios.get("/notes");
    return res;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes"],
    queryFn: fetchTodoList,
  });

  const notesArr: NoteInterface[] = data?.data?.data?.notes ?? [];

  const showNotes = isLoading ? (
    <Loader />
  ) : (
    notesArr.map(({ _id, name, description }) => (
      <Note key={_id}>
        <NoteName>{name}</NoteName>
        {description && <NoteDescription>{description}</NoteDescription>}
      </Note>
    ))
  );

  if (isError) {
    return "Something went wrong";
  }

  return (
    <>
      <Taskbar />
      <NotesContainer>
        {notesArr.length === 0 ? "Please add notes" : showNotes}
      </NotesContainer>
    </>
  );
};

export default Notes;
