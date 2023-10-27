/* eslint-disable react/prop-types */
import { Button, Card, Col } from 'react-bootstrap';
import { BtnDangerSubmitStyled, BtnSubmitStyled } from '../../../components';
import {
  AlertStyled,
  ButtonCountStyled,
  CardStoreDescriptionStyle,
  CardStoreStyle,
  IconStyled,
} from './StyledsComponentsProducts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCounter } from '../../../hooks/useCounter';
import { promedioValoraciones } from './utils';
import { useCart } from '../../store';

export const CardProduct_store = ({ item }) => {
  const { dispatch } = useCart();
  const { counter, increment, decrement } = useCounter(1);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  function handleReturn() {
    navigate('/productos');
  }

  function handleClickSuceess() {
    dispatch({ type: 'ADD_TO_CART', payload: { item, cant: counter } });
    setShowAlert(!showAlert);
  }

  return (
    <CardStoreStyle className="d-flex mb-3">
      <Card.Body className="d-flex justify-content-between row">
        <Col className="col-5 col-md-12 col-xl-6 mb-2">
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>{item.descripcion}</Card.Text>
        </Col>
        <Col className="col-7 col-md-12 col-xl-6">
          <Card.Text>
            <div className="d-flex align-items-center gap-5">
              <div>
                <div>Precio por Unidad.</div>
                <div className="fs-4">
                  ${item.precio.toLocaleString('es-CO')}
                </div>

                <div>
                  {[...Array(promedioValoraciones(item.valoraciones))].map(
                    (_, index) => (
                      <IconStyled
                        key={index}
                        className="bi bi-star-fill"
                      ></IconStyled>
                    ),
                  )}
                  {[...Array(5 - promedioValoraciones(item.valoraciones))].map(
                    (_, index) => (
                      <IconStyled
                        key={index}
                        className="bi bi-star"
                      ></IconStyled>
                    ),
                  )}
                  <span> {promedioValoraciones(item.valoraciones)} </span>
                </div>
              </div>

              <div className="  d-flex justify-content-center">
                <ButtonCountStyled
                  onClick={() => {
                    decrement(1);
                  }}
                  className="border px-3"
                  variant="light"
                >
                  -
                </ButtonCountStyled>
                <div className="px-3 pt-2">{counter}</div>
                <ButtonCountStyled
                  onClick={() => {
                    increment(1);
                  }}
                  className=" border px-3"
                  variant="light"
                >
                  +
                </ButtonCountStyled>
              </div>
            </div>
          </Card.Text>

          <div className="d-flex gap-3">
            <BtnSubmitStyled onClick={handleClickSuceess} width="100%">
              Agregar al carrito
            </BtnSubmitStyled>
            {showAlert && (
              <AlertStyled
                variant="primary"
                onClose={() => {
                  setShowAlert(!showAlert);
                }}
                dismissible
              >
                Producto agregado
              </AlertStyled>
            )}

            <BtnDangerSubmitStyled onClick={handleReturn} width="100%">
              Volver
            </BtnDangerSubmitStyled>
          </div>
        </Col>
      </Card.Body>
    </CardStoreStyle>
  );
};
