import { useQuery } from "@tanstack/react-query";
import axios from "@/api/axiosInstance";
import { Taskbar } from "@/components";
import { NotesContainer, Note } from "./styles";
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
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["notes"],
    queryFn: fetchTodoList,
  });

  const notesArr: NoteInterface[] = data?.data.data.notes ?? [];

  return (
    <>
      <Taskbar />
      <NotesContainer>
        {isLoading ? (
          <Loader />
        ) : (
          notesArr.map((note) => <Note key={note._id} />)
        )}
      </NotesContainer>
    </>
  );
};

export default Notes;
