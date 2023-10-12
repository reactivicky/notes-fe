import { useQuery } from "@tanstack/react-query";
import axios from "@/api/axiosInstance";
import { Taskbar } from "@/components";
import {
  NotesContainer,
  Note,
  NoteName,
  NoteDescription,
  PaginationContainer,
} from "./styles";
import Loader from "@/components/Common/Loader";
import { useState } from "react";
import { ButtonStyled } from "@/components/Common/Button/styles";

interface NoteInterface {
  name: string;
  description?: string;
  _id: string;
}

const Notes = () => {
  const [page, setPage] = useState<number>(1);
  const [filterText, setFilterText] = useState<string>("");

  const fetchNotesList = async (page: number, filterText: string) => {
    const res = await axios.get("/notes", {
      params: {
        page,
        text: filterText,
      },
    });
    return res;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", page, filterText],
    queryFn: () => fetchNotesList(page, filterText),
  });

  const notesArr: NoteInterface[] = data?.data?.data?.notes ?? [];
  const isLastPage = data?.data?.end ?? false;

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

  const noNotes = notesArr.length === 0;

  if (isError) {
    return "Something went wrong";
  }

  return (
    <>
      <Taskbar setFilterText={setFilterText} />
      <NotesContainer>
        {noNotes ? "Please add notes" : showNotes}
      </NotesContainer>
      <PaginationContainer>
        <ButtonStyled disabled={page === 1} onClick={() => setPage(page - 1)}>
          {"<"}
        </ButtonStyled>
        <p>{page}</p>
        <ButtonStyled disabled={isLastPage} onClick={() => setPage(page + 1)}>
          {">"}
        </ButtonStyled>
      </PaginationContainer>
    </>
  );
};

export default Notes;
