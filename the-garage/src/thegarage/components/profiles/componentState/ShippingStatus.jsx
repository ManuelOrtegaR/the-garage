import {
  DateStyle,
  DeliveredStyle,
  OnTheWayStyle,
  ProcessingStyle,
} from '../StylesComponentsProfiles';

export const ShippingStatus = () => {
  return (
    <div className="position-relative m-4 w-50">
      <div className="progress" style={{ height: '3px' }}>
        <div
          className="progress-bar w-50"
          style={{ background: '#163252' }}
        ></div>
      </div>
      <DeliveredStyle className="translate-middle">Entregado</DeliveredStyle>
      <DateStyle className="translate-middle start-100 text-nowrap">
        14:15 a.m - 21/07/23
      </DateStyle>
      <OnTheWayStyle className="translate-middle">En camino</OnTheWayStyle>
      <DateStyle className="start-50 translate-middle">
        12:34 p.m - 20/07/23
      </DateStyle>
      <ProcessingStyle className="translate-middle">Procesando</ProcessingStyle>
      <DateStyle className="start-0 translate-middle">
        09:45 a.m -19/07/23
      </DateStyle>
    </div>
  );
};
