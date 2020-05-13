import styled from "styled-components";
import { Card, Form } from "antd";

const ItemsList = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  gap: 1.2rem 1.2rem;
`;

export const StyledCard = styled(Card)`
  height: 600px;
  width: 25%;
  box-shadow: var(--box-shadow);
  margin: 1rem 0 0 0;
  border-radius: 1rem;
  .meta--info--title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 15px 0 0;
  }
  @media (max-width: 1024px) {
    width: 75%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }
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

export const FormContainer = styled(Form)`
  text-align: center;
  padding: 28px 0;
  width: 70%;
  box-shadow: var(--box-shadow);
  margin: 0 auto;
  @media (max-width: 648px) {
    width: 100%;
  }
`;

export const FormElement = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
`;

export const StyledUpload = styled(Form.Item)`
  margin: 0 auto;
  width: 100%;
  border: 1px dashed ${(props) => props.theme.blue};
`;

export const StyledItem = styled(Form.Item)`
  border-bottom: 1px solid #bbb;
  margin: 0 auto;
  width: 60%;
  justify-content: space-between;
  padding: 18px;
`;

export default ItemsList;
