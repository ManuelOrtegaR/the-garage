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
        {/* <Pagination.First /> */}
        <Pagination.Prev onClick={prevHandler}> Prev</Pagination.Prev>
        {generatePages()}

        {/* <Pagination.Item>{1}</Pagination.Item>

        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item active={false}>{totalPages}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item> */}
        <Pagination.Next onClick={nextHandler}> Next</Pagination.Next>
        {/* <Pagination.Last /> */}
      </PaginationStyled>
    </ContainerStyledPaginator>
  );
}
