import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import gql from "graphql-tag";

import GridGallery from "../../components/UI/GridGallery";
import ItemInfoCard from "../../components/items/ItemInfoCard";
import ProductUserBar from "../../components/ProductUserBar";
import PublisherItemsSection from "../../components/itemsSections/PublisherItemsSection";
import SimilarItemsSection from "../../components/itemsSections/SimilarItemsSection";

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
      nbViews
      nbInterested
      imagesUrl
      description
      user {
        userName
      }
    }
  }
`;

const images = [
  {
    src: "https://photos6.spartoo.com/photos/294/2949806/2949806_500_B.jpg",
    thumbnail:
      "https://photos6.spartoo.com/photos/294/2949806/2949806_500_B.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 300,
  },
  {
    src: "https://photos6.spartoo.com/photos/294/2949806/2949806_500_B.jpg",
    thumbnail:
      "https://photos6.spartoo.com/photos/294/2949806/2949806_500_B.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 300,
  },
  {
    src: "https://photos6.spartoo.com/photos/294/2949806/2949806_500_B.jpg",
    thumbnail:
      "https://photos6.spartoo.com/photos/294/2949806/2949806_500_B.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 300,
  },
  {
    src: "https://photos6.spartoo.com/photos/294/2949806/2949806_500_B.jpg",
    thumbnail:
      "https://photos6.spartoo.com/photos/294/2949806/2949806_500_B.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 300,
  },
  {
    src: "https://photos6.spartoo.com/photos/294/2949806/2949806_500_B.jpg",
    thumbnail:
      "https://photos6.spartoo.com/photos/294/2949806/2949806_500_B.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 300,
  },
  {
    src: "https://photos6.spartoo.com/photos/294/2949806/2949806_500_B.jpg",
    thumbnail:
      "https://photos6.spartoo.com/photos/294/2949806/2949806_500_B.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 300,
  },
];

const Product = () => {
  const { query } = useRouter();
  const { data, loading, error } = useQuery(QUERY_GET_BY_PRODUCT_ID, {
    variables: { id: query.id },
  });
  const item = data && data.getItemById;

  // Grid Gallery needs those infos in an object
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

  if (error) return <div>Erreur...</div>;
  if (loading) return <div>Chargement...</div>;
  if (item) {
    return (
      <Fragment>
        <ItemContainer>
          <GridGallery photos={itemPhotos} />
          <ItemInfoCard item={item} />
        </ItemContainer>
        <ProductUserBar
          userName={item.user.userName}
          btnValue="Voir le profile"
          nbFollowers={6}
        />
        <PublisherItemsSection userName={item.user.userName} small />
        <SimilarItemsSection small />
      </Fragment>
    );
  } else return <div>Aucun produit trouvé !</div>;
};

export default Product;
