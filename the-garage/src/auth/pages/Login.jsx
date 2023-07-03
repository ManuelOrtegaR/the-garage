import SingUpModal from '../components/SingUpModal';
import { useState } from 'react';

import {
  MainConteiner,
  TitlePg,
  ButtonStyled,
} from '../components/StyledsComponents';
import Form from 'react-bootstrap/Form';
import googleIcon from '../../../assets/authIcons/google-icono.svg';
import facebookIcon from '../../../assets/authIcons/facebook-icono.svg';
import { NavLink } from 'react-router-dom';

export function Login() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);

  return (
    <MainConteiner className="img-fluid">
      <div className="login d-flex row w-50 bg-white">
        <div className="login__contenedor">
          <TitlePg>Inicio de Sesión</TitlePg>
          <Form className="Form_login m-5 ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su correo" />
              <Form.Text className="text-muted">
                Nosotros nunca compartiremos su correo con nadie más.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Recuerdáme" />
              <NavLink
                to={'/Recoverypassword'}
                style={{ textDecoration: 'none', color: 'darkblue' }}
              >
                ¿Olvidaste tu Constraseña?
              </NavLink>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <ButtonStyled
                variant="primary"
                type="submit"
                size="lg"
                className="w-100"
              >
                <NavLink
                  to={'/home'}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Ingresar
                </NavLink>
              </ButtonStyled>
            </div>
            <div className="d-flex gap-1 mt-2 justify-content-center">
              <label>¿No tienes un usuario?</label>
              <NavLink onClick={handleShow}>Registrate</NavLink>
            </div>
          </Form>

          <div className="d-flex justify-content-center m-2">
            <span>o</span>
          </div>
          <div className="btn d-flex gap-2 justify-content-center border mb-1 shadow-sm">
            <img src={googleIcon} className="register_Methods"></img>
            <label>Continúa con Google</label>
          </div>
          <div className="btn d-flex gap-2 justify-content-center border shadow-sm">
            <img src={facebookIcon} className="register_Methods"></img>
            <label>Continúa con Facebook</label>
          </div>
        </div>
      </div>
      {showModal ? <SingUpModal /> : <></>}
    </MainConteiner>
  );
}
