import { Menu } from "antd";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
  background-color: ${(props) => props.theme.lightgrey};
  margin: 0.4em 0 0 0;
  padding: 0;
  display: flex;
  li {
    padding: 0 1rem 0;
  }
  .modified-item:hover {
    border-bottom: 2px solid transparent !important;
  }
`;

export const SubNavbar = styled.nav`
  margin-top: 5rem;
  position: fixed;
  height: 55px;
  width: 100%;
  top: 0;
  z-index: 2;
  ul {
    display: flex;
    border-bottom: 2px solid transparent !important;
    justify-content: center;
  }
  .modified-item:hover {
    border-bottom: 2px solid transparent !important;
  }
`;

export default StyledMenu;
