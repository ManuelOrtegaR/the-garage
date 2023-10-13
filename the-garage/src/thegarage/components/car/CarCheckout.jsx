/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { BtnSubmitStyled } from '../../../components';
import { CardChekoutStyle } from './StylesComponentsCar';

import { createOrdenProducts } from '../../../api/Car';

const CarCheckout = ({ cart, total, id_empresa, dispatch }) => {
  let paymentUrl;
  const onClick = async () => {
    try {
      paymentUrl = await createOrdenProducts(cart, total);
      window.open(paymentUrl, '_blank');
      dispatch({ type: 'REMOVE_COMPANY', payload: id_empresa });
    } catch (error) {
      console.log('el error', error);
    }
  };

  const domicilio = 0;
  const totalCart = cart.total + domicilio;
  return (
    <CardChekoutStyle>
      <Card.Header>Cuenta</Card.Header>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <p className="mb-2">Subtotal</p>
          <p className="mb-2">${cart.total.toLocaleString('es-CO')}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="mb-2">Domicilio</p>
          <p className="mb-2">${domicilio.toLocaleString('es-CO')}</p>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <p className="mb-2">Total(Incl. impuestos)</p>
          <p className="mb-2">${totalCart.toLocaleString('es-CO')}</p>
        </div>
        <BtnSubmitStyled
          variant="light"
          width="100%"
          onClick={onClick}
          data-cy="btn-buy"
        >
          Pagar
        </BtnSubmitStyled>
      </Card.Body>
    </CardChekoutStyle>
  );
};

export default CarCheckout;
