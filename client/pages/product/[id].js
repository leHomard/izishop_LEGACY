import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import gql from "graphql-tag";

import GridGallery from "../../components/UI/GridGallery";
import ItemInfoCard from "../../components/items/ItemInfoCard";

const ItemContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 680px;
  display: flex;
  justify-content: space-evenly;
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
      <ItemContainer>
        <GridGallery />
        <ItemInfoCard />
      </ItemContainer>
    );
  } else return <div>Aucun produit trouvé !</div>;
};

export default Product;
