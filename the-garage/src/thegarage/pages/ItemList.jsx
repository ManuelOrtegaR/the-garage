import { Col, Container, Row } from "react-bootstrap";
import { Item, Controls, Filter, Paginator } from "../components";
import styled from "@emotion/styled";

const RowItemStyled = styled(Row)(({ theme }) => ({
  borderTop: "1px solid",
  // borderColor: theme.colors.mainColor,
  borderColor: "#1d426b",
}));
const ContainerNumberItemsStyled = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "40px",
  paddingLeft: "30px",
  paddingRight: "30px",
}));
const ContainerVisualizationStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  paddingTop: "40px",
}));

export function ItemList() {
  const products = [1, 2, 3, 4, 5, 6]; // Cantidad de productos que quiero mostrar
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
              <span> {products.length} Productos Encontrados</span>
            </strong>
            <div>
              <span>Visualizacion: </span>
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <i className="bi bi-distribute-vertical"></i>
            </div>
          </ContainerNumberItemsStyled>
          <ContainerVisualizationStyled>
            {products.map((element) => (
              <Item key={element} />
            ))}
          </ContainerVisualizationStyled>
          <Paginator />
        </Col>
      </RowItemStyled>
    </Container>
  );
}
