import { useNavigate } from "react-router-dom";
import {
  AlertStyled,
  CardAvalaibleStyle,
  CardDescroptionStyle,
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

export function Item({ item, isService }) {
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();
  function handleClick() {
    if (isService) {
      navigate("/servicesDetail");
    } else {
      navigate("/productDetail");
    }
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
          <CardDescroptionStyle>{item.description}</CardDescroptionStyle>
          <Card.Text className="fs-4">
            <strong>{item.price}</strong>
          </Card.Text>
          <CardAvalaibleStyle>
            {item.availability.despacho ? (
              <i className="bi bi-check"></i>
            ) : (
              <i className="bi bi-x"></i>
            )}
            {isService ? "Servicio a domicilio" : "Disponible para despacho"}
          </CardAvalaibleStyle>
          <CardAvalaibleStyle>
            {item.availability.retiro ? (
              <i className="bi bi-check"></i>
            ) : (
              <i className="bi bi-x"></i>
            )}
            {isService ? "Servicio en Taller" : "Disponible para Retiro"}
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
                {isService ? "Solicitar Servicio" : "Agregar al carrito"}
              </BtnSubmitStyled>

              {showAlert && (
                <AlertStyled
                  variant="primary"
                  onClose={handleClickSuceess}
                  dismissible
                >
                  {isService ? "Servicio Solicitado" : "Producto Agregado"}
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
                Ver Detalles
              </BtnDangerSubmitStyled>
            </ContainerButtonStyled>
          ) : null}
        </Card.Body>
      </CardStyle>
    </ContainerStyled>
  );
}
