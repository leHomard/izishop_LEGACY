import PropTypes from "prop-types";
import ListItemValue from "./ListItemValue";

const ItemInfoProperties = ({ item }) => {
  // extract infos needed from the item info props
  // returned by QUERY_GET_BY_PRODUCT_ID query in product/[id].js
  const { brand, price, description } = item;

  return (
    <div>
      <div className="meta--info--title">
        <h3>{brand}</h3>
        <h2>${price}</h2>
      </div>
      <h4>{description}</h4>
      <ListItemValue item={item} />
    </div>
  );
};

ItemInfoProperties.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemInfoProperties;
