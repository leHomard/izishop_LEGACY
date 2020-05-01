import PropTypes from "prop-types";
import ListItemValue from "./ListItemValue";

const ItemInfoProperties = ({ item }) => {
  const brand = item.find((i) => i.title === "brand");
  const price = item.find((i) => i.title === "price");
  const description = item.find((i) => i.title === "description");

  return (
    <div>
      <h3>{brand.value}</h3>
      <h3>${price.value}</h3>
      <h4>{description.value}</h4>
      <ListItemValue item={item} />
    </div>
  );
};

ItemInfoProperties.propTypes = {
  item: PropTypes.array.isRequired,
};

export default ItemInfoProperties;
