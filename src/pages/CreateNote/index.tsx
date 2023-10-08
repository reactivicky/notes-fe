import { TaskbarContainer } from "@/components/Taskbar/styles";
import { useForm } from "react-hook-form";
import { DescriptionInput, ErrorText, FormStyled, TitleInput } from "./styles";
import Button from "@/components/Common/Button";
import { useNavigate } from "react-router-dom";

interface FormData {
  title: string;
  description: string;
}

const CreateNote = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate("/");
  };

  return (
    <>
      <TaskbarContainer></TaskbarContainer>
      <FormStyled onSubmit={handleSubmit(onSubmit)} noValidate>
        <TitleInput
          placeholder="Note Title"
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
          placeholder="Note Description"
          id="description"
          {...register("description", {
            required: "Description is required",
            maxLength: {
              value: 250,
              message:
                "Description should be less than or equal to 250 characters",
            },
          })}
        />
        {errors.description && (
          <ErrorText>{errors.description.message}</ErrorText>
        )}
        <Button type="submit">Create Note</Button>
      </FormStyled>
    </>
  );
};

export default CreateNote;
