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

export function ItemList() {
  // const products = [1, 2, 3, 4, 5, 6]; // Cantidad de productos que quiero mostrar
  return (
    <Container>
      <Row>
        <Controls />
      </Row>

      <RowItemStyled className="">
        <Col md={3}>
          <Filter />
        </Col>
        <Col md={9}>
          <ContainerNumberItemsStyled>
            <strong>
              <span> {mockDataTest.length} Productos Encontrados</span>
            </strong>
            <div>
              <span>Visualizacion: </span>
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <i className="bi bi-distribute-vertical"></i>
            </div>
          </ContainerNumberItemsStyled>
          <ContainerVisualizationStyled>
            {mockDataTest.map((element) => (
              <Item key={element.id} item={element} />
            ))}
          </ContainerVisualizationStyled>
          <Paginator />
        </Col>
      </RowItemStyled>
    </Container>
  );
}
