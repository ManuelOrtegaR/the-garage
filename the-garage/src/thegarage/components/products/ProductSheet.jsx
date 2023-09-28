import React from "react";
import { Accordion } from "react-bootstrap";
import {
  AccordionStyle,
  ColumnSheetStyle,
  PrincipalImg,
  SecondaryImg,
} from "./StyledsComponentsProducts";

export const ProductSheet = ({ item }) => {
  return (
    <ColumnSheetStyle>
      <div className="pt-2 ">
        <div className="d-flex flex-wrap justify-content-center">
          <PrincipalImg
            src={
              item.fotos.length > 0
                ? item.fotos[0].url_foto
                : "https://placehold.co/400x400"
            }
            alt="Imagen principal"
          />
        </div>
        <div className="d-flex flex-wrap justify-content-between gap-3 border-bottom pt-2 pb-2">
          <SecondaryImg
            className="border border-dark-subtle"
            src={
              item.fotos.length > 1
                ? item.fotos[1].url_foto
                : "https://placehold.co/50x50"
            }
            alt="Imagen Seundaria del producto"
          />
          <SecondaryImg
            className="border border-dark-subtle"
            src={
              item.fotos.length > 2
                ? item.fotos[2].url_foto
                : "https://placehold.co/50x50"
            }
            alt="Imagen Seundaria del producto"
          />
          <SecondaryImg
            className="border border-dark-subtle"
            src={
              item.fotos.length > 3
                ? item.fotos[3].url_foto
                : "https://placehold.co/50x50"
            }
            alt="Imagen Seundaria del producto"
          />
          <SecondaryImg
            className="border border-dark-subtle"
            src={
              item.fotos.length > 4
                ? item.fotos[4].url_foto
                : "https://placehold.co/50x50"
            }
            alt="Imagen Seundaria del producto"
          />
          <SecondaryImg
            className="border border-dark-subtle"
            src={
              item.fotos.length > 5
                ? item.fotos[5].url_foto
                : "https://placehold.co/50x50"
            }
            alt="Imagen Seundaria del producto"
          />
          <SecondaryImg
            className="border border-dark-subtle"
            src={
              item.fotos.length > 6
                ? item.fotos[6].url_foto
                : "https://placehold.co/50x50"
            }
            alt="Imagen Seundaria del producto"
          />
        </div>
      </div>
      <div className="">
        <AccordionStyle defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Descripcion</Accordion.Header>
            <Accordion.Body>{item.descripcion}</Accordion.Body>
          </Accordion.Item>
        </AccordionStyle>
      </div>
      <div className="">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Ficha tecnica</Accordion.Header>
            <Accordion.Body>{item.ficha_tecnica}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </ColumnSheetStyle>
  );
};
