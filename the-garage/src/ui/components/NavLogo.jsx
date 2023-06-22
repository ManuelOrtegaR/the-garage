import { Navbar } from 'react-bootstrap';
import logoTextW from '../../../assets/logos/logoTextW.png';
import { NavLink } from 'react-router-dom';

export const NavLogo = () => {
  return (
    <Navbar.Brand>
      <NavLink to={'/home'}>
        <img
          alt="logo-the-garage"
          src={logoTextW}
          height="50"
          className="d-inline-block align-top"
        />
      </NavLink>
    </Navbar.Brand>
  );
};
