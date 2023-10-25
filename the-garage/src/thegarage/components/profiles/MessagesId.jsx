import Image from "react-bootstrap/Image";
import {
  ButtonSentStyle,
  FinishBtnStyle,
  FormTextStyle,
  ListMessages,
  ListMessagesItem,
  ReportBtnStyle,
} from "./StylesComponentsProfiles";
import { ModalReport } from "..";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { useParams } from "react-router-dom";
import { useConversacion } from "../../../domain/useConversacion";
import { Alert, Spinner } from "react-bootstrap";
import { createMessage } from "../../../api/message";
import { mutate } from "swr";
import socket from "../../../socket";

import { format } from "date-fns";

export const MessagesId = () => {
  const { user } = useContext(AuthContext);
  const [modalReport, setModalReport] = useState(false);
  const { id } = useParams();
  const { data, loading, error } = useConversacion({ id });
  const [newData, setNewData] = useState({});

  useEffect(() => {
    if (data?.mensajes) {
      setNewData(data);
    }
  }, [data]);

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (mensajeContenido !== "") {
      const { response: mensaje } = await createMessage({
        mensaje: mensajeContenido,
        conversacionId: id,
      });
      setMensajeContenido("");

      socket.emit("mensaje", {
        mensaje: mensaje.data,
        conversacionId: id,
        recipientId:
          user.userClass === "Cliente" ? data?.empresaId : data?.clienteId,
      });
    }
  };

  const [mensajeContenido, setMensajeContenido] = useState("");

  const handleKeyPress = async (event) => {
    if (event.key === "Enter" && mensajeContenido !== "") {
      event.preventDefault();
      const { response: mensaje } = await createMessage({
        mensaje: mensajeContenido,
        conversacionId: id,
      });
      setMensajeContenido("");
      socket.emit("mensaje", {
        mensaje: mensaje.data,
        conversacionId: id,
        recipientId:
          user.userClass === "Cliente" ? data?.empresaId : data?.clienteId,
      });
    }
  };
  const handleInputChange = (event) => {
    setMensajeContenido(event.target.value);
  };

  {
    loading && <Spinner animation="border" variant="primary" />;
  }
  {
    error && <Alert variant="danger">{error}</Alert>;
  }

  useEffect(() => {
    socket.on("mensaje", (payload) => {
      if (payload.conversacionId === id) {
        // mutate(
        //   `/profile/messages/${id}`,
        //   (prevData) => {
        //     return {
        //       ...prevData,
        //       mensajes: [payload.mensaje, ...prevData.mensajes],
        //     };
        //   },
        //   false
        // );

        setNewData((prevData) => {
          return {
            ...prevData,
            mensajes: [...prevData.mensajes, payload.mensaje],
          };
        });
      }
    });

    return () => {
      socket.off("mensaje");
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
            <div className="d-flex">
              <Image
                src={
                  user.userClass === "Empresa"
                    ? data?.cliente.usuario.url_foto
                    : data?.empresa.usuario.url_foto
                }
                style={{ height: 65, width: 65 }}
              />
              <div className="text-start">
                <span className="fs-5 fw-bold">
                  {user.userClass === "Empresa" ? "Cliente" : "Empresa"}
                </span>
                {/* <p className="lh-1 mt-2">{data?.empresa?.razon_social}</p> */}
                <p>
                  {user.userClass === "Empresa"
                    ? data?.cliente?.nombre_completo
                    : data?.empresa?.razon_social}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-auto mb-2 mx-2">
              {user.userClass !== "admin" ? (
                <>
                  <ReportBtnStyle
                    variant="danger"
                    onClick={() => setModalReport(true)}
                  >
                    Reportar
                  </ReportBtnStyle>
                  <ModalReport
                    show={modalReport}
                    onHide={() => setModalReport(false)}
                  />

                  {user.userClass !== "client" ? (
                    <FinishBtnStyle>Finalizar</FinishBtnStyle>
                  ) : null}
                </>
              ) : (
                <FinishBtnStyle className="ms-auto">Finalizar</FinishBtnStyle>
              )}
            </div>
          </div>
          <div
            className="border rounded w-75 justify-content-between"
            style={{ height: "445px" }}
          >
            <div
              className="overflow-auto"
              style={{ maxHeight: "360px" }}
              ref={messagesContainerRef}
            >
              <ListMessages className="list-group">
                {
                  //Aqui Va la funcion .map para imprimir el history de los mensajes Cliente-empresa
                  <>
                    {newData && newData?.mensajes?.length === 0 && (
                      <span>No hay Mensajes</span>
                    )}

                    {newData &&
                      newData.mensajes?.map((message) => (
                        <div key={message.id}>
                          <ListMessagesItem
                            className={
                              (user.userClass === "Empresa" &&
                              message.empresaId !== null
                                ? "user"
                                : "") ||
                              (user.userClass === "Cliente" &&
                              message.clienteId !== null
                                ? "user"
                                : "")
                            }
                          >
                            <span className="fw-bold ">
                              {message.clienteId !== null
                                ? newData?.cliente.nombre_completo
                                : newData?.empresa.razon_social}
                              {" - "}
                              {format(
                                new Date(message.fecha_creacion),
                                "dd/MM/yyyy HH:mm"
                              )}
                            </span>
                            <p className="pt-2 lh-1 m-0 text-start">
                              {message.mensaje}
                            </p>
                          </ListMessagesItem>
                        </div>
                      ))}
                    {/* <ListMessagesItem className="user">
                      <span className="fw-bold ">Cliente 15:22</span>
                      <p className="pt-2 lh-1 m-0 text-start">
                        Este es el mensaje de prueba del Cliente baterías, hasta
                        repuestos para maquinaria pesada, como motores,
                        transmisiones, componentes.
                      </p>
                    </ListMessagesItem>
                    <ListMessagesItem>
                      <span className="fw-bold ">Empresa 15:28</span>
                      <p className="pt-2 lh-1 m-0 text-start">
                        Este es el mensaje de respuesta de la Tienda
                      </p>
                    </ListMessagesItem> */}
                  </>
                }
              </ListMessages>
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
};
