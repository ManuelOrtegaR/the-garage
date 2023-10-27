import Nav from 'react-bootstrap/Nav';
import { Divider } from './Divider';
import { NavLinkStyled } from './ComponentsStyles';

const navItems = [
  { name: 'Inicio', url: '/home' },
  { name: 'Productos', url: '/productos' },
  { name: 'Empresas', url: '/home?section=companies' },
  { name: '¿Quiénes somos?', url: '/home?section=about' },
  { name: 'Contacto', url: '/contacto' },
];

export const NavMenu = () => {
  return (
    <Nav variant="pills" className="justify-content-center">
      {navItems.map(({ name, url }) => {
        return (
          <div key={name} className="d-flex">
            <NavLinkStyled to={url} data-cy={`nav-${name}`}>
              {name}
            </NavLinkStyled>
          </div>
        );
      })}
    </Nav>
  );
};
