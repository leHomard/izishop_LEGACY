import { Input, Upload, Button } from "antd";
import { PictureOutlined } from "@ant-design/icons";

import { FormContainer, FormElement, StyledUpload, StyledItem } from "./styles";
import useForm from "../../hooks/useForm";

const formItemLayout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 24 },
};

const AddItemForm = () => {
  // const { values, handleChange } = useForm();

  return (
    <FormContainer {...formItemLayout}>
      <h1>Vends ton article</h1>
      <FormElement>
        <StyledUpload name="upload">
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <PictureOutlined />
            </p>
            <p className="ant-upload-text">Ajoute des photos</p>
          </Upload.Dragger>
        </StyledUpload>
      </FormElement>
      <StyledItem label="Titre" labelAlign="left">
        <Input />
      </StyledItem>
      <StyledItem label="Marque" labelAlign="left">
        <Input />
      </StyledItem>
      <StyledItem label="Taille" labelAlign="left">
        <Input />
      </StyledItem>
      <StyledItem label="État" labelAlign="left">
        <Input />
      </StyledItem>
      <StyledItem label="Déscription" labelAlign="left">
        <Input.TextArea />
      </StyledItem>
      <StyledItem label="Prix" labelAlign="left">
        <Input />
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
