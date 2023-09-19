import MenuItem from "@mui/material/MenuItem";

const Item = ({ children, ...props }: any) => {
  return <MenuItem {...props}>{children}</MenuItem>;
};

export default Item;
