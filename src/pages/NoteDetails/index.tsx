import { TaskbarContainer } from "@/components/Taskbar/styles";
import { useForm } from "react-hook-form";
import { DescriptionInput, ErrorText, FormStyled, TitleInput } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import axios from "@/api/axiosInstance";
import { ButtonStyled } from "@/components/Common/Button/styles";
import { useQuery, useMutation } from "@tanstack/react-query";
import Loader from "@/components/Common/Loader";
import { type NoteInterface } from "../Notes";

interface FormData {
  title: string;
  description: string;
}

const NoteDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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
    const data = await axios.get(`/notes/${id}`);
    const note: NoteInterface = data?.data?.data?.note;
    reset({ title: note.name, description: note.description });
    return note;
  };

  const updateNote = async ({ name, description }: NoteInterface) => {
    await axios.patch(`/notes/${id}`, {
      name,
      description,
    });
  };

  const { mutate } = useMutation(updateNote);

  const { data, isLoading } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNote(id),
    enabled: !!id,
  });

  const onSubmit = (data: FormData) => {
    mutate({ name: data.title, description: data.description });
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <TaskbarContainer>
        <ButtonStyled onClick={handleBackClick}>Back to home</ButtonStyled>
      </TaskbarContainer>
      {isLoading ? (
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
