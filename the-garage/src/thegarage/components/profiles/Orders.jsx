import Image from 'react-bootstrap/Image';
import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
  StatusStyle,
} from './StylesComponentsProfiles';
import { useState } from 'react';
import { mockDataTest } from '../../dataTest/dataMock';
import { PaginationProfiles } from './PaginationProfiles';
import { useNavigate } from 'react-router-dom';

export const Orders = () => {
  const [data, setData] = useState(mockDataTest);
  const [orders, setOrders] = useState([...data]);
  const [productsBypage, setproductsByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalOrders = orders.length;

  const lastIndex = currentPage * productsBypage;
  const firstIndex = lastIndex - productsBypage;

  const viewOrder = useNavigate();

  return (
    <>
      <div className="m-auto w-100 p-4 ">
        <div className="d-flex justify-content-between mb-4">
          <span className="fs-6 fw-bold">Ordenes</span>
          <div className="d-flex w-25  align-items-center">
            <span className="w-50">Filtrar por: </span>
            <select className="form-select" aria-label="Default select example">
              <option selected>Todo</option>
              <option value="1">Estado</option>
              <option value="2">Fecha</option>
              <option value="3">Tienda</option>
            </select>
          </div>
        </div>
        <ListGroupStyle>
          {orders
            .map((order) => (
              <>
                <ItemStyle key={order.id} className="border-bottom">
                  <Image src={order.image} style={{ height: 65, width: 65 }} />
                  <span className="col-2">{order.store}</span>
                  <span className="col-1">Articulos: 5</span>
                  <span className="col-2 fw-bold fs-5 ">$250.000</span>
                  <div className="col-2">
                    {/* Estados: delivered, processing, onTheWay, cancelled*/}
                    <StatusStyle className="delivered">Entregado</StatusStyle>
                  </div>
                  <ShowOrder onClick={() => viewOrder(`${order.id}`)}>
                    <i
                      className="bi bi-eye-fill"
                      style={{ width: '20px', height: '20px' }}
                    />
                  </ShowOrder>
                </ItemStyle>
              </>
            ))
            .slice(firstIndex, lastIndex)}
        </ListGroupStyle>
        <PaginationProfiles
          productsBypage={productsBypage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalOrders={totalOrders}
        />
      </div>
    </>
  );
};
