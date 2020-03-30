import Nav from "../nav/Nav";
import StyledHeader from "./styles";
import SubNav from "../nav/SubNav";

const Header = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <Nav />
      </div>
      <div className="sub-bar">
        <SubNav />
      </div>
    </StyledHeader>
  );
};

export default Header;
