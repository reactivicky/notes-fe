import { useState } from "react";
import { FilterInput, StyledSelect, TaskbarContainer } from "./styles";
import { SingleValue } from "react-select";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../Common/Button/styles";

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: "last_edited", label: "Sort by last edited" },
  { value: "recently_created", label: "Sort by recently created" },
  { value: "alphabetically", label: "Sort alphabetically" },
];

const Taskbar = () => {
  const [sortValue, setSortValue] = useState<SingleValue<OptionType>>(
    options[0]
  );
  const navigate = useNavigate();
  const handleAddNote = () => {
    navigate("/create-note");
  };
  return (
    <TaskbarContainer>
      <FilterInput type="text" placeholder="Filter notes" />
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
