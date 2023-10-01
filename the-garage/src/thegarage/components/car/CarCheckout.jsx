import { Card, Col, Form, Row } from "react-bootstrap";
import { ButtonStyledSuccess } from "../products";
import { BtnSubmitStyled } from "../../../components";
import { CardChekoutStyle } from "./StylesComponentsCar";
import { useContext } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { useCart } from "../../store";
import { createOrdenProducts } from "../../../api/Car";
import { useNavigate } from "react-router-dom";

const CarCheckout = () => {
  const { state } = useCart();
  const navigate = useNavigate();
  let paymentUrl;
  const onClick = async () => {
    try {
      paymentUrl = await createOrdenProducts(state);
      console.log(paymentUrl);
      // navigate(`/../${paymentUrl}`);
      window.open(paymentUrl);
    } catch (error) {
      console.log("el error", error);
    }
  };

  const domicilio = 5000;
  const total = state.total + domicilio;
  return (
    <CardChekoutStyle>
      <Card.Body>
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
        <BtnSubmitStyled variant="light" width="100%" onClick={onClick}>
          <div className="d-flex justify-content-around">
            <div>Pagar</div>
          </div>
        </BtnSubmitStyled>
      </Card.Body>
    </CardChekoutStyle>
  );
};

export default CarCheckout;
