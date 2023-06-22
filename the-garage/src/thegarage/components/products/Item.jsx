import { Button, Card } from 'react-bootstrap';

export function Item() {
  return (
    <div className="pt-2">
      <Card className="card" style={{ width: '17rem' }}>
        <Card.Img
          className="card__img"
          variant="top"
          src="https://placehold.co/288x196"
        />
        <Card.Body className="card__body">
          <Card.Title className="card__titlle">Refrigerante</Card.Title>
          <Card.Text className="card_text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Card.Text className="card_text fs-4">
            <strong>$120.000</strong>
          </Card.Text>
          <Card.Text className="card_text d-flex">
            <i className="bi bi-check2-circle">Disponible para despacho</i>
            <i className="bi bi-check2-circle">Disponible para retiro</i>
          </Card.Text>
          <Card.Text>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
            <span>(4)</span>
          </Card.Text>
          <div className="d-flex justify-content-between gap-1">
            <Button className="px-1 w-100" variant="success">
              <i className="bi bi-cart-plus"></i> Agregar al Carrito
            </Button>
            {/* <Button className="px-4" variant="primary">
              Ver Detalle
            </Button> */}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
