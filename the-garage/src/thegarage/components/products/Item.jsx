import { useNavigate } from "react-router-dom";
import {
  AlertStyled,
  CardAvalaibleStyle,
  CardStyle,
  CardTitleStyle,
  ContainerButtonStyled,
  ContainerStyled,
  IconStyled,
} from "./StyledsComponentsProducts";
import { BtnDangerSubmitStyled, BtnSubmitStyled } from "../../../components";
import { Alert, Card } from "react-bootstrap";
import { useState } from "react";

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
      <CardStyle>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <CardTitleStyle>{item.title}</CardTitleStyle>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text className="fs-4">
            <strong>{item.price}</strong>
          </Card.Text>
          <CardAvalaibleStyle>
            {item.availability.despacho ? (
              <i className="bi bi-check"></i>
            ) : (
              <i className="bi bi-x"></i>
            )}
            Disponible para Despacho
          </CardAvalaibleStyle>
          <CardAvalaibleStyle>
            {item.availability.retiro ? (
              <i className="bi bi-check"></i>
            ) : (
              <i className="bi bi-x"></i>
            )}
            Disponible para Retiro
          </CardAvalaibleStyle>
          <Card.Text>
            {/* Creo array undefined con el numero de raiting */}
            {[...Array(item.rating)].map((_, index) => (
              <IconStyled key={index} className="bi bi-star-fill"></IconStyled>
            ))}
            {[...Array(5 - item.rating)].map((_, index) => (
              <IconStyled key={index} className="bi bi-star"></IconStyled>
            ))}

            <span> {item.rating} </span>
          </Card.Text>
          {userTest.userRole === "cliente" ? (
            <ContainerButtonStyled>
              <BtnSubmitStyled onClick={handleClickSuceess} variant="success">
                <i className="bi bi-cart-plus"></i> Agregar al Carrito
              </BtnSubmitStyled>

              {showAlert && (
                <AlertStyled
                  variant="primary"
                  onClose={handleClickSuceess}
                  dismissible
                >
                  Producto agregado
                </AlertStyled>
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
