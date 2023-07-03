import { AdminInformation, Messages, NavAdmin } from './admin';
//import { ShoppingCart } from '../../../pages/';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const user = [
  {
    name: 'User Test Client',
    email: 'test@thegarage.com',
    phone: '(+57) 321-2000-824',
    address: 'Calle 40 #52-66 BR EL PERDIDO',
    id: 1,
    type: 'Client',
  },
  {
    name: 'User Test Company',
    email: 'test@thegarage.com',
    phone: '(+57) 321-2000-824',
    address: 'Calle 40 #52-66 BR EL PERDIDO',
    id: 2,
    type: 'Company',
  },
  {
    name: 'User Test Admin',
    email: 'test@thegarage.com',
    role: 'Admin',
    id: 3,
    type: 'Admin',
  },
];

export function SettingsAdmin() {
  return (
    <>
      <AdminInformation user={user} />
      <Container fluid>
        <Row>
          <Col md={2} className="border-end">
            <NavAdmin />
          </Col>
          <Col>
            <Messages />
          </Col>
        </Row>
      </Container>
    </>
  );
}
