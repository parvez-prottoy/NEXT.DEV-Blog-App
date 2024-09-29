import { NavbarItem } from "keep-react";
import { Link } from "react-router-dom";

const NavItem = ({ text, path }) => {
  return (
    <Link to={path}>
      <NavbarItem className="text-secondary hover:text-primary hover:bg-inherit">
        {text}
      </NavbarItem>
    </Link>
  );
};

export default NavItem;
