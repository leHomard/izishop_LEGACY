import { Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";

import Nav from "../nav/Nav";
import StyledHeader, {
  SearchBarDiv,
  Logo,
  StyledNav,
  StyledSearch,
} from "./styles";
import SubNav from "../nav/SubNav";

const SubHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 2;
  left: 0;
  margin-bottom: 1rem;
`;

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
      </StyledHeader>
    </Fragment>
  );
};

export default Header;
