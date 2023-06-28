import styled from "@emotion/styled";
import { Badge, Button, Card, Navbar, Row } from "react-bootstrap";

export const ContainerStyled = styled("div")(({ theme }) => ({
  paddingTop: 20,
}));
export const ContainerButtonStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 1,
}));

export const ButtonStyledSuccess = styled(Button)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.colors.mainColor,
  borderColor: theme.colors.mainColor,
  color: "white",
  "&:hover": {
    backgroundColor: "gray",
    borderColor: theme.colors.mainColor,
  },
}));

export const ButtonStyledDetail = styled(Button)(({ theme }) => ({
  width: "100%",

  "&:hover": {
    backgroundColor: "gray",
    borderColor: theme.colors.mainColor,
  },
}));

export const ContainerStyledPaginator = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: 20,
}));
export const CardStyle = styled(Card)(({ theme }) => ({
  borderColor: theme.colors.mainColor,
  boxShadow: `3px 3px 3px ${theme.colors.mainColor}`,
}));

export const ContainerBreadcumStyled = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 2,
  paddingTop: "50px",
}));

// const BreadcumItemStyled = styled(Breadcrumb.Item)(({ theme }) => ({
//   color: theme.colors.mainColor,
//   fontFamily: theme.fontFamily.mainFont,
//   // fontSize: theme.fonts[4],
// }));
export const ContainerBadgeStyled = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "50px",
  paddingBottom: "50px",
}));

export const Badgestyled = styled(Badge)(({ theme }) => ({
  backgroundColor: theme.colors.mainColor,
}));
export const H4Styled = styled("h4")(({ theme }) => ({
  color: theme.colors.mainColor,
}));

///////////////////// ITEM LIST
export const RowItemStyled = styled(Row)(({ theme }) => ({
  borderTop: "1px solid",
  // borderColor: theme.colors.mainColor,
  borderColor: "#1d426b",
}));
export const ContainerNumberItemsStyled = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "40px",
  paddingLeft: "30px",
  paddingRight: "30px",
  color: theme.colors.mainColor,
}));
export const ContainerVisualizationStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  paddingTop: "40px",
  color: theme.colors.mainColor,
}));

//chat
export const MessageDivStyled = styled("div")(({ theme }) => ({
  backgroundColor: theme.colors.mainColor,
  color: "white",
}));

export const MessageNavbarStyled = styled(Navbar)(({ theme }) => ({
  backgroundColor: theme.colors.mainColor,
  color: "white",
  "&:hover": {
    backgroundColor: "gray",
  },
}));
export const MessageBrandStyled = styled(Navbar.Brand)(({ theme }) => ({
  color: "white",
}));
