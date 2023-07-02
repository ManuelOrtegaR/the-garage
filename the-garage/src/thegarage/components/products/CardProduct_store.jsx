import React from "react";
import { Button, Card } from "react-bootstrap";
import { BtnDangerSubmitStyled, BtnSubmitStyled } from "../../../components";
import {
  ButtonCountStyled,
  CardStoreDescriptionStyle,
  CardStoreStyle,
  IconStyled,
} from "./StyledsComponentsProducts";

export const CardProduct_store = () => {
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
                <div className="d-flex gap-5">
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
                    <div className="px-3">5</div>
                    <ButtonCountStyled className=" border px-3" variant="light">
                      +
                    </ButtonCountStyled>
                  </div>
                </div>
              </Card.Text>
              <div className="pt-1">
                {/* <Card.Link href="#"> */}
                <BtnSubmitStyled width="100%">
                  Agregar al Carrito
                </BtnSubmitStyled>
                {/* </Card.Link> */}
              </div>
              <div className="pt-1">
                {/* <Card.Link href="#"> */}
                <BtnDangerSubmitStyled width="100%">
                  Volver
                </BtnDangerSubmitStyled>
                {/* </Card.Link> */}
              </div>
            </div>
          </div>
        </Card.Body>
      </CardStoreStyle>
    </div>
  );
};
