import { ProfileImg } from './ProfileImg';
import Nav from 'react-bootstrap/Nav';

export const NavCompany = () => {
  return (
    <>
      <ProfileImg />
      <nav className="mt-3">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">
            <i className="bi bi-file-person me-2" />
            Detalles
          </Nav.Link>
          <Nav.Link href="/home">
            <i className="bi bi-lock-fill me-2" />
            Contraseña
          </Nav.Link>
          <Nav.Link href="/home">
            <i className="bi bi-basket me-2" />
            Productos
          </Nav.Link>
          <Nav.Link href="/home">
            <i className="bi bi-file-bar-graph me-2" />
            Servicios
          </Nav.Link>
          <Nav.Link eventKey="link-1">
            <i className="bi bi-list-ul me-2" />
            Ordenes
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <i className="bi bi-chat-square-dots me-2" />
            Mensages
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <i className="bi bi-box-arrow-right me-2"></i>
            Cerrar sesion
          </Nav.Link>
        </Nav>
      </nav>
    </>
  );
};
