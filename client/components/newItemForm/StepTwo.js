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
  const { values, handleChange, setValues } = useForm();

  const handleSubmit = (values) => {
    onSubmit(values);
    increaseStep();
  };

  // set values of the select to values state
  const onSelectCategory = (value) => {
    setValues((prevState) => {
      return {
        ...prevState,
        category: value,
      };
    });
  };
  const onSelectType = (value) => {
    setValues((prevState) => {
      return {
        ...prevState,
        type: value,
      };
    });
  };
  const onSelectColor = (value) => {
    setValues((prevState) => {
      return {
        ...prevState,
        color: value,
      };
    });
  };

  const config = {
    rules: [{ required: true, message: "Veuillez saisir ce champ" }],
  };

  const sizeConfig = {
    rules: [
      {
        required: values.type === "Deco" ? false : true,
        message: "Veuillez saisir ce champ",
      },
    ],
  };

  return (
    <Form {...formItemLayout} onFinish={handleSubmit}>
      <Item {...config} labelAlign="left" label="Marque" name="brand">
        <Input
          name="brand"
          value={values.brand}
          onChange={handleChange}
          placeholder="ex: Lacoste..."
        />
      </Item>
      <Item {...config} labelAlign="left" label="Titre" name="title">
        <Input
          name="title"
          value={values.title}
          onChange={handleChange}
          placeholder="ex: Polo Lacoste rouge..."
        />
      </Item>
      <Item
        {...config}
        labelAlign="left"
        label="Description"
        name="description"
      >
        <Input.TextArea
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="ex: Article neuf, jamais porté..."
        />
      </Item>
      <Item {...config} labelAlign="left" label="Catégorie" name="category">
        <Select
          value={values.category}
          onChange={onSelectCategory}
          placeholder="ex: Femmes"
          allowClear
        >
          <Option value="MEN">Hommes</Option>
          <Option value="WOMEN">Femmes</Option>
          <Option value="CHILDREN">Enfants</Option>
          <Option value="HOME">Maison</Option>
        </Select>
      </Item>
      <Item {...config} labelAlign="left" label="Type" name="type">
        <Select
          value={values.type}
          onChange={onSelectType}
          placeholder="ex: Vêtements"
          allowClear
        >
          <Option value="CLOTHES">Vêtements</Option>
          <Option value="SHOES">Chaussures</Option>
          <Option value="ACCESSORIES">Accessoires</Option>
          <Option value="DECORATION">Objet déco</Option>
        </Select>
      </Item>
      <Item {...sizeConfig} labelAlign="left" label="Taille" name="size">
        <Input
          disabled={values.type === "Deco"}
          name="size"
          value={values.size}
          onChange={handleChange}
          placeholder="ex: S"
        />
      </Item>
      <Item {...config} labelAlign="left" label="Couleur" name="color">
        <Select onChange={onSelectColor} placeholder="ex: Rouge" allowClear>
          {itemColors.map((color) => (
            <Option value={color.key} key={color.key}>
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
