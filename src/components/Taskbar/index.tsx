import {
  useState,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
} from "react";
import { FilterInput, StyledSelect, TaskbarContainer } from "./styles";
import { SingleValue } from "react-select";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../Common/Button/styles";
import { debounce } from "@/utils";

interface OptionType {
  value: string;
  label: string;
}

interface TaskbarProps {
  setFilterText: Dispatch<SetStateAction<string>>;
}

const options: OptionType[] = [
  { value: "last_edited", label: "Sort by last edited" },
  { value: "recently_created", label: "Sort by recently created" },
  { value: "alphabetically", label: "Sort alphabetically" },
];

const Taskbar = ({ setFilterText }: TaskbarProps) => {
  const [sortValue, setSortValue] = useState<SingleValue<OptionType>>(
    options[0]
  );
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
        // value={filterText}
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
