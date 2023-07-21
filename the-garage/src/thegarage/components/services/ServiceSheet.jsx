import { Accordion } from "react-bootstrap";
import { AccordionStyle, ColumnSheetStyle } from "../products";

export const ServiceSheet = () => {
  return (
    <ColumnSheetStyle>
      <div className="pt-2 ">
        <div className="d-flex flex-wrap justify-content-center">
          <img src="https://placehold.co/400x400/87CEEB/FFF" alt="" />
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
            <Accordion.Header>{"Descripcion"}</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </AccordionStyle>
      </div>
      {/* <div className="">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Ficha tecnica</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div> */}
    </ColumnSheetStyle>
  );
};
