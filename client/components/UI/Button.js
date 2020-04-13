import { Button } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.blue};
  color: white;
`;

const BtnComp = ({ btnValue, onClick, type, shape }) => {
  return (
    <StyledButton type={type} shape={shape} onClick={onClick}>
      {btnValue}
    </StyledButton>
  );
};

export default BtnComp;
