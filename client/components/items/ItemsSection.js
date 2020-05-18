import { Card } from "antd";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

import CardItem from "../CardItem/CardItem";
import ItemsList, { ItemsSectionContainer } from "./styles";

const RECENTLY_ADDED_ITEMS = gql`
  query RECENTLY_ADDED_QUERY {
    recentItems {
      id
      brand
      user {
        userName
      }
      price
      size
      nbInterested
      thumbnail
      # profilePicture
    }
  }
`;

const ItemsSection = () => {
  const { data, error, loading } = useQuery(RECENTLY_ADDED_ITEMS);
  if (!data || error) return <p>error...</p>;
  if (loading) return <p>Loading...</p>;

  const { recentItems } = data;
  console.log(recentItems);
  return (
    <ItemsSectionContainer>
      <div className="section--header">
        <h3>Ajouté recemment</h3>
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
        <Card title="see more..." />
      </ItemsList>
    </ItemsSectionContainer>
  );
};

export default ItemsSection;
