import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import ItemsList from "./styles";

import Item from "./Item";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    allItems {
      id
      title
      description
      price
      imagesUrl
    }
  }
`;

const Items = () => {
  const { data, loading, error } = useQuery(ALL_ITEMS_QUERY);
  if (!data || error) return <p>error...</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <ItemsList>
      {data.allItems.map((el) => (
        <Item
          key={el.id}
          id={el.id}
          loading={loading}
          size={el.title}
          description={el.description}
          imgUrl={el.imagesUrl[0]}
        />
      ))}
    </ItemsList>
  );
};

export default Items;
