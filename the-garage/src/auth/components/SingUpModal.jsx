/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

import { BtnSubmitStyled } from '../../components/StyledButtons';
import logo from '../../../assets/logos/logo-icono.png';

function SingUpModal({ setShowModal }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setShowModal(false);
  };

  const handleShowCliente = () => {
    setShow(false);
    setShowModal(false);
    navigate('/Singupclient');
  };
  const handleShowCompany = () => {
    setShow(false);
    setShowModal(false);
    navigate('/Singupcompany');
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login__logo d-flex justify-content-center">
            <img src={logo} alt="logo" />
          </div>

          <Form>
            <p>Seleccione el tipo de registro que desea realizar</p>
            <Row>
              <Col className="d-flex justify-content-center">
                <BtnSubmitStyled
                  width="100px"
                  onClick={handleShowCliente}
                  name="signup_client"
                >
                  Cliente
                </BtnSubmitStyled>
              </Col>

              <Col className="d-flex justify-content-center">
                <BtnSubmitStyled
                  onClick={handleShowCompany}
                  name="signup_company"
                >
                  Empresa
                </BtnSubmitStyled>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <BtnSubmitStyled onClick={handleClose}>Salir</BtnSubmitStyled>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SingUpModal;
