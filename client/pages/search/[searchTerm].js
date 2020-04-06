import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { printProductList } from "../../components/items/Items";

const ITEMS_SEARCH_QUERY = gql`
  query ITEMS_SEARCH_QUERY($description: String!) {
    searchTerm(description: $description) {
      id
      title
      description
      price
      imageUrl
    }
  }
`;
const ProductList = () => {
  const router = useRouter();
  const term = router.query.searchTerm;
  
  const { data, loading, error } = useQuery(ITEMS_SEARCH_QUERY, {
    variables: { description: term },
  });
  if (!data || error) return <p>Aucun article trouvé</p>;
  if (loading) return <p>Loading...</p>;
  return printProductList(data.searchTerm);
};

export default ProductList;
