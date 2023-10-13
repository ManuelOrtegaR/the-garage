import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertStyled,
  ButtonCountStyled,
  CardStoreDescriptionStyle,
  CardStoreStyle,
  IconStyled,
} from "../products";
import { Card } from "react-bootstrap";
import { BtnDangerSubmitStyled, BtnSubmitStyled } from "../../../components";
import { useCounter } from "../../../hooks/useCounter";

export const CardServiceStore = ({ item }) => {
  const { counter, increment, decrement } = useCounter(1);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  function handleReturn() {
    navigate("/servicios");
  }

  function handleClickSuceess() {
    setShowAlert(!showAlert);
  }

  return (
    <div className="pb-5 pt-2">
      <CardStoreStyle>
        <Card.Body>
          <div className="d-flex flex-wrap justify-content-between">
            <CardStoreDescriptionStyle>
              <Card.Title>{item.title}</Card.Title>

              <Card.Text>
                <div>{item.title}</div>
              </Card.Text>
            </CardStoreDescriptionStyle>
            <div>
              <Card.Text>
                <div
                  className="d-flex align-items-center gap-5"
                  style={{ width: "330px" }}
                >
                  <div>
                    <div>Precio por Unidad.</div>
                    <div className="fs-4">{item.price}</div>
                    <div>
                      {/* Creo array undefined con el numero de raiting */}
                      {[...Array(item.rating)].map((_, index) => (
                        <IconStyled
                          key={index}
                          className="bi bi-star-fill"
                        ></IconStyled>
                      ))}
                      {[...Array(5 - item.rating)].map((_, index) => (
                        <IconStyled
                          key={index}
                          className="bi bi-star"
                        ></IconStyled>
                      ))}

                      <span> {item.rating} </span>
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
                    onClose={handleClickSuceess}
                    dismissible
                  >
                    Producto agregado
                  </AlertStyled>
                )}

                <BtnDangerSubmitStyled onClick={handleReturn} width="100%">
                  Volver
                </BtnDangerSubmitStyled>
              </div>
            </div>
          </div>
        </Card.Body>
      </CardStoreStyle>
    </div>
  );
};
