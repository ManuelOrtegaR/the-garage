import { Nav, Navbar } from 'react-bootstrap';
import { Divider } from './Divider';
import { NavLinkStyled } from './ComponentsStyled';

const navItems = [
  { name: 'Inicio', url: '/home' },
  { name: 'Productos', url: '/productos' },
  { name: 'Servicios', url: '/servicios' },
  { name: 'Empresas', url: '/empresas' },
  { name: '¿Quiénes somos?', url: '/acercade' },
  { name: 'PQR', url: '/pqr' },
  { name: 'Contacto', url: '/contacto' },
];

export const NavMenu = () => {
  return (
    <Navbar.Collapse
      id="responsive-navbar-nav"
      style={{
        flexGrow: 0,
      }}
    >
      <Nav className="align-items-center">
        {navItems.map(({ name, url }) => {
          return (
            <>
              <NavLinkStyled href={url}>{name}</NavLinkStyled>
              <Divider height={30} color={'white'} />
            </>
          );
        })}
      </Nav>
    </Navbar.Collapse>
  );
};
