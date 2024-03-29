import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.lightgrey};
  border-bottom: 4px solid ${(props) => props.theme.blue};
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  @media (max-width: 890px) {
    width: 100%;
  }
`;

export const SearchBarDiv = styled.div`
  margin-left: 3rem;
  flex: 1;
  @media (max-width: 460px) {
    margin-left: 1rem;
  }
`;

export const StyledSearch = styled(Search)`
  width: 80%;
  border-radius: 1rem;
`;

export const Logo = styled.div`
  width: 150px;
  padding-top: 3px;
  @media (max-width: 890px) {
    width: 80px;
  }
  img {
    width: 185px;
  }
`;

export default StyledHeader;
