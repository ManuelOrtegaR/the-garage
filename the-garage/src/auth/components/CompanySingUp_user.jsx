import Form from "react-bootstrap/Form";
import { BtnLinkStyled } from "../../components/StyledButtons";

function CompanySingUp_user() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre o Razón Social</Form.Label>
        <Form.Control
          type="texto"
          placeholder="Ingrese su Nombre o Razón Social"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Confirme su contraseña" />
      </Form.Group>

      <div className="d-flex justify-content-center">
        <BtnLinkStyled to="CompanySingUp_contact">Continuar</BtnLinkStyled>
      </div>
    </Form>
  );
}

export default CompanySingUp_user;
