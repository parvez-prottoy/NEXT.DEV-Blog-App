import {
  Avatar,
  AvatarImage,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarList,
} from "keep-react";
import logo from "/public/logo.svg";
import { Link } from "react-router-dom";
import NavItem from "./UI/NavItem";
import Btn from "./UI/Btn";

const Navigation = () => {
  const isLogin = false;
  return (
    <header>
      <Navbar className="py-1">
        <NavbarContainer>
          <NavbarBrand className="cursor-pointer">
            <Link to="/">
              <img className="h-[45px]" src={logo} alt="Logo" />
            </Link>
          </NavbarBrand>
          <NavbarList>
            <NavItem text={"Home"} path={"/"} />
            <NavItem text={"Blogs"} path={"/blogs"} />
            <NavItem text={"Contact"} path={"/contact"} />
            <NavItem text={"About Us"} path={"/about"} />
          </NavbarList>
          {isLogin ? (
            <NavbarList className="cursor-pointer">
              <Dropdown placement="bottom-end">
                <DropdownAction asChild>
                  <Avatar>
                    <AvatarImage src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg" />
                  </Avatar>
                </DropdownAction>
                <DropdownContent className="border border-background">
                  <DropdownList>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownList>
                </DropdownContent>
              </Dropdown>
            </NavbarList>
          ) : (
            <NavbarList>
              <Btn text={"Login"} />
            </NavbarList>
          )}
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <NavItem text={"Home"} path={"/"} />
            <NavItem text={"Blogs"} path={"/blogs"} />
            <NavItem text={"Contact"} path={"/contact"} />
            <NavItem text={"About Us"} path={"/about"} />
            {isLogin ? (
              <Avatar>
                <AvatarImage src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg" />
              </Avatar>
            ) : (
              <Btn text={"Login"} />
            )}
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    </header>
  );
};

export default Navigation;
