import { Col, Container, Row } from "react-bootstrap";
import { BreadCrumbRoute } from "../components/products/BreadCrumbRoute";
import { CardServiceStore, Item, ServiceSheet } from "../components";
import {
  detail1_MockTest,
  detail2_MockTest,
  mockDataTestServices,
} from "../dataTest/dataMock";
import { CardStoreServices } from "../components/services";
import { useParams } from "react-router-dom";

export const ServicesDetail = () => {
  const { id } = useParams();

  const findItem = () => {
    return mockDataTestServices[id - 1];
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
            <ServiceSheet item={item} />
          </Col>
          <Col md={8}>
            <CardServiceStore item={item} />
            <CardStoreServices item={item} />
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
