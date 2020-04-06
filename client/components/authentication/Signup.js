import { useMutation } from "@apollo/client";
import Link from "next/link";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import gql from "graphql-tag";

import { StyledForm } from "./styles";
import useForm from "../../hooks/useForm";

const { Item } = StyledForm;

const layout = {
  wrapperCol: {
    span: 24,
  },
};

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
  const [signup, { error, loading, data }] = useMutation(SIGNUP_MUTATION);

  const onSubmit = async () => {
    event.preventDefault();
    await signup({
      variables: values,
    });
    console.table("Success ", values);
    setValues({});
  };

  const errorMessage = "Veuillez remplir tous les champs";
  return (
    <StyledForm onFinish={onSubmit} {...layout}>
      <h2>Signup</h2>
      <Item
        className="inputs"
        name="username"
        hasFeedback
        rules={[{ required: true, message: errorMessage }]}
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
        hasFeedback
        rules={[{ required: true, message: errorMessage }]}
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
        hasFeedback
        name="password"
        rules={[{ required: true, message: errorMessage }]}
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
