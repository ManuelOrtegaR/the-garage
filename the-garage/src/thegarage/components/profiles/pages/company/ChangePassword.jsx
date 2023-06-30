import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const ChangePassword = () => {
  return (
    <>
      <form className="position-relative border text-center m-auto w-50">
        <div className="bg-body z-3 py-1 px-2 position-absolute translate-middle mt-0 start-50 text-center border rounded-pill">
          <h5>Cambiar contraseña</h5>
        </div>
        <Form className="mt-auto pb-2 pt-5">
          <Form.Group
            as={Row}
            className="mb-3 justify-content-md-center"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={4}>
              Contraseña Actual:
            </Form.Label>
            <Col md="auto">
              <Form.Control type="password" placeholder="Old Password" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2 justify-content-md-center"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={4}>
              Nueva Contraseña:
            </Form.Label>
            <Col md="auto">
              <Form.Control type="password" placeholder="New Password" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3 justify-content-md-center"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={4}>
              Confirmar Contraseña:
            </Form.Label>
            <Col md="auto">
              <Form.Control type="password" placeholder="Confrim Password" />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </form>
    </>
  );
};
