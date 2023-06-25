import {
  MainConteiner,
  TitlePg,
  ButtonStyled,
} from "../components/StyledsComponents";
import Form from "react-bootstrap/Form";
import googleIcon from "../../../assets/authIcons/google-icono.svg";
import facebookIcon from "../../../assets/authIcons/facebook-icono.svg";
import { NavLink } from "react-router-dom";

export function Login() {
  return (
    <MainConteiner>
      <div className="login col-5">
        <div className="login__contenedor p-4 m-1 rounded-5">
          <div className="login__logo d-flex justify-content-center">
            <img src="/../assets/logos/logo-icono.png" alt="logo" />
          </div>
          <div className="login__form row">
            <TitlePg>Inicio de Sesión</TitlePg>
            <Form>
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
                <a href="#" className="text-decoration-none">
                  ¿Olvidaste tu contraseña?
                </a>
              </Form.Group>
              <div className="d-flex justify-content-center">
                <ButtonStyled
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="w-100"
                >
                  <NavLink
                    to={"/home"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Ingresar
                  </NavLink>
                </ButtonStyled>
              </div>
            </Form>
            <div className="d-flex gap-1 mt-2 justify-content-center">
              <label>¿No tienes un usuario?</label>
              <NavLink
                to={"/Singup"}
                style={{ textDecoration: "none", color: "black" }}
              >
                ¡Registrate!
              </NavLink>
            </div>
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
      </div>
    </MainConteiner>
  );
}
