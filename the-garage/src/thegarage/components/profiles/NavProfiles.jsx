import Nav from 'react-bootstrap/Nav';
import { NavLinkStyled } from './StylesComponentsProfiles';
import { useContext } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';

// eslint-disable-next-line react-refresh/only-export-components
export const itemsProfiles = [
  {
    name: 'Detalles',
    url: 'details',
    by: ['Empresa'],
    icon: <i className="bi bi-file-person me-2" />,
  },
  {
    name: 'Contraseña',
    url: 'change-pws',
    by: ['Empresa', 'Cliente'],
    icon: <i className="bi bi-lock-fill me-2" />,
  },
  {
    name: 'Solicitudes',
    url: 'requests',
    by: ['Administrador'],
    icon: <i className="bi bi-building me-2" />,
  },
  {
    name: 'Cuentas',
    url: 'accounts',
    by: ['Administrador'],
    icon: <i className="bi bi-file-person me-2" />,
  },
  {
    name: 'Consultas',
    url: 'questions',
    by: ['Administrador'],
    icon: <i className="bi bi-question me-2" />,
  },
  {
    name: 'Productos',
    url: 'products',
    by: ['Administrador', 'Empresa'],
    icon: <i className="bi bi-basket me-2" />,
  },
  {
    name: 'Ordenes',
    url: 'orders',
    by: ['Administrador', 'Empresa', 'Cliente'],
    icon: <i className="bi bi-list-ul me-2" />,
  },
  {
    name: 'Carro de compras',
    url: '/shoppingCart',
    by: ['Cliente'],
    icon: <i className="bi bi-cart-check-fill me-2" />,
  },
  {
    name: 'Mensajes',
    url: 'messages',
    by: ['Administrador', 'Empresa', 'Cliente'],
    icon: <i className="bi bi-chat-square-dots me-2" />,
  },
];

export const NavProfiles = () => {
  const { user, logout } = useContext(AuthContext);
  const onLogout = () => {
    logout();
  };

  return (
    <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
      {itemsProfiles.map((navItem) => {
        {
          if (navItem.by.includes(user.userClass)) {
            return (
              <div key={navItem.url}>
                <Nav.Item>
                  <NavLinkStyled
                    to={navItem.url}
                    className={'inactive'}
                    data-cy={navItem.url}
                  >
                    {navItem.icon}
                    {navItem.name}
                  </NavLinkStyled>
                </Nav.Item>
              </div>
            );
          } else {
            return null;
          }
        }
      })}
      <Nav.Item>
        <NavLinkStyled
          to={'/home'}
          onClick={onLogout}
          className={'inactive'}
          aria-label="logout"
        >
          <i className="bi bi-box-arrow-right me-2" />
          Cerrar sesión
        </NavLinkStyled>
      </Nav.Item>
    </Nav>
  );
};
