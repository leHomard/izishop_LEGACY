import Link from "next/link";
import NavStyles from "./styles";

const SubNav = () => {
  return (
    <NavStyles subNav>
      <Link href="woman-category">
        <a>Femmes</a>
      </Link>
      <Link href="men-category">
        <a>Hommes</a>
      </Link>
      <Link href="children-category">
        <a>Enfants</a>
      </Link>
      <Link href="home-category">
        <a>Maison</a>
      </Link>
    </NavStyles>
  );
};

export default SubNav;
