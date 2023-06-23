import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export const ShoppingCart = () => {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col>
            <Card>
              <Card.Body className="p-4">
                <Row>
                  <Col lg={7}>
                    <h5 className="mb-3">
                      <a href="#!" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>
                        Continue shopping
                      </a>
                    </h5>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have 4 items in your cart</p>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="text-muted">Sort by:</span>{" "}
                          <a href="#!" className="text-body">
                            price <i className="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <Card className="mb-3">
                      <Card.Body>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                className="img-fluid rounded-3"
                                alt="Shopping item"
                                style={{ width: "65px" }}
                              />
                            </div>
                            <div className="ms-3">
                              <h5>Iphone 11 pro</h5>
                              <p className="small mb-0">256GB, Navy Blue</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <h5 className="fw-normal mb-0">2</h5>
                            </div>
                            <div style={{ width: "80px" }}>
                              <h5 className="mb-0">$900</h5>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <i className="fas fa-trash-alt"></i>
                            </a>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                className="img-fluid rounded-3"
                                alt="Shopping item"
                                style={{ width: "65px" }}
                              />
                            </div>
                            <div className="ms-3">
                              <h5>Iphone 11 pro</h5>
                              <p className="small mb-0">256GB, Navy Blue</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <h5 className="fw-normal mb-0">2</h5>
                            </div>
                            <div style={{ width: "80px" }}>
                              <h5 className="mb-0">$900</h5>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <i className="fas fa-trash-alt"></i>
                            </a>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                className="img-fluid rounded-3"
                                alt="Shopping item"
                                style={{ width: "65px" }}
                              />
                            </div>
                            <div className="ms-3">
                              <h5>Iphone 11 pro</h5>
                              <p className="small mb-0">256GB, Navy Blue</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <h5 className="fw-normal mb-0">2</h5>
                            </div>
                            <div style={{ width: "80px" }}>
                              <h5 className="mb-0">$900</h5>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <i className="fas fa-trash-alt"></i>
                            </a>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                    {/* Resto de los elementos del carrito */}
                  </Col>
                  <Col lg={5}>
                    <Card bg="primary" text="white" className="rounded-3">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="img-fluid rounded-3"
                            style={{ width: "45px" }}
                            alt="Avatar"
                          />
                        </div>
                        <p className="small mb-2">Card type</p>
                        {/* Iconos de las tarjetas */}
                        <Form className="mt-4">
                          <Form.Group className="mb-4">
                            <Form.Control
                              type="text"
                              id="typeName"
                              placeholder="Cardholder's Name"
                              size="lg"
                            />
                            <Form.Label htmlFor="typeName">
                              Cardholder's Name
                            </Form.Label>
                          </Form.Group>
                          <Form.Group className="mb-4">
                            <Form.Control
                              type="text"
                              id="typeText"
                              placeholder="1234 5678 9012 3457"
                              minLength="19"
                              maxLength="19"
                              size="lg"
                            />
                            <Form.Label htmlFor="typeText">
                              Card Number
                            </Form.Label>
                          </Form.Group>
                          <Row className="mb-4">
                            <Col md={6}>
                              <Form.Group>
                                <Form.Control
                                  type="text"
                                  id="typeExp"
                                  placeholder="MM/YYYY"
                                  size="lg"
                                  minLength="7"
                                  maxLength="7"
                                />
                                <Form.Label htmlFor="typeExp">
                                  Expiration
                                </Form.Label>
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group>
                                <Form.Control
                                  type="password"
                                  id="typeText"
                                  placeholder="&#9679;&#9679;&#9679;"
                                  size="lg"
                                  minLength="3"
                                  maxLength="3"
                                />
                                <Form.Label htmlFor="typeText">Cvv</Form.Label>
                              </Form.Group>
                            </Col>
                          </Row>
                        </Form>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>
                        <Button variant="info" size="lg" block>
                          <div className="d-flex justify-content-between">
                            <span>$4818.00</span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </Button>
                      </Card.Body>
                    </Card>
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
