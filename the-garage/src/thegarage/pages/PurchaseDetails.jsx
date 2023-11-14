import { useLocation } from 'react-router-dom';

import Image from 'react-bootstrap/Image';

import { usePurchase } from '../../domain/usePurchase';
import {
  SubTitleStyled,
  TextStyled,
} from '../components/home/ComponentsStyles';
import { TableStyled } from '../components/purchasePage/StyledComponents';

export const PurchaseDetails = () => {
  const location = useLocation();
  const purchaseStatus = new URLSearchParams(location.search).get('status');

  const { data } = usePurchase();
  const initialValues = {
    id: '',
    products: [],
  };

  return (
    <>
      {purchaseStatus !== 'rejected' ? (
        <div className="m-5 d-flex row gap-3">
          <SubTitleStyled>¡Compra exitosa!</SubTitleStyled>
          <TextStyled>
            Gracias por tu compra. Tu pedido ha sido procesado con éxito.
          </TextStyled>
          <div
            className="overflow-auto"
            style={{ maxHeight: '300px', width: '50%', margin: '0 auto' }}
          >
            Detalles del pedido:{' '}
            <span className="fw-bold">
              Orden #{data.no_orden || initialValues.id}
            </span>
            <TableStyled>
              <tr>
                <th>Item</th>
                <th>Cantidad</th>
                <th>Valor Unitario</th>
                <th>Subtotal</th>
              </tr>
              {(data.products || initialValues.products)
                .map((item, index) => (
                  <>
                    <tr className="border-bottom">
                      <td className="text-start w-50">
                        <div className="d-flex">
                          <Image
                            src={item.fotos[0].url_foto}
                            rounded
                            style={{ width: '70px', height: '70px' }}
                          />
                          <div className="ps-2">
                            <span className="fw-bold ">{item.nombre}</span>
                            <p className="lh-1">{item.descripcion}</p>
                          </div>
                        </div>
                      </td>
                      <td>{data.detalle_orden_productos[index].cantidad}</td>
                      <td className="fw-bold">
                        {'$' +
                          new Intl.NumberFormat('es-Co').format(
                            data.detalle_orden_productos[index].precio_unitario,
                          )}
                      </td>
                      <td className="fw-bold">
                        {'$' +
                          new Intl.NumberFormat('es-Co').format(
                            data.detalle_orden_productos[index].cantidad *
                              data.detalle_orden_productos[index]
                                .precio_unitario,
                          )}
                      </td>
                    </tr>
                  </>
                ))
                .slice(0, 4)}
            </TableStyled>
          </div>
          <div
            className="fw-bold"
            style={{
              maxHeight: '300px',
              width: '50%',
              margin: '0 auto',
              fontSize: '1.5rem',
            }}
          >
            Total: ${Intl.NumberFormat('es-Co').format(data.total)}
          </div>
          <div>
            <TextStyled>
              Te hemos enviado un correo electrónico con los detalles de tu
              pedido.
            </TextStyled>
            <TextStyled>
              Si tienes alguna pregunta, contáctanos por medio de nuestro{' '}
              <a href="/contacto">formulario de contacto</a>.
            </TextStyled>
          </div>
        </div>
      ) : (
        <div className="m-5 d-flex row gap-3">
          <SubTitleStyled>¡Compra fallida!</SubTitleStyled>
          <TextStyled>
            No se pudo procesar tu compra. Por favor, intenta de nuevo.
          </TextStyled>
          <TextStyled>
            Si tienes alguna pregunta, contáctanos por medio de nuestro{' '}
            <a href="/contacto">formulario de contacto</a>.
          </TextStyled>
        </div>
      )}
    </>
  );
};
