import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BreadCrumbRoute } from "../components/products/BreadCrumbRoute";
import {
  CardProduct_store,
  CardStore,
  Item,
  ProductSheet,
  ServiceSheet,
} from "../components";
import { detail1_MockTest, detail2_MockTest } from "../dataTest/dataMock";

export const ServicesDetail = () => {
  return (
    <Container>
      <Row>
        <BreadCrumbRoute />
      </Row>
      <div className="pt-5 pb-5">
        <Row className="mt-5">
          <Col className="" md={4}>
            <ServiceSheet />
          </Col>
          <Col md={8}>
            <CardProduct_store />
            <CardStore />
            <div className="pt-5">SERVICIOS RECOMENDADOS</div>

            <div className="d-flex gap-1 ">
              <Item key={1} item={detail1_MockTest} isService={true} />
              <Item key={2} item={detail2_MockTest} isService={true} />
              <Item key={3} item={detail2_MockTest} isService={true} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
