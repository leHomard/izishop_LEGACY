import PropTypes from "prop-types";

// All the styles of the card item are on styles.js
import { StyledCard } from "./styles";
import ItemInfoHeader from "./ItemInfoHeader";
import ItemInfoProperties from "./ItemInfoProperties";
import ItemInfoCardActions from "./ItemInfoCardActions";

export const ItemInfoCard = ({ item }) => {
  const { username } = item.user;
  return (
    <StyledCard>
      <ItemInfoHeader username={username} publishedAt="2 jours" />
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
