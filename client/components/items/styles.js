import styled from "styled-components";

const ItemsList = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  gap: 1.2rem 1.2rem;
`;

export default ItemsList;
