import { Col, Container, Row } from "react-bootstrap";

import {
  Item,
  CardStore,
  CardProduct_store,
  ProductSheet,
} from "../components";
import { BreadCrumbRoute } from "../components/products/BreadCrumbRoute";
import {
  detail1_MockTest,
  detail2_MockTest,
  mockDataTest,
} from "../dataTest/dataMock";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function ProductDetail() {
  const { id } = useParams();

  const findItem = () => {
    return mockDataTest[id - 1];
  };

  const item = findItem();

  return (
    <Container>
      <Row>
        <BreadCrumbRoute />
      </Row>
      <div className="pb-5">
        <Row className="mt-5">
          <Col className="" md={4}>
            <ProductSheet item={item} />
          </Col>
          <Col md={8}>
            <CardProduct_store item={item} />
            <CardStore item={item} />
            <div className="pt-5">PRODUCTOS RECOMENDADOS</div>

            <div className="d-flex gap-1 ">
              <Item key={1} item={detail1_MockTest} />
              <Item key={2} item={detail2_MockTest} />
              <Item key={3} item={detail2_MockTest} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
