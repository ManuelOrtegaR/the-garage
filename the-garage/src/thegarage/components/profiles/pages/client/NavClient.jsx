import { ProfileImg } from './ProfileImg';
import Nav from 'react-bootstrap/Nav';

export const NavClient = () => {
  return (
    <>
      <ProfileImg />
      <nav className="mt-3">
        <Nav defaultActiveKey="/profile" className="flex-column">
          <Nav.Link to={'/change-pws'}>
            <i className="bi bi-lock-fill me-2" />
            Contraseña
          </Nav.Link>
          <Nav.Link to={'/profile/orders'}>
            <i className="bi bi-list-ul me-2" />
            Ordenes
          </Nav.Link>
          <Nav.Link to={'/ChangePassword'}>
            <i className="bi bi-cart-check-fill me-2" />
            Carro de compras
          </Nav.Link>
          <Nav.Link to={'/messages'}>
            <i className="bi bi-chat-square-dots me-2" />
            Mensajes
          </Nav.Link>
          <Nav.Link to={'/ChangePassword'}>
            <i className="bi bi-box-arrow-right me-2"></i>
            Cerrar sesion
          </Nav.Link>
        </Nav>
      </nav>
    </>
  );
};
