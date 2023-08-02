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
import { mockDataTestServices } from "../dataTest/dataMock";

import { useFilter } from "../../hooks/useFilter";
import { useState } from "react";
import { usePaginator } from "../../hooks/usePaginator";

export function ServicesPage() {
  const [data, setData] = useState(mockDataTestServices);

  const {
    selectedFilters,
    addFilter,
    deleteFilter,
    clean,
    checkFilter,
    setCheckFilter,
    dataFiltered,
  } = useFilter([], data);

  const ITEM_PER_PAGE = 5;

  const {
    totalPages,
    nextHandler,
    specificHandler,
    prevHandler,
    items,
    currentPage,
    setCurrentPage,
  } = usePaginator(dataFiltered, ITEM_PER_PAGE, 0);

  return (
    <Container>
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
            data={data}
            addFilter={addFilter}
            deleteFilter={deleteFilter}
            setCheckFilter={setCheckFilter}
            checkFilter={checkFilter}
          />
        </Col>
        <Col md={9}>
          <ContainerNumberItemsStyled>
            <strong>
              <span> {dataFiltered.length} Servicios Encontrados</span>
            </strong>
            <div>
              <span>Visualizacion: </span>
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <i className="bi bi-distribute-vertical"></i>
            </div>
          </ContainerNumberItemsStyled>
          <ContainerVisualizationStyled>
            {items.map((element) => (
              <Item key={element.id} item={element} isService={true} />
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
