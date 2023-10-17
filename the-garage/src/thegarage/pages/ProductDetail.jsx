import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";

import {
  Item,
  CardStore,
  CardProduct_store,
  ProductSheet,
  MessageDivStyled,
  H4Styled,
  DivColor,
  SpanColor,
} from "../components";
import { BreadCrumbRoute } from "../components/products/BreadCrumbRoute";
import { useParams } from "react-router-dom";
import { useProducto } from "../../domain/useProducto";
import { useProductosCompanyTop } from "../../domain/useProductsCompany";
import { CardValorations } from "../components/products/CardValorations";

export function ProductDetail() {
  const { id } = useParams();

  const { data, loading, error } = useProducto({ id });

  const {
    data: dataTop,
    loading: loadingTop,
    error: errorTop,
  } = useProductosCompanyTop({ id_empresa: data?.id_empresa });

  return (
    <Container>
      <Row>
        {data?.nombre && <BreadCrumbRoute nameProducto={data.nombre} />}
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
              <DivColor>PRODUCTOS RECOMENDADOS</DivColor>

              <div className="d-flex gap-1 ">
                {loadingTop && <Spinner animation="border" variant="primary" />}
                {errorTop && <Alert variant="danger">{errorTop}</Alert>}
                {dataTop.length === 0 ? (
                  <SpanColor>
                    No hay productos recomendados.{" "}
                    <i className="bi bi-x-circle-fill"></i>
                  </SpanColor>
                ) : (
                  dataTop.map((item) => (
                    <Item key={item.id} item={item} isService={false} />
                  ))
                )}
              </div>
              <DivColor>VALORACIONES</DivColor>
              {data.valoraciones.length === 0 ? (
                <SpanColor>
                  No hay Valoraciones del producto.{" "}
                  <i className="bi bi-x-circle-fill"></i>
                </SpanColor>
              ) : (
                data.valoraciones.map((item) => (
                  <CardValorations
                    key={item.comentarios}
                    item={item}
                  ></CardValorations>
                ))
              )}
            </Col>
          </Row>
        )}
      </div>
    </Container>
  );
}
