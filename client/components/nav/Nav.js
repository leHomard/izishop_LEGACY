import { Menu, Avatar, Button } from "antd";
import Link from "next/link";
import StyledMenu from "./styles";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import {
  HeartOutlined,
  MailOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useFetchUser } from "../../hooks/useFetchUser";
import { QUERY_USER_INFO } from "../../hooks/useFetchUser";
import { Fragment } from "react";
import BtnComp from "../UI/Button";

const { Item, SubMenu } = Menu;

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;

const Nav = () => {
  const currentUser = useFetchUser();
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: QUERY_USER_INFO }],
  });

  return (
    <Fragment>
      {currentUser && currentUser.data && (
        <StyledMenu mode="horizontal">
          <Item className="modified-item">
            <Link href="additem">
              <a>
                <BtnComp
                  type="primary"
                  shape="round"
                  btnvalue="Ajouter un article"
                />
              </a>
            </Link>
          </Item>
          <SubMenu
            style={{ padding: "0" }}
            className="modified-item"
            title={
              <Avatar
                size="small"
                shape="circle"
                style={{ backgroundColor: "#2194ff" }}
                icon={<UserOutlined />}
              />
            }
          >
            <Item key="setting:1">Profil</Item>
            <Item key="setting:2">
              <a onClick={signout}>Se déconnecter</a>
            </Item>
          </SubMenu>
          <Item>
            <Link href="favorites">
              <HeartOutlined
                style={{ paddingTop: "0.6em", fontSize: "22px" }}
              />
            </Link>
          </Item>
          <Item>
            <Link href="history">
              <MailOutlined style={{ paddingTop: "0.6em", fontSize: "22px" }} />
            </Link>
          </Item>
          <Item>
            <Link href="history">
              <BellOutlined style={{ paddingTop: "0.6em", fontSize: "22px" }} />
            </Link>
          </Item>
        </StyledMenu>
      )}
      {currentUser && !currentUser.data && (
        <StyledMenu>
          <Item>
            <a>ARTICLES</a>
          </Item>
          <Item>
            <Link href="login">
              <a>
                <BtnComp
                  type="primary"
                  shape="round"
                  btnvalue="Rejoingnez nous"
                />
              </a>
            </Link>
          </Item>
          <Item>
            <QuestionCircleOutlined style={{ fontSize: "20px" }} />
          </Item>
        </StyledMenu>
      )}
    </Fragment>
  );
};

export default Nav;
