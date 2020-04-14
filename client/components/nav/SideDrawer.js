import { Drawer } from "antd";
import styled from "styled-components";

const StyledDrawer = styled(Drawer)``;

const SideDrawer = ({ children, visible, title, onClose }) => {
  return (
    <StyledDrawer
      width={"100vw"}
      visible={visible}
      onClose={onClose}
      title={title}
      placement="right"
      closable
      mask={false}
    >
      {children}
    </StyledDrawer>
  );
};

export default SideDrawer;
