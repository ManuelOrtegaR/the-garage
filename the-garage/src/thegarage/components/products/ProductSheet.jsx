import React from "react";
import { Accordion } from "react-bootstrap";
import { AccordionStyle, ColumnSheetStyle } from "./StyledsComponentsProducts";

export const ProductSheet = ({ item }) => {
  return (
    <ColumnSheetStyle>
      <div className="pt-2 ">
        <div className="d-flex flex-wrap justify-content-center">
          <img src="https://placehold.co/400x400" alt="" />
        </div>
        <div className="d-flex flex-wrap justify-content-between gap-3 border-bottom pt-2 pb-2">
          <img
            className="border border-dark-subtle"
            src="https://placehold.co/50x50"
            alt=""
          />
          <img
            className="border border-dark-subtle"
            src="https://placehold.co/50x50"
            alt=""
          />
          <img
            className="border border-dark-subtle"
            src="https://placehold.co/50x50"
            alt=""
          />
          <img
            className="border border-dark-subtle"
            src="https://placehold.co/50x50"
            alt=""
          />
          <img
            className="border border-dark-subtle"
            src="https://placehold.co/50x50"
            alt=""
          />
          <img
            className="border border-dark-subtle"
            src="https://placehold.co/50x50"
            alt=""
          />
        </div>
      </div>
      <div className="">
        <AccordionStyle defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Descripcion</Accordion.Header>
            <Accordion.Body>{item.description}</Accordion.Body>
          </Accordion.Item>
        </AccordionStyle>
      </div>
      <div className="">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Ficha tecnica</Accordion.Header>
            <Accordion.Body>{item.description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </ColumnSheetStyle>
  );
};
