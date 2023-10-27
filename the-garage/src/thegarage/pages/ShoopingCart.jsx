import { Container, Card, Row, Col } from 'react-bootstrap';
import { Continue, TitleStyled } from '../components/car';
import { Divisor } from '../components/car/Divisor';
import { Description } from '../components/car/Description';
import CardElements from '../components/car/CardElements';
import CarCheckout from '../components/car/CarCheckout';
import { useCart } from '../store';

export const ShoppingCart = () => {
  const { state, dispatch } = useCart();
  return (
    <section>
      <Container className="pt-5 mb-5" style={{ minWidth: '700px' }}>
        <Card>
          <Card.Body className="p-4">
            <Continue />
            <Divisor />
            {state.length > 0 ? (
              state.map((company) => (
                <div key={company.id_empresa}>
                  <Row>
                    <Description
                      totalItems={company.totalItems}
                      nombre_empresa={company.nombre_empresa}
                    />
                  </Row>
                  <Row className="align-items-center">
                    <Col className="col-12 col-lg-8">
                      <CardElements
                        carElements={company.cart}
                        dispatch={dispatch}
                      />
                    </Col>
                    <Col className="col-12 col-lg-4">
                      <CarCheckout
                        cart={company}
                        total={company.total}
                        id_empresa={company.id_empresa}
                        dispatch={dispatch}
                      />
                    </Col>
                  </Row>
                </div>
              ))
            ) : (
              <TitleStyled>No hay productos en el carrito</TitleStyled>
            )}
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};
