import { Button } from "antd";
import PropTypes from "prop-types";
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

BtnComp.prototype = {
  btnValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  shape: PropTypes.string,
};

export default BtnComp;
