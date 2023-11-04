import { Pagination } from 'react-bootstrap';
import {
  ContainerStyledPaginator,
  PaginationStyled,
} from './StyledsComponentsProducts';
import { useLocation, useNavigate } from 'react-router-dom';

export function Paginator({
  nextHandler,
  prevHandler,
  currentPage,
  totalPages,
  specificHandler,
  cambiarPagina,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const specificPage = (page) => {
    const rutaActual = location.pathname;

    specificHandler(page);

    navigate(`${rutaActual}?offset=${(page - 1) * 10}`);
    cambiarPagina((page - 1) * 10);
  };

  const irAsiguientePagina = () => {
    if (currentPage + 1 < totalPages) {
      specificPage(currentPage + 2);
      nextHandler();
    }
  };

  const irAPaginaAnterior = () => {
    if (currentPage > 0) {
      specificPage(currentPage);
      prevHandler();
    }
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
        <Pagination.Prev onClick={irAPaginaAnterior}> Anterior</Pagination.Prev>
        {generatePages()}
        <Pagination.Next onClick={irAsiguientePagina}>
          Siguiente
        </Pagination.Next>
      </PaginationStyled>
    </ContainerStyledPaginator>
  );
}
