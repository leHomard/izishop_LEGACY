import { Card, Empty } from "antd";
import PropTypes from "prop-types";

import CardItemContainer, { EmptyCardContent } from "./styles";

const EmptyCard = ({ textContent, small }) => {
  return (
    <CardItemContainer small={small}>
      <EmptyCardContent>
        <p>{textContent}</p>
      </EmptyCardContent>
    </CardItemContainer>
  );
};

EmptyCard.propTypes = {
  textContent: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default EmptyCard;
