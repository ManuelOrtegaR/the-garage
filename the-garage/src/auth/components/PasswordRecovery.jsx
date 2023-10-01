import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { BtnSubmitStyled } from '../../components/StyledButtons';
import { useNavigate, useParams } from 'react-router-dom';
import { passwordRecovery, passwordReset } from '../../api/auth';
import { TextPg } from './StyledsComponents';

function PasswordRecovery() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const { token } = useParams();

  const onSubmitEmail = async (event) => {
    event.preventDefault();
    try {
      await passwordRecovery(event.target.email.value);
      setShow(!show);
    } catch (error) {
      setShow(!show);
      console.error(error);
    }
  };
  const onSubmitRecovery = async (event) => {
    event.preventDefault();
    try {
      await passwordReset(event.target.password.value, token);
      setShow(!show);
      navigate('/login', { replace: true });
    } catch (error) {
      setShow(!show);
      console.error(error);
    }
  };

  return (
    <>
      {token ? (
        <Form
          className="Password_recovery m-5 w-90"
          onSubmit={onSubmitRecovery}
        >
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nueva Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirme su contraseña"
              name="cpassword"
            />
          </Form.Group>
          <div className="b-change-password   d-flex justify-content-center">
            <BtnSubmitStyled type="submit">Recuperar</BtnSubmitStyled>
          </div>
        </Form>
      ) : show ? (
        <Form
          className="Password_recovery_mail m-5 w-90"
          onSubmit={onSubmitEmail}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Digite el correo electrónico registrado</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su correo"
              name="email"
            />
          </Form.Group>

          <div className="b-send-email d-flex justify-content-center">
            <BtnSubmitStyled type="submit">Recuperar</BtnSubmitStyled>
          </div>
        </Form>
      ) : (
        <>
          <TextPg className="m-5">
            Se ha enviado un correo electrónico para reestablecer su contraseña.
            Porfavor revise su bandeja de entrada o la bandeja de spam y haga
            click en el link para reestablecer su contraseña.
          </TextPg>
          <BtnSubmitStyled
            onClick={() => {
              navigate('/home');
            }}
            className="m-5"
          >
            Volver a inicio de sesión
          </BtnSubmitStyled>
        </>
      )}
    </>
  );
}
export default PasswordRecovery;
