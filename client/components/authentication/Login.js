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
      <Item style={{ marginBottom: "0" }}>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Item>
      <Item>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Item>
      <Item style={{ marginTop: "-2.2em" }}>
        <Item name="remember" valuePropName="checked" noStyle>
          <Checkbox className="checkbox">Se souvenir de moi</Checkbox>
        </Item>
      </Item>
      <Item style={{ marginTop: "-1em" }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Item>
      <div className="links">
        <a href="">S'inscrire</a>
        <a href="">Mot de passe oublié</a>
      </div>
    </StyledForm>
  );
};

export default Login;
