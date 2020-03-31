import { Input } from "antd";

import Nav from "../nav/Nav";
import StyledHeader, { StyledSearch, Logo } from "./styles";
import SubNav from "../nav/SubNav";

const { Search } = Input;

const Header = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo></Logo>
        <StyledSearch>
          <Search
            placeholder="Trouver un article"
            onSearch={value => console.log(value)}
            style={{ width: 500, borderRadius: "1em" }}
          />
        </StyledSearch>
        <Nav />
      </div>
      <div className="sub-bar">
        <SubNav />
      </div>
    </StyledHeader>
  );
};

export default Header;
