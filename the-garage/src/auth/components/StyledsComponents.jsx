import styled from "@emotion/styled";

import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const MainConteiner = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  flexDirection: "column",
  backgroundColor: theme.colors.mainColor,
}));

export const TitlePg = styled("h1")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "10px",
  fontFamily: theme.fontFamily.titleFont,
  fontSize: theme.fonts[1],
  color: theme.colors.mainColor,
}));

export const TabsStyled = styled(Tabs)(({ theme }) => ({
  fontFamily: theme.fontFamily.mainFont,
  color: theme.colors.mainColor,
  fontSize: theme.fonts[4],
}));
export const TabStyled = styled(Tab)(({ theme }) => ({
  fontFamily: theme.fontFamily.mainFont,
  "&:hover": {
    backgroundColor: "gray",
    color: theme.colors.mainColor,
  },
}));

export const NavStyled = styled(Nav)(({ theme }) => ({
  fontFamily: theme.fontFamily.mainFont,
  color: theme.colors.mainColor,
}));

export const NavItemStyled = styled(Nav.Item)(({ theme }) => ({
  color: theme.colors.mainColor,
  display: "flex",
  justifyContent: "center",
  fontFamily: theme.fontFamily.mainFont,
}));

export const NavLinkStyled = styled(Nav.Link)(({ theme }) => ({
  color: theme.colors.mainColor,
  display: "flex",
  justifyContent: "center",
  fontSize: theme.fonts[6],
  backgroundColor: "white",
  fontFamily: theme.fontFamily.mainFont,
  "&:hover": {
    backgroundColor: "gray",
    color: theme.colors.mainColor,
  },
  "&:active": {
    backgroundColor: theme.colors.mainColor,
    color: "gray",
  },
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  color: "white",
  display: "flex",
  justifyContent: "center",
  fontSize: theme.fonts[4],
  backgroundColor: theme.colors.mainColor,
  fontFamily: theme.fontFamily.mainFont,
  "&:hover": {
    backgroundColor: "gray",
    color: theme.colors.mainColor,
  },
}));
