/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

import { useProductos } from '../../domain/useProductos';
import { useFilter } from '../../hooks/useFilter';
import { usePaginator } from '../../hooks/usePaginator';
import {
  ContainerNumberItemsStyled,
  ContainerVisualizationStyled,
  Controls,
  Filter,
  Item,
  Paginator,
  RowItemStyled,
} from '../components';

export function ItemList() {
  const { searchValue } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('offset') || 0);
  const [filtrosSeleccionadosAgrupados, setFiltrosSeleccionadosAgrupados] =
    useState({});
  const location = useLocation();

  const { search: urlFilter } = location;

  function showToast() {
    toast.success('Producto agregado al carrito', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }

  function cambiarPagina(newPage) {
    setPage(newPage);
  }

  const { data, dataMeta, loading, error, datosParaFiltros } = useProductos(
    page,
    searchValue,
    filtrosSeleccionadosAgrupados,
    urlFilter,
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
  } = useFilter([], data, searchValue, urlFilter);

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
    page,
  );

  return (
    <Container className="" style={{ minWidth: '700px' }}>
      <Row className="my-5 w-100">
        <Controls
          setFiltrosSeleccionadosAgrupados={setFiltrosSeleccionadosAgrupados}
          filters={selectedFilters}
          clean={clean}
          setCurrentPage={setCurrentPage}
        />
      </Row>

      <RowItemStyled className="">
        <Col className="col-12 col-md-3">
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
        <Col className="col-12 col-md-9">
          <ContainerNumberItemsStyled className="pt-3 mb-2">
            <strong>
              <span>Productos Encontrados</span>
            </strong>
          </ContainerNumberItemsStyled>
          <ContainerVisualizationStyled>
            {loading && <Spinner animation="border" variant="primary" />}
            {error && <Alert variant="danger">{error}</Alert>}
            {!loading && (
              <>
                {dataSearch.length === 0 && dataFiltered.length === 0 ? (
                  <span>No se encontraron resultados</span>
                ) : null}

                {searchValue
                  ? dataSearch.map((element) => (
                      <Item
                        key={element.id}
                        item={element}
                        showToast={showToast}
                      />
                    ))
                  : dataFiltered.map((element) => (
                      <Item
                        key={element.id}
                        item={element}
                        showToast={showToast}
                      />
                    ))}
              </>
            )}
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
      <ToastContainer />
    </Container>
  );
}
