/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import {
  DateStyle,
  DeliveredStyle,
  OnTheWayStyle,
  ProcessingStyle,
} from '../StylesComponentsProfiles';
import { updateOrderStatus } from '../../../../api/orders';
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

export const ShippingStatus = ({ estados, id, userClass }) => {
  const [data, setData] = useState(estados);

  const enviada = data.length > 2 ? data[2].estado : '';
  const entregada = data.length > 3 ? data[3].estado : '';
  const fechaEnviada =
    data.length > 2
      ? format(new Date(data[2].fecha_estado), 'dd/MM/yyyy HH:mm')
      : '-';
  const fechaEntregada =
    data.length > 3
      ? format(new Date(data[3].fecha_estado), 'dd/MM/yyyy HH:mm')
      : '-';

  const beCancelled = data.length > 2 ? data[2].estado : 'Enviada';

  const onDelivered = async () => {
    const response = await updateOrderStatus(id);
    if (response.data.status === 200) {
      const newEstados = {
        estado: response.data.data.estado,
        fecha_estado: response.data.data.fecha_estado,
      };
      setData([...data, newEstados]);
    }
  };
  const onSent = async (event) => {
    let response;

    if (event.target.innerText === 'Enviar') {
      response = await updateOrderStatus(id, 'Enviada');
    } else {
      response = await updateOrderStatus(id, 'Cancelada');
    }

    if (response.data.status === 200) {
      const newEstados = {
        estado: response.data.data.estado,
        fecha_estado: response.data.data.fecha_estado,
      };
      setData([...data, newEstados]);
    }
  };

  const progress = (data.length - 2) * 50;
  return (
    <div className="position-relative m-4 w-50">
      <div className="progress" style={{ height: '3px' }}>
        <div
          className={`progress-bar w-${progress}`}
          style={{ background: '#163252' }}
        ></div>
      </div>
      <DeliveredStyle
        className={`translate-middle ${entregada}`}
        onClick={() => {
          if (userClass !== 'Cliente' && data.length === 3) {
            onDelivered();
          }
        }}
      >
        Entregada
      </DeliveredStyle>
      <DateStyle className="translate-middle start-100 text-nowrap">
        {fechaEntregada}
      </DateStyle>
      <OnTheWayStyle
        drop="up"
        variant=""
        title={
          <span style={{ color: 'white', fontWeight: 'bold' }}>
            {beCancelled}
          </span>
        }
        className={`translate-middle ${enviada}`}
        disabled={data.length >= 3}
        size="sm"
      >
        {userClass !== 'Cliente' ? (
          <>
            <Dropdown.Item eventKey="1" onClick={onSent}>
              Enviar
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={onSent}>
              Cancelar
            </Dropdown.Item>
          </>
        ) : (
          <Dropdown.Item eventKey="2" onClick={onSent}>
            Cancelar
          </Dropdown.Item>
        )}
      </OnTheWayStyle>
      <DateStyle className="start-50 translate-middle">
        {fechaEnviada}
      </DateStyle>
      <ProcessingStyle className={`translate-middle ${estados[1].estado}`}>
        Pagada
      </ProcessingStyle>
      <DateStyle className="start-0 translate-middle">
        {format(new Date(estados[1].fecha_estado), 'dd/MM/yyyy HH:mm')}
      </DateStyle>
    </div>
  );
};
