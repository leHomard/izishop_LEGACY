import Link from "next/link";
import { Menu } from "antd";
import { SubNavbar } from "./styles";

const { Item } = Menu;

const SubNav = () => {
  return (
    <SubNavbar>
      <Menu mode="horizontal">
        <Item className="modified-item">
          <Link href="women-category">
            <a>Femmes</a>
          </Link>
        </Item>
        <Item className="modified-item">
          <Link href="women-category">
            <a>Hommes</a>
          </Link>
        </Item>
        <Item className="modified-item">
          <Link href="women-category">
            <a>Enfants</a>
          </Link>
        </Item>
        <Item className="modified-item">
          <Link href="women-category">
            <a>Maison</a>
          </Link>
        </Item>
      </Menu>
    </SubNavbar>
  );
};

export default SubNav;
