import { ProfileImg } from './ProfileImg';
import { User } from './ClientProfile';

import Nav from 'react-bootstrap/Nav';

export const NavClient = () => {
  return User === 'Client' ? (
    <>
      <ProfileImg />
      <nav className="mt-3">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">
            <i className="bi bi-lock-fill me-2" />
            Security
          </Nav.Link>
          <Nav.Link eventKey="link-1">
            <i className="bi bi-list-ul me-2" />
            Orders
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <i className="bi bi-cart-check-fill me-2" />
            Shopping Cart
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <i className="bi bi-chat-square-dots me-2" />
            Messages
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <i className="bi bi-box-arrow-right me-2"></i>
            Log Out
          </Nav.Link>
        </Nav>
      </nav>
    </>
  ) : (
    <>
      <ProfileImg />
      <nav className="mt-3">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">
            <i className="bi bi-file-person me-2" />
            Details
          </Nav.Link>
          <Nav.Link href="/home">
            <i className="bi bi-lock-fill me-2" />
            Security
          </Nav.Link>
          <Nav.Link href="/home">
            <i className="bi bi-basket me-2" />
            Products
          </Nav.Link>
          <Nav.Link href="/home">
            <i className="bi bi-file-bar-graph me-2" />
            Service
          </Nav.Link>
          <Nav.Link eventKey="link-1">
            <i className="bi bi-list-ul me-2" />
            Orders
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <i className="bi bi-chat-square-dots me-2" />
            Messages
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <i className="bi bi-box-arrow-right me-2"></i>
            Log Out
          </Nav.Link>
        </Nav>
      </nav>
    </>
  );
};
