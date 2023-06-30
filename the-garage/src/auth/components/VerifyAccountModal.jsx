import Form from "react-bootstrap/Form";
import { TitlePg } from "../components/StyledsComponents";
import { useState } from "react";
import { BtnSubmitStyled } from "../../components/StyledButtons";
//import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function VerifyAccountModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login__logo d-flex justify-content-center">
            <img src="/../assets/logos/logo-icono.png" alt="logo" />
          </div>
          <TitlePg className="align-items-center">
            Código de Verificación
          </TitlePg>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>
                Ingrese el código de verficiación enviado a su correo
                electrónico
              </Form.Label>
              <Form.Control type="text" placeholder="código" />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <BtnSubmitStyled onClick={handleClose}>Enviar</BtnSubmitStyled>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VerifyAccountModal;
