import styled from "@emotion/styled";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

export const NavbarStyled = styled(Navbar)(({ theme, ...props }) => ({
  backgroundColor: theme.colors.mainColor,
  display: "flex",
  flexDirection: "column",
  position: props.position,
  marginTop: props.margin,
  zIndex: props.zIndex,
  // top: 0,
  // width: '100%',
  // overflow: 'hidden',
}));

export const ContainerNavStyled = styled(Container)(({ theme }) => ({
  gap: 30,
  marginTop: "0px",
  marginBottom: "10px",
  paddingLeft: "30px",
  paddingRight: "30px",
  maxWidth: "100%",
}));

export const LoginStyled = styled(NavLink)(({ theme }) => ({
  display: "flex",
  border: "1px solid white",
  borderRadius: "4px",
  width: "100%",
  maxWidth: "230px",
  height: "35px",
  textDecoration: "none",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "white",
    color: theme.colors.mainColor,
  },
}));

export const UserContainer = styled("div")(() => ({
  display: "flex",
  width: "350px",
  justifyContent: "end",
  gap: 10,
  alignItems: "center",
  color: "white",
}));

export const NavLinkStyled = styled(NavLink)(({ ...props }) => ({
  margin: "0 10px",
  color: "white",
  textDecoration: "none",
  "&:hover": {
    color: "white",
    fontWeight: "bold",
  },
}));

export const NavDropDownStyled = styled(NavDropdown)(({ theme }) => ({
  border: "1px solid white",
  borderRadius: "5px",
  backgroundColor: theme.colors.mainColor,
}));

export const FormSelectStyled = styled(Form.Select)(({ theme }) => ({
  maxWidth: "270px",
  color: "white",
  backgroundColor: theme.colors.mainColor,
  appearance: "listbox",
  backgroundImage: "none",
  border: `1px solid ${theme.colors.mainColor}`,
  padding: "8px",
  "&:hover": {
    border: "1px solid white",
  },
}));

export const IconContainer = styled("img")(({ ...props }) => ({
  maxWidth: props.maxWidth || "30px",
  borderRadius: props.borderRadius,
}));
