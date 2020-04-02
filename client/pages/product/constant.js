import gql from "graphql-tag";

export const QUERY_GET_BY_PRODUCT_ID = gql`
  query Item($id: ID!) {
    getItemById(id: $id) {
      title
      price
      description
    }
  }
`;
