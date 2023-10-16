import Nav from 'react-bootstrap/Nav';
import { Divider } from './Divider';
import { NavLinkStyled } from './ComponentsStyles';

const navItems = [
  { name: 'Inicio', url: '/home' },
  { name: 'Productos', url: '/productos' },
  // { name: 'Servicios', url: '/servicios' },
  { name: 'Empresas', url: '/home?section=companies' },
  { name: '¿Quiénes somos?', url: '/home?section=about' },
  // { name: 'PQR', url: '/contacto' },
  { name: 'Contacto', url: '/contacto' },
];

export const NavMenu = () => {
  return (
    <Nav variant="pills" className="d-flex align-items-center ">
      {navItems.map(({ name, url }) => {
        return (
          <div key={name} className="d-flex">
            <NavLinkStyled to={url}>{name}</NavLinkStyled>
            <Divider height={30} color={'white'} />
          </div>
        );
      })}
    </Nav>
  );
};
