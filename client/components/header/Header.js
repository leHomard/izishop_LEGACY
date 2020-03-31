import { Input } from "antd";

import Nav from "../nav/Nav";
import StyledHeader, { StyledSearch } from "./styles";
import SubNav from "../nav/SubNav";

const { Search } = Input;

const Header = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <StyledSearch>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 500 }}
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
