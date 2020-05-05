import { Input, Upload, Button } from "antd";
import { PictureOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import { FormContainer, FormElement, StyledUpload, StyledItem } from "./styles";
import useForm from "../../hooks/useForm";

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $brand: String!
    $size: String!
    $category: String!
    $condition: String!
    $color: String!
    $description: String!
    $price: String!
  ) {
    createItem(
      title: $title
      brand: $brand
      size: $size
      category: $category
      condition: $category
      color: $color
      description: $description
      price: $price
    ) {
      id
      title
      price
    }
  }
`;

const formItemLayout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 24 },
};

const AddItemForm = () => {
  const { values, handleChange, setValues } = useForm();
  const [createItem, { error, loading }] = useMutation(CREATE_ITEM_MUTATION);

  const onSubmit = (event) => {
    event.preventDefault();
    // createItem({
    //   variables: values,
    // });
    setValues({});
  };

  return (
    <FormContainer onFinish={onSubmit} {...formItemLayout}>
      <h1>Vends ton article</h1>
      <FormElement>
        <StyledUpload name="upload">
          <Upload.Dragger multiple name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <PictureOutlined />
            </p>
            <p className="ant-upload-text">Ajoute des photos</p>
          </Upload.Dragger>
        </StyledUpload>
      </FormElement>
      <StyledItem name="title" label="Titre" labelAlign="left">
        <Input name="title" onChange={handleChange} value={values.title} />
      </StyledItem>
      <StyledItem name="brand" label="Marque" labelAlign="left">
        <Input name="brand" onChange={handleChange} value={values.brand} />
      </StyledItem>
      <StyledItem name="size" label="Taille" labelAlign="left">
        <Input name="size" onChange={handleChange} value={values.size} />
      </StyledItem>
      <StyledItem name="category" label="Catégorie" labelAlign="left">
        <Input
          name="category"
          onChange={handleChange}
          value={values.category}
        />
      </StyledItem>
      <StyledItem name="condition" label="État" labelAlign="left">
        <Input
          name="condition"
          onChange={handleChange}
          value={values.condition}
        />
      </StyledItem>
      <StyledItem name="color" label="Couleur" labelAlign="left">
        <Input name="color" onChange={handleChange} value={values.color} />
      </StyledItem>
      <StyledItem name="description" label="Déscription" labelAlign="left">
        <Input.TextArea
          name="description"
          onChange={handleChange}
          value={values.description}
        />
      </StyledItem>
      <StyledItem name="price" label="Prix" labelAlign="left">
        <Input name="price" onChange={handleChange} value={values.price} />
      </StyledItem>
      <Button
        style={{ width: "40%", marginTop: "2rem" }}
        type="primary"
        htmlType="submit"
      >
        Ajouter
      </Button>
    </FormContainer>
  );
};

export default AddItemForm;
