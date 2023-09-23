import { Form, Modal } from 'react-bootstrap';
import { BtnDangerSubmitStyled, BtnSubmitStyled } from '../../../../components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ModalReport(props) {
  const sentReport = (event) => {
    event.preventDefault();
    toast.info('Reporte enviado', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  return (
    <Modal {...props} className="text-main-color" centered>
      <Modal.Header className="bg-secondary-subtle" closeButton>
        <Modal.Title className="fw-bold">Reporte</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="d-flex mb-3 align-items-center">
            <Form.Label className="col-3">Motivo del Reporte</Form.Label>
            <Form.Control className="ms-3" as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="bg-secondary-subtle d-flex">
        <BtnDangerSubmitStyled onClick={sentReport}>
          Reportar
        </BtnDangerSubmitStyled>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <BtnSubmitStyled onClick={props.onHide}>Volver</BtnSubmitStyled>
      </Modal.Footer>
    </Modal>
  );
}
