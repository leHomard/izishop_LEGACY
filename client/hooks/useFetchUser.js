import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

export const QUERY_USER_INFO = gql`
  query QUERY_USER_INFO {
    me {
      id
      userName
      email
      isAdmin
    }
  }
`;

export const useFetchUser = () => {
  const { data, loading, error } = useQuery(QUERY_USER_INFO);

  if (data) {
    return {
      data: data.me,
      loading,
      error,
    };
  }
};
