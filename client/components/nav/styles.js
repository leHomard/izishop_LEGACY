import { Menu, Drawer } from "antd";
import styled from "styled-components";

export const StyledDrawer = styled(Drawer)`
  width: 100%;
`;

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
  @media (max-width: 1024px) {
    display: none;
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
