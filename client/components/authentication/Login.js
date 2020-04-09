import { Input, Checkbox, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";

import { StyledForm } from "./styles";

const { Item } = StyledForm;

const layout = {
  wrapperCol: {
    span: 24,
  },
};

const Login = () => {
  return (
    <StyledForm {...layout}>
      <h2>Login</h2>
      <Item className="inputs">
        <Input prefix={<MailOutlined />} type="email" placeholder="email" />
      </Item>
      <Item>
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Item>
      <Item
        name="remember"
        valuePropName="checked"
        style={{ marginTop: "-2.2em" }}
      >
        <Checkbox className="checkbox">Se souvenir de moi</Checkbox>
      </Item>
      <Item style={{ marginTop: "-1em" }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Item>
      <div className="links">
        <Link href="signup">
          <a>S'inscrire</a>
        </Link>
        <Link href="">
          <a>Mot de passe oublié</a>
        </Link>
      </div>
    </StyledForm>
  );
};

export default Login;
