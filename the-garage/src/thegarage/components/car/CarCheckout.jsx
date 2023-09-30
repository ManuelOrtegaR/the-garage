import { Card, Col, Form, Row } from "react-bootstrap";
import { ButtonStyledSuccess } from "../products";
import { BtnSubmitStyled } from "../../../components";
import { CardChekoutStyle } from "./StylesComponentsCar";
import { useContext } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { useCart } from "../../store";

const CarCheckout = () => {
  const { state } = useCart();

  const domicilio = 5000;
  const total = state.total + domicilio;
  return (
    <CardChekoutStyle>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Detalle de tarjeta</h5>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            className="img-fluid rounded-3"
            style={{ width: "45px" }}
            alt="Avatar"
          />
        </div>
        <p className="small mb-2">Tipo de tarjeta</p>
        <i className="bi bi-credit-card"></i>
        {/* Iconos de las tarjetas */}
        <Form className="mt-4">
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              id="typeName"
              placeholder="Nombre Completo"
              size="lg"
            />
            <Form.Label htmlFor="typeName">Nombre</Form.Label>
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
            <Form.Label htmlFor="typeText">Numero de tarjeta</Form.Label>
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
                <Form.Label htmlFor="typeExp">Expiracion</Form.Label>
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
          <p className="mb-2">${state.total.toLocaleString("es-CO")}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="mb-2">Domicilio</p>
          <p className="mb-2">${domicilio.toLocaleString("es-CO")}</p>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <p className="mb-2">Total(Incl. impuestos)</p>
          <p className="mb-2">${total.toLocaleString("es-CO")}</p>
        </div>
        <BtnSubmitStyled variant="light" width="100%">
          <div className="d-flex justify-content-around">
            <div>Pagar</div>
          </div>
        </BtnSubmitStyled>
      </Card.Body>
    </CardChekoutStyle>
  );
};

export default CarCheckout;
