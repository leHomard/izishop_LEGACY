import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    allItems {
      id
      title
      description
      price
      image
      largeImage
    }
  }
`;

const Items = () => {
  const { data, loading, error } = useQuery(ALL_ITEMS_QUERY);
  if (!data || error) return <p>error...</p>;
  if (loading) return <p>Loading...</p>;

  console.log("data : ", data);

  return <p>Here are all the Items</p>;
};

export default Items;
