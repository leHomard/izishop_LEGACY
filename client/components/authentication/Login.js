import { useState } from "react";
import { Input, Checkbox, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import { StyledForm } from "./styles";

const { Item } = StyledForm;

const layout = {
  wrapperCol: {
    span: 24,
  },
};

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      userName
      email
      isAdmin
    }
  }
`;

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");
  const [signin, { error, loading, data, called }] = useMutation(
    SIGNIN_MUTATION,
    {
      variables: {
        email: emailValue,
        password: pwdValue,
      },
    }
  );
  console.log("called : ", called);
  return (
    <StyledForm {...layout}>
      <h2>Login</h2>
      <Item
        className="inputs"
        name="email"
        rules={[{ required: true, message: () => displayFormError("email") }]}
      >
        <Input
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          prefix={<MailOutlined />}
          type="email"
          placeholder="email"
        />
      </Item>
      <Item
        name="password"
        rules={[
          { required: true, message: () => displayFormError("password") },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
          value={pwdValue}
          onChange={(e) => setPwdValue(e.target.value)}
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
        <Button onClick={signin} type="primary" htmlType="submit">
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
