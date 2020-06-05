import PropTypes from "prop-types";

import CardItem from "../CardItem/CardItem";
import ItemsList, { ItemsSectionContainer } from "./styles";
import EmptyCard from "../CardItem/EmptyCard";

// if props small then map on 4 elements instead of 9
function renderNbItems(small) {
  return small ? 4 : 9;
}

const ItemsSection = ({ data, title, small }) => {
  const { recentItems } = data;
  return (
    <ItemsSectionContainer small={small}>
      <div className="section--header">
        <h3>{title}</h3>
        {!small && <span>Voir plus</span>}
      </div>
      <ItemsList small={small}>
        {recentItems.slice(0, renderNbItems(small)).map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            username="Omar"
            nbInterested={item.nbInterested}
            price={item.price}
            brand={item.brand}
            size={item.size}
            imgUrl={item.thumbnail}
            small={small}
          />
        ))}
        <EmptyCard
          small={small}
          textContent={"Voir les " + recentItems.length + " articles..."}
        />
      </ItemsList>
    </ItemsSectionContainer>
  );
};

ItemsSection.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default ItemsSection;
