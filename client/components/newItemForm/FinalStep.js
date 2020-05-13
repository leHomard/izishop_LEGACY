import { Form, Radio, Input, Select } from "antd";

import { StyledRadio, StyledItem } from "./styles";
import useForm from "../../hooks/useForm";
import BtnComp from "../UI/Button";

const { Item } = Form;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const config = {
  rules: [{ required: true }],
};

const FinalStep = ({ onSubmit, decreaseStep, increaseStep }) => {
  const { values, handleChange, setValues } = useForm();

  const handleSubmit = (values) => {
    const { condition, price, parcelType } = values;
    onSubmit({
      condition,
      price,
      parcelType,
    });
    increaseStep();
  };

  const onSelectCondition = (value) => {
    setValues((prevState) => {
      return {
        ...prevState,
        condition: value,
      };
    });
  };

  return (
    <Form {...formItemLayout} onFinish={handleSubmit}>
      <Item {...config} labelAlign="left" label="État" name="condition">
        <Select
          value={values.condition}
          onChange={onSelectCondition}
          placeholder="ex: neuf"
          allowClear
        >
          <Option value="NEW">Neuf</Option>
          <Option value="VG_CONDITION">Très bon état</Option>
          <Option value="G_CONDITION">Bon état</Option>
        </Select>
      </Item>
      <Item {...config} labelAlign="left" name="price" label="Prix">
        <Input
          type="number"
          name="price"
          value={parseFloat(values.price)}
          onChange={handleChange}
          placeholder="0.00 Dhs"
        />
      </Item>
      <hr />
      <br />
      <Item {...config} name="parcelType">
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
      />
    </Form>
  );
};

export default FinalStep;
