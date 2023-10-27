/* eslint-disable react/prop-types */
import Nav from 'react-bootstrap/Nav';
import { NavLinkStyled } from './ComponentsStyles';

const navItems = [
  { name: 'Inicio', url: '/home' },
  { name: 'Productos', url: '/productos' },
  { name: 'Empresas', url: '/home?section=companies', ref: 'companies' },
  { name: '¿Quiénes somos?', url: '/home?section=about', ref: 'about' },
  { name: 'Contacto', url: '/contacto' },
];

export const NavMenu = ({ handleSectionChange }) => {
  return (
    <Nav variant="pills" className="justify-content-center">
      {navItems.map(({ name, url, ref }) => {
        if (name === 'Empresas' || name === '¿Quiénes somos?') {
          return (
            <div key={name} className="d-flex">
              <NavLinkStyled
                onClick={() => {
                  handleSectionChange(ref);
                }}
                to={'home'}
                data-cy={`nav-${name}`}
              >
                {name}
              </NavLinkStyled>
            </div>
          );
        } else
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
