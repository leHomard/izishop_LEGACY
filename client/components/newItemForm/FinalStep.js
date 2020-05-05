import { Form, Radio, Input } from "antd";

import { StyledRadio } from "./styles";
import useForm from "../../hooks/useForm";
import BtnComp from "../UI/Button";

const { Item } = Form;

const FinalStep = ({ onSubmit, decreaseStep }) => {
  const { values, handleChange } = useForm();

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Item name="price" label="Prix">
        <Input
          name="price"
          value={values.price}
          onChange={handleChange}
          placeholder="0.00 Dhs"
        />
      </Item>
      <hr />
      <br />
      <Item name="parcelType">
        <Radio.Group
          onChange={handleChange}
          value={values.parcelType}
          buttonStyle="solid"
        >
          <h4>Choisis le format du colis :</h4>
          <StyledRadio value="small">
            <h3>Petit</h3>
            <p>Idéal pour: t-shirt, top, haut, etc...</p>
          </StyledRadio>
          <StyledRadio value="medium">
            <h3>Moyen</h3>
            <p>Idéal pour: pantalon, jupe, etc...</p>
          </StyledRadio>
          <StyledRadio value="big">
            <h3>Grand</h3>
            <p>Idéal pour: chaussures, manteaux, etc...</p>
          </StyledRadio>
        </Radio.Group>
      </Item>
      <BtnComp onClick={decreaseStep} shape="round" btnvalue="Retour" />
      <BtnComp
        style={{ float: "right" }}
        htmlType="submit"
        shape="round"
        btnvalue="Ajouter"
        onClick={handleSubmit}
      />
    </Form>
  );
};

export default FinalStep;
