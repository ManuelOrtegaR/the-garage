import Image from 'react-bootstrap/Image';
import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
  StatusStyle,
} from './StylesComponentsProfiles';
import { useContext, useEffect, useRef, useState } from 'react';
import { PaginationProfiles } from './PaginationProfiles';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../../../domain/useOrders';
import { AuthContext } from '../../../auth/context/AuthContext';

export const Orders = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { data: responseData } = useOrders();
  const [data, setData] = useState([]);
  const initialData = useRef(null);

  useEffect(() => {
    if (responseData) {
      setData(responseData);
      initialData.current = responseData;
    }
  }, [responseData]);

  const [productsBypage, setproductsByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalOrders = data.length;
  const lastIndex = currentPage * productsBypage;
  const firstIndex = lastIndex - productsBypage;

  const [filtroSelected, setFiltroSelected] = useState('Todo');

  const handleFiltro = (e) => {
    const valorSeleccionado = e.target.value;
    setFiltroSelected(valorSeleccionado);

    const filtered = initialData.current.filter((order) => {
      if (valorSeleccionado === 'Todo') {
        return order;
      } else if (valorSeleccionado === '1') {
        return order.estados[order.estados.length - 1].estado === 'Pagada';
      } else if (valorSeleccionado === '2') {
        return order.estados[order.estados.length - 1].estado === 'Enviada';
      } else if (valorSeleccionado === '3') {
        return order.estados[order.estados.length - 1].estado === 'Entregada';
      } else if (valorSeleccionado === '4') {
        return order.estados[order.estados.length - 1].estado === 'Cancelada';
      }
    });
    setData(filtered);
  };

  const orderDetails = (order, index) => {
    navigate(`${order.id}`, { state: data[index] });
  };

  return (
    <>
      <div className="m-auto w-100 p-4 ">
        <div className="d-flex justify-content-between mb-4">
          <span className="fs-6 fw-bold">Ordenes</span>
          <div className="d-flex w-25  align-items-center">
            <span className="w-50">Filtrar por: </span>
            <select
              className="form-select"
              aria-label="Default select example"
              value={filtroSelected}
              onChange={handleFiltro}
            >
              <option defaultValue="Todo">Todo</option>
              <option value="1">Pagadas</option>
              <option value="2">Enviadas</option>
              <option value="3">Entregadas</option>
              <option value="4">Canceladas</option>
            </select>
          </div>
        </div>
        <ListGroupStyle>
          {data.length > 0 ? (
            data
              .map((order, index) => (
                <div key={index}>
                  <ItemStyle key={order.id} className="border-bottom">
                    {user.userclass !== 'Administrador' ? (
                      <Image
                        src={
                          user.userClass === 'Cliente'
                            ? order.foto_empresa
                            : order.foto_cliente
                        }
                        style={{ height: 65, width: 65 }}
                      />
                    ) : (
                      <>
                        <Image
                          src={order.foto_cliente}
                          style={{ height: 65, width: 65 }}
                        />
                        <Image
                          src={order.foto_empresa}
                          style={{ height: 65, width: 65 }}
                        />
                      </>
                    )}
                    <span className="col-2">
                      {order.detalle_orden_productos[0].nombre}
                    </span>
                    <span className="col-1">
                      Articulos: {order.detalle_orden_productos.length}
                    </span>
                    <span className="col-2 fw-bold fs-5 ">
                      {'$' + new Intl.NumberFormat('es-Co').format(order.total)}
                    </span>
                    <div className="col-2">
                      <StatusStyle
                        className={
                          order.estados[order.estados.length - 1].estado
                        }
                      >
                        {order.estados[order.estados.length - 1].estado}
                      </StatusStyle>
                    </div>
                    <ShowOrder onClick={() => orderDetails(order, index)}>
                      <i
                        className="bi bi-eye-fill"
                        style={{ width: '20px', height: '20px' }}
                      />
                    </ShowOrder>
                  </ItemStyle>
                </div>
              ))
              .slice(firstIndex, lastIndex)
          ) : (
            <div>No hay ordenes</div>
          )}
        </ListGroupStyle>
        <PaginationProfiles
          byPage={productsBypage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={totalOrders}
        />
      </div>
    </>
  );
};
