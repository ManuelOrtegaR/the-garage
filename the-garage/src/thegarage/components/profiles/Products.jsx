import { Alert, Form, Spinner } from 'react-bootstrap';
import { PaginationProfiles } from './PaginationProfiles';

import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
} from './StylesComponentsProfiles';
import Image from 'react-bootstrap/Image';
import { BtnSubmitStyled } from '../../../components/StyledButtons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useProductsCompany } from '../../../domain/useProductsCompany';

export const Products = () => {
  const viewProduct = (product) => {
    navigate(`/profile/products/${product.id}`, { state: { product } });
  };

  const navigate = useNavigate();
  const { data, loading, error } = useProductsCompany();

  const [productsBypage, setProducstsByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducst = data.length;
  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const lastIndex = currentPage * productsBypage;
  const firstIndex = lastIndex - productsBypage;

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/profile/products/add');
  };

  const onSearch = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setFilteredProducts(
        data.filter((product) => {
          return product.nombre
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        }),
      );
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-center my-4 mx-3">
        <span className="fw-bold">Mis Productos</span>

        <BtnSubmitStyled onClick={onSubmit} data-cy="add-product">
          Agregar Nuevo Producto
        </BtnSubmitStyled>
      </div>
      <div className="d-flex justify-content-between m-3">
        <Form.Control
          type="search"
          placeholder="Buscar Por Nombre"
          className="me-2 w-50"
          aria-label="Search"
          onChange={handleInputChange}
          onKeyDown={onSearch}
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
        {loading && <Spinner animation="border" variant="primary" />}
        {error && <Alert variant="danger">{error}</Alert>}

        {filteredProducts.length > 0
          ? filteredProducts
              .map((product) => (
                <>
                  <ItemStyle>
                    <Image
                      src={product.fotos[0].url_foto}
                      style={{ width: '65px', height: '65px' }}
                    ></Image>
                    <span className="col-3">{product.nombre}</span>
                    <span>Stock: {product.cantidad_disponible}</span>
                    <span className="fw-bold col-2">
                      ${product.precio.toLocaleString('es-CO')}
                    </span>
                    <ShowOrder onClick={() => viewProduct(product)}>
                      <i className="bi bi-eye-fill" />
                    </ShowOrder>
                    <ShowOrder>
                      <i className="bi bi-trash-fill" />
                    </ShowOrder>
                  </ItemStyle>
                </>
              ))
              .slice(firstIndex, lastIndex)
          : data
              .map((product) => (
                <>
                  <ItemStyle>
                    <Image
                      src={product.fotos[0].url_foto}
                      style={{ width: '65px', height: '65px' }}
                    ></Image>
                    <span className="col-3">{product.nombre}</span>
                    <span>Stock: {product.cantidad_disponible}</span>
                    <span className="fw-bold col-2">
                      ${product.precio.toLocaleString('es-CO')}
                    </span>
                    <ShowOrder onClick={() => viewProduct(product)}>
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
