import { Button, Card } from "react-bootstrap";
import { BtnDangerSubmitStyled, BtnSubmitStyled } from "../../../components";
import {
  AlertStyled,
  ButtonCountStyled,
  CardStoreDescriptionStyle,
  CardStoreStyle,
  IconStyled,
} from "./StyledsComponentsProducts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CardProduct_store = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  function handleReturn() {
    navigate("/productos");
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
              <Card.Title>Pastillas Frenos traseros</Card.Title>

              <Card.Text>
                <div>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </div>
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
                    <div className="fs-4">$100,000</div>
                    <div>
                      <IconStyled className="bi bi-star-fill"></IconStyled>
                      <IconStyled className="bi bi-star-fill"></IconStyled>
                      <IconStyled className="bi bi-star-fill"></IconStyled>
                      <IconStyled className="bi bi-star-fill"></IconStyled>
                      <IconStyled className="bi bi-star"></IconStyled>
                      <span> 4</span>
                    </div>
                  </div>

                  <div className="  d-flex justify-content-center">
                    <ButtonCountStyled className="border px-3" variant="light">
                      -
                    </ButtonCountStyled>
                    <div className="px-3 pt-2">{2}</div>
                    <ButtonCountStyled className=" border px-3" variant="light">
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
