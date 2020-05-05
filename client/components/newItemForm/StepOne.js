import { Form, Upload, Input } from "antd";
import { PictureOutlined } from "@ant-design/icons";

import useForm from "../../hooks/useForm";
import BtnComp from "../UI/Button";

const { Item } = Form;
const { Dragger } = Upload;

const StepOne = ({ onSubmit, increaseStep }) => {
  const { values, handleChange } = useForm();

  const handleSubmit = (values) => {
    onSubmit(values);
    increaseStep();
  };

  return (
    <Form onFinish={handleSubmit}>
      <Item>
        <Dragger multiple name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <PictureOutlined />
          </p>
          <p className="ant-upload-text">Ajoute des photos</p>
        </Dragger>
      </Item>
      <BtnComp
        style={{ float: "right" }}
        htmlType="submit"
        shape="round"
        btnvalue="Suivant"
      />
    </Form>
  );
};

export default StepOne;
