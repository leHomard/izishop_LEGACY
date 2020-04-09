import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import gql from "graphql-tag";

const Container = styled.div`
  width: 960px;
`;

const Img = styled.img`
  width: 300px;
`;

const QUERY_GET_BY_PRODUCT_ID = gql`
  query Item($id: ID!) {
    getItemById(id: $id) {
      title
      price
      description
    }
  }
`;

const Product = () => {
  const { query } = useRouter();
  const { data, loading, error } = useQuery(QUERY_GET_BY_PRODUCT_ID, {
    variables: { id: query.id },
  });
  const item = data && data.getItemById;

  if (error) return <div>Erreur...</div>;
  if (loading) return <div>Chargement...</div>;
  if (item) {
    return (
      <Container>
        <div>{item.title}</div>
        <Img
          src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
        />
        <div>{item.description}</div>
        <div>{item.price}€</div>
      </Container>
    );
  } else return <div>Aucun produit trouvé !</div>;
};

export default Product;
