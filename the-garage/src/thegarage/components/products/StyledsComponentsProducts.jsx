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

export const ContainerStyled = styled("div")(() => ({
  paddingTop: 20,
  color: "red",
}));

export const ContainerButtonStyled = styled("div")(() => ({
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

export const ContainerStyledPaginator = styled("div")(() => ({
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

export const CardImgStyle = styled(Card.Img)(({ theme }) => ({
  width: "286px",
  height: "196px",
  borderBottom: `solid 1px ${theme.colors.gray200}`,
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
  borderColor: theme.colors.gray200,
}));

export const ContainerNumberItemsStyled = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "40px",
  color: theme.colors.mainColor,
}));

export const ContainerVisualizationStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
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

export const MessageBrandStyled = styled(Navbar.Brand)(() => ({
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
  "& .page-item.active .page-link": {
    backgroundColor: theme.colors.mainColor,
    color: "white",
  },
}));

//IconosStars

export const IconStyled = styled(Navbar.Brand)(() => ({
  color: "#ECA206",
}));

export const IconStyledNot = styled(Navbar.Brand)(() => ({
  color: "#FF0000",
  "&:hover": {
    color: "#ECA206",
  },
}));

export const ButtonNotification = styled(Button)(({ theme }) => ({
  color: theme.colors.mainColor,
  background: "transparent",
  borderColor: theme.colors.mainColor,
  "&:hover": {
    background: theme.colors.mainColor,
    color: "white",
  },
}));

//Alert

export const AlertStyled = styled(Alert)(() => ({
  position: "fixed",
  top: "250px",
  left: "30%",
  width: "40%",
  zIndex: "9999",
}));

export const AlertWarningStyled = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.colors.mainColor,
  height: "70px",
  color: "white",
  fontSize: theme.fonts[0],
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  alignItems: "center",
  margin: "20px",
}));

//productDetail

export const CardStoreStyle = styled(Card)(({ theme }) => ({
  marginTop: "20px",
  backgroundColor: theme.colors.gray100,
  color: theme.colors.mainColor,
}));
export const CardStoreDescriptionStyle = styled("div")(() => ({
  width: "400px",
}));

export const ButtonCountStyled = styled(Button)(() => ({
  height: "50%",
  backgroundColor: "white",
}));

export const ColumnSheetStyle = styled("div")(({ theme }) => ({
  color: theme.colors.mainColor,
  display: "flex",
  flexDirection: "column",
  gap: "50px",
}));
export const PrincipalImg = styled("img")(() => ({
  height: "400px",
  width: "400px",
}));
export const SecondaryImg = styled("img")(() => ({
  height: "50px",
  width: "50px",
}));

export const AccordionStyle = styled(Accordion)(({ theme }) => ({
  "& * ": {
    color: theme.colors.mainColor,
  },
}));

export const CardDescroptionStyle = styled(Card.Text)(() => ({
  height: "70px",
  overflow: "hidden",
  whiteSpace: "normal",
  textOverflow: "ellipsis",
}));

export const DivColor = styled("div")(({ theme }) => ({
  color: theme.colors.mainColor,
  paddingTop: "50px",
}));

export const SpanColor = styled("span")(({ theme }) => ({
  color: theme.colors.mainColor,
  paddingTop: "50px",
}));
