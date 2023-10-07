import Image from 'react-bootstrap/Image';
import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
  StatusStyle,
} from './StylesComponentsProfiles';
import { useState } from 'react';
import { PaginationProfiles } from './PaginationProfiles';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../../../domain/useOrders';

export const Orders = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useOrders();
  const [productsBypage, setproductsByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalOrders = data.length;

  const lastIndex = currentPage * productsBypage;
  const firstIndex = lastIndex - productsBypage;

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
            <select className="form-select" aria-label="Default select example">
              <option defaultValue="Todo">Todo</option>
              <option value="1">Estado</option>
              <option value="2">Fecha</option>
              <option value="3">Tienda</option>
            </select>
          </div>
        </div>
        <ListGroupStyle>
          {data
            .map((order, index) => (
              <div key={index}>
                <ItemStyle key={order.id} className="border-bottom">
                  <Image
                    src={order.foto_cliente}
                    style={{ height: 65, width: 65 }}
                  />
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
                      className={order.estados[order.estados.length - 1].estado}
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
            .slice(firstIndex, lastIndex)}
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
