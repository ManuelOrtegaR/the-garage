import Nav from 'react-bootstrap/Nav';

export const NavAdmin = () => {
  return (
    <>
      <nav className="mt-3">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">
            <i className="bi bi-building me-2"></i>
            Nuevas Empresas
          </Nav.Link>
          <Nav.Link href="/home">
            <i className="bi bi-file-person me-2" />
            Cuentas
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
