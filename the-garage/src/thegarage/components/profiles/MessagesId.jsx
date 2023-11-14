/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import socket from '../../../socket';

import { format } from 'date-fns';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

import { createMessage } from '../../../api/message';
import { AuthContext } from '../../../auth/context/AuthContext';
import {
  useConversacion,
  useUpdateConversacion,
} from '../../../domain/useConversacion';
import {
  ButtonSentStyle,
  FinishBtnStyle,
  FormTextStyle,
  ListMessages,
  ListMessagesItem,
  ReportBtnStyle,
} from './StylesComponentsProfiles';

export const MessagesId = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [modalReport, setModalReport] = useState(false);
  const { id } = useParams();
  const { data, loading, error } = useConversacion({ id });
  const [newData, setNewData] = useState({});
  const {
    data: dataUp,
    loading: loadingUp,
    error: errorUp,
    actions: { updateConversacion },
  } = useUpdateConversacion();

  useEffect(() => {
    if (data?.mensajes) {
      setNewData(data);
    }
  }, [data]);

  const finalizarConversacion = async () => {
    await updateConversacion(id, { estado: false });
    socket.emit('mensaje', {
      emailDestino:
        user.userClass == 'Empresa'
          ? data?.cliente.usuario.correo
          : data?.empresa.usuario.correo,
      estadoConversacion: false,
      conversacionId: id,
      recipientId:
        user.userClass === 'Cliente' ? data?.empresaId : data?.clienteId,
    });
    navigate('/profile/messages', { replace: true });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (mensajeContenido !== '') {
      const { response: mensaje } = await createMessage({
        mensaje: mensajeContenido,
        conversacionId: id,
      });
      setMensajeContenido('');

      socket.emit('mensaje', {
        emailDestino:
          user.userClass == 'Empresa'
            ? data?.cliente.usuario.correo
            : data?.empresa.usuario.correo,
        autor:
          user.userClass === 'Empresa'
            ? user.profileData.razon_social
            : user.profileData.nombre_completo,

        foto: user.profileData.url_foto,

        mensaje: mensaje.data,
        conversacionId: id,
        estadoConversacion: true,
        recipientId:
          user.userClass === 'Cliente' ? data?.empresaId : data?.clienteId,
      });
      socket.emit('notificacion', {
        orden: data?.orden_productos.no_orden,
        emailDestino:
          user.userClass == 'Empresa'
            ? data?.cliente.usuario.correo
            : data?.empresa.usuario.correo,
        autor:
          user.userClass === 'Empresa'
            ? user.profileData.razon_social
            : user.profileData.nombre_completo,
        foto: user.profileData.url_foto,
        mensaje: mensaje.data,
        conversacionId: id,
        recipientId:
          user.userClass === 'Cliente' ? data?.empresaId : data?.clienteId,
      });
    }
  };

  const [mensajeContenido, setMensajeContenido] = useState('');

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter' && mensajeContenido !== '') {
      event.preventDefault();
      const { response: mensaje } = await createMessage({
        mensaje: mensajeContenido,
        conversacionId: id,
      });
      setMensajeContenido('');
      socket.emit('mensaje', {
        emailDestino:
          user.userClass == 'Empresa'
            ? data?.cliente.usuario.correo
            : data?.empresa.usuario.correo,
        autor:
          user.userClass === 'Empresa'
            ? user.profileData.razon_social
            : user.profileData.nombre_completo,
        foto: user.profileData.url_foto,
        mensaje: mensaje.data,
        conversacionId: id,
        estadoConversacion: true,
        recipientId:
          user.userClass === 'Cliente' ? data?.empresaId : data?.clienteId,
      });
      socket.emit('notificacion', {
        orden: data?.orden_productos.no_orden,
        emailDestino:
          user.userClass == 'Empresa'
            ? data?.cliente.usuario.correo
            : data?.empresa.usuario.correo,
        autor:
          user.userClass === 'Empresa'
            ? user.profileData.razon_social
            : user.profileData.nombre_completo,
        foto: user.profileData.url_foto,
        mensaje: mensaje.data,
        conversacionId: id,
        recipientId:
          user.userClass === 'Cliente' ? data?.empresaId : data?.clienteId,
      });
    }
  };
  const handleInputChange = (event) => {
    setMensajeContenido(event.target.value);
  };

  useEffect(() => {
    socket.on('mensaje', (payload) => {
      if (
        payload.conversacionId === id &&
        payload.estadoConversacion === true
      ) {
        setNewData((prevData) => {
          return {
            ...prevData,
            mensajes: [...prevData.mensajes, payload.mensaje],
          };
        });
      }
      if (
        payload.estadoConversacion === false &&
        payload.conversacionId === id
      ) {
        setNewData((prevData) => {
          return {
            ...prevData,
            estado: false,
          };
        });
      }
    });

    return () => {
      socket.off('mensaje');
    };
  }, [id]);

  const messagesContainerRef = useRef(null);
  const scrollHaciaAbajo = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollHaciaAbajo();
  }, [newData]);

  return (
    <>
      <div className="m-auto w-100 p-4 ">
        <div className="d-flex">
          <div className="d-flex flex-column w-50">
            {/* <span className="fs-6 fw-bold mb-4">Titulo de prueba</span> */}
            <div className="d-flex gap-2">
              {loading && (
                <Spinner
                  as="span"
                  animation="grow"
                  role="status"
                  aria-hidden="true"
                />
              )}
              {error && <Alert variant="danger">{error}</Alert>}
              <Image
                src={
                  user.userClass === 'Empresa'
                    ? data?.cliente.usuario.url_foto
                    : data?.empresa.usuario.url_foto
                }
                style={{ height: 65, width: 65, borderRadius: '50%' }}
              />
              <div className="text-start">
                <span className="fs-5 fw-bold">
                  {user.userClass === 'Empresa' ? 'Cliente' : 'Empresa'}
                </span>
                {/* <p className="lh-1 mt-2">{data?.empresa?.razon_social}</p> */}
                <p>
                  {user.userClass === 'Empresa'
                    ? data?.cliente?.nombre_completo
                    : data?.empresa?.razon_social}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-auto mb-2 mx-2">
              {user.userClass !== 'admin' ? (
                <>
                  {newData?.estado === true ? (
                    <ReportBtnStyle
                      variant="danger"
                      onClick={finalizarConversacion}
                    >
                      {loadingUp && (
                        <Spinner
                          as="span"
                          animation="grow"
                          role="status"
                          aria-hidden="true"
                        />
                      )}
                      Finalizar Conversacion
                    </ReportBtnStyle>
                  ) : (
                    <p>
                      Esta conversacion tiene estado <strong>finalizado</strong>
                      , este es el historial de el chat.
                    </p>
                  )}
                  {/* <ReportBtnStyle
                    variant="danger"
                    onClick={() => setModalReport(true)}
                  >
                    Finalizar Conversacion
                  </ReportBtnStyle> */}
                  {/* <ModalReport
                    show={modalReport}
                    onHide={() => setModalReport(false)}
                  />

                  {user.userClass !== "client" ? (
                    <FinishBtnStyle variant="danger">
                      Finalizar Conversacion
                    </FinishBtnStyle>
                  ) : null} */}
                </>
              ) : (
                <FinishBtnStyle className="ms-auto">Finalizar</FinishBtnStyle>
              )}
            </div>
          </div>
          <div
            className="border rounded w-75 d-flex flex-column justify-content-between"
            style={{ height: '445px' }}
          >
            <div
              className="overflow-auto d-flex"
              style={{ maxHeight: '360px' }}
              ref={messagesContainerRef}
            >
              <ListMessages className="list-group">
                {
                  <>
                    {newData && newData?.mensajes?.length === 0 && (
                      <span>No hay Mensajes</span>
                    )}

                    {newData &&
                      newData.mensajes?.map((message) => (
                        <div key={message.id}>
                          <ListMessagesItem
                            className={
                              (user.userClass === 'Empresa' &&
                              message.empresaId !== null
                                ? 'user'
                                : '') ||
                              (user.userClass === 'Cliente' &&
                              message.clienteId !== null
                                ? 'user'
                                : '')
                            }
                          >
                            <span className="fw-bold ">
                              {message.clienteId !== null
                                ? newData?.cliente.nombre_completo
                                : newData?.empresa.razon_social}
                              {' - '}
                              {format(
                                new Date(message.fecha_creacion),
                                'dd/MM/yyyy HH:mm',
                              )}
                            </span>
                            <p className="pt-2 lh-1 m-0 text-start">
                              {message.mensaje}
                            </p>
                          </ListMessagesItem>
                        </div>
                      ))}
                  </>
                }
              </ListMessages>
            </div>

            {newData?.estado === true ? (
              <div className="d-flex align-items-center border rounded p-1 m-3">
                <FormTextStyle
                  size="sm"
                  type="text"
                  placeholder="Mensaje"
                  value={mensajeContenido}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                />
                <ButtonSentStyle onClick={handlerSubmit}>
                  Enviar
                  <i className="bi bi-send " />
                </ButtonSentStyle>
              </div>
            ) : null}
            {/* <div className="d-flex align-items-center border rounded p-1 m-3">
              <FormTextStyle
                size="sm"
                type="text"
                placeholder="Mensaje"
                value={mensajeContenido}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <ButtonSentStyle onClick={handlerSubmit}>
                Enviar
                <i className="bi bi-send " />
              </ButtonSentStyle>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
