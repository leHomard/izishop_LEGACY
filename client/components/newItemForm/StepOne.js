import { useState } from "react";
import { Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import BtnComp from "../UI/Button";
import { StyledUpload } from "./styles";

const { Item } = Form;

const StepOne = ({ onSubmit, increaseStep, customUpload }) => {
  const [images, setImages] = useState([]);

  const handleSubmit = () => {
    onSubmit({ images: { ...images } });
    increaseStep();
  };

  const handleUpload = ({ fileList }) => {
    setImages(fileList);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Item
      // name="photos"
      // rules={[
      //   {
      //     required: true,
      //     message: "Il faut obligatoirement joindre 4 photos",
      //   },
      // ]}
      >
        <StyledUpload
          style={{ border: "1px solid red !important" }}
          listType="picture"
          onChange={handleUpload}
          customRequest={customUpload}
          disabled={images.length === 6}
        >
          <div className="upload--content">
            <PlusOutlined />
            <p>Ajoute 6 photos de ton article</p>
          </div>
        </StyledUpload>
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
