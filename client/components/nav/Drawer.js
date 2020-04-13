import { Drawer } from "antd";

const DrawerComp = ({ children, visible, title }) => {
  return (
    <Drawer visible={visible} title={title} placement="right">
      {children}
    </Drawer>
  );
};

export default DrawerComp;
