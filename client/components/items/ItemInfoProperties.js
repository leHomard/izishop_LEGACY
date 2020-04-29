import PropTypes from "prop-types";
import ListItemValue from "../UI/ListItemValue";

const ItemInfoProperties = ({ item }) => {
  const brand = item.find((i) => i.title === "Marque");
  const price = item.find((i) => i.title === "Prix");
  const description = item.find((i) => i.title === "Description");
  return (
    <div>
      <h3>{brand.value || ""}</h3>
      <h3>${price.value || ""}</h3>
      <h4>{description.value || ""}</h4>
      <ListItemValue obj={item} />
    </div>
  );
};

ItemInfoProperties.propTypes = {
  item: PropTypes.array.isRequired,
};

export default ItemInfoProperties;
