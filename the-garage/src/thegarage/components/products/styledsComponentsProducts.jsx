import styled from "@emotion/styled";
import { Button } from "react-bootstrap";

export const ContainerStyled = styled("div")(({ theme }) => ({
  paddingTop: 20,

  // color: theme.mainColor,
}));
export const ContainerButtonStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 1,

  // color: theme.mainColor,
}));

export const ButtonStyledSuccess = styled(Button)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.colors.mainColor,
  borderColor: theme.colors.mainColor,
  "&:hover": {
    backgroundColor: "gray",
    borderColor: theme.colors.mainColor,
  },

  // color: theme.mainColor,
}));

export const ButtonStyledDetail = styled(Button)(({ theme }) => ({
  width: "100%",
  // backgroundColor: "gray",
  // borderColor: theme.colors.mainColor,

  "&:hover": {
    backgroundColor: "gray",
    borderColor: theme.colors.mainColor,
  },
}));

export const ContainerStyledPaginator = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: 20,

  // color: theme.mainColor,
}));
