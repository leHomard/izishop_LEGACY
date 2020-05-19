import { Card, Empty } from "antd";
import PropTypes from "prop-types";

import CardItemContainer, { EmptyCardContent } from "./styles";

const EmptyCard = ({ textContent }) => {
  return (
    <CardItemContainer>
      <EmptyCardContent>
        <p>{textContent}</p>
      </EmptyCardContent>
    </CardItemContainer>
  );
};

EmptyCard.propTypes = {
  textContent: PropTypes.string.isRequirred,
};

export default EmptyCard;
