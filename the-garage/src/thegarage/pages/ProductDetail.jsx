import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';

import {
  Item,
  CardStore,
  CardProduct_store,
  ProductSheet,
  MessageDivStyled,
  H4Styled,
  DivColor,
  SpanColor,
} from '../components';
import { BreadCrumbRoute } from '../components/products/BreadCrumbRoute';
import { useParams } from 'react-router-dom';
import { useProducto } from '../../domain/useProducto';
import { useProductosCompanyTop } from '../../domain/useProductsCompany';
import { CardValorations } from '../components/products/CardValorations';

export function ProductDetail() {
  const { id } = useParams();

  const { data, loading, error } = useProducto({ id });

  const {
    data: dataTop,
    loading: loadingTop,
    error: errorTop,
  } = useProductosCompanyTop({ id_empresa: data?.id_empresa });

  return (
    <Container style={{ minWidth: '700px' }} className="px-5">
      <Row className="my-5 w-100">
        {data?.nombre && <BreadCrumbRoute nameProducto={data.nombre} />}
      </Row>

      {loading && <Spinner animation="border" variant="primary" />}
      {error && <Alert variant="danger">{error}</Alert>}

      {data && (
        <Row className="my-5 w-100">
          <Col className="col-12 col-md-4 mb-5">
            <ProductSheet item={data} />
          </Col>
          <Col className="col-12 col-md-8">
            <CardProduct_store item={data} />
            <CardStore item={data} />
            <DivColor>PRODUCTOS RECOMENDADOS</DivColor>

            <div className="d-flex gap-1 ">
              {loadingTop && <Spinner animation="border" variant="primary" />}
              {errorTop && <Alert variant="danger">{errorTop}</Alert>}
              {dataTop.length === 0 ? (
                <SpanColor>
                  No hay productos recomendados.{' '}
                  <i className="bi bi-x-circle-fill"></i>
                </SpanColor>
              ) : (
                dataTop.map((item) => <Item key={item.id} item={item} />)
              )}
            </div>
            <DivColor>VALORACIONES</DivColor>
            {data.valoraciones.length === 0 ? (
              <SpanColor>
                No hay Valoraciones del producto.{' '}
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
    </Container>
  );
}
