import React from "react";
import { Card } from "react-bootstrap";
import { CardElementStyle } from "./StylesComponentsCar";

const CardElements = () => {
  return (
    <CardElementStyle className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img src="https://placehold.co/65x65" />
            </div>
            <div className="ms-3">
              <div>Bateria Automovil Alto rendimiento</div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-4 justify-content-between">
            <div>cantidad: 5</div>

            <div>
              <strong>$274.000</strong>
            </div>
            <i className="bi bi-trash-fill"></i>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img src="https://placehold.co/65x65" />
            </div>
            <div className="ms-3">
              <div>Bateria Automovil Alto rendimiento</div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-4 justify-content-between">
            <div>cantidad: 5</div>

            <div>
              <strong>$274.000</strong>
            </div>
            <i className="bi bi-trash-fill"></i>
          </div>
        </div>
      </Card.Body>
    </CardElementStyle>
  );
};

export default CardElements;
