import Image from "react-bootstrap/Image";
import {
  BtnStateStyle,
  ItemStyle,
  ListGroupStyle,
} from "./StylesComponentsProfiles";
import { useContext, useEffect, useState } from "react";

import { PaginationProfiles } from "./PaginationProfiles";
import { useNavigate } from "react-router-dom";
import { useConversaciones } from "../../../domain/useConversations";
import { Alert, Spinner } from "react-bootstrap";
import { AuthContext } from "../../../auth/context/AuthContext";
import { BtnSubmitStyled } from "../../../components/StyledButtons";

export const Messages = () => {
  const { data, loading, error } = useConversaciones();
  const { user } = useContext(AuthContext);

  const [messagesBypage, setMessagesByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * messagesBypage;
  const firstIndex = lastIndex - messagesBypage;
  const [filtroSelected, setFiltroSelected] = useState("Todo");
  const [filteredMensajes, setFilteredMensajes] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [resetFilters, setResetFilters] = useState(false);

  const viewMessage = useNavigate();
  const handleFiltro = (e) => {
    const valorSeleccionado = e.target.value;
    setFiltroSelected(valorSeleccionado);

    const filtered = data.filter((conversacion) => {
      if (valorSeleccionado === "Todo") {
        return conversacion;
      } else if (valorSeleccionado === "1") {
        return conversacion.estado === true;
      } else if (valorSeleccionado === "2") {
        return conversacion.estado === false;
      }
    });

    setFilteredMensajes(filtered);
    setNoResults(filtered.length === 0);
  };
  const totalMessages =
    filteredMensajes?.length > 0 ? filteredMensajes?.length : data?.length;

  useEffect(() => {
    setFilteredMensajes([]);
    setFiltroSelected("Todo");
    setResetFilters(false);
  }, [resetFilters]);
  return (
    <>
      {loading && <Spinner animation="border" variant="primary" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <div className="m-auto w-100 p-4 ">
        <div className="d-flex justify-content-between mb-4">
          <span className="fs-6 fw-bold">Mensajes</span>
          <div className="d-flex w-25  align-items-center">
            <span className="w-50">Filtrar por: </span>
            <select
              className="form-select"
              aria-label="Default select example"
              value={filtroSelected}
              onChange={handleFiltro}
            >
              <option selected>Todo</option>
              <option value="1">Abierto</option>
              <option value="2">Cerrado</option>
            </select>
          </div>
        </div>
        <ListGroupStyle key={"a"}>
          {data && data.length === 0 && <span>No hay Conversaciones</span>}
          {noResults ? (
            <div className="text-center mt-3 d-flex gap-3 ">
              <span> No se encontraron resultados.</span>
              <BtnSubmitStyled
                onClick={() => {
                  setFilteredMensajes([]);
                  setNoResults(false);
                }}
              >
                Mostrar todos las Conversaciones
              </BtnSubmitStyled>
            </div>
          ) : filteredMensajes.length > 0 ? (
            filteredMensajes
              .map((message) => (
                <>
                  <ItemStyle className="border-bottom" key={message.id}>
                    <Image
                      src={
                        user.userClass === "Cliente"
                          ? message.empresa.usuario.url_foto
                          : message.cliente.usuario.url_foto
                      }
                      style={{ height: 65, width: 65, borderRadius: "50%" }}
                    />
                    <span>Pedido N° {message.orden_productos.no_orden}</span>
                    <span>
                      <strong className="col-2">
                        {message.estado ? (
                          <i className="bi bi-envelope-check"> Conversa con:</i>
                        ) : (
                          <i className="bi bi-envelope-dash-fill">
                            {" "}
                            Chat Archivado
                          </i>
                        )}
                      </strong>
                    </span>
                    <span className="text-truncate col-5">
                      {user.userClass === "Cliente"
                        ? message.empresa.razon_social
                        : message.cliente.nombre_completo}
                    </span>
                    <BtnStateStyle
                      variant={message.estado === true ? "open" : "closed"}
                      onClick={() => viewMessage(`${message.id}`)}
                    >
                      {message.estado === true ? "Abierto" : "Cerrado"}
                    </BtnStateStyle>
                  </ItemStyle>
                </>
              ))
              .slice(firstIndex, lastIndex)
          ) : (
            data &&
            user &&
            data
              .map((message) => (
                <>
                  <ItemStyle className="border-bottom" key={message.id}>
                    <Image
                      src={
                        user.userClass === "Cliente"
                          ? message.empresa.usuario.url_foto
                          : message.cliente.usuario.url_foto
                      }
                      style={{ height: 65, width: 65, borderRadius: "50%" }}
                    />
                    {/* <span className="col-2">{message.empresaId}</span> */}
                    <span>Pedido N° {message.orden_productos.no_orden}</span>
                    <span>
                      <strong className="col-2">
                        {message.estado ? (
                          <i className="bi bi-envelope-check"> Conversa con:</i>
                        ) : (
                          <i className="bi bi-envelope-dash-fill">
                            {" "}
                            Chat Archivado
                          </i>
                        )}
                      </strong>
                    </span>

                    <span className="text-truncate col-5">
                      {user.userClass === "Cliente"
                        ? message.empresa.razon_social
                        : message.cliente.nombre_completo}
                    </span>
                    <BtnStateStyle
                      variant={message.estado === true ? "open" : "closed"}
                      onClick={() => viewMessage(`${message.id}`)}
                    >
                      {message.estado === true ? "Abierto" : "Cerrado"}
                    </BtnStateStyle>
                  </ItemStyle>
                </>
              ))
              .slice(firstIndex, lastIndex)
          )}
          {/* {data && data.length === 0 && <span>No hay Conversaciones</span>} */}
        </ListGroupStyle>
        {noResults ? null : (
          <PaginationProfiles
            byPage={messagesBypage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            total={totalMessages}
          />
        )}
      </div>
    </>
  );
};
