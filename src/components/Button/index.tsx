import styled from "@emotion/styled/macro";
import Button from "@mui/material/Button";

const ButtonComponent = ({ children, classNameButton }: any) => {
  const BClassName = styled(Button)`
    &.MuiButton-root {
      background-color: #000;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      padding: 10px 26px;
      border-radius: 0;
      text-transform: none;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: #fff;
        color: #000;
      }

      &.Mui-disabled {
        background-color: #000;
        color: #fff;

        &:hover {
          background-color: #000;
        }
      }
    }
  `;
  return <BClassName className={classNameButton}>{children}</BClassName>;
};

export default ButtonComponent;
