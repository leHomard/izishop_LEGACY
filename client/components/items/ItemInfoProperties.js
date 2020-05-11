import PropTypes from "prop-types";
import ListItemValue from "../UI/ListItemValue";

const ItemInfoProperties = ({ item }) => {
  // extract infos needed from the item info props
  // returned by QUERY_GET_BY_PRODUCT_ID query in product/[id].js
  const {
    brand,
    price,
    description,
    color,
    size,
    type,
    categories,
    nbViews,
    nbInterested,
  } = item;

  // create array with key value for the list info
  const listData = [
    { title: "MARQUE", value: brand },
    { title: "COULEUR", value: color },
    { title: "TAILLE", value: size },
    { title: "TYPE", value: type },
    { title: "CATÉGORIE", value: categories[0] },
    { title: "ÉTAT", value: "neuf" },
    { title: "NOMBRE DE VUES", value: nbViews },
    { title: "INTÉRESSÉ PAR", value: nbInterested },
  ];

  return (
    <div>
      <div className="meta--info--title">
        <h3>{brand}</h3>
        <h2>{price}Dhs</h2>
      </div>
      <h4>{description}</h4>
      <ListItemValue obj={listData} />
    </div>
  );
};

ItemInfoProperties.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemInfoProperties;
