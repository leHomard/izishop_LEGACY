import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
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
export const printProductList = (itemArray) => {
  return (
    <ItemsList>
      {itemArray.map((el) => (
        <Item
          key={el.id}
          size={el.title}
          description={el.description}
          imgUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      ))}
    </ItemsList>
  );
};
const Items = () => {
  const { data, loading, error } = useQuery(ALL_ITEMS_QUERY);
  if (!data || error) return <p>error...</p>;
  if (loading) return <p>Loading...</p>;

  console.log("data : ", data);

  return printProductList(data.allItems);
};
export default Items;
