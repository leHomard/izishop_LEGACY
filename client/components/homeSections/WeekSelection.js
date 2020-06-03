import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import ItemsSection from "../items/ItemsSection";

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

const WeekSelection = () => {
  const { data, loading, error } = useQuery(RECENTLY_ADDED_ITEMS);
  if (!data || error) return <p>error...</p>;
  if (loading) return <p>Loading...</p>;

  return <ItemsSection data={data} title="La sélection de la semaine" />;
};

export default WeekSelection;
