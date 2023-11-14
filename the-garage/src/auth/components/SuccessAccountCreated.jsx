import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Form, Row } from 'react-bootstrap';

import { BtnSubmitStyled } from '../../components';
import { TextPg, TitlePg } from '../components/StyledsComponents';
import { reSendEmail } from '../../api/auth';

export const SuccessAccountCreated = () => {
  const [resendEmail, setResendEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    await reSendEmail(event.target.email.value);
    setIsLoading(!isLoading);
  };

  return (
    <div
      className="confirmacion__contenedor bg-white p-5"
      style={{ minWidth: '700px', maxWidth: '700px' }}
    >
      <TitlePg>Estado de la creación de usuario</TitlePg>
      <div className="m-5 ">
        <TextPg>
          Se ha enviado un correo electrónico para confirmar su cuenta. Por
          favor, revise su bandeja de entrada o la bandeja de spam y haga click
          en el link para confirmar su cuenta.
        </TextPg>

        <TextPg
          onClick={() => {
            !isLoading && setResendEmail(!resendEmail);
          }}
          style={{ cursor: 'pointer' }}
          hidden={resendEmail}
          color="blue"
        >
          Si no recibiste el correo haz click aquí
        </TextPg>
      </div>

      <div>
        <Form
          className="Form_Recovery m-5 "
          onSubmit={onSubmit}
          hidden={!resendEmail}
        >
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicRecovery">
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo"
                  name="email"
                />
              </Form.Group>
            </Col>
            <Col>
              <BtnSubmitStyled
                type="submit"
                onClick={() => {
                  setResendEmail(!reSendEmail);
                  setIsLoading(isLoading);
                }}
              >
                Enviar correo de verificación
              </BtnSubmitStyled>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="m-5">
        <BtnSubmitStyled onClick={() => navigate('/login')}>
          Volver al inicio de sesión
        </BtnSubmitStyled>
      </div>
    </div>
  );
};
