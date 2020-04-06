import { Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

import { StyledForm } from "./styles";

const { Item } = StyledForm;

const layout = {
  wrapperCol: {
    span: 24,
  },
};

const Signup = () => {
  return (
    <StyledForm {...layout}>
      <h2>Signup</h2>
      <Item className="inputs">
        <Input prefix={<UserOutlined />} placeholder="Username" type="text" />
      </Item>
      <Item className="inputs">
        <Input prefix={<MailOutlined />} placeholder="email" type="email" />
      </Item>
      <Item>
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Item>
      <Item className="btn">
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </Item>
      <div className="links">
        <a href="login">Se connecter</a>
      </div>
    </StyledForm>
  );
};

export default Signup;
