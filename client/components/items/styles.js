import styled from "styled-components";
import { Card } from "antd";

const ItemsList = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  gap: 1.2rem 1.2rem;
`;

export const StyledCard = styled(Card)`
  height: 90%;
  width: 30%;
  box-shadow: var(--box-shadow);
  margin: 1rem 0 0 0;
  border-radius: 1rem;
`;

export const StyledInfoHeader = styled.div`
  align-items: center;
  margin-top: -1rem;
  width: 100%;
  display: flex;
  .header--meta--info {
    padding: 0 0 0 10px;
    display: flex;
    flex-direction: column;
    h3 {
      margin-top: 10px;
    }
    p {
      margin-top: -7px;
    }
  }
`;

export const StyledActions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1rem 0 1rem;
  button {
    margin-top: 0.5rem;
  }
`;

export default ItemsList;
