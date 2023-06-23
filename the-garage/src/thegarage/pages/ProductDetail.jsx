import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";

export function ProductDetail() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="border-start border-end" md={6}>
            <div>
              <img src="https://placehold.co/600x600" alt="" />
            </div>
            <div className="d-flex gap-3 border-bottom pt-2 pb-2">
              <img
                className="border border-dark-subtle"
                src="https://placehold.co/70x70"
                alt=""
              />
              <img
                className="border border-dark-subtle"
                src="https://placehold.co/70x70"
                alt=""
              />
              <img
                className="border border-dark-subtle"
                src="https://placehold.co/70x70"
                alt=""
              />
              <img
                className="border border-dark-subtle"
                src="https://placehold.co/70x70"
                alt=""
              />
            </div>
            <div className="border-bottom">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Descripcion</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="border-bottom">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Ficha tecnica</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <Card>
                <Card.Body>
                  <Card.Title>Pastillas Frenos traseros</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Codigo: 9848793
                  </Card.Subtitle>
                  <Card.Text>
                    <span>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </span>
                    <span className="fs-4">$200,000</span>
                    <div>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                      <span>(4)</span>

                      <div className="  d-flex justify-content-center">
                        <Button className="border px-3" variant="light">
                          -
                        </Button>
                        <div className="px-3">5</div>
                        <Button className=" border px-3" variant="light">
                          {" "}
                          +{" "}
                        </Button>
                      </div>
                    </div>
                  </Card.Text>

                  <Card.Link href="#">
                    <Button className="px-1 w-100" variant="success">
                      <i className="bi bi-cart-plus"></i> Agregar al Carrito
                    </Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
