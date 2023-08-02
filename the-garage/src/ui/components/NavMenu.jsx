import Nav from 'react-bootstrap/Nav';
import { Divider } from './Divider';
import { NavLinkStyled } from './ComponentsStyles';

const navItems = [
  { name: 'Inicio', url: '/home' },
  { name: 'Productos', url: '/productos' },
  { name: 'Servicios', url: '/servicios' },
  { name: 'Empresas', url: '/home' },
  { name: '¿Quiénes somos?', url: '/home' },
  { name: 'PQR', url: '/contacto' },
  { name: 'Contacto', url: '/contacto' },
];

export const NavMenu = () => {
  return (
    <Nav variant="pills" className="align-items-center">
      {navItems.map(({ name, url }) => {
        return (
          <>
            <NavLinkStyled to={url}>{name}</NavLinkStyled>
            <Divider height={30} color={'white'} />
          </>
        );
      })}
    </Nav>
  );
};
