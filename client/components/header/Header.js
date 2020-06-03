import { Fragment, useState } from "react";
import Link from "next/link";

import Nav from "../nav/Nav";
import DrawerToggleButton from "../UI/DrawerToggleButton";
import StyledHeader, {
  SearchBarDiv,
  Logo,
  StyledNav,
  StyledSearch,
} from "./styles";
import SideDrawer from "../nav/SideDrawer";

const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <StyledHeader>
        <StyledNav>
          <Logo>
            <Link href="/">
              <a>
                <img src="/static/new-logo.png" />
              </a>
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
        <DrawerToggleButton onClick={() => setVisible(true)} />
        <SideDrawer
          title="Test"
          visible={visible}
          onClose={() => setVisible(false)}
        />
      </StyledHeader>
    </Fragment>
  );
};

export default Header;
