import { Accordion } from "react-bootstrap";
import {
  AccordionStyle,
  ColumnSheetStyle,
  PrincipalImg,
  SecondaryImg,
} from "../products";

export const ServiceSheet = ({ item }) => {
  return (
    <ColumnSheetStyle>
      <div className="pt-2 ">
        <div className="d-flex flex-wrap justify-content-center">
          <PrincipalImg src={item.image} alt="" />
        </div>
        <div className="d-flex flex-wrap justify-content-between gap-3 border-bottom pt-2 pb-2">
          <SecondaryImg
            className="border border-dark-subtle"
            src={item.image}
            alt=""
          />
          <SecondaryImg
            className="border border-dark-subtle"
            src={item.image}
            alt=""
          />
          <SecondaryImg
            className="border border-dark-subtle"
            src={item.image}
            alt=""
          />
          <SecondaryImg
            className="border border-dark-subtle"
            src={item.image}
            alt=""
          />
          <SecondaryImg
            className="border border-dark-subtle"
            src={item.image}
            alt=""
          />
          <SecondaryImg
            className="border border-dark-subtle"
            src={item.image}
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
