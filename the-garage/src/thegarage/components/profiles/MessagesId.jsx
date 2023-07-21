import Image from 'react-bootstrap/Image';
import {
  ButtonSentStyle,
  FinishBtnStyle,
  FormTextStyle,
  ListMessages,
  ListMessagesItem,
  ReportBtnStyle,
} from './StylesComponentsProfiles';
import { users } from '..';

export const MessagesId = () => {
  return (
    <>
      <div className="m-auto w-100 p-4 ">
        <div className="d-flex">
          <div className="d-flex flex-column w-50">
            <span className="fs-6 fw-bold mb-4">Titulo de prueba</span>
            <div className="d-flex">
              <Image
                src="../../../../assets/images/home/empresas/empresa1.jpg"
                style={{ height: 65, width: 65 }}
              />
              <div className="text-start">
                <span className="fs-5 fw-bold">Empresa</span>
                <p className="lh-1 mt-2">
                  En nuestro almacén, contamos con un extenso catálogo de
                  repuestos que abarca desde piezas de automóviles, como frenos,
                  filtros, correas y baterías, hasta repuestos para maquinaria
                  pesada, como motores, transmisiones, componentes hidráulicos y
                  eléctricos. Trabajamos con los principales fabricantes y
                  proveedores de repuestos reconocidos en el mercado, lo que nos
                  permite ofrecer productos de confianza y duraderos.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-auto mb-2 mx-2">
              {users[0].type !== 'admin' ? (
                <>
                  <ReportBtnStyle variant="danger">Reportar</ReportBtnStyle>
                  {users[0].type !== 'client' ? (
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
            style={{ height: '445px' }}
          >
            <div className="overflow-auto" style={{ maxHeight: '360px' }}>
              <ListMessages className="list-group">
                <ListMessagesItem className="user">
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
                </ListMessagesItem>
                <ListMessagesItem className="user">
                  <span className="fw-bold ">Cliente 15:22</span>
                  <p className="pt-2 lh-1 m-0 text-start">
                    Este es el mensaje de prueba del Cliente
                  </p>
                </ListMessagesItem>
                <ListMessagesItem>
                  <span className="fw-bold ">Empresa 15:28</span>
                  <p className="pt-2 lh-1 m-0 text-start">
                    Este es el mensaje de respuesta de la Tienda
                  </p>
                </ListMessagesItem>
                <ListMessagesItem className="user">
                  <span className="fw-bold ">Cliente 15:22</span>
                  <p className="pt-2 lh-1 m-0 text-start">
                    Este es el mensaje de prueba del Cliente
                  </p>
                </ListMessagesItem>
                <ListMessagesItem>
                  <span className="fw-bold ">Empresa 15:28</span>
                  <p className="pt-2 lh-1 m-0 text-start">
                    Este es el mensaje de respuesta de la Tienda
                  </p>
                </ListMessagesItem>
                <ListMessagesItem className="user">
                  <span className="fw-bold ">Cliente 15:22</span>
                  <p className="pt-2 lh-1 m-0 text-start">
                    Este es el mensaje de prueba del Cliente
                  </p>
                </ListMessagesItem>
                <ListMessagesItem>
                  <span className="fw-bold ">Empresa 15:28</span>
                  <p className="pt-2 lh-1 m-0 text-start">
                    Este es el mensaje de respuesta de la Tienda
                  </p>
                </ListMessagesItem>
                <ListMessagesItem className="user">
                  <span className="fw-bold ">Cliente 15:22</span>
                  <p className="pt-2 lh-1 m-0 text-start">
                    Este es el mensaje de prueba del Cliente
                  </p>
                </ListMessagesItem>
              </ListMessages>
            </div>
            <div className="d-flex align-items-center border rounded p-1 m-3">
              <FormTextStyle size="sm" type="text" placeholder="Mensaje" />
              <ButtonSentStyle>
                <i className="bi bi-send " />
              </ButtonSentStyle>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
