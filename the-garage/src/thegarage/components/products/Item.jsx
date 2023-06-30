import { useNavigate } from "react-router-dom";
import {
  ButtonStyledDetail,
  ButtonStyledSuccess,
  CardStyle,
  ContainerButtonStyled,
  ContainerStyled,
} from "./StyledsComponentsProducts";
import { BtnDangerSubmitStyled, BtnSubmitStyled } from "../../../components";
import { Alert, Card } from "react-bootstrap";
import { useState } from "react";

//DATA MOCK EXAMPLE
// const mockData = {
//   title: "Aceite motor Moly sintetico 5X30",
//   description:
//     "Aceite sintético de alta calidad para motores de automóviles, com nivel de acetatos 3x2",
//   price: "$54,999",
//   category: "Lubricantes",
//   store: "AutoParts",
//   brand: "ACME",
//   availability: {
//     despacho: true,
//     retiro: true,
//   },
//   rating: 4,
// };

const userTest = { userRole: "cliente" };

export function Item({ item }) {
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();
  function handleClick() {
    navigate("/productDetail");
  }

  function handleClickSuceess() {
    // navigate("/shoppingCart");
    setShowAlert(!showAlert);
  }

  return (
    <ContainerStyled>
      <CardStyle style={{ width: "17rem" }}>
        <Card.Img variant="top" src="https://placehold.co/288x196" />
        <Card.Body>
          <Card.Title className="border-bottom">{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text className="fs-4">
            <strong>{item.price}</strong>
          </Card.Text>
          <Card.Text className="d-flex">
            {item.availability.despacho && (
              <i className="bi bi-check2-circle">Disponible para despacho</i>
            )}
            {item.availability.retiro && (
              <i className="bi bi-check2-circle">Disponible para retiro</i>
            )}
          </Card.Text>
          <Card.Text>
            {/* Creo array undefined con el numero de raiting */}
            {[...Array(item.rating)].map((_, index) => (
              <i key={index} className="bi bi-star-fill"></i>
            ))}
            {[...Array(5 - item.rating)].map((_, index) => (
              <i key={index} className="bi bi-star"></i>
            ))}

            <span> {item.rating} </span>
          </Card.Text>
          {userTest.userRole === "cliente" ? (
            <ContainerButtonStyled>
              {!showAlert ? (
                <BtnSubmitStyled onClick={handleClickSuceess} variant="success">
                  <i className="bi bi-cart-plus"></i> Agregar al Carrito
                </BtnSubmitStyled>
              ) : (
                <Alert
                  variant="success"
                  onClose={handleClickSuceess}
                  dismissible
                >
                  Producto agregado
                </Alert>
              )}
              {/* <BtnSubmitStyled onClick={handleClickSuceess} variant="success">
                <i className="bi bi-cart-plus"></i> Agregar al Carrito
              </BtnSubmitStyled> */}
              {/* {showAlert && (
                <Alert
                  variant="success"
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  Producto agregado al carrito.
                </Alert>
              )} */}
              <BtnDangerSubmitStyled
                onClick={handleClick}
                variant="danger"
                className="px-1 w-100"
              >
                <i className="bi bi-eye"></i> Ver Detalle
              </BtnDangerSubmitStyled>
            </ContainerButtonStyled>
          ) : null}
        </Card.Body>
      </CardStyle>
    </ContainerStyled>
  );
}
