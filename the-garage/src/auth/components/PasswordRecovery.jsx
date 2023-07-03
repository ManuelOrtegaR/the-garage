import Form from "react-bootstrap/Form";
import { useState } from "react";
import { BtnSubmitStyled } from "../../components/StyledButtons";
import { Container } from "react-bootstrap";

function PasswordRecovery() {
  const [newPassword, setNewPassword] = useState(false);
  const handleShowNewPassword = () => setNewPassword(true);
  console.log(newPassword);
  return (
    <>
      {newPassword ? (
        <Form className="Password_recovery m-5 w-90">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nueva Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirme su contraseña"
            />
          </Form.Group>
          <div className="b-change-password   d-flex justify-content-center">
            <BtnSubmitStyled>Recuperar</BtnSubmitStyled>
          </div>
        </Form>
      ) : (
        <Form className="Password_recovery_mail m-5 w-90">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Digite el correo electrónico registrado</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo" />
          </Form.Group>

          <div className="b-send-email d-flex justify-content-center">
            <BtnSubmitStyled onClick={handleShowNewPassword}>
              Recuperar
            </BtnSubmitStyled>
          </div>
        </Form>
      )}
    </>
  );
}
export default PasswordRecovery;
