import { Col, Container, Row } from "react-bootstrap";
import {
  Item,
  Controls,
  Filter,
  Paginator,
  RowItemStyled,
  ContainerNumberItemsStyled,
  ContainerVisualizationStyled,
} from "../components";
import { mockDataTest } from "../dataTest/dataMock";
import { useFilter } from "../../hooks/useFilter";
import { usePaginator } from "../../hooks/usePaginator";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function ItemList() {
  const { searchValue } = useParams();
  const [data, setData] = useState(mockDataTest);

  const {
    selectedFilters,
    addFilter,
    deleteFilter,
    clean,
    checkFilter,
    setCheckFilter,
    dataFiltered,
    dataSearch,
    dataSearch2,
  } = useFilter([], data, searchValue);

  const ITEM_PER_PAGE = 5;

  const {
    totalPages,
    nextHandler,
    specificHandler,
    prevHandler,
    items,
    currentPage,
    setCurrentPage,
  } = usePaginator(searchValue ? dataSearch : dataFiltered, ITEM_PER_PAGE, 0);

  return (
    <Container className="">
      <Row>
        <Controls
          filters={selectedFilters}
          clean={clean}
          setCurrentPage={setCurrentPage}
        />
      </Row>

      <RowItemStyled className="">
        <Col md={3}>
          <Filter
            data={searchValue ? dataSearch2 : data}
            addFilter={addFilter}
            deleteFilter={deleteFilter}
            setCheckFilter={setCheckFilter}
            checkFilter={checkFilter}
          />
        </Col>
        <Col md={9}>
          <ContainerNumberItemsStyled>
            <strong>
              <span>
                {" "}
                {searchValue ? dataSearch.length : dataFiltered.length}{" "}
                Productos Encontrados
              </span>
            </strong>
            <div>
              <span>Visualizacion: </span>
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <i className="bi bi-distribute-vertical"></i>
            </div>
          </ContainerNumberItemsStyled>
          <ContainerVisualizationStyled>
            {searchValue
              ? dataSearch.map((element) => (
                  <Item key={element.id} item={element} />
                ))
              : items.map((element) => (
                  <Item key={element.id} item={element} />
                ))}
          </ContainerVisualizationStyled>
          <Paginator
            totalPages={totalPages}
            currentPage={currentPage}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            specificHandler={specificHandler}
          />
        </Col>
      </RowItemStyled>
    </Container>
  );
}
