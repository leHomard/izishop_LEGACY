import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import PropTypes from "prop-types";

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

const WeekSelection = ({ small }) => {
  const { data, loading, error } = useQuery(RECENTLY_ADDED_ITEMS);
  if (!data || error) return <p>error...</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <ItemsSection
      small={small}
      data={data}
      title="La sélection de la semaine"
    />
  );
};

WeekSelection.propTypes = {
  small: PropTypes.bool,
};

export default WeekSelection;
