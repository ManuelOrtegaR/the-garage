import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";

import {
  Item,
  CardStore,
  CardProduct_store,
  ProductSheet,
} from "../components";
import { BreadCrumbRoute } from "../components/products/BreadCrumbRoute";
import { useParams } from "react-router-dom";
import { useProducto } from "../../domain/useProducto";

export function ProductDetail() {
  const { id } = useParams();

  const { data, loading, error } = useProducto({ id });

  return (
    <Container>
      <Row>
        <BreadCrumbRoute />
      </Row>
      <div className="pb-5">
        {loading && <Spinner animation="border" variant="primary" />}
        {error && <Alert variant="danger">{error}</Alert>}

        {data && (
          <Row className="mt-5">
            <Col className="" md={4}>
              <ProductSheet item={data} />
            </Col>
            <Col md={8}>
              <CardProduct_store item={data} />
              <CardStore item={data} />
              <div className="pt-5">PRODUCTOS RECOMENDADOS</div>

              <div className="d-flex gap-1 ">
                <Item key={1} item={data} />
                <Item key={2} item={data} />
                <Item key={3} item={data} />
              </div>
              <div className="pt-5">VALORACIONES</div>
            </Col>
          </Row>
        )}
      </div>
    </Container>
  );
}
