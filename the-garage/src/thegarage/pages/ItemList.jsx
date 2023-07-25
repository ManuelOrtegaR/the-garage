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
import { useEffect, useState } from "react";

export function ItemList() {
  //Estado para el listado de elementos que vienesn de BD API
  const [data, setData] = useState(mockDataTest);

  const {
    selectedFilters,
    addFilter,
    deleteFilter,
    clean,
    checkFilter,
    setCheckFilter,
    dataFiltered,
  } = useFilter([], data);

  //limito a 10 por pagina
  const ITEM_PER_PAGE = 5;

  const [items, setItems] = useState(
    [...dataFiltered].splice(0, ITEM_PER_PAGE)
  );

  useEffect(() => {
    // Aquí actualizamos 'items' con los nuevos datos filtrados
    setItems([...dataFiltered].splice(0, ITEM_PER_PAGE));
  }, [dataFiltered]);

  //pagina actual
  const [currentPage, setCurrentPage] = useState(0);
  //totalPages
  const totalPages = Math.ceil(dataFiltered.length / ITEM_PER_PAGE);

  //Funciones para paginacion
  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEM_PER_PAGE;
    if (firstIndex >= dataFiltered.length) {
      return;
    }
    setItems([...dataFiltered].splice(firstIndex, ITEM_PER_PAGE));
    setCurrentPage(nextPage);
  };
  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;

    const firstIndex = prevPage * ITEM_PER_PAGE;
    setItems([...dataFiltered].splice(firstIndex, ITEM_PER_PAGE));
    setCurrentPage(prevPage);
  };

  const specificHandler = (specificPage) => {
    const firstIndex = (specificPage - 1) * ITEM_PER_PAGE;
    setItems([...dataFiltered].splice(firstIndex, ITEM_PER_PAGE));
    setCurrentPage(specificPage - 1);
    // console.log(specificPage);
  };

  return (
    <Container>
      <Row>
        <Controls filters={selectedFilters} clean={clean} />
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
              <span> {dataFiltered.length} Productos Encontrados</span>
            </strong>
            <div>
              <span>Visualizacion: </span>
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <i className="bi bi-distribute-vertical"></i>
            </div>
          </ContainerNumberItemsStyled>
          <ContainerVisualizationStyled>
            {items.map((element) => (
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
