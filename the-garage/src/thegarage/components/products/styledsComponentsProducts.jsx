import styled from "@emotion/styled";
import {
  Accordion,
  Alert,
  Badge,
  Button,
  Card,
  Navbar,
  Pagination,
  Row,
} from "react-bootstrap";

export const ContainerStyled = styled("div")(({ theme }) => ({
  paddingTop: 20,
  color: "red",
}));
export const ContainerButtonStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 5,
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
  color: theme.colors.mainColor,
  width: "288px",
  height: "625px",
}));
export const CardTitleStyle = styled(Card.Title)(({ theme }) => ({
  height: "66px",
  borderBottom: `solid 1px ${theme.colors.gray200}`,
}));
export const CardAvalaibleStyle = styled(Card.Text)(({ theme }) => ({
  fontSize: "12px",
}));

export const ContainerBreadcumStyled = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 2,
  paddingTop: "50px",
  "& * *": {
    color: theme.colors.mainColor,
    textDecoration: "none",
  },
}));

// const BreadcumItemStyled = styled(Breadcrumb.Item)(({ theme }) => ({
//   color: theme.colors.mainColor,
//   fontFamily: theme.fontFamily.mainFont,
//   // fontSize: theme.fonts[4],
// }));
export const ContainerBadgeStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  paddingTop: "50px",
  paddingBottom: "50px",
  gap: 3,
}));

export const Badgestyled = styled(Badge)(({ theme }) => ({
  color: "white",
}));
export const H4Styled = styled("h4")(({ theme }) => ({
  color: theme.colors.mainColor,
}));

///////////////////// ITEM LIST
export const RowItemStyled = styled(Row)(({ theme }) => ({
  borderTop: "1px solid",
  // borderColor: theme.colors.mainColor,
  borderColor: theme.colors.gray200,
}));
export const ContainerNumberItemsStyled = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "40px",
  // paddingLeft: "30px",
  // paddingRight: "30px",
  color: theme.colors.mainColor,
}));
export const ContainerVisualizationStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
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

//Styles Paginator

export const PaginationStyled = styled(Pagination)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  "& * ": {
    color: theme.colors.mainColor,
    borderRadius: "5px",
  },
  "& * *": {
    color: theme.colors.mainColor,
  },
}));

//IconosStars

export const IconStyled = styled(Navbar.Brand)(({ theme }) => ({
  color: "#ECA206",
}));

//Alert

export const AlertStyled = styled(Alert)(({ theme }) => ({
  position: "fixed",
  top: "250px",
  left: "30%",
  width: "40%",
  zIndex: "9999",
}));

//productDetail

export const CardStoreStyle = styled(Card)(({ theme }) => ({
  backgroundColor: theme.colors.gray100,
  color: theme.colors.mainColor,
}));
export const CardStoreDescriptionStyle = styled("div")(({ theme }) => ({
  width: "400px",
}));

export const ButtonCountStyled = styled(Button)(({ theme }) => ({
  height: "50%",
  backgroundColor: "white",
}));

export const ColumnSheetStyle = styled("div")(({ theme }) => ({
  color: theme.colors.mainColor,
  display: "flex",
  flexDirection: "column",
  gap: "50px",
}));

export const AccordionStyle = styled(Accordion)(({ theme }) => ({
  "& * ": {
    color: theme.colors.mainColor,
  },
}));
