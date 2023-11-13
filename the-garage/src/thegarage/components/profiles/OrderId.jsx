/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import { ModalMessages, ModalScore, ShippingStatus } from '..';
import { AuthContext } from '../../../auth/context/AuthContext';
import { BtnSubmitStyled } from '../../../components';
import { TableStyled } from './StylesComponentsProfiles';

export const OrderId = () => {
  const { user } = useContext(AuthContext);
  const { state } = useLocation();
  const { id } = useParams();
  const [data, setData] = useState(state);
  const [items, setItems] = useState(data.detalle_orden_productos);
  const [modalRating, setModalRating] = React.useState(false);
  const [modalMessages, setModalMessages] = React.useState(false);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  let total = 0;
  items
    .map((item) => (total += item.precio_unitario * item.cantidad))
    .slice(0, 4);

  return (
    <div className="m-auto p-4 w-75">
      <div className="fw-bold py-3">Pedido #{data.no_orden}</div>

      <TableStyled>
        <tr>
          <th className="text-start px-5">Item</th>
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
                    {viewportWidth > 768 && (
                      <Image
                        src={item.fotos[0].url_foto}
                        rounded
                        style={{
                          width: '70px',
                          height: '70px',
                          marginRight: '10px',
                        }}
                      />
                    )}
                    <div className="ps-2">
                      <span className="fw-bold ">{item.nombre}</span>
                      <p className="lh-1">{item.descripcion}</p>
                    </div>
                  </div>
                </td>
                <td>{item.cantidad}</td>
                <td>
                  {'$' +
                    new Intl.NumberFormat('es-Co').format(item.precio_unitario)}
                </td>
                <td className="fw-bold">
                  {'$' +
                    new Intl.NumberFormat('es-Co').format(
                      item.cantidad * item.precio_unitario,
                    )}
                </td>
              </tr>
            </>
          ))
          .slice(0, 4)}
      </TableStyled>

      <div className="fw-bold text-end">
        <span>Total: ${Intl.NumberFormat('es-Co').format(total)}</span>
        <Row className="align-items-start">
          <div
            className={
              user.userClass !== 'Administrador text-start'
                ? 'fw-bold text-start'
                : 'fw-bold me-5 text-start'
            }
          >
            Estado
          </div>
          <Col className="d-flex mb-4 col-12 col-lg-8">
            <ShippingStatus
              estados={data.estados}
              id={id}
              userClass={user.userClass}
            />
          </Col>
          <Col className="d-flex col-12 col-lg-4 align-items-center justify-content-center">
            {user.userClass !== 'Administrador' && (
              <>
                <BtnSubmitStyled
                  onClick={() => setModalMessages(true)}
                  style={{ marginRight: '20px' }}
                >
                  Mensaje
                </BtnSubmitStyled>
                <ModalMessages
                  show={modalMessages}
                  onHide={() => setModalMessages(false)}
                  id={id}
                  idRecipient={
                    user.userClass === 'Cliente'
                      ? data.id_empresa
                      : data.id_cliente
                  }
                />
              </>
            )}

            {user.userClass === 'Cliente' && (
              <>
                <BtnSubmitStyled
                  data-cy="btn-review"
                  onClick={() => setModalRating(true)}
                  style={
                    data.estados.length < 4
                      ? { display: 'none' }
                      : { display: 'block' }
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
          </Col>
        </Row>
      </div>
    </div>
  );
};
