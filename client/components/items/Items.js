import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

import Item from "./Item";

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
`;

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    allItems {
      id
      title
      description
      price
      imageUrl
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
          size={el.title}
          description={el.description}
          imgUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      ))}
    </ItemsList>
  );
};

export default Items;
