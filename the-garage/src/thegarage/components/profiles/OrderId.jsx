import Image from 'react-bootstrap/Image';
import {
  DateStyle,
  DeliveredStyle,
  OnTheWayStyle,
  ProcessingStyle,
  TableStyled,
} from './StylesComponentsProfiles';
import { BtnSubmitStyled } from '../../../components';
import { ModalScore, users } from '..';
import { useParams } from 'react-router-dom';
import { mockDataTest } from '../../dataTest/dataMock';
import React, { useState } from 'react';

export const OrderId = () => {
  const { id } = useParams();
  const [data, setData] = useState(mockDataTest);
  const [items, setItems] = useState([...data]);
  const [modalShow, setModalShow] = React.useState(false);

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
                <tr>
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
                    {new Intl.NumberFormat().format(item.price)}
                  </td>
                  <td className="fw-bold">
                    {new Intl.NumberFormat('es-Co').format(
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
            users[0].type !== 'admin'
              ? 'd-flex  align-items-center mt-3  justify-content-between'
              : 'd-flex  align-items-center mt-3  justify-content-center'
          }
        >
          <span
            className={users[0].type !== 'admin' ? 'fw-bold' : 'fw-bold me-5'}
          >
            Estado
          </span>

          <div className="position-relative m-4 w-50">
            <div className="progress" style={{ height: '3px' }}>
              <div
                className="progress-bar w-0"
                style={{ background: '#163252' }}
              ></div>
            </div>
            <DeliveredStyle className="translate-middle">
              Entregado
            </DeliveredStyle>
            <DateStyle className="translate-middle start-100 text-nowrap">
              14:15 a.m - 21/07/23
            </DateStyle>
            <OnTheWayStyle className="translate-middle">
              En camino
            </OnTheWayStyle>
            <DateStyle className="start-50 translate-middle">
              12:34 p.m - 20/07/23
            </DateStyle>
            <ProcessingStyle className="translate-middle">
              Procesando
            </ProcessingStyle>
            <DateStyle className="start-0 translate-middle">
              09:45 a.m -19/07/23
            </DateStyle>
          </div>
          {users[0].type !== 'admin' ? (
            <>
              <BtnSubmitStyled onClick={() => setModalShow(true)}>
                Mensaje
              </BtnSubmitStyled>
              <ModalScore show={modalShow} onHide={() => setModalShow(false)} />

              <BtnSubmitStyled>
                {users[0].type === 'client' ? 'Calificar' : 'Actualizar'}
              </BtnSubmitStyled>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
