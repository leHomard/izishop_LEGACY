import PropTypes from "prop-types";

import CardItem from "../CardItem/CardItem";
import ItemsList, { ItemsSectionContainer } from "./styles";
import EmptyCard from "../CardItem/EmptyCard";

const ItemsSection = ({ data, title }) => {
  const { recentItems } = data;
  return (
    <ItemsSectionContainer>
      <div className="section--header">
        <h3>{title}</h3>
        <span>Voir plus</span>
      </div>
      <ItemsList>
        {recentItems.slice(0, 9).map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            username={item.userName}
            nbInterested={item.nbInterested}
            price={item.price}
            brand={item.brand}
            size={item.size}
            imgUrl={item.thumbnail}
          />
        ))}
        <EmptyCard
          textContent={"Voir les " + recentItems.length + " articles..."}
        />
      </ItemsList>
    </ItemsSectionContainer>
  );
};

ItemsSection.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default ItemsSection;
