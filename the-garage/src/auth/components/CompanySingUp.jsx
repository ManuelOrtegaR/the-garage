import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BtnSubmitStyled } from "../../components/StyledButtons";

function CompanySingUp() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formLInfo">
            <Form.Label>NIT</Form.Label>
            <Form.Control
              type="texto"
              placeholder="Ingrese el NIT de la empresa"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre o Razón Social</Form.Label>
            <Form.Control
              type="texto"
              placeholder="Ingrese su Nombre o Razón Social"
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formContactAddress">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="texto" placeholder="Ingrese su dirección" />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formContactCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="texto"
              placeholder="Ingrese la ciudad de ubicación"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formContactPhone">
            <Form.Label>Teléfono fijo/movil</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese su numero de teléfono"
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Página WEB </Form.Label>
        <Form.Control
          type="texto"
          placeholder="Ingrese la URL de su página WEB"
        />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group controlId="formFileCCommerce" className="mb-3">
            <Form.Label>Cámara de Comercio</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formFileIMG" className="mb-3">
            <Form.Label>Imagen o Logo</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo" />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirme su contraseña"
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <BtnSubmitStyled>Guardar</BtnSubmitStyled>
      </div>
    </Form>
  );
}

export default CompanySingUp;
