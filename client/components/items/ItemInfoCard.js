import PropTypes from "prop-types";

import { StyledCard } from "./styles";
import ItemInfoHeader from "./ItemInfoHeader";
import ItemInfoProperties from "./ItemInfoProperties";
import ItemInfoCardActions from "./ItemInfoCardActions";

export const ItemInfoCard = ({ item }) => {
  const { userName } = item.user;
  return (
    <StyledCard>
      <ItemInfoHeader userName={userName} publishedAt="2 jours" />
      <hr />
      <ItemInfoProperties item={item} />
      <hr />
      <ItemInfoCardActions />
    </StyledCard>
  );
};

ItemInfoCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemInfoCard;
