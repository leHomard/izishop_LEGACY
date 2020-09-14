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
        username
      }
      price
      size
      nbInterested
      thumbnail
      # profilePicture
    }
  }
`;

const SimilarItemsSection = ({ small }) => {
  const { data, loading, error } = useQuery(RECENTLY_ADDED_ITEMS);
  if (!data || error) return <p>error...</p>;
  if (loading) return <p>Loading...</p>;

  return <ItemsSection small={small} data={data} title="Articles similaires" />;
};

SimilarItemsSection.propTypes = {
  small: PropTypes.bool,
};

export default SimilarItemsSection;
