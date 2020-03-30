import Link from "next/link";
import NavStyles from "./styles";

const Nav = () => {
  return (
    <NavStyles>
      <Link href="login">
        <a>Login</a>
      </Link>
      <Link href="favorits">
        <a>Mes Favoris</a>
      </Link>
      <Link href="history">
        <a>Historique</a>
      </Link>
    </NavStyles>
  );
};

export default Nav;
