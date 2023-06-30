import { AdminInformation, Messages, NavAdmin } from './admin';
//import { ShoppingCart } from '../../../pages/';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export function SettingsAdmin() {
  return (
    <>
      <AdminInformation />
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
