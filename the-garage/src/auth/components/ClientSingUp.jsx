import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ClientSingUp() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="texto" placeholder="Ingrese su nombre completo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Nombre de Usuario</Form.Label>
        <Form.Control type="texto" placeholder="Ingrese su nombre de Usuario" />
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
        <Button variant="primary" type="submit" size="lg" className="w-100">
          Guardar
        </Button>
      </div>
    </Form>
  );
}
export default ClientSingUp;
