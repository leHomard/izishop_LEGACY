import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_GET_BY_PRODUCT_ID } from "./constant";
import styled from "styled-components";

const Container = styled.div`
  width: 960px;
`;

const Img = styled.img`
  width: 300px;
`;

const Product = () => {
  const { query } = useRouter();
  console.log("query", query);
  const { data, loading, error } = useQuery(QUERY_GET_BY_PRODUCT_ID, {
    variables: { id: query.id }
  });
  const item = data && data.getItemById;

  if (error) return <div>Erreur...</div>;
  if (loading) return <div>Chargement...</div>;
  return (
    <Container>
      <div>{item.title}</div>
      <Img src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />
      <div>{item.description}</div>
      <div>{item.price}€</div>
    </Container>
  );
};

export default Product;
