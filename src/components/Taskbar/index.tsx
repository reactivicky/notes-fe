import { type Dispatch, type SetStateAction, type ChangeEvent } from "react";
import { FilterInput, StyledSelect, TaskbarContainer } from "./styles";
import { SingleValue } from "react-select";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../Common/Button/styles";
import { debounce } from "@/utils";
import { type OptionType } from "@/pages/Notes";

interface TaskbarProps {
  options: OptionType[];
  sortValue: SingleValue<OptionType>;
  setSortValue: Dispatch<SetStateAction<SingleValue<OptionType>>>;
  setFilterText: Dispatch<SetStateAction<string>>;
}

const Taskbar = ({
  setFilterText,
  sortValue,
  setSortValue,
  options,
}: TaskbarProps) => {
  const navigate = useNavigate();
  const handleAddNote = () => {
    navigate("/create-note");
  };

  const handleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  }, 1000);

  return (
    <TaskbarContainer>
      <FilterInput
        type="text"
        placeholder="Filter notes"
        onChange={handleChange}
      />
      <StyledSelect
        classNamePrefix={"Select"}
        options={options}
        value={sortValue}
        onChange={(val: unknown) =>
          setSortValue(val as SingleValue<OptionType>)
        }
      />
      <ButtonStyled onClick={handleAddNote}>+ Add note</ButtonStyled>
    </TaskbarContainer>
  );
};

export default Taskbar;
