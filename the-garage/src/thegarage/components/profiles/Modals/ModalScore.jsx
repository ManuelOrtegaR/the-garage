import { Form, Modal } from 'react-bootstrap';
import { BtnSubmitStyled } from '../../../../components';

export function ModalScore(props) {
  return (
    <Modal {...props} className="text-main-color" centered>
      <Modal.Header className="bg-secondary-subtle" closeButton>
        <Modal.Title className="fw-bold">Calificación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="d-flex mb-3 align-items-center"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="col-3">Calificación</Form.Label>
            <Form.Check className="ms-3" type="checkbox" />
            <Form.Check className="ms-3" type="checkbox" />
            <Form.Check className="ms-3" type="checkbox" />
            <Form.Check className="ms-3" type="checkbox" />
            <Form.Check className="ms-3" type="checkbox" />
          </Form.Group>
          <Form.Group className="d-flex mb-3 align-items-center">
            <Form.Label className="col-3">Comentarios</Form.Label>
            <Form.Control className="ms-3" as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="bg-secondary-subtle">
        <BtnSubmitStyled onClick={props.onHide}>Enviar</BtnSubmitStyled>
      </Modal.Footer>
    </Modal>
  );
}
