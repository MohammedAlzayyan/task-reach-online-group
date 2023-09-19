import React, { useState } from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

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

const SelectComponent = ({ data }: any) => {
  const initialSelectedValue = data && data.length >= 2 ? data[1].name : "";

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
      {data?.map((item: any, index: number) => (
        <MenuItem key={index} value={item.name}>
          <img src={item.flagUrl} alt="flag" />
          <span>{item.name}</span>
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
