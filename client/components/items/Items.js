import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import ItemsList from "./styles";

import CardItem from "../CardItem/CardItem";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    allItems {
      id
      title
      description
      brand
      price
      size
      nbInterested
      user {
        username
      }
      images
    }
  }
`;

const Items = () => {
  const { data, loading, error } = useQuery(ALL_ITEMS_QUERY);  
  console.log("Items -> data", data)

  if (!data || error) return <p>error...</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <ItemsList>
      {data.allItems.map((el) => (
        <CardItem
          key={el.id}
          id={el.id}
          username="Omar"
          nbInterested={el.nbInterested}
          price={el.price}
          brand={el.brand}
          size={el.size}
          imgUrl={el.images[0]}
        />
      ))}
    </ItemsList>
  );
};

export default Items;
