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

const PublisherItemsSection = ({ small, userName }) => {
  const { data, loading, error } = useQuery(RECENTLY_ADDED_ITEMS);
  if (!data || error) return <p>error...</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <ItemsSection
      small={small}
      data={data}
      title={"Découvre les autres articles de " + userName}
    />
  );
};

PublisherItemsSection.propTypes = {
  small: PropTypes.bool,
  userName: PropTypes.string.isRequired,
};

export default PublisherItemsSection;
