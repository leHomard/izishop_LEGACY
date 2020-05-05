import { Form, Input, Select } from "antd";

import useForm from "../../hooks/useForm";
import BtnComp from "../UI/Button";
import { itemColors } from "../../lib/utils";
import ColorItem from "../UI/SelectColorElement";

const { Item } = Form;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const StepTwo = ({ onSubmit, increaseStep, decreaseStep }) => {
  const { values, handleChange } = useForm();

  const handleSubmit = (values) => {
    onSubmit(values);
    increaseStep();
  };

  const onSelect = (value) => {
    console.log("value : ", value);
  };

  return (
    <Form {...formItemLayout} onFinish={handleSubmit}>
      <Item labelAlign="left" label="Marque" name="brand">
        <Input
          name="brand"
          value={values.brand}
          onChange={handleChange}
          placeholder="ex: Lacoste..."
        />
      </Item>
      <Item labelAlign="left" label="Titre" name="title">
        <Input
          name="title"
          value={values.title}
          onChange={handleChange}
          placeholder="ex: Polo Lacoste rouge..."
        />
      </Item>
      <Item labelAlign="left" label="Description" name="description">
        <Input.TextArea
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="ex: Article neuf, jamais porté..."
        />
      </Item>
      <Item labelAlign="left" label="Catégorie" name="category">
        <Select
          value={values.category}
          onChange={onSelect}
          placeholder="ex: Femmes"
          allowClear
        >
          <Option value="MEN">Hommes</Option>
          <Option value="WOMEN">Femmes</Option>
          <Option value="CHILDREN">Enfants</Option>
          <Option value="HOME">Maison</Option>
        </Select>
      </Item>
      <Item labelAlign="left" label="Type" name="type">
        <Select
          value={values.type}
          onChange={onSelect}
          placeholder="ex: Vêtements"
          allowClear
        >
          <Option value="clothes">Vêtements</Option>
          <Option value="shoes">Chaussures</Option>
          <Option value="Accessories">Accessoires</Option>
          <Option value="Deco">Objet déco</Option>
        </Select>
      </Item>
      <Item labelAlign="left" label="Taille" name="size">
        <Input
          name="size"
          value={values.size}
          onChange={handleChange}
          placeholder="ex: S"
        />
      </Item>
      <Item labelAlign="left" label="Couleur" name="color">
        <Select placeholder="ex: Rouge" allowClear>
          {itemColors.map((color) => (
            <Option value={color.key} onChange={onSelect} key={color.key}>
              <ColorItem colorKey={color.value} color={color.key} />
            </Option>
          ))}
        </Select>
      </Item>
      <BtnComp
        style={{ float: "right" }}
        shape="round"
        btnvalue="Suivant"
        htmlType="submit"
      />
      <BtnComp onClick={decreaseStep} shape="round" btnvalue="Retour" />
    </Form>
  );
};

export default StepTwo;
