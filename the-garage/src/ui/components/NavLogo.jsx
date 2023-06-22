import { Navbar } from 'react-bootstrap';
import logoTextW from '../../../assets/logos/logoTextW.png';

export const NavLogo = () => {
  return (
    <Navbar.Brand href="#home">
      <img
        alt="logo-the-garage"
        src={logoTextW}
        height="50"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
  );
};
