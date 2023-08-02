import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { CardElementStyle } from "./StylesComponentsCar";
import { AuthContext } from "../../../auth/context/AuthContext";

const CardElements = () => {
  const { carElements } = useContext(AuthContext);
  return (
    <CardElementStyle className="mb-3">
      <Card.Body>
        {carElements.map((carElement) => (
          <div
            className="d-flex justify-content-between mb-3"
            key={carElement.id}
          >
            <div className="d-flex flex-row align-items-center">
              <div>
                <img
                  src={carElement.image}
                  alt="Imagen del producto"
                  width="65"
                  height="65"
                />
              </div>
              <div className="ms-3">
                <div>{carElement.title}</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-4 justify-content-between">
              <div>cantidad: {1}</div>
              <div>
                <strong>{carElement.price}</strong>
              </div>
              <i className="bi bi-trash-fill"></i>
            </div>
          </div>
        ))}
      </Card.Body>
    </CardElementStyle>
  );
};

export default CardElements;
