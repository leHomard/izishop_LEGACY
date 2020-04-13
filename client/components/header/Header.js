import { Fragment } from "react";
import Link from "next/link";

import Nav from "../nav/Nav";
import DrawerToggleButton from "../UI/DrawerToggleButton";
import StyledHeader, {
  SearchBarDiv,
  Logo,
  StyledNav,
  StyledSearch,
} from "./styles";

const Header = () => {
  return (
    <Fragment>
      <StyledHeader>
        <StyledNav>
          <Logo>
            <Link href="/">
              <a>Vinted-Clone</a>
            </Link>
          </Logo>
          <SearchBarDiv>
            <StyledSearch
              placeholder="Trouver un article"
              onSearch={(value) => console.log(value)}
            />
          </SearchBarDiv>
          <Nav />
        </StyledNav>
        <DrawerToggleButton />
      </StyledHeader>
    </Fragment>
  );
};

export default Header;
