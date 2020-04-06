import { Form, Input, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { StyledForm, StyledInput, StyledDiv } from "./styles";

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
      <Item>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Item>
      <Item style={{ marginBottom: "-5px;" }}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Item>
      <Item>
        <Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Se souvenir de moi</Checkbox>
        </Item>

        <a className="login-form-forgot" href="">
          Mot de passe oublié
        </a>
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Item>
    </StyledForm>
  );
};

export default Login;
