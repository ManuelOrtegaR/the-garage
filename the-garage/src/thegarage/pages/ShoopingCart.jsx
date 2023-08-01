import { Container, Row, Col, Card, Form } from "react-bootstrap";

import {
  Continue,
  Schedule,
  ServiceDetail,
  ServiceElement,
  Title,
} from "../components/car";
import { Divisor } from "../components/car/Divisor";
import { Description } from "../components/car/Description";
import CardElements from "../components/car/CardElements";
import CarCheckout from "../components/car/CarCheckout";

export const ShoppingCart = () => {
  const type = "products";

  const products = [
    {
      id: 1,
      img: "https://placehold.co/65x65",
      title: "Prueba",
      cantidad: 1,
      precio: 274.0,
    },
  ];

  return (
    <section>
      <Container className="pt-5 mb-5">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col>
            <Card>
              <Card.Body className="p-4">
                <Row>
                  <Col lg={8}>
                    <Continue />

                    <Divisor />
                    {type === "products" ? (
                      <>
                        <Description products={products} />
                        <CardElements />
                      </>
                    ) : (
                      <>
                        <Title />
                        <ServiceElement />
                        <ServiceDetail />
                        <Schedule />
                      </>
                    )}
                    {/* Varia entre Podudcto y Servicio */}
                    {/* <Description />
                    <CardElements /> */}
                    {/* Varia entre Podudcto y Servicio */}
                  </Col>
                  <Col lg={4}>
                    <CarCheckout />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
