import { Menu } from "antd";
import Link from "next/link";
import NavStyles, { StyledSubMenu } from "./styles";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import { useFetchUser } from "../../hooks/useFetchUser";
import { QUERY_USER_INFO } from "../../hooks/useFetchUser";

const { Item } = Menu;

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;

const Nav = () => {
  const currentUser = useFetchUser();
  const [signout, { data, error, loading }] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: QUERY_USER_INFO }],
  });

  return (
    <NavStyles>
      {currentUser && currentUser.data && (
        <Menu style={{ backgroundColor: "#f6f6f6" }} mode="horizontal">
          <StyledSubMenu
            title={<span>{currentUser.data.userName.toUpperCase()}</span>}
          >
            <Item key="setting:1">Profil</Item>
            <Item key="setting:2">
              <a onClick={signout}>Se déconnecter</a>
            </Item>
          </StyledSubMenu>
          <Item>
            <Link href="history">
              <a>HISTORIQUE</a>
            </Link>
          </Item>
          <Item>
            <Link href="favorites">
              <a>FAVORIS</a>
            </Link>
          </Item>
        </Menu>
      )}
      {currentUser && !currentUser.data && (
        <Menu>
          <Menu.Item>
            <a>ARTICLES</a>
          </Menu.Item>
          <Menu.Item>
            <Link href="login">
              <a>LOGIN</a>
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </NavStyles>
  );
};

export default Nav;
