import { TaskbarContainer } from "@/components/Taskbar/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { DescriptionInput, ErrorText, FormStyled, TitleInput } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import axios from "@/api/axiosInstance";
import { ButtonStyled } from "@/components/Common/Button/styles";
import { useQuery, useMutation } from "@tanstack/react-query";
import Loader from "@/components/Common/Loader";
import { type NoteInterface } from "../Notes";
import useAxiosOptions from "@/hooks/useAxiosOptions";

interface FormData {
  title: string;
  description: string;
}

const NoteDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const axiosOptions = useAxiosOptions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const fetchNote = async (id?: string) => {
    const data = await axios.get(`/notes/${id}`, axiosOptions);
    const note: NoteInterface = data?.data?.data?.note;
    reset({ title: note.name, description: note.description });
    return note;
  };

  const createNote = async ({ name, description }: NoteInterface) => {
    return await axios.post(
      `/notes`,
      {
        name,
        description,
      },
      axiosOptions
    );
  };

  const updateNote = async ({ name, description }: NoteInterface) => {
    await axios.patch(
      `/notes/${id}`,
      {
        name,
        description,
      },
      axiosOptions
    );
  };

  const { mutate: updateMutation } = useMutation(updateNote);
  const { mutateAsync: createMutation } = useMutation(createNote);

  const { data, isLoading } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNote(id),
    enabled: !!id,
  });

  const onSubmit = async (data: FormData) => {
    if (id) {
      updateMutation({ name: data.title, description: data.description });
      toast.success("Note Edited");
    } else {
      const noteData = await createMutation({
        name: data.title,
        description: data.description,
      });
      const noteId = noteData?.data?.data?.note?._id ?? "";
      navigate(`/edit-note/${noteId}`);
      toast.success("Note Created");
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <TaskbarContainer>
        <ButtonStyled onClick={handleBackClick}>Back to home</ButtonStyled>
      </TaskbarContainer>
      {id && isLoading ? (
        <Loader />
      ) : (
        <FormStyled onSubmit={handleSubmit(onSubmit)} noValidate>
          <TitleInput
            placeholder={data ? "" : "Note Title"}
            type="text"
            id="title"
            {...register("title", {
              required: "Title is required",
              maxLength: {
                value: 20,
                message: "Title should be less than or equal to 20 characters",
              },
            })}
          />
          {errors.title && <ErrorText>{errors.title.message}</ErrorText>}
          <DescriptionInput
            placeholder={data ? "" : "Note Description"}
            id="description"
            {...register("description", {
              required: "Description is required",
              maxLength: {
                value: 800,
                message:
                  "Description should be less than or equal to 800 characters",
              },
            })}
          />
          {errors.description && (
            <ErrorText>{errors.description.message}</ErrorText>
          )}
          <ButtonStyled type="submit">
            {id ? "Edit" : "Create"} Note
          </ButtonStyled>
        </FormStyled>
      )}
    </>
  );
};

export default NoteDetails;
