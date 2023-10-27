/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';
import { CardElementStyle } from './StylesComponentsCar';
import { ButtonStyledSuccess } from '../products';
import { Col, Row } from 'react-bootstrap';

const CardElements = ({ carElements, dispatch }) => {
  const deleteElement = (cardElement) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: cardElement });
  };
  //className="d-flex justify-content-between mb-3"
  return (
    <CardElementStyle className="mb-3 element-list">
      <Card.Body>
        {carElements.map((carElement) => (
          <Row key={carElement.id} className="align-items-center">
            <Col>
              <img
                src={carElement.fotos[0].url_foto}
                alt="Imagen del producto"
                width="65"
                height="65"
              />
            </Col>
            <Col>{carElement.nombre}</Col>
            <Col>cantidad: {carElement.cant}</Col>
            <Col>
              <strong>${carElement.precio.toLocaleString('es-CO')}</strong>
            </Col>
            <Col>
              <ButtonStyledSuccess
                onClick={() => {
                  deleteElement(carElement);
                }}
              >
                <i className="bi bi-trash-fill" />
              </ButtonStyledSuccess>
            </Col>
          </Row>
        ))}
      </Card.Body>
    </CardElementStyle>
  );
};

export default CardElements;
