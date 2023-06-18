import { Col, Container, Pagination, Row } from "react-bootstrap";
import Item from "./Item";
import Controls from "./Controls";
import Filter from "./Filter";

function ItemList() {
  return (
    <Container>
      <Row className="">
        <Controls />
      </Row>

      <Row className="border-top">
        <Col md={3}>
          <Filter />
        </Col>
        <Col md={9}>
          <div className="d-flex justify-content-between pt-5 ps-4 pe-5">
            <strong>
              <span> 122 Productos Encontrados</span>
            </strong>
            <div>
              <span>Visualizacion: </span>
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <i className="bi bi-distribute-vertical"></i>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-sm-around pt-5 ">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <div className="d-flex justify-content-center pt-3">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
