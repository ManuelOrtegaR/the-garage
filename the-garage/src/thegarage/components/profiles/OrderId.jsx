import Image from "react-bootstrap/Image";
import { TableStyled } from "./StylesComponentsProfiles";
import { BtnSubmitStyled } from "../../../components";
import { ModalMessages, ModalScore, ShippingStatus } from "..";
import { useLocation, useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";

export const OrderId = () => {
  const { user } = useContext(AuthContext);
  const { state } = useLocation();
  const { id } = useParams();
  const [data, setData] = useState(state);
  const [items, setItems] = useState(data.detalle_orden_productos);
  const [modalRating, setModalRating] = React.useState(false);
  const [modalMessages, setModalMessages] = React.useState(false);

  let total = 0;
  items
    .map((item) => (total += item.precio_unitario * item.cantidad))
    .slice(0, 4);

  return (
    <div className="py-4 px-5">
      <span className="fw-bold py-3">Pedido #{data.no_orden}</span>
      <div className="overflow-auto" style={{ maxHeight: "300px" }}>
        <TableStyled>
          <tr>
            <th>Item</th>
            <th>Cantidad</th>
            <th>Valor Unitario</th>
            <th>Subtotal</th>
          </tr>

          {items
            .map((item) => (
              <>
                <tr className="border-bottom">
                  <td className="text-start w-50">
                    <div className="d-flex">
                      <Image
                        src={item.fotos[0].url_foto}
                        rounded
                        style={{ width: "70px", height: "70px" }}
                      />
                      <div className="ps-2">
                        <span className="fw-bold ">{item.nombre}</span>
                        <p className="lh-1">{item.descripcion}</p>
                      </div>
                    </div>
                  </td>
                  <td>{item.cantidad}</td>
                  <td className="fw-bold">
                    {"$" +
                      new Intl.NumberFormat("es-Co").format(
                        item.precio_unitario
                      )}
                  </td>
                  <td className="fw-bold">
                    {"$" +
                      new Intl.NumberFormat("es-Co").format(
                        item.cantidad * item.precio_unitario
                      )}
                  </td>
                </tr>
              </>
            ))
            .slice(0, 4)}
        </TableStyled>
      </div>
      <div className="fw-bold text-end me-5 pe-2">
        <span>Total: ${Intl.NumberFormat("es-Co").format(total)}</span>
        <div
          className={
            user.userClass !== "Administrador"
              ? "d-flex  align-items-center mt-3  justify-content-between"
              : "d-flex  align-items-center mt-3  justify-content-center"
          }
        >
          <span
            className={
              user.userClass !== "Administrador" ? "fw-bold" : "fw-bold me-5"
            }
          >
            Estado
          </span>

          <ShippingStatus
            estados={data.estados}
            id={id}
            userClass={user.userClass}
          />

          {user.userClass !== "Administrador" && (
            <>
              <BtnSubmitStyled onClick={() => setModalMessages(true)}>
                Mensaje
              </BtnSubmitStyled>
              <ModalMessages
                show={modalMessages}
                onHide={() => setModalMessages(false)}
                id={id}
                idEmpresa={data.id_empresa}
              />
            </>
          )}

          {user.userClass === "Cliente" && (
            <>
              <BtnSubmitStyled
                data-cy="btn-review"
                onClick={() => setModalRating(true)}
                style={
                  data.estados.length < 4
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                Valorar
              </BtnSubmitStyled>
              <ModalScore
                show={modalRating}
                onHide={() => setModalRating(false)}
                items={items}
                id={id}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
