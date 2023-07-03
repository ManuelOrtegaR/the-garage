import styled from "@emotion/styled";
import { Card } from "react-bootstrap";

export const DivisorHr = styled("hr")(({ theme }) => ({
  borderColor: theme.colors.mainColor,
}));

export const DescriptionStyled = styled("div")(({ theme }) => ({
  color: theme.colors.mainColor,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",
}));

export const CardElementStyle = styled(Card)(({ theme }) => ({
  color: theme.colors.mainColor,
}));

export const CardChekoutStyle = styled(Card)(({ theme }) => ({
  backgroundColor: theme.colors.mainColor,
  color: "white",
}));
