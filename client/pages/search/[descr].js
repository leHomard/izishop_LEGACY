import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Item from "../../components/items/Items";


/*Les erreurs que j'arrive pas à corriger : 
  Utiliser le composant <Items/> pour éviter de dupliquer le code dans ProductList
  Lorsque vais dans /search/adidas , ouvre la console et regarde
*/ 
const ITEMS_SEARCH_QUERY = gql`
  query ITEMS_SEARCH_QUERY($description: String!) {
    searchItems(description: $description ) {
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
  const { descr } = router.query;
  const { data, loading, error } = useQuery(ITEMS_SEARCH_QUERY, {
    variables: { description : descr},
  });
  if (!data || error) return <p>Aucun article trouvé</p>;
  if (loading) return <p>Loading...</p>;
  console.log('dataProductList : ',data);
  return (
    <div>
      {data.searchItems.map((el) => (
        <Item
          key={el.id}
          size={el.title}
          description={el.description}
          imgUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      ))}
    </div>
  );
};

export default ProductList;
