import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.lightgrey};
  border-bottom: 5px solid ${(props) => props.theme.blue};
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
`;

export const SearchBarDiv = styled.div`
  margin-left: 3rem;
  flex: 1;
`;

export const StyledSearch = styled(Search)`
  width: 80%;
  border-radius: 1rem;
`;

export const Logo = styled.div`
  width: 150px;
`;

export default StyledHeader;
