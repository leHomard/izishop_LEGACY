import { Button } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.blue};
  color: white;
`;

const BtnComp = (props) => {
  return <StyledButton {...props}>{props.btnvalue}</StyledButton>;
};

BtnComp.prototype = {
  btnvalue: PropTypes.string.isRequired,
};

export default BtnComp;
