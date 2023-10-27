import { useReducer, useEffect } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { ContainerBreadcumStyled } from './StyledsComponentsProducts';
import { useLocation, useNavigate } from 'react-router-dom';
import { historyReducer } from './reducers/BreadCrumbReducer';
import { types } from './reducers/types';

export const BreadCrumbRoute = ({ nameProducto }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [history, dispatch] = useReducer(historyReducer, [
    { routeName: 'Inicio', path: '/' },
  ]);

  useEffect(() => {
    const newPathname = location.pathname.includes('productDetail')
      ? `/Producto / Detalle del Producto /  ${nameProducto}`
      : location.pathname;
    dispatch({
      type: types.add,
      payload: {
        routeName: newPathname.substring(1).replace(/\//g, ' / '),
        path: location.pathname,
      },
    });
  }, [location.pathname]);

  const handleClickBradcrumb = (path) => {
    navigate(path);
  };

  return (
    <div>
      <ContainerBreadcumStyled>
        <Breadcrumb>
          {history.map((item, index) => (
            <Breadcrumb.Item
              key={index}
              onClick={() => handleClickBradcrumb(item.path)}
            >
              {item.routeName}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </ContainerBreadcumStyled>
    </div>
  );
};
