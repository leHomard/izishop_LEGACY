import { useMutation } from "@apollo/client";
import Link from "next/link";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import gql from "graphql-tag";

import { StyledForm } from "./styles";
import useForm from "../../hooks/useForm";
import { displayFormError } from "../../lib/utils";

const { Item } = StyledForm;

// layout for the form wrapper
const layout = {
  wrapperCol: {
    span: 24,
  },
};

// Call the signup mutation, to create a user in db
const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $username: String!
    $email: String!
    $password: String!
  ) {
    signup(userName: $username, email: $email, password: $password) {
      id
      userName
      email
    }
  }
`;

const Signup = () => {
  const { values, handleChange, setValues } = useForm();
  const [signup] = useMutation(SIGNUP_MUTATION);

  const onSubmit = async () => {
    event.preventDefault();

    // pass values of the form to the signup mutation
    await signup({
      variables: values,
    });
    setValues({});
  };

  return (
    <StyledForm onFinish={onSubmit} {...layout}>
      <h2>Signup</h2>
      <Item
        className="inputs"
        name="username"
        rules={[
          { required: true, message: () => displayFormError("username") },
        ]}
      >
        <Input
          onChange={handleChange}
          prefix={<UserOutlined />}
          name="username"
          placeholder="Username"
          type="text"
          value={values.username}
        />
      </Item>
      <Item
        className="inputs"
        name="email"
        rules={[{ required: true, message: () => displayFormError("email") }]}
      >
        <Input
          onChange={handleChange}
          prefix={<MailOutlined />}
          name="email"
          placeholder="email"
          type="email"
          value={values.email}
        />
      </Item>
      <Item
        name="password"
        rules={[
          { required: true, message: () => displayFormError("password") },
        ]}
      >
        <Input
          onChange={handleChange}
          prefix={<LockOutlined />}
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
        />
      </Item>
      <Item className="btn">
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </Item>
      <div className="links">
        <Link href="login">
          <a>Se connecter</a>
        </Link>
      </div>
    </StyledForm>
  );
};

export default Signup;
