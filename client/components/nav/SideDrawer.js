import { Drawer } from "antd";

const SideDrawer = ({ children, visible, title }) => {
  return (
    <Drawer visible={visible} title={title} placement="right">
      {children}
    </Drawer>
  );
};

export default SideDrawer;
