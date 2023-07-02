import { Pagination } from "react-bootstrap";
import {
  ContainerStyledPaginator,
  PaginationStyled,
} from "./StyledsComponentsProducts";

export function Paginator() {
  return (
    <ContainerStyledPaginator>
      <PaginationStyled>
        <Pagination.First />
        <Pagination.Prev> Prev</Pagination.Prev>

        <Pagination.Item>{1}</Pagination.Item>

        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item active>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next> Next</Pagination.Next>
        <Pagination.Last />
      </PaginationStyled>
    </ContainerStyledPaginator>
  );
}
