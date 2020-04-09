import { Fragment } from "react";
import Link from "next/link";
import NavStyles from "./styles";

import { useFetchUser } from "../../hooks/useFetchUser";

const Nav = () => {
  const currentUser = useFetchUser();

  return (
    <NavStyles>
      {currentUser && (
        <Fragment>
          <Link href="">
            <a>{currentUser.data.userName.toUpperCase()}</a>
          </Link>
          <Link href="favorites">
            <a>MES FAVORIS</a>
          </Link>
          <Link href="history">
            <a>HISTORIQUE</a>
          </Link>
        </Fragment>
      )}
      {!currentUser && (
        <Fragment>
          <Link href="">
            <a>ARTICLES</a>
          </Link>
          <Link href="login">
            <a>LOGIN</a>
          </Link>
        </Fragment>
      )}
    </NavStyles>
  );
};

export default Nav;
