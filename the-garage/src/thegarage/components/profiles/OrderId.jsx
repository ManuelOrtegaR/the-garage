import Image from 'react-bootstrap/Image';
import { TableStyled } from './StylesComponentsProfiles';
import { BtnSubmitStyled } from '../../../components';
import { ModalMessages, ModalScore, ShippingStatus } from '..';
import { useParams } from 'react-router-dom';
import { mockDataTest } from '../../dataTest/dataMock';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';

export const OrderId = () => {
  const { user } = useContext(AuthContext);

  const { id } = useParams();
  const [data, setData] = useState(mockDataTest);
  const [items, setItems] = useState([...data]);
  const [modalRating, setModalRating] = React.useState(false);
  const [modalMessages, setModalMessages] = React.useState(false);

  //Implementar DB ordenes
  const cantidad = 4;
  let total = 0;
  items.map((item) => (total += item.price * cantidad)).slice(0, 4);

  return (
    <div className="py-4 px-5">
      <span className="fw-bold py-3">Pedido #12345</span>
      <div className="overflow-auto" style={{ maxHeight: '300px' }}>
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
                        src={item.image}
                        rounded
                        style={{ width: '70px', height: '70px' }}
                      />
                      <div className="ps-2">
                        <span className="fw-bold ">{item.title}</span>
                        <p className="lh-1">{item.description}</p>
                      </div>
                    </div>
                  </td>
                  <td>{cantidad}</td>
                  <td className="fw-bold">
                    {'$' + new Intl.NumberFormat().format(item.price)}
                  </td>
                  <td className="fw-bold">
                    {'$' +
                      new Intl.NumberFormat('es-Co').format(
                        cantidad * item.price,
                      )}
                  </td>
                </tr>
              </>
            ))
            .slice(0, 4)}
        </TableStyled>
      </div>
      <div className="fw-bold text-end me-5 pe-2">
        <span>Total: ${Intl.NumberFormat().format(total)}</span>
        <div
          className={
            user.userClass !== 'admin'
              ? 'd-flex  align-items-center mt-3  justify-content-between'
              : 'd-flex  align-items-center mt-3  justify-content-center'
          }
        >
          <span
            className={user.userClass !== 'admin' ? 'fw-bold' : 'fw-bold me-5'}
          >
            Estado
          </span>

          <ShippingStatus />

          {user.userClass !== 'admin' ? (
            <>
              <BtnSubmitStyled onClick={() => setModalMessages(true)}>
                Mensaje
              </BtnSubmitStyled>
              <ModalMessages
                show={modalMessages}
                onHide={() => setModalMessages(false)}
              />

              <BtnSubmitStyled onClick={() => setModalRating(true)}>
                {user.userClass === 'client' ? 'Calificar' : 'Actualizar'}
              </BtnSubmitStyled>
              <ModalScore
                show={modalRating}
                onHide={() => setModalRating(false)}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
