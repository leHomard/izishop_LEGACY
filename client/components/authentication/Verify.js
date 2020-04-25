import { useState } from "react";
import { Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import PropTypes from "prop-types";

import { StyledForm } from "./styles";

const { Item } = StyledForm;

// layout for the form wrapper
const layout = {
  wrapperCol: {
    span: 24,
  },
};

// call the verifyAccount mutation
const VERIFY_ACCOUNT_MUTATION = gql`
  mutation VERIFY_ACCOUNT_MUTATION($email: String!, $tempToken: String!) {
    verifyAccount(email: $email, tempToken: $tempToken) {
      id
      email
      isVerified
    }
  }
`;

const Verify = (props) => {
  const [value, setValue] = useState("");
  const [verifyAccount] = useMutation(VERIFY_ACCOUNT_MUTATION, {
    variables: {
      email: value,
      tempToken: props.tempToken,
    },
  });
  return (
    <StyledForm {...layout}>
      <h2>Valider votre compte</h2>
      <Item className="inputs">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          prefix={<MailOutlined />}
          type="email"
          placeholder="email"
        />
      </Item>
      <Item style={{ marginTop: "-1em" }}>
        <Link href="login">
          <Button onClick={verifyAccount} type="primary" htmlType="submit">
            Valider
          </Button>
        </Link>
      </Item>
    </StyledForm>
  );
};

Verify.propTypes = {
  tempToken: PropTypes.string.isRequired,
};

export default Verify;
