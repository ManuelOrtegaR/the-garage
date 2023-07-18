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

export function ServicesPage() {
  const { selectedFilters, addFilter, deleteFilter, clean } = useFilter();

  //Estado para el listado de elementos que vienesn de BD API
  const [data, setData] = useState(mockDataTestServices);
  //limito a 10 por pagina
  const ITEM_PER_PAGE = 5;
  const [items, setItems] = useState([...data].splice(0, ITEM_PER_PAGE));

  //pagina actual
  const [currentPage, setCurrentPage] = useState(0);
  //totalPages
  const totalPages = Math.ceil(data.length / ITEM_PER_PAGE);

  //Funciones para paginacion
  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEM_PER_PAGE;
    if (firstIndex >= data.length) {
      return;
    }
    setItems([...data].splice(firstIndex, ITEM_PER_PAGE));
    setCurrentPage(nextPage);
  };
  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;

    const firstIndex = prevPage * ITEM_PER_PAGE;
    setItems([...data].splice(firstIndex, ITEM_PER_PAGE));
    setCurrentPage(prevPage);
  };

  const specificHandler = (specificPage) => {
    const firstIndex = (specificPage - 1) * ITEM_PER_PAGE;
    setItems([...data].splice(firstIndex, ITEM_PER_PAGE));
    setCurrentPage(specificPage - 1);
    console.log(specificPage);
  };

  return (
    <Container>
      <Row>
        <Controls filters={selectedFilters} clean={clean} />
      </Row>

      <RowItemStyled className="">
        <Col md={3}>
          <Filter addFilter={addFilter} deleteFilter={deleteFilter} />
        </Col>
        <Col md={9}>
          <ContainerNumberItemsStyled>
            <strong>
              <span> {data.length} Servicios Encontrados</span>
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
