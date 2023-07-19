import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { BtnDangerSubmitStyled, BtnSubmitStyled } from "../../components";
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

export function ProductDetail() {
  const { id } = useParams();

  // console.log("PARAMETRO_ID" + id);
  // console.log(mockDataTest[id]);
  //Hacer un fetch a Bd de todos los datos de ese Producto

  const findItem = () => {
    //hacer un fecth o consultar en el Local
    return mockDataTest[id - 1];
  };
  return (
    <Container>
      <Row>
        <BreadCrumbRoute />
      </Row>
      <div className="pb-5">
        <Row className="mt-5">
          <Col className="" md={4}>
            <ProductSheet item={findItem()} />
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
