import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CardElementStyle } from "./StylesComponentsCar";
import { AuthContext } from "../../../auth/context/AuthContext";
import { useCart } from "../../store";
import { ButtonStyledSuccess } from "../products";

const CardElements = () => {
  // const { carElements } = useContext(AuthContext);

  const { state, dispatch } = useCart();

  const deleteElement = (cardElement) => {
    console.log(cardElement);
    dispatch({ type: "REMOVE_FROM_CART", payload: cardElement });
  };

  return (
    <CardElementStyle className="mb-3">
      <Card.Body>
        {state.cart.map((carElement) => (
          <div
            className="d-flex justify-content-between mb-3"
            key={carElement.id}
          >
            <div className="d-flex flex-row align-items-center">
              <div>
                <img
                  src={carElement.fotos[0].url_foto}
                  alt="Imagen del producto"
                  width="65"
                  height="65"
                />
              </div>
              <div className="ms-3">
                <div>{carElement.nombre}</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-5 justify-content-between">
              <div>cantidad: {carElement.cant}</div>
              <div>
                <strong>${carElement.precio.toLocaleString("es-CO")}</strong>
              </div>

              <ButtonStyledSuccess
                onClick={() => {
                  deleteElement(carElement);
                }}
              >
                <i className="bi bi-trash-fill" />
              </ButtonStyledSuccess>
            </div>
          </div>
        ))}
      </Card.Body>
    </CardElementStyle>
  );
};

export default CardElements;
