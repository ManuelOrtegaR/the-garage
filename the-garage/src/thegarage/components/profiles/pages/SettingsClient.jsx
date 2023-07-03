import {
  ChangePassword,
  Messages,
  NavClient,
  Orders,
  PersonalInformation,
} from './client';
import { ShoppingCart } from '../../../pages/';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
//import { ClientRoute } from './routes';

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

export function SettingsClient() {
  return (
    <>
      <Container fluid className="my-4">
        <Row>
          <Col md={2} className="border-end">
            <NavClient />
          </Col>
          <Col>
            <PersonalInformation user={user} />
            <Messages />
          </Col>
        </Row>
      </Container>
    </>
  );
}
