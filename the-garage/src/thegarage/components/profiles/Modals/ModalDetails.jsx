/* eslint-disable react/prop-types */
import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BtnDangerSubmitStyled, BtnSubmitStyled } from '../../../../components';
import { updateOrderStatus } from '../../../../api/orders';

export function ModalDetails(props) {
  const [handleChange, setHandleChange] = useState('');
  const [handleDisabled, setHandleDisabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sentMessage = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    let response;

    if (props.messageType === 'Enviar') {
      response = await updateOrderStatus(props.id, 'Enviada', handleChange);
      setIsSubmitting(false);
    } else {
      response = await updateOrderStatus(props.id, 'Cancelada', handleChange);
      setIsSubmitting(false);
    }

    if (response.status === 200) {
      const newEstados = {
        estado: response.data.estado,
        fecha_estado: response.data.fecha_estado,
      };
      props.setData([...props.data, newEstados]);
    }

    setHandleDisabled(true);
    toast.info('Mensaje enviado', {
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
        <Modal.Title className="fw-bold">
          {props.messageType === 'Enviar' ? 'Enviar' : 'Cancelar'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="d-flex mb-3 align-items-center">
            <Form.Label className="col-3">
              {props.messageType === 'Enviar'
                ? 'Escribe los detalles del envío'
                : 'Cuentanos el motivo para cancelar'}
            </Form.Label>
            <Form.Control
              className="ms-3"
              name="messageForm"
              data-cy="messageForm"
              as="textarea"
              rows={3}
              value={handleChange}
              onChange={(event) => setHandleChange(event.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="bg-secondary-subtle d-flex">
        <BtnDangerSubmitStyled
          onClick={sentMessage}
          disabled={handleDisabled}
          data-cy="sendMessage"
        >
          {!isSubmitting ? (
            'Enviar'
          ) : (
            <Spinner
              as="span"
              animation="grow"
              role="status"
              aria-hidden="true"
            />
          )}
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
