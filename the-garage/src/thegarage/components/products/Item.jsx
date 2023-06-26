import { useNavigate } from "react-router-dom";
import {
  ButtonStyledDetail,
  ButtonStyledSuccess,
  ContainerButtonStyled,
  ContainerStyled,
} from "./styledsComponentsProducts";
import { Card } from "react-bootstrap";

//DATA MOCK EXAMPLE
const mockData = {
  title: "Aceite de Motor",
  description:
    "Aceite sintético de alta calidad para motores de automóviles, com nivel de acetatos 3x2",
  price: "$50.00",
  category: "Lubricantes",
  store: "AutoParts",
  brand: "ACME",
  availability: {
    despacho: true,
    retiro: true,
  },
  rating: 4,
  userRole: "cliente",
};

export function Item() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/productDetail");
  }
  return (
    <ContainerStyled>
      <Card style={{ width: "17rem" }}>
        <Card.Img variant="top" src="https://placehold.co/288x196" />
        <Card.Body>
          <Card.Title>{mockData.title}</Card.Title>
          <Card.Text>{mockData.description}</Card.Text>
          <Card.Text className="fs-4">
            <strong>{mockData.price}</strong>
          </Card.Text>
          <Card.Text className="d-flex">
            {mockData.availability.despacho && (
              <i className="bi bi-check2-circle">Disponible para despacho</i>
            )}
            {mockData.availability.retiro && (
              <i className="bi bi-check2-circle">Disponible para retiro</i>
            )}
          </Card.Text>
          <Card.Text>
            {/* Creo array undefined con el numero de raiting */}
            {[...Array(mockData.rating)].map((_, index) => (
              <i key={index} className="bi bi-star-fill"></i>
            ))}
            {[...Array(5 - mockData.rating)].map((_, index) => (
              <i key={index} className="bi bi-star"></i>
            ))}

            <span>{mockData.rating}</span>
          </Card.Text>
          {mockData.userRole === "cliente" ? (
            <ContainerButtonStyled>
              <ButtonStyledSuccess variant="success">
                <i className="bi bi-cart-plus"></i> Agregar al Carrito
              </ButtonStyledSuccess>
              <ButtonStyledDetail
                onClick={handleClick}
                variant="danger"
                className="px-1 w-100"
              >
                <i className="bi bi-eye"></i> Ver Detalle
              </ButtonStyledDetail>
            </ContainerButtonStyled>
          ) : null}
        </Card.Body>
      </Card>
    </ContainerStyled>
  );
}
