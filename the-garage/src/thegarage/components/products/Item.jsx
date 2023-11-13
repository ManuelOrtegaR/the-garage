/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  AlertWarningStyled,
  CardAvalaibleStyle,
  CardDescroptionStyle,
  CardImgStyle,
  CardStyle,
  CardTitleStyle,
  ContainerButtonStyled,
  ContainerStyled,
  IconStyled,
} from './StyledsComponentsProducts';
import { BtnDangerSubmitStyled, BtnSubmitStyled } from '../../../components';
import { AuthContext } from '../../../auth/context/AuthContext';
import { medianaValoraciones } from './utils';
import { useCart } from '../../store';

export function Item({ item }) {
  const { user } = useContext(AuthContext);
  const { dispatch } = useCart();

  const navigate = useNavigate();

  function handleClick(id) {
    if (user) {
      navigate(`/productDetail/${id}`);
    } else navigate('/login');
  }

  function handleClickSuceess(item) {
    if (user) {
      dispatch({ type: 'ADD_TO_CART', payload: { item, cant: 1 } });
      toast.success('Producto agregado al carrito', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else navigate('/login');
  }

  return (
    <ContainerStyled>
      <CardStyle>
        <CardImgStyle
          variant="top"
          src={
            item.fotos.length > 0
              ? item.fotos[0].url_foto
              : 'https://placehold.co/600x400'
          }
        />
        <Card.Body>
          <CardTitleStyle>{item.nombre}</CardTitleStyle>
          <CardDescroptionStyle>{item.descripcion}</CardDescroptionStyle>
          <Card.Text className="fs-4">
            <strong>${item.precio.toLocaleString('es-CO')}</strong>
          </Card.Text>
          <CardAvalaibleStyle>
            {item.tipo_entrega.toLowerCase().includes('domicilio') ? (
              <i className="bi bi-check"></i>
            ) : (
              <i className="bi bi-x"></i>
            )}
            {'Disponible para despacho'}
          </CardAvalaibleStyle>
          <CardAvalaibleStyle>
            {item.tipo_entrega.toLowerCase().includes('recoger') ? (
              <i className="bi bi-check"></i>
            ) : (
              <i className="bi bi-x"></i>
            )}
            {'Disponible para Retiro'}
          </CardAvalaibleStyle>
          <Card.Text>
            {[...Array(medianaValoraciones(item.valoraciones))].map(
              (_, index) => (
                <IconStyled
                  key={index}
                  className="bi bi-star-fill"
                ></IconStyled>
              ),
            )}
            {[...Array(5 - medianaValoraciones(item.valoraciones))].map(
              (_, index) => (
                <IconStyled key={index} className="bi bi-star"></IconStyled>
              ),
            )}

            <span> {medianaValoraciones(item.valoraciones)} </span>
          </Card.Text>
          {!user || user.userClass === 'Cliente' ? (
            <ContainerButtonStyled>
              <BtnSubmitStyled
                onClick={() => {
                  if (item.estatus) {
                    handleClickSuceess(item, 1);
                  }
                }}
                variant="success"
                data-cy="btn-add-to-cart"
              >
                {item.estatus ? 'Agregar al carrito' : 'No disponible'}
              </BtnSubmitStyled>

              <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />

              <BtnDangerSubmitStyled
                onClick={() => {
                  if (item.estatus) {
                    handleClick(item.id);
                  }
                }}
                variant="danger"
                className="px-1 w-100"
              >
                Ver Detalles
              </BtnDangerSubmitStyled>
            </ContainerButtonStyled>
          ) : (
            <div>
              <AlertWarningStyled variant="warning">
                <p>Este producto está disponible solo para clientes. </p>
              </AlertWarningStyled>
            </div>
          )}
        </Card.Body>
      </CardStyle>
    </ContainerStyled>
  );
}
