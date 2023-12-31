/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'react-toastify/dist/ReactToastify.css';

import { BtnSubmitStyled } from '../../../../components';
import { useConversaciones } from '../../../../domain/useConversations';
import { createMessage } from '../../../../api/message';

export function ModalMessages(props) {
  const [mensajeContenido, setMensajeContenido] = useState('');
  const [error, setError] = useState(null);
  const {
    actions: { create },
  } = useConversaciones();

  const handleInputChange = (event) => {
    setMensajeContenido(event.target.value);
  };

  const navigate = useNavigate();

  const sentMessages = async (event) => {
    event.preventDefault();

    try {
      const conversacion = await create({
        recipientId: props.idRecipient,
        orden_ProductosId: props.id,
      });
      if (conversacion) {
        await createMessage({
          mensaje: mensajeContenido,
          conversacionId: conversacion.id,
        });
      }

      if (conversacion) {
        navigate('/profile/messages', { replace: true });
      } else {
        navigate('/profile/messages', { replace: true });
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Modal {...props} className="text-main-color" centered>
      <Modal.Header className="bg-secondary-subtle" closeButton>
        <Modal.Title className="fw-bold">Mensajes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {error && (
            <span>{'Tienes un chat activo, dirigete a tus mensajes'}</span>
          )}

          {!error && (
            <Form.Group className="d-flex mb-3 align-items-center">
              <Form.Control
                className="ms-3"
                as="textarea"
                rows={3}
                placeholder="Escribe tu mensaje aquí"
                value={mensajeContenido}
                onChange={handleInputChange}
              />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer className="bg-secondary-subtle">
        {!error && (
          <BtnSubmitStyled onClick={sentMessages}>Enviar</BtnSubmitStyled>
        )}
      </Modal.Footer>
    </Modal>
  );
}
