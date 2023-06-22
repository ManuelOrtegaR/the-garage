import { Pagination } from "react-bootstrap";
import styled from "@emotion/styled";

const ContainerStyled = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: 20,
  // color: theme.mainColor,
}));

export function Paginator() {
  return (
    // <div className="d-flex justify-content-center pt-3">
    <ContainerStyled>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      {/* </div> */}
    </ContainerStyled>
  );
}
