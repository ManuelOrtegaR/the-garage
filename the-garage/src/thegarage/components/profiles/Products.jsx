import { Form } from 'react-bootstrap';
import { PaginationProfiles } from './PaginationProfiles';
import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
} from './StylesComponentsProfiles';
import Image from 'react-bootstrap/Image';
import { BtnSubmitStyled } from '../../../components/StyledButtons';
import { mockDataTest } from '../../dataTest/dataMock';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Products = () => {
  //React-router: Obtenemos el id de la url.
  const viewProduct = useNavigate();
  const addProduct = useNavigate();

  const [data, setData] = useState(mockDataTest);
  const [products, setProducts] = useState([...data]);
  const [productsBypage, setProducstsByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducst = products.length;

  const lastIndex = currentPage * productsBypage;
  const firstIndex = lastIndex - productsBypage;

  return (
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-center my-4 mx-3">
        <span className="fw-bold">Mis Productos</span>
        <BtnSubmitStyled onClick={() => addProduct(`add`)}>
          Agregar Nuevo Producto
        </BtnSubmitStyled>
      </div>
      <div className="d-flex justify-content-between m-3">
        <Form.Control
          type="search"
          placeholder="Buscar Por Nombre"
          className="me-2 w-50"
          aria-label="Search"
        />
        <div className="d-flex text-nowrap align-items-center">
          <span>Ordenar por: </span>
          <select className="form-select" aria-label="Default select example">
            <option selected>Todo</option>
            <option value="1">Estado</option>
            <option value="2">Fecha</option>
            <option value="3">Tienda</option>
          </select>
        </div>
      </div>
      <ListGroupStyle className="m-3">
        {products
          .map((product) => (
            <>
              <ItemStyle>
                <Image
                  src={product.image}
                  style={{ width: '65px', height: '65px' }}
                ></Image>
                <span className="col-3">{product.title}</span>
                <span>Stock: {product.stock}</span>
                <span className="fw-bold col-2">${product.price}</span>
                <ShowOrder onClick={() => viewProduct(`${product.id}`)}>
                  <i className="bi bi-eye-fill" />
                </ShowOrder>
                <ShowOrder>
                  <i className="bi bi-trash-fill" />
                </ShowOrder>
              </ItemStyle>
            </>
          ))
          .slice(firstIndex, lastIndex)}
      </ListGroupStyle>
      <PaginationProfiles
        byPage={productsBypage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={totalProducst}
      />
    </div>
  );
};
