import { BtnLinkStyled } from "../../components/StyledButtons";
import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";

function CompanySingUp_contact() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formContactCity">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control
          type="texto"
          placeholder="Ingrese la ciudad de ubicación"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContactAddress">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="texto" placeholder="Ingrese su dirección" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContactPhone">
        <Form.Label>Teléfono fijo/movil</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese su numero de teléfono"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Página WEB </Form.Label>
        <Form.Control
          type="texto"
          placeholder="Ingrese la URL de su página WEB"
        />
      </Form.Group>

      <div className="d-flex justify-content-center">
        <BtnLinkStyled to="CompanySingUp_LI">Continuar</BtnLinkStyled>
      </div>
    </Form>
  );
}

export default CompanySingUp_contact;
