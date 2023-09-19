import React, { useState } from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import Item from "./Item";

const ClassNameInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    position: "relative",
    fontWeight: 700,
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "100%",
  },
}));

const SelectComponent = ({ children, initialSelectedValue }: any) => {
  const [selected, setSelected] = useState(initialSelectedValue);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
  };
  return (
    <Select
      value={selected}
      onChange={handleChange}
      displayEmpty
      input={<ClassNameInput />}
    >
      {children}
    </Select>
  );
};

SelectComponent.Item = Item;

export default SelectComponent;
