import { NavbarItem } from "keep-react";

const NavItem = ({ text }) => {
  return (
    <NavbarItem className="text-secondary hover:text-primary hover:bg-inherit">
      {text}
    </NavbarItem>
  );
};

export default NavItem;
