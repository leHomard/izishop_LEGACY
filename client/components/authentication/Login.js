import { useState } from "react";
import { Input, Checkbox, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useRouter } from "next/router";

import { StyledForm } from "./styles";
import { QUERY_USER_INFO } from "../../hooks/useFetchUser";
import useForm from "../../hooks/useForm";

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
      username
      email
      isAdmin
    }
  }
`;

const Login = () => {
  const router = useRouter();
  const { values, handleChange } = useForm();
  const [signin, { data }] = useMutation(SIGNIN_MUTATION, {
    variables: values,
    refetchQueries: [
      {
        query: QUERY_USER_INFO,
      },
    ],
  });

  if (data) {
    router.push("/");
  }

  return (
    <StyledForm onFinish={signin} {...layout}>
      <h2>Login</h2>
      <Item
        className="inputs"
        name="email"
        rules={[{ required: true, message: () => displayFormError("email") }]}
      >
        <Input
          name="email"
          value={values.email}
          onChange={handleChange}
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
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
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
