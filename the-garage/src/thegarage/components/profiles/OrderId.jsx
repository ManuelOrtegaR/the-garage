import Image from 'react-bootstrap/Image';
import {
  DateStyle,
  DeliveredStyle,
  OnTheWayStyle,
  ProcessingStyle,
  TableStyled,
} from './StylesComponentsProfiles';
import { BtnSubmitStyled } from '../../../components';
import { users } from '..';

export const OrderId = () => {
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

          <tr>
            <td className="text-start w-50">
              <div className="d-flex">
                <Image src="https://placehold.co/70x70" rounded />
                <div className="ps-2">
                  <span className="fw-bold ">Nombre del Articulo</span>
                  <p className="lh-1">
                    Un producto es aquello que se fabrica y se destina al
                    mercado para satisfacer una demanda. Es un elemento
                    planificado que resulta luego de un proceso productivo, el
                    cual se pone a la venta posteriormente.
                  </p>
                </div>
              </div>
            </td>
            <td>4</td>
            <td className="fw-bold">$25.000</td>
            <td className="fw-bold">$100.000</td>
          </tr>
          <tr>
            <td className="text-start w-50">
              <div className="d-flex">
                <Image src="https://placehold.co/70x70" rounded />
                <div className="ps-2">
                  <span className="fw-bold ">Nombre del Articulo</span>
                  <p className="lh-1">
                    Un producto es aquello que se fabrica y se destina al
                    mercado para satisfacer una demanda. Es un elemento
                    planificado que resulta luego de un proceso productivo, el
                    cual se pone a la venta posteriormente.
                  </p>
                </div>
              </div>
            </td>
            <td>4</td>
            <td className="fw-bold">$25.000</td>
            <td className="fw-bold">$100.000</td>
          </tr>
          <tr>
            <td className="text-start w-50">
              <div className="d-flex">
                <Image src="https://placehold.co/70x70" rounded />
                <div className="ps-2">
                  <span className="fw-bold ">Nombre del Articulo</span>
                  <p className="lh-1">
                    Un producto es aquello que se fabrica y se destina al
                    mercado para satisfacer una demanda. Es un elemento
                    planificado que resulta luego de un proceso productivo, el
                    cual se pone a la venta posteriormente.
                  </p>
                </div>
              </div>
            </td>
            <td>4</td>
            <td className="fw-bold">$25.000</td>
            <td className="fw-bold">$100.000</td>
          </tr>
          <tr>
            <td className="text-start w-50">
              <div className="d-flex">
                <Image src="https://placehold.co/70x70" rounded />
                <div className="ps-2">
                  <span className="fw-bold ">Nombre del Articulo</span>
                  <p className="lh-1">
                    Un producto es aquello que se fabrica y se destina al
                    mercado para satisfacer una demanda. Es un elemento
                    planificado que resulta luego de un proceso productivo, el
                    cual se pone a la venta posteriormente.
                  </p>
                </div>
              </div>
            </td>
            <td>4</td>
            <td className="fw-bold">$25.000</td>
            <td className="fw-bold">$100.000</td>
          </tr>
        </TableStyled>
      </div>
      <div className="fw-bold text-end me-5 pe-2">
        <span>Total: $400.000</span>
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
              <BtnSubmitStyled>Mensaje</BtnSubmitStyled>
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
