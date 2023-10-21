import { Container, Card } from 'react-bootstrap';
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
      <Container className="pt-5 mb-5">
        <Card>
          <Card.Body className="p-4">
            <Continue />
            <Divisor />
            {state.length > 0 ? (
              state.map((company) => (
                <div key={company.id_empresa} className="d-flex">
                  <div className="w-100">
                    <Description
                      totalItems={company.totalItems}
                      nombre_empresa={company.nombre_empresa}
                    />
                    <CardElements
                      carElements={company.cart}
                      dispatch={dispatch}
                    />
                  </div>
                  <CarCheckout
                    cart={company}
                    total={company.total}
                    id_empresa={company.id_empresa}
                    dispatch={dispatch}
                  />
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
