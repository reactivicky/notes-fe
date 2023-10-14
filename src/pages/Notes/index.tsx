import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@/api/axiosInstance";
import { Taskbar } from "@/components";
import { SingleValue } from "react-select";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  NotesContainer,
  Note,
  NoteName,
  NoteDescription,
  PaginationContainer,
  NoteBtns,
  NoteBtn,
} from "./styles";
import Loader from "@/components/Common/Loader";
import { useState } from "react";
import { ButtonStyled } from "@/components/Common/Button/styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface NoteInterface {
  name: string;
  description?: string;
  _id?: string;
}

export interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: "last_edited", label: "Sort by last edited" },
  { value: "recently_created", label: "Sort by recently created" },
  { value: "alphabetically", label: "Sort alphabetically" },
];

const Notes = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(1);
  const [filterText, setFilterText] = useState<string>("");
  const [sortValue, setSortValue] = useState<SingleValue<OptionType>>(
    options[0]
  );

  const fetchNotesList = async (
    page: number,
    filterText: string,
    sortValue: string
  ) => {
    let sortBy: string = "";

    switch (sortValue) {
      case "last_edited":
        sortBy = "-updatedAt";
        break;
      case "recently_created":
        sortBy = "-createdAt";
        break;
      case "alphabetically":
        sortBy = "name";
        break;
    }
    const res = await axios.get("/notes", {
      params: {
        page,
        text: filterText,
        sort: sortBy,
      },
    });
    return res;
  };

  const deleteNote = async (id: string) => {
    await axios.delete(`/notes/${id}`);
  };

  const { mutateAsync: deleteMutation } = useMutation(deleteNote);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["notes", page, filterText, sortValue!.value],
    queryFn: () => fetchNotesList(page, filterText, sortValue!.value),
  });

  const notesArr: NoteInterface[] = data?.data?.data?.notes ?? [];
  const isLastPage = data?.data?.end ?? false;

  const handleNoteClick = (id: string) => {
    navigate(`/edit-note/${id}`);
  };

  const handleDeleteNote = async (id: string) => {
    await deleteMutation(id);
    refetch();
    toast.success("Note Deleted!");
  };

  const showNotes = isLoading ? (
    <Loader />
  ) : (
    notesArr.map(({ _id, name, description }) => (
      <Note key={_id}>
        <NoteName>
          {name}{" "}
          <NoteBtns>
            <NoteBtn onClick={() => handleNoteClick(_id ?? "")}>
              <MdEdit />
            </NoteBtn>
            <NoteBtn onClick={() => handleDeleteNote(_id ?? "")}>
              <MdDelete />
            </NoteBtn>
          </NoteBtns>
        </NoteName>
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
      <Taskbar
        setFilterText={setFilterText}
        sortValue={sortValue}
        setSortValue={setSortValue}
        options={options}
      />
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
