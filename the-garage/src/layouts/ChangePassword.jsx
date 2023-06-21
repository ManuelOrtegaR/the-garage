import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const ChangePassword = () => {
  return (
    <>
      <form className="position-relative border text-center m-auto w-50">
        <div className="bg-body z-3 py-1 px-2 position-absolute translate-middle mt-0 start-50 text-center border rounded-pill">
          <h5>Change Password</h5>
        </div>
        <Form className="mt-5 mb-4 mx-2">
          <Form.Group
            as={Row}
            className="mb-3 justify-content-md-center"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={4}>
              Old Password:
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
              New Password:
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
              Confirm Password:
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
