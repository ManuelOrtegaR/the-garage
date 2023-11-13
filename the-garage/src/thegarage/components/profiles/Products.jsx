/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';

import { AuthContext } from '../../../auth/context/AuthContext';
import { BtnSubmitStyled } from '../../../components/StyledButtons';
import { useProductsCompany } from '../../../domain/useProductsCompany';
import ModalProductState from './Modals/ModalProductState';
import { PaginationProfiles } from './PaginationProfiles';
import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
} from './StylesComponentsProfiles';

export const Products = () => {
  const [resetFilters, setResetFilters] = useState(false);
  const { user } = useContext(AuthContext);
  const [productState, setProductState] = useState({});
  const [showProcessingModal, setShowProcessingModal] = useState(false);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const viewProduct = (product) => {
    navigate(`/profile/products/${product.id}`, { state: { product } });
  };

  const updateProduct = (product) => {
    setShowProcessingModal(!showProcessingModal);
    setProductState(product);
  };

  const navigate = useNavigate();
  const { data, loading, error, cargarProductos } = useProductsCompany({
    user,
  });

  const [productsBypage, setProducstsByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const totalProducst =
    filteredProducts.length > 0 ? filteredProducts.length : data.length;

  const lastIndex = currentPage * productsBypage;
  const firstIndex = lastIndex - productsBypage;

  const [filtroSelected, setFiltroSelected] = useState('Todo');

  const handleFiltro = (e) => {
    const valorSeleccionado = e.target.value;
    setFiltroSelected(valorSeleccionado);

    const filtered = data
      .filter((product) => {
        if (valorSeleccionado === 'Todo') {
          return product;
        } else if (valorSeleccionado === '1') {
          return product.cantidad_disponible > 0;
        } else if (valorSeleccionado === '2') {
          return product.estatus === true;
        } else if (valorSeleccionado === '3') {
          return product.estatus === false;
        }
      })
      .sort((a, b) => {
        return a.cantidad_disponible - b.cantidad_disponible;
      });

    setFilteredProducts(filtered);
    setNoResults(filtered.length === 0);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/profile/products/add');
  };

  const onSearch = async (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      e.preventDefault();
      const filtered = data.filter((product) => {
        return product.nombre.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredProducts(filtered);
      setNoResults(filtered.length === 0);
      setSearchValue('');
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setFilteredProducts([]);
    setSearchValue('');
    setFiltroSelected('Todo');
    setResetFilters(false);
  }, [resetFilters]);

  return (
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-center my-4 mx-3">
        {user.userClass === 'Administrador' ? (
          <span className="fw-bold">Productos de The Garage</span>
        ) : (
          <span className="fw-bold">Mis Productos</span>
        )}

        {user.userClass !== 'Administrador' && (
          <BtnSubmitStyled onClick={onSubmit} data-cy="add-product">
            Agregar Nuevo Producto
          </BtnSubmitStyled>
        )}
      </div>
      <div className="d-flex justify-content-between m-3">
        <Form.Control
          type="search"
          placeholder="Buscar Por Nombre"
          className="me-2 w-50"
          aria-label="Search"
          onChange={handleInputChange}
          onKeyDown={onSearch}
          value={searchValue}
        />
        <div className="d-flex text-nowrap align-items-center">
          <span>Ordenar por: </span>
          <select
            className="form-select"
            aria-label="Default select example"
            value={filtroSelected}
            onChange={handleFiltro}
          >
            <option selected>Todo</option>
            <option value="1">Stock</option>
            <option value="2">Disponible</option>
            <option value="3">No disponible</option>
          </select>
        </div>
      </div>
      <ListGroupStyle className="m-3">
        {loading && <Spinner animation="border" variant="primary" />}
        {error && <Alert variant="danger">{error}</Alert>}

        {noResults ? (
          <div className="text-center mt-3 d-flex gap-3 ">
            <span> No se encontraron resultados.</span>
            <BtnSubmitStyled
              onClick={() => {
                setFilteredProducts([]);
                setSearchValue('');
                setNoResults(false);
              }}
            >
              Mostrar todos los productos
            </BtnSubmitStyled>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div>
            <div style={{ marginBottom: '10px' }}>
              Se encontraron estas coincidencias:
            </div>
            {filteredProducts
              .map((product) => (
                <ItemStyle key={product.nombre}>
                  {viewportWidth > 768 && (
                    <Image
                      src={product.fotos[0]?.url_foto}
                      style={{ width: '65px', height: '65px' }}
                    ></Image>
                  )}
                  <span className="col-3">{product.nombre}</span>
                  <span>Stock: {product.cantidad_disponible}</span>
                  <span className="col-3">
                    {product.estatus === false ? (
                      <i className="bi bi-x-circle-fill"> No disponible</i>
                    ) : (
                      <i className="bi bi-check-circle-fill"> Disponible</i>
                    )}
                  </span>
                  <span className="fw-bold col-2">
                    ${product.precio.toLocaleString('es-CO')}
                  </span>
                  <ShowOrder onClick={() => viewProduct(product)}>
                    <i className="bi bi-eye-fill" />
                  </ShowOrder>
                  <ShowOrder onClick={() => updateProduct(product)}>
                    {product.estatus ? (
                      <i className="bi bi-toggle-on"></i>
                    ) : (
                      <i className="bi bi-toggle-off"></i>
                    )}
                  </ShowOrder>
                </ItemStyle>
              ))
              .slice(firstIndex, lastIndex)}

            <BtnSubmitStyled
              onClick={() => {
                setFilteredProducts([]);
                setSearchValue('');
                setNoResults(false);
                setFiltroSelected('Todo');
              }}
              style={{ marginTop: '10px' }}
            >
              Mostrar todos los productos
            </BtnSubmitStyled>
          </div>
        ) : (
          data
            .map((product) => (
              <>
                <ItemStyle>
                  {viewportWidth > 768 && (
                    <Image
                      src={product.fotos[0]?.url_foto}
                      style={{ width: '65px', height: '65px' }}
                    ></Image>
                  )}
                  <span>Stock: {product.cantidad_disponible}</span>
                  <span className="col-3">{product.nombre}</span>
                  <span className="col-3">
                    {product.estatus === false ? (
                      <i className="bi bi-x-circle-fill"> No disponible</i>
                    ) : (
                      <i className="bi bi-check-circle-fill"> Disponible</i>
                    )}
                  </span>

                  <span className="fw-bold col-2">
                    ${product.precio.toLocaleString('es-CO')}
                  </span>
                  <ShowOrder onClick={() => viewProduct(product)}>
                    <i className="bi bi-eye-fill" />
                  </ShowOrder>
                  <ShowOrder onClick={() => updateProduct(product)}>
                    {product.estatus ? (
                      <i className="bi bi-toggle-on"></i>
                    ) : (
                      <i className="bi bi-toggle-off"></i>
                    )}
                  </ShowOrder>
                </ItemStyle>
              </>
            ))
            .slice(firstIndex, lastIndex)
        )}
      </ListGroupStyle>

      {noResults ? null : (
        <PaginationProfiles
          byPage={productsBypage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={totalProducst}
        />
      )}

      {showProcessingModal ? (
        <ModalProductState
          showProcessingModal={showProcessingModal}
          setShowProcessingModal={setShowProcessingModal}
          productState={productState}
          cargarProductos={cargarProductos}
          setResetFilters={setResetFilters}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
