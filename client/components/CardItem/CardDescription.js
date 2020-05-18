import PropTypes from "prop-types";

import { StyledDescription } from "./styles";

const CardDescription = ({ brand, size }) => {
  return (
    <StyledDescription>
      <span>{brand}</span>
      <span>{size}</span>
    </StyledDescription>
  );
};

CardDescription.propTypes = {
  brand: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default CardDescription;
