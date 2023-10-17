import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";

import {
  Item,
  Controls,
  Filter,
  Paginator,
  RowItemStyled,
  ContainerNumberItemsStyled,
  ContainerVisualizationStyled,
} from "../components";
import { useFilter } from "../../hooks/useFilter";
import { usePaginator } from "../../hooks/usePaginator";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useSearchParams } from "react-router-dom";
import { useProductos } from "../../domain/useProductos";

export function ItemList() {
  const { searchValue } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("offset") || 0);
  const [filtrosSeleccionadosAgrupados, setFiltrosSeleccionadosAgrupados] =
    useState({});
  const navigate = useNavigate();

  function cambiarPagina(newPage) {
    setPage(newPage);
  }

  const { data, dataMeta, loading, error, datosParaFiltros } = useProductos(
    page,
    searchValue,
    filtrosSeleccionadosAgrupados
  );

  const {
    selectedFilters,
    addFilter,
    deleteFilter,
    clean,
    checkFilter,
    setCheckFilter,
    dataFiltered,
    dataSearch,
  } = useFilter([], data, searchValue);

  const ITEM_PER_PAGE = 10;

  const {
    totalPages,
    nextHandler,
    specificHandler,
    prevHandler,
    currentPage,
    setCurrentPage,
  } = usePaginator(
    selectedFilters > 0 ? data : dataMeta.total,
    ITEM_PER_PAGE,
    page / 10,
    page
  );

  return (
    <Container className="">
      <Row>
        <Controls
          setFiltrosSeleccionadosAgrupados={setFiltrosSeleccionadosAgrupados}
          filters={selectedFilters}
          clean={clean}
          setCurrentPage={setCurrentPage}
        />
      </Row>

      <RowItemStyled className="">
        <Col md={3}>
          <Filter
            data={
              selectedFilters.length > 0 ? datosParaFiltros : datosParaFiltros
            }
            addFilter={addFilter}
            deleteFilter={deleteFilter}
            setCheckFilter={setCheckFilter}
            checkFilter={checkFilter}
            filtrosSeleccionadosAgrupados={filtrosSeleccionadosAgrupados}
            setFiltrosSeleccionadosAgrupados={setFiltrosSeleccionadosAgrupados}
          />
        </Col>
        <Col md={9}>
          <ContainerNumberItemsStyled>
            <strong>
              <span>Productos Encontrados</span>
            </strong>
          </ContainerNumberItemsStyled>
          <ContainerVisualizationStyled>
            {loading && <Spinner animation="border" variant="primary" />}
            {error && <Alert variant="danger">{error}</Alert>}
            {searchValue
              ? dataSearch.map((element) => (
                  <Item key={element.id} item={element} />
                ))
              : dataFiltered.map((element) => (
                  <Item key={element.id} item={element} />
                ))}
          </ContainerVisualizationStyled>
          <Paginator
            totalPages={totalPages}
            currentPage={currentPage}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            specificHandler={specificHandler}
            cambiarPagina={cambiarPagina}
          />
        </Col>
      </RowItemStyled>
    </Container>
  );
}
