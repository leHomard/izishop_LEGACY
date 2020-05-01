import PropTypes from "prop-types";

import { StyledCard } from "./styles";
import ItemInfoHeader from "./ItemInfoHeader";
import ItemInfoProperties from "./ItemInfoProperties";
import ItemInfoCardActions from "./ItemInfoCardActions";

export const ItemInfoCard = ({ item }) => {
  const user = item.find((i) => i.title === "user");
  return (
    <StyledCard>
      <ItemInfoHeader userName={user.value.userName} publishedAt="2 jours" />
      <hr />
      <ItemInfoProperties item={item} />
      <hr />
      <ItemInfoCardActions />
    </StyledCard>
  );
};

ItemInfoCard.propTypes = {
  item: PropTypes.array.isRequired,
};

export default ItemInfoCard;
