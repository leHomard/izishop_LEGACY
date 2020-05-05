import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const StyledColorCercle = styled.div`
  align-self: flex-start;
  margin-right: 8px;
  margin-top: 6px;
  background-color: ${(props) => props.colorKey};
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  border: 1px solid #999;
`;

const StyledColorTxt = styled.div`
  flex-grow: 1;
`;

const ColorItem = ({ colorKey, color }) => {
  return (
    <StyledDiv>
      <StyledColorCercle colorKey={colorKey} />
      <StyledColorTxt>{color}</StyledColorTxt>
    </StyledDiv>
  );
};

ColorItem.propTypes = {
  colorKey: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ColorItem;
