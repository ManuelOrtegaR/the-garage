import Image from "react-bootstrap/Image";
import {
  BtnStateStyle,
  ItemStyle,
  ListGroupStyle,
} from "./StylesComponentsProfiles";
import { useContext, useState } from "react";

import { PaginationProfiles } from "./PaginationProfiles";
import { useNavigate } from "react-router-dom";
import { useConversaciones } from "../../../domain/useConversations";
import { Alert, Spinner } from "react-bootstrap";
import { AuthContext } from "../../../auth/context/AuthContext";

export const Messages = () => {
  const { data, loading, error } = useConversaciones();
  const { user } = useContext(AuthContext);

  const [messagesBypage, setMessagesByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalMessages = 5;

  const lastIndex = currentPage * messagesBypage;
  const firstIndex = lastIndex - messagesBypage;

  //React-router: Obtenemos el id de la url.
  const viewMessage = useNavigate();
  return (
    <>
      {loading && <Spinner animation="border" variant="primary" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <div className="m-auto w-100 p-4 ">
        <div className="d-flex justify-content-between mb-4">
          <span className="fs-6 fw-bold">Mensajes</span>
          <div className="d-flex w-25  align-items-center">
            <span className="w-50">Filtrar por: </span>
            <select className="form-select" aria-label="Default select example">
              <option selected>Todo</option>
              <option value="1">Estado</option>
              <option value="2">Fecha</option>
              <option value="3">Tienda</option>
            </select>
          </div>
        </div>
        <ListGroupStyle key={"a"}>
          {data && data.length === 0 && <span>No hay Conversaciones</span>}
          {data &&
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
                      style={{ height: 65, width: 65 }}
                    />
                    {/* <span className="col-2">{message.empresaId}</span> */}
                    <span>
                      <strong className="col-2">{"Chat con:"}</strong>
                    </span>
                    <span className="text-truncate col-5">
                      {user.userClass === "Cliente"
                        ? message.empresa.razon_social
                        : message.cliente.nombre_completo}
                    </span>
                    <BtnStateStyle
                      variant={"open"}
                      onClick={() => viewMessage(`${message.id}`)}
                    >
                      {"Abierto"}
                    </BtnStateStyle>
                  </ItemStyle>
                </>
              ))
              .slice(firstIndex, lastIndex)}
        </ListGroupStyle>

        <PaginationProfiles
          byPage={messagesBypage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={totalMessages}
        />
      </div>
    </>
  );
};
