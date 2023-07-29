import Nav from 'react-bootstrap/Nav';
import { users } from './TestProfiles';
import { NavLinkStyled } from './StylesComponentsProfiles';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';

// eslint-disable-next-line react-refresh/only-export-components
export const itemsProfiles = [
  {
    name: 'Detalles',
    url: 'details',
    by: ['company'],
    icon: <i className="bi bi-file-person me-2" />,
  },
  {
    name: 'Contraseña',
    url: 'change-pws',
    by: ['company', 'client'],
    icon: <i className="bi bi-lock-fill me-2" />,
  },
  {
    name: 'Solicitudes',
    url: 'request',
    by: ['admin'],
    icon: <i className="bi bi-building me-2" />,
  },
  {
    name: 'Cuentas',
    url: 'accounts',
    by: ['admin'],
    icon: <i className="bi bi-file-person me-2" />,
  },
  {
    name: 'Productos',
    url: 'products',
    by: ['admin', 'company'],
    icon: <i className="bi bi-basket me-2" />,
  },
  {
    name: 'Servicios',
    url: 'services',
    by: ['admin', 'company'],
    icon: <i className="bi bi-file-bar-graph me-2" />,
  },
  {
    name: 'Ordenes',
    url: 'orders',
    by: ['admin', 'company', 'client'],
    icon: <i className="bi bi-list-ul me-2" />,
  },
  {
    name: 'Carro de compras',
    url: 'shopping',
    by: ['client'],
    icon: <i className="bi bi-cart-check-fill me-2" />,
  },
  {
    name: 'Mensajes',
    url: 'messages',
    by: ['admin', 'company', 'client'],
    icon: <i className="bi bi-chat-square-dots me-2" />,
  },
];

export const NavProfiles = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const onLogout = () => {
    logout();
    navigate('/home', {
      replace: true,
    });
  };

  return (
    <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
      {itemsProfiles.map(({ name, url, icon, by }) => {
        {
          if (by.includes(users[0].type)) {
            return (
              <>
                <Nav.Item>
                  <NavLinkStyled to={url} className={'inactive'}>
                    {icon}
                    {name}
                  </NavLinkStyled>
                </Nav.Item>
              </>
            );
          } else {
            return null;
          }
        }
      })}
      <Nav.Item>
        <NavLinkStyled onClick={onLogout} className={'inactive'}>
          <i className="bi bi-box-arrow-right me-2" />
          Cerrar sesión
        </NavLinkStyled>
      </Nav.Item>
    </Nav>
  );
};
