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
  min-height: 680px;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const QUERY_GET_BY_PRODUCT_ID = gql`
  query Item($id: ID!) {
    getItemById(id: $id) {
      brand
      title
      price
      size
      color
      type
      categories
      imagesUrl
      nbViews
      nbInterested
      description
      user {
        userName
      }
    }
  }
`;

const Product = () => {
  const { query } = useRouter();
  const { data, loading, error } = useQuery(QUERY_GET_BY_PRODUCT_ID, {
    variables: { id: query.id },
  });
  const item = data && data.getItemById;

  // array of objects for grid gallery
  const itemPhotos =
    data &&
    item.imagesUrl.map((i) => {
      return {
        src: i,
        thumbnail: i,
        thumbnailWidth: 320,
        thumbnailHeight: 320,
      };
    });

  const itemInfos =
    item &&
    Object.entries(item).map(([title, value]) => ({
      title,
      value,
    }));

  if (error) return <div>Erreur...</div>;
  if (loading) return <div>Chargement...</div>;
  if (item) {
    return (
      <ItemContainer>
        <GridGallery photos={itemPhotos} />
        <ItemInfoCard item={itemInfos} />
      </ItemContainer>
    );
  } else return <div>Aucun produit trouvé !</div>;
};

export default Product;
