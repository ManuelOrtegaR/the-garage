import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { BtnDangerSubmitStyled, BtnSubmitStyled } from "../../components";
import {
  Item,
  CardStore,
  CardProduct_store,
  ProductSheet,
} from "../components";
import { BreadCrumbRoute } from "../components/products/BreadCrumbRoute";
import { detail1_MockTest, detail2_MockTest } from "../dataTest/dataMock";

export function ProductDetail() {
  return (
    <Container>
      <Row>
        <BreadCrumbRoute />
      </Row>
      <div className="pt-5 pb-5">
        <Row className="mt-5">
          <Col className="" md={4}>
            <ProductSheet />
          </Col>
          <Col md={8}>
            <CardProduct_store />
            <CardStore />
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
