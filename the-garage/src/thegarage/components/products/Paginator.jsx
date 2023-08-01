import { Pagination } from "react-bootstrap";
import {
  ContainerStyledPaginator,
  PaginationStyled,
} from "./StyledsComponentsProducts";

export function Paginator({
  nextHandler,
  prevHandler,
  currentPage,
  totalPages,
  specificHandler,
}) {
  const specificPage = (page) => {
    specificHandler(page);
  };
  const generatePages = () => {
    const pages = Array.from({ length: totalPages }, (_, index) => (
      <Pagination.Item
        onClick={(event) => specificPage(index + 1)}
        active={currentPage + 1 === index + 1 ? true : false}
        key={index + 1}
      >
        {index + 1}
      </Pagination.Item>
    ));

    return pages;
  };
  return (
    <ContainerStyledPaginator>
      <PaginationStyled>
        <Pagination.Prev onClick={prevHandler}> Prev</Pagination.Prev>
        {generatePages()}
        <Pagination.Next onClick={nextHandler}> Next</Pagination.Next>
      </PaginationStyled>
    </ContainerStyledPaginator>
  );
}
